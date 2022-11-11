import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Head from "next/head";
import BlogPostCard from "../components/BlogPostCard";

import { Row, Col } from "react-bootstrap";

const tagline = "Striving to be more generic."

export default function Blog ({ posts }) {
  return (
    <>
      <Head>
        <title>Gaelan McMillan</title>
        <meta name={tagline} content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col lg={2} md={1} sm={0} xs={0} />
        <Col lg={8} md={10} sm={12} xs={12}>
          {posts.map((post, index) => (
            <BlogPostCard key={index}
              slug={post.slug}
              title={post.frontmatter.title}
              excerpt={post.frontmatter.excerpt}
              date={post.frontmatter.date}
              author={post.frontmatter.author}
              thumbnail={post.frontmatter.thumbnail}
             />
            ))}
        </Col>
        <Col lg={2} md={1} sm={0} xs={0} />
      </Row>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files
    .map((filename) => {
      let slug = filename.replace(".mdx", "");
      let rawMarkdown = fs.readFileSync(path.join("posts", filename), "utf-8");
      let { data: frontmatter } = matter(rawMarkdown);
      return {
        slug,
        frontmatter,
      };
    })
    .sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? 1 : -1));

  return {
    props: {
      posts,
    },
  };
}
