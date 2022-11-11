import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { remarkCodeHike } from "@code-hike/mdx";
import remarkMath from 'remark-math';
import rehypeKatex from "rehype-katex";
import { CH } from "@code-hike/mdx/components";
import theme from "shiki/themes/solarized-dark.json";

import { Row, Col } from "react-bootstrap";

import ToolTip from "../../components/ToolTip";
import MaskedImage from "../../components/MaskedImage";
import BlogPostCard from "../../components/BlogPostCard";
import BowlingAlley from "../../components/BowlingAlley";
import fs from "fs"
import path from "path";
import matter from "gray-matter";

export default function PostPage({
  slug,
  frontmatter: { title, date, thumbnail },
  source,
}) {
  return (
    <BowlingAlley>
      <MaskedImage
          src={thumbnail}
          width="400px"
          height="400px"
          foreground="var(--colorbox-foreground)"
          background="transparent"
      />
        <MDXRemote
          {...source}
          components={{ CH, ToolTip, MaskedImage }}
          />
        <div style={{display:"flex",backgroundColor:"black"}}/>
    </BowlingAlley>
  );
}

export async function getStaticPaths() {
  let files = fs.readdirSync(path.join("posts"));
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
  let rawMarkdown = fs.readFileSync(path.join("posts", slug + ".mdx"), "utf-8");

  let { data: frontmatter, content } = matter(rawMarkdown);

  let source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        [remarkCodeHike, { autoImport: false, theme }],
        remarkMath
      ],
      rehypePlugins: [
        rehypeKatex
      ],
      useDynamicImport: true,
    }
  });

  return {
    props: {
      slug,
      frontmatter,
      source,
    },
  };
}
