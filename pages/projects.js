import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BowlingAlley from "../components/BowlingAlley";
import { AnimationLayout } from "../components/Transition";
import { useState } from "react";
import * as hooks from '../components/hooks';
import styled from "styled-components";
import TagBubble, {registerNewColour} from "../components/TagBubble";
import * as card from "../components/BlogPostCard";
import MaskedImage from "../components/MaskedImage";

const ProjectPreviewPane = styled.div`
  visibility: ${props => props.isVisible? 'visible' : 'hidden'};
  position: fixed;
  margin: 0 auto;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.left}px`};
  transform: translate(-50%, -50%);

  width: 80%;
  height: 80%;

  z-index: 10;

  padding: 1rem;
`

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

const ProjectCard = ({title, author, excerpt, date, link, thumbnail, tags, languages, body, windowWidth, windowHeight}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowDimensions, setWindowDimensions, getWindowDimensions] = hooks.useWindowDimensions();

  return (
    <hooks.DivWithOutsideClickCallback callback={() => { setIsOpen(false); } } >
      <card.Wrapper
        className="soft-shadow soft-radius" 
        onClick={() => { setIsOpen(true); setWindowDimensions(getWindowDimensions())} }>
        <card.ThumbnailWrapper percentageOfWrapperWidth={"20"}>
          <card.Thumbnail
            width="90%"
            height="90%"
          >
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
            <card.Excerpt>{excerpt}</card.Excerpt>
            <FlexCol style={{marginTop: "auto"}}>
            <FlexRow>
              {tags.map((tag,i) => <TagBubble key={i} tag={tag}/>)}
              {languages.map((lang,i) => <TagBubble key={i} tag={lang}/>)}
            </FlexRow>
            <card.DateAndAuthor>{author}{' • '}{date}</card.DateAndAuthor>
            </FlexCol>
          </card.InfoContent>
        </card.InfoWrapper>
      </card.Wrapper>

      <ProjectPreviewPane 
        className="soft-radius soft-shadow tooltip-bg-color"
        left={windowDimensions.width / 2}
        top={windowDimensions.height / 2}
        isVisible={isOpen}>
        <h1>{title}</h1>
        <p>{body}</p>
      </ProjectPreviewPane>

    </hooks.DivWithOutsideClickCallback>
  );
}

const Projects = ({ projects }) => {
  return (
    <AnimationLayout>
      <BowlingAlley>
        {projects.map((project, index) => (
          <ProjectCard key={index}
          title={project.frontmatter.title}
          excerpt={project.frontmatter.excerpt}
          date={project.frontmatter.date}
          author={project.frontmatter.author}
          thumbnail={project.frontmatter.thumbnail}
          tags={project.frontmatter.tags}
          languages={project.frontmatter.languages}
          body={project.frontmatter.body}
          link={project.frontmatter.link}
          />
        ))}
      </BowlingAlley>
    </AnimationLayout>
  );
}

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
    }).sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));

  for (let project of projects) {
    for (let tag of project.frontmatter.tags) {
      // populate tag dictionary with random colors
      registerNewColour(tag);
    }
  }

  return {
    props: {
      projects,
    },
  };
}
