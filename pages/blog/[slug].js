// import { serialize } from "next-mdx-remote/serialize";
// import { MDXRemote } from "next-mdx-remote";
// import { remarkCodeHike } from "@code-hike/mdx";
// import remarkMath from "remark-math";
// import rehypeKatex from "rehype-katex";
// import { CH } from "@code-hike/mdx/components";
// import theme from "shiki/themes/solarized-dark.json";

// import ToolTip from "../../components/ToolTip";
// import MaskedImage from "../../components/MaskedImage";
// import BowlingAlley from "../../components/BowlingAlley";

// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// import { AnimationLayout } from "../../components/Transition";

const PostPage = () => { return (<></>) };
// const PostPage = ({
//   slug,
//   frontmatter: { title, date, thumbnail },
//   source,
// }) => {
//   return (
//     <AnimationLayout>
//       <BowlingAlley>
//         <div
//           className="soft-shadow soft-radius-outer"
//           style={{
//             padding: "1rem",
//             display: "flex",
//             margin: "1rem auto",
//             width: "fit-content",
//           }}
//         >
//           <div
//             className="soft-radius soft-border"
//             style={{
//               display: "flex",
//               margin: "auto auto",
//               width: "fit-content",
//             }}
//           >
//             <MaskedImage
//               src={thumbnail}
//               width="400px"
//               height="400px"
//               foreground="var(--colorbox-foreground)"
//               background="transparent"
//             />
//           </div>
//         </div>
//         <MDXRemote {...source} components={{ CH, ToolTip, MaskedImage }} />
//       </BowlingAlley>
//     </AnimationLayout>
//   );
// };


// export async function getStaticPaths() {
//   let files = fs.readdirSync(path.join("posts"));
//   let paths = files.map((filename) => ({
//     params: {
//       slug: filename.replace(".mdx", ""),
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function processMarkdownIntoFrontmatterAndSource(rawMarkdown) {
//   let { data: frontmatter, content } = matter(rawMarkdown);
//   let source = await serialize(content, {
//     mdxOptions: {
//       remarkPlugins: [
//         [remarkCodeHike, { autoImport: false, theme }],
//         remarkMath,
//       ],
//       rehypePlugins: [rehypeKatex],
//       useDynamicImport: true,
//     },
//   });

//   return [frontmatter, source];
// }

// export async function getStaticProps({ params: { slug } }) {
//   let rawMarkdown = fs.readFileSync(path.join("posts", slug + ".mdx"), "utf-8");
//   let [ frontmatter, source ] = await processMarkdownIntoFrontmatterAndSource(rawMarkdown);
//   return {
//     props: {
//       slug,
//       frontmatter,
//       source,
//     },
//   };
// }

export default PostPage;