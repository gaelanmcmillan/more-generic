import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import SolutionsCard from "../components/SolutionCard";
import BowlingAlley from "../components/BowlingAlley";
import { AnimationLayout } from "../components/Transition";
  
  import TagBubble, {
  useTagList,
  TagListView,
  firstHasAllOfSecond,
} from "../components/TagBubble";

const SolutionsPage = ({ posts, allTags }) => {
  const [tagList, clearTagList, addTagToList, removeTagFromList] = useTagList();
  return (
    <>
      <Head>
        <title>Solutions | Gaelan M</title>
      </Head>
      <AnimationLayout>
        <BowlingAlley>
          <div
            style={{
              marginBottom: "1rem",
              width: "100%",
              textAlign: "center",
            }}
          >
            <i>Click on tags to filter solutions by category or language.</i>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            {allTags.map((tag, i) => {
              return (
                <TagBubble key={i} tag={tag} onClick={addTagToList(tag)} />
              );
            })}
          </div>
          <TagListView
            tagList={tagList}
            clearListCallback={clearTagList}
            removeTagCallback={removeTagFromList}
          />
          {posts
            .filter(
              (post) =>
                tagList.length === 0 ||
                firstHasAllOfSecond(
                  post.frontmatter.tags.concat(post.frontmatter.languages),
                  tagList
                )
            )
            .map((sol, index) => (
              <SolutionsCard
                key={index}
                slug={sol.slug}
                title={sol.frontmatter.title}
                tags={sol.frontmatter.tags}
                url={sol.frontmatter.url}
                languages={sol.frontmatter.languages}
                date={sol.frontmatter.date}
                author={sol.frontmatter.author}
                addTagCallback={addTagToList}
                difficulty={sol.frontmatter.difficulty}
              />
            ))}
          <div style={{ marginBottom: "1rem", textAlign: "center" }}>
            <p>If you found a solution helpful, consider leaving a star!</p>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=gaelanmcmillan&repo=more-generic&type=star&count=true&size=large"
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

export default SolutionsPage;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("static_media", "solutions"));

  const posts = files
    .map((filename) => {
      let slug = filename.replace(".mdx", "");
      let rawMarkdown = fs.readFileSync(
        path.join("static_media", "solutions", filename),
        "utf-8"
      );
      let { data: frontmatter } = matter(rawMarkdown);
      return {
        slug,
        frontmatter,
      };
    })
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));

  let allTags = (() => {
    let tagSet = new Set();
    let tags = posts.flatMap((post) => {
      const addOnce = (str) => {
        if (!tagSet.has(str)) {
          tagSet.add(str);
          return true;
        }
        return false;
      };

      return post.frontmatter.tags.filter(tag => addOnce(tag)).concat(post.frontmatter.languages.filter(lang => addOnce(lang)));
    });
    return tags.sort();
  })();

  return {
    props: {
      posts,
      allTags,
    },
  };
}
