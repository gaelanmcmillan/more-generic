import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Head from "next/head";
import PostCard from "../components/PostCard";

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
        <Col>
          <p className={""}>{tagline}</p>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={8} lg={6}>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </Col>
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
