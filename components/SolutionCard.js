import {InfoContent, Excerpt, DateAndAuthor} from "./BlogPostCard";
import styled from 'styled-components';
import TagBubble from "./TagBubble";
/**
 * _____________________________________
 * | Title             | <icon> [->]   |
 * | <tag> <tag> <tag> | <lang> <lang> |
 * '''''''''''''''''''''''''''''''''''''
 */

const Wrapper = styled.div`
  font-family: 'Inconsolata';

  display: flex;
  flex-direction: col;

  margin-bottom: 1rem;
  white-space: pre;
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`

const HorizontalSplit = styled.div`
  display: flex;
  flex-direction: row;
`

const Title = styled.span`
  font-size: 18px;
`



const extractSiteName = (url) => {
  const tokens = url.split(/\/+/);
  for (let tok of tokens) {
    if (tok.endsWith(".com")) return tok.slice(0, tok.search(/.com/));
  }
  return "Link";
}

const SolutionsCard = ({slug, title, url, tags, languages, date, prefix='/solutions/'}) => {
  const siteName = extractSiteName(url);
  return (
    <Wrapper className="soft-shadow" width={"100%"}>
        <InfoWrapper width={"100%"}>
          <HorizontalSplit style={{
            }}>
            <InfoContent style={{
              }}>
              <a style={{color: "unset", textDecoration: "none"}} href={prefix + slug}>
                <Title>{title}</Title>
              </a>
              <HorizontalSplit>
                <HorizontalSplit>
                  {tags.map((word, i) => {
                    return <TagBubble key={i} tag={word} />
                })}
                </HorizontalSplit>
                <HorizontalSplit>
                  {languages.map((lang, i) => {
                    return <TagBubble key={i} tag={lang} />
                  })}
                </HorizontalSplit>
              </HorizontalSplit>
            </InfoContent>
            <InfoContent style={{
              width: "25%", 
              alignSelf: "center",
              }}>
              <a href={url}>{siteName} ⧉</a>
            </InfoContent>
          </HorizontalSplit>
        </InfoWrapper>
      </Wrapper>
  );
}

export default SolutionsCard;