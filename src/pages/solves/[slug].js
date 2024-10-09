import { remarkCodeHike } from "@code-hike/mdx";
import { CH } from "@code-hike/mdx/components";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import theme from "shiki/themes/solarized-dark.json";

import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";
import BowlingAlley from "../../components/BowlingAlley";
import MaskedImage from "../../components/MaskedImage";
import ToolTip from "../../components/ToolTip";
import { AnimationLayout } from "../../components/Transition";

const InlineImage = ({ src, alt, maxWidth }) => {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <img
        src={src}
        alt={alt}
        width="100%"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "1rem",
          marginBottom: "1rem",
          maxWidth: maxWidth === undefined ? "inherit" : maxWidth,
          borderRadius: "1rem",
          border: "3px solid #586e75",
        }}
      />
    </div>
  );
};

const SolutionPage = ({
  slug,
  frontmatter: { title, url, author, tags, languages, date },
  source,
}) => {
  return (
    <>
      <Head>
        <title>GM solves "{title}"</title>
      </Head>
      <AnimationLayout>
        <BowlingAlley lg={6} md={8} sm={12} xs={12}>
          <h1>
            <a href={url}>{title} ⧉</a>
          </h1>
          <MDXRemote
            {...source}
            components={{ CH, ToolTip, MaskedImage, InlineImage }}
          />
          <div style={{ marginBottom: "1rem", textAlign: "center" }}>
            <p>If you found this solution helpful, consider leaving a star!</p>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=gaelanmcmillan&repo=more-generic&type=star&count=true&size=large"
              frameborder="0"
              width="120"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
        </BowlingAlley>
      </AnimationLayout>
    </>
  );
};

export default SolutionPage;

export async function getStaticPaths() {
  let files = fs.readdirSync(path.join("static_media", "solves"));
  let paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  let rawMarkdown = fs.readFileSync(
    path.join("static_media", "solves", slug + ".mdx"),
    "utf-8"
  );

  let { data: frontmatter, content } = matter(rawMarkdown);

  let source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        [
          remarkCodeHike,
          {
            autoImport: false,
            theme,
            lineNumbers: true,
          },
        ],
        remarkMath,
      ],
      rehypePlugins: [rehypeKatex],
      useDynamicImport: true,
    },
  });

  return {
    props: {
      slug,
      frontmatter,
      source,
    },
  };
}
