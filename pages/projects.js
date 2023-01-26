import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BowlingAlley from "../components/BowlingAlley";
import { AnimationLayout } from "../components/Transition";
import { useState } from "react";
import * as hooks from "../components/hooks";
import styled from "styled-components";
import TagBubble, {
  useTagList,
  TagListView,
  firstHasAllOfSecond,
} from "../components/TagBubble";
import * as card from "../components/BlogPostCard";
import MaskedImage from "../components/MaskedImage";

const ProjectPreviewPane = styled.div`
  font-family: "Inconsolata";
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  position: fixed;
  margin: 0 auto;
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  transform: translate(-50%, -50%);
  min-width: 400px;
  max-width: 100vw;
  width: 40%;
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

const ProjectCard = ({
  title,
  author,
  excerpt,
  date,
  demoimg,
  demolink,
  gitlink,
  thumbnail,
  tags,
  languages,
  body,
  addTagCallback,
  removeTagCallback,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowDimensions, setWindowDimensions, getWindowDimensions] =
    hooks.useWindowDimensions();

  return (
    <hooks.DivWithOutsideClickCallback
      callback={() => {
        setIsOpen(false);
      }}
    >
      <card.Wrapper
        className="soft-shadow soft-radius"
        onClick={() => {
          setIsOpen(true);
          setWindowDimensions(getWindowDimensions());
        }}
      >
        <card.ThumbnailWrapper percentageOfWrapperWidth={"20"}>
          <card.Thumbnail width="90%" height="90%">
            <MaskedImage
              width="100%"
              height="100%"
              src={thumbnail}
              foreground="var(--colorbox-foreground)"
              background="transparent"
            >
              <card.HoverThumbnail></card.HoverThumbnail>
            </MaskedImage>
          </card.Thumbnail>
        </card.ThumbnailWrapper>
        <card.InfoWrapper>
          <card.InfoContent>
            <h2>{title}</h2>
            <div style={{ paddingBottom: "1rem" }}>{excerpt}</div>
            <FlexCol style={{ marginTop: "auto" }}>
              <div>
                {tags.map((tag, i) => (
                  <TagBubble key={i} tag={tag} onClick={addTagCallback(tag)} />
                ))}
                {languages.map((lang, i) => (
                  <TagBubble
                    key={i}
                    tag={lang}
                    onClick={addTagCallback(lang)}
                  />
                ))}
              </div>
              <div>
                {author}
                {" • "}
                {date}
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
        {/* <div style={{display: "flex", textAlign: "center"}}> */}
        <div style={{ textAlign: "center" }}>
          <h1>{title}</h1>
          <div style={{ marginBottom: "0.5rem" }}>
            Topics:{" "}
            {tags.map((tag, i) => (
              <TagBubble key={i} tag={tag} />
            ))}
          </div>
          <div style={{ marginBottom: "0.5rem" }}>
            Langauges:{" "}
            {languages.map((lang, i) => (
              <TagBubble key={i} tag={lang} onClick={undefined} />
            ))}
          </div>
          {demolink !== undefined ? (
            <a href={demolink}>
              <h3>Demo ⧉</h3>
            </a>
          ) : (
            <></>
          )}
          {demoimg !== undefined ? (
            <img
              src={demoimg}
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
          <p>{body}</p>
          {gitlink !== undefined ? (
            <a href={gitlink}>
              <h3>GitHub ⧉</h3>
            </a>
          ) : (
            <></>
          )}
        </div>
      </ProjectPreviewPane>
    </hooks.DivWithOutsideClickCallback>
  );
};

const Projects = ({ projects }) => {
  const [tagList, clearTagList, addToTagList, removeTagFromList] = useTagList();

  return (
    <AnimationLayout>
      <BowlingAlley>
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
          .map((project, index) => (
            <ProjectCard
              key={index}
              title={project.frontmatter.title}
              excerpt={project.frontmatter.excerpt}
              date={project.frontmatter.date}
              author={project.frontmatter.author}
              thumbnail={project.frontmatter.thumbnail}
              tags={project.frontmatter.tags}
              languages={project.frontmatter.languages}
              body={project.frontmatter.body}
              demoimg={project.frontmatter.demoimg}
              demolink={project.frontmatter.demolink}
              gitlink={project.frontmatter.gitlink}
              addTagCallback={addToTagList}
              removeTagCallback={removeTagFromList}
            />
          ))}
      </BowlingAlley>
    </AnimationLayout>
  );
};

export default Projects;

const dirName = "projects";

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(dirName));

  const projects = files
    .map((filename) => {
      let slug = filename.replace(".mdx", "");
      let rawMarkdown = fs.readFileSync(path.join(dirName, filename), "utf-8");
      let { data: frontmatter } = matter(rawMarkdown);
      return {
        slug,
        frontmatter,
      };
    })
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));

  return {
    props: {
      projects,
    },
  };
}
