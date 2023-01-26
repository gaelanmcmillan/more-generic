import styled from "styled-components";
import TagBubble from "./TagBubble";
import Link from "next/link";
/**
 * _____________________________________
 * | Title             | <icon> [->]   |
 * | <tag> <tag> <tag> | <lang> <lang> |
 * '''''''''''''''''''''''''''''''''''''
 */

const Wrapper = styled.div`
  font-family: "Inconsolata";

  display: flex;
  flex-direction: row;

  margin-bottom: 1rem;
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
`;

const HorizontalSplit = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const Title = styled.span`
  font-size: 18px;
  width: 100%;
`;

const InfoContent = styled.div`
  width: 100%;
`;

const extractSiteName = (url) => {
  const tokens = url.split(/\/+/);
  for (let tok of tokens) {
    if (tok.endsWith(".com")) return tok.slice(0, tok.search(/.com/));
  }
  return "Link";
};

const SolutionsCard = ({
  slug,
  title,
  url,
  tags,
  languages,
  date,
  prefix = "/solutions/",
  addTagCallback,
}) => {
  const siteName = extractSiteName(url);
  return (
    <Wrapper className="soft-shadow" width={"100%"}>
      <InfoWrapper width={"100%"}>
        <Link href={prefix + slug}>
          <InfoContent style={{ cursor: "pointer" }}>
            <Title>{title}</Title>
            <div>
              {tags.map((word, i) => {
                return (
                  <TagBubble
                    key={i}
                    tag={word}
                    onClick={addTagCallback(word)}
                  />
                );
              })}
              {languages.map((lang, i) => {
                return (
                  <TagBubble
                    key={i}
                    tag={lang}
                    onClick={addTagCallback(lang)}
                  />
                );
              })}
            </div>
          </InfoContent>
        </Link>
        <div
          style={{
            float: "right",
            width: "fit-content",
            display: "flex",
          }}
        >
          <div
            style={{
              margin: "auto",
              whiteSpace: "pre",
              margin: "auto",
            }}
          >
            <a href={url}>{siteName} ⧉</a>
          </div>
        </div>
      </InfoWrapper>
    </Wrapper>
  );
};

export default SolutionsCard;
