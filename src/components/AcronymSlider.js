import styled from "styled-components";

const hoverTime = 0.8;
const hoverBlue = "#268bd2";

const Wrapper = styled.div`
  white-space: pre;         // Keep worders on a single row (prevent text wrap)
  font-family: ${props => props.font};
  font-size: ${props => props.fontSize || "1rem"};

  @media (min-width: 1000px) {
    width: fit-content;
    > * {
      transition: ${props => props.transitionTime || "1s"} ease all;
    }
    &:hover {
      > * {
        max-width: ${props => props.maxContentWidth};
      }
    }
  }
`;

const WordWrapper = styled.div`
  white-space: pre;      // Disable word wrap, preserve white space.
  overflow: hidden;      // This hides all but the first letter of each word.

  width: fit-content;    //  These two properties are the heart of the sliding effect.
  max-width: 1.0ch;      // (When the max-width is increased, the words are revealed.)

  display: inline-block; // Ensure the words display side-by-side.
`;

const FirstLetter = styled.span`
  font-weight: bold;
`

const Rest = styled.span`
  max-width: 100wv;
`

const AcronymSlider = ({words, font, fontSize}) => {
  let wrapperWidth = 1 + words.length;
  let maxContentWidth = Math.max(...words.map(w => w.length));
  return (
    <>
      <Wrapper 
        font={font}
        fontSize={fontSize}
        width={`${wrapperWidth}ch`}
        maxContentWidth={`${maxContentWidth}ch`}
        >
        {words.map(word => (
          <>
            <WordWrapper>
              <FirstLetter>{word[0]}</FirstLetter>
              <Rest>{word.substring(1)}</Rest>
            </WordWrapper>
          </>
        ))}
      </Wrapper>
    </>
  );
};

export default AcronymSlider;
