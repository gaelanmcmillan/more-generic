import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default function PostPage({
  slug,
  frontmatter: { title, data, thumbnail },
  content,
}) {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <div dangerouslySetInnerHTML={{__html: marked(content)}} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  let files = fs.readdirSync(path.join("posts"));
  let paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  let rawMarkdown = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

  let { data: frontmatter, content } = matter(rawMarkdown);

  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  };
}
