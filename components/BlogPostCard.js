import styled from "styled-components";
import MaskedImage from "./MaskedImage";

const hoverTime = 0.8;

const HoverThumbnail = styled.div`
  transition: ${hoverTime}s ease all;
  width: 100%;
  height: 100%;
  opacity: 0%;
  background-color: var(--link-blue);
  z-index: 2;
  position: absolute;
  display: inline-block;
`

const Wrapper = styled.div`
  font-family: Inconsolata;

  > h1, h2, h3 {
    font-weight: bold;
  }

  display: flex;
  margin-bottom: 2rem;
  white-space: pre;
  
  width: ${props => props.width || "100%"};
  height: auto;

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
`

const ThumbnailWrapper = styled.div`
  height: 200px;
  aspect-ratio: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
`
  
const Thumbnail = styled.div`
  border-radius: 0.5rem;
  border-width: 4px;
  border-style: solid;
  overflow: hidden;

  width: ${props => props.width};
  height: ${props => props.height};
`
  
const InfoWrapper = styled.div`
  padding-left: 1rem;
  white-space: normal;
  width: ${props => props.width};
  height: inherit;
  vertical-align: top;

  display: flex;
  align-items: center;
  float: left;
`

const InfoContent = styled.div`
  flex-direction: column;
  display: flex;
  height: 90%;
  width: 95%;
`

const Title = styled.div`
`

const Excerpt = styled.div`
`

const DateAndAuthor = styled.span`
  margin-top: auto;
  align-self: start;
`

const BlogPostCard = ({slug, title, excerpt, thumbnail, date, author}) => {
  return (
    <a style={{color: "unset", textDecoration: "none"}} href={'/blog/' + slug}>
      <Wrapper className="soft-shadow soft-radius" width={"100%"}>
        <ThumbnailWrapper percentageOfWrapperWidth={"20"}>
          <Thumbnail
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
              <HoverThumbnail></HoverThumbnail>
            </MaskedImage>
          </Thumbnail>
        </ThumbnailWrapper>
        <InfoWrapper width={"100%"}>
          <InfoContent>
            <Title><h2>{title}</h2></Title>
            <Excerpt>{excerpt}</Excerpt>
            <DateAndAuthor>{author}{' • '}{date}</DateAndAuthor>
          </InfoContent>
        </InfoWrapper>
      </Wrapper>
    </a>
  )
}

export default BlogPostCard;

