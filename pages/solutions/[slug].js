import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { remarkCodeHike } from "@code-hike/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { CH } from "@code-hike/mdx/components";
import theme from "shiki/themes/solarized-dark.json";

import ToolTip from "../../components/ToolTip";
import MaskedImage from "../../components/MaskedImage";
import BowlingAlley from "../../components/BowlingAlley";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { AnimationLayout } from "../../components/Transition";

const SolutionPage = ({
  slug,
  frontmatter: { title, url, author, tags, languages, date },
  source,
}) => {
  return (
    <AnimationLayout>
      <BowlingAlley lg={10} md={10} sm={12} xs={12}>
        <div
          className="soft-shadow soft-radius-outer"
          style={{
            padding: "1rem",
            display: "flex",
            margin: "1rem auto",
            width: "fit-content",
          }}
        ></div>
        <MDXRemote {...source} components={{ CH, ToolTip, MaskedImage }} />
      </BowlingAlley>
    </AnimationLayout>
  );
};

export default SolutionPage;

export async function getStaticPaths() {
  let files = fs.readdirSync(path.join("solutions"));
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
    path.join("solutions", slug + ".mdx"),
    "utf-8"
  );

  let { data: frontmatter, content } = matter(rawMarkdown);

  let source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        [remarkCodeHike, { autoImport: false, theme }],
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
