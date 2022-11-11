import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogPostCard from "../components/BlogPostCard";
import BowlingAlley from "../components/BowlingAlley";

export default function Blog ({ posts }) {
  return (
    <>
      <BowlingAlley>
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
      </BowlingAlley>
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
