import styled from "styled-components";
import MaskedImage from "./MaskedImage";

const hoverTime = 0.8;

const HoverThumbnail = styled.div`
  // border: 1px solid black;

  transition: ${hoverTime}s ease all;
  width: 100%;
  height: 100%;
  opacity: 0%;
  background-color: var(--link-blue);
  z-index: 2;
  position: absolute;
  display: inline-block;
`;

const Wrapper = styled.div`
  // border: 1px solid blue;

  font-family: Inconsolata;
  position: relative;

  > h1,
  h2,
  h3 {
    font-weight: bold;
  }

  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }

  margin-bottom: 2rem;

  height: auto;

  // Hover properties
  transition: ${hoverTime}s ease all;
  * {
    transition: ${hoverTime}s ease all;
  }

  &:hover {
    transform: scale(1.01);
    ${HoverThumbnail} {
      opacity: 100%;
    }

    * {
      color: var(--link-blue);
      border-color: var(--link-blue);
    }
  }
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  align-self: center;
  height: 250px;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    flex: 2;
    aspect-ratio: 1;
  }
  aspect-ratio: 1;

  justify-content: center;
  align-items: center;
`;

const Thumbnail = styled.div`
  border: 1px solid grey;

  border-radius: 0.5rem;
  border-width: 4px;
  border-style: solid;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const InfoWrapper = styled.div`
  // border: 1px solid magenta;

  position: relative;

  // Adding this two keep the content inside its parent...
  overflow: hidden;

  // keep items vertically centered
  display: flex;
  align-items: center;
`;

const InfoContent = styled.div`
  // border: 1px solid green;

  overflow: visible;

  @media (max-width: 600px) {
    margin-top: 0;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  display: flex;
  margin: 1rem;
  flex-direction: column;
  height: 95%;
  width: 95%;
`;

const Excerpt = styled.div``;

const DateAndAuthor = styled.span`
  margin-top: auto;
  align-self: start;
`;

const BlogPostCard = ({
  slug,
  title,
  excerpt,
  thumbnail,
  date,
  author,
  prefix = "/blog/",
}) => {
  return (
    <a style={{ color: "unset", textDecoration: "none" }} href={prefix + slug}>
      <Wrapper className="soft-shadow soft-radius" width={"100%"}>
        <ThumbnailWrapper percentageOfWrapperWidth={"20"}>
          <Thumbnail width="90%" height="90%">
            <MaskedImage
              width="100%"
              height="100%"
              src={thumbnail}
              foreground="var(--colorbox-foreground)"
              background="transparent"
            >
              <HoverThumbnail></HoverThumbnail>
            </MaskedImage>
          </Thumbnail>
        </ThumbnailWrapper>
        <InfoWrapper width={"inherit"}>
          <InfoContent>
            <h2>{title}</h2>
            <Excerpt>{excerpt}</Excerpt>
            <DateAndAuthor>
              {author}
              {" • "}
              {date}
            </DateAndAuthor>
          </InfoContent>
        </InfoWrapper>
      </Wrapper>
    </a>
  );
};

export default BlogPostCard;

export {
  hoverTime,
  HoverThumbnail,
  Wrapper,
  Thumbnail,
  ThumbnailWrapper,
  InfoWrapper,
  InfoContent,
  Excerpt,
  DateAndAuthor,
};
