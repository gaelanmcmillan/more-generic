import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { remarkCodeHike } from "@code-hike/mdx";
import remarkMath from 'remark-math';
import rehypeKatex from "rehype-katex";
import { CH } from "@code-hike/mdx/components";
import theme from "shiki/themes/solarized-dark.json";

import { Row, Col } from "react-bootstrap";

import fs from "fs"
import path from "path";
import matter from "gray-matter";

export default function PostPage({
  slug,
  frontmatter: { title, date, thumbnail },
  source,
}) {
  return (
    <>
    <Row>
      <Col lg={2} md={0} sm={0} xs={0} />
      <Col lg={4} md={6} sm={10} xs={12} >
        <MDXRemote
          {...source}
          components={{ CH }}
          />
      </Col>
      <Col lg={6} md={6} sm={0} xs={0}>
        <div style={{display:"flex",backgroundColor:"black"}}/>
      </Col>
    </Row>
    </>
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
