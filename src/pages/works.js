import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";
import { useState } from "react";
import styled from "styled-components";
import * as card from "../components/BlogPostCard";
import BowlingAlley from "../components/BowlingAlley";
import * as hooks from "../components/hooks";
import MaskedImage from "../components/MaskedImage";
import TagBubble, {
  TagListView,
  firstHasAllOfSecond,
  useTagList,
} from "../components/TagBubble";
import { AnimationLayout } from "../components/Transition";

const ProjectPreviewPane = styled.div`
  font-family: "Inconsolata";
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  position: fixed;
  margin: 0 auto;
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  transform: translate(-50%, -50%);
  // min-width: min(250px, 90vw);
  max-width: min(95vw, 500px);
  width: 90vw;
  max-height: 80%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 10;
  padding: 1rem;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  // border: 1px solid black;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  // border: 1px solid red;
`;

const ProjectCard = ({ project, addTagCallback, removeTagCallback }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowDimensions, setWindowDimensions, getWindowDimensions] =
    hooks.useWindowDimensions();

  return (
    <>
      <Head>
        <title>Gaelan McMillan's Works</title>
      </Head>
      <hooks.DivWithOutsideClickCallback
        callback={() => {
          setIsOpen(false);
        }}
      >
        <card.Wrapper
          className="soft-shadow soft-radius"
          onClick={() => {
            setIsOpen(!isOpen);
            setWindowDimensions(getWindowDimensions());
          }}
        >
          <card.ThumbnailWrapper percentageOfWrapperWidth={"20"}>
            <card.Thumbnail width="90%" height="90%">
              <MaskedImage
                width="100%"
                height="100%"
                src={project.frontmatter.thumbnail}
                foreground="var(--colorbox-foreground)"
                background="transparent"
              >
                <card.HoverThumbnail></card.HoverThumbnail>
              </MaskedImage>
            </card.Thumbnail>
          </card.ThumbnailWrapper>
          <card.InfoWrapper>
            <card.InfoContent>
              <h2>{project.frontmatter.title}</h2>
              <div style={{ paddingBottom: "1rem" }}>
                {project.frontmatter.excerpt}
              </div>
              <FlexCol style={{ marginTop: "auto" }}>
                <div>
                  {project.frontmatter.tags.map((tag, i) => (
                    <TagBubble
                      key={i}
                      tag={tag}
                      onClick={addTagCallback(tag)}
                    />
                  ))}
                  {project.frontmatter.languages.map((lang, i) => (
                    <TagBubble
                      key={i}
                      tag={lang}
                      onClick={addTagCallback(lang)}
                    />
                  ))}
                </div>
                <div>
                  {project.frontmatter.author !== 'Gaelan McMillan' ? project.frontmatter.author : ''}
                </div>
              </FlexCol>
            </card.InfoContent>
          </card.InfoWrapper>
        </card.Wrapper>

        <ProjectPreviewPane
          className="soft-radius soft-shadow tooltip-bg-color"
          left={windowDimensions.width / 2}
          top={windowDimensions.height / 2}
          isVisible={isOpen}
        >
          <div style={{ textAlign: "center" }}>
            <h1>{project.frontmatter.title}</h1>
            <div style={{ marginBottom: "0.5rem" }}>
              Topics:{" "}
              {project.frontmatter.tags.map((tag, i) => (
                <TagBubble key={i} tag={tag} />
              ))}
            </div>
            <div style={{ marginBottom: "0.5rem" }}>
              Langauges:{" "}
              {project.frontmatter.languages.map((lang, i) => (
                <TagBubble key={i} tag={lang} onClick={undefined} />
              ))}
            </div>
            {project.frontmatter.demolink !== undefined ? (
              <a href={project.frontmatter.demolink}>
                <h3>Demo ⧉</h3>
              </a>
            ) : (
              <></>
            )}
            {project.frontmatter.demoimg !== undefined ? (
              <img
                src={project.frontmatter.demoimg}
                style={{
                  width: "80%",
                  borderRadius: "1rem",
                  marginBottom: "1rem",
                }}
                alt="A visual sample of the project."
              ></img>
            ) : (
              <></>
            )}
            <p>{project.frontmatter.body}</p>
            {project.frontmatter.gitlink !== undefined ? (
              <a href={project.frontmatter.gitlink}>
                <h3>GitHub ⧉</h3>
              </a>
            ) : (
              <></>
            )}
          </div>
        </ProjectPreviewPane>
      </hooks.DivWithOutsideClickCallback>
    </>
  );
};

const Projects = ({ projects, allTags }) => {
  const [tagList, clearTagList, addToTagList, removeTagFromList] = useTagList();
  const [doShowTags, setDoShowTags] = useState(false);
  return (
    <AnimationLayout>
      <BowlingAlley>
        <div
          style={{
            marginBottom: "1rem",
            width: "100%",
            textAlign: "center",
            userSelect: "none",
            cursor: "pointer",
          }}
          onClick={() => { setDoShowTags(!doShowTags) }}
        >
          <i>Click on tags to filter projects by category or language.</i>
        </div>
        <div style={{ marginBottom: "1rem", display: `${doShowTags ? 'block' : 'none'}` }}>
          {allTags.map((tag, i) => {
            return <TagBubble key={i} tag={tag} onClick={addToTagList(tag)} />;
          })}
        </div>
        <TagListView
          tagList={tagList}
          clearListCallback={clearTagList}
          removeTagCallback={removeTagFromList}
        />
        {projects
          .filter(
            (project) =>
              tagList.length === 0 ||
              firstHasAllOfSecond(
                project.frontmatter.tags.concat(project.frontmatter.languages),
                tagList
              )
          )
          .map((project, i) => (
            <ProjectCard key={i} project={project} addTagCallback={addToTagList} />
          ))}
      </BowlingAlley>
    </AnimationLayout>
  );
};

export default Projects;

const dirName = "works";

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("static_media", dirName));
  // let tagSet = new Set();
  const projects = files
    .map((filename) => {
      let slug = filename.replace(".mdx", "");
      let rawMarkdown = fs.readFileSync(
        path.join("static_media", dirName, filename),
        "utf-8"
      );
      let { data: frontmatter } = matter(rawMarkdown);
      // for (let tag of frontmatter.tags) {
      //   tagSet.add(tag);
      // }

      return {
        slug,
        frontmatter,
      };
    })
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));

  let allTags = (() => {
    let tagSet = new Set();
    let tags = projects.flatMap((project) => {
      const addOnce = (str) => {
        if (!tagSet.has(str)) {
          tagSet.add(str);
          return true;
        }
        return false;
      };

      return project.frontmatter.tags.filter(tag => addOnce(tag)).concat(project.frontmatter.languages.filter(lang => addOnce(lang)));
    });
    return tags.sort();
  })();

  return {
    props: {
      projects,
      allTags,
    },
  };
}
