import styled from "styled-components";

/**
 * Essentially a styled span that, when hovered, displays a div over top the webpage.
 */

const TextWrapper = styled.div`
  display: inline;        // The tooltip text sits inline, like a span.
  width: fit-content;     
  height: auto;

  text-decoration: dotted underline; // This could be parametrized.
  
  // Fade in the tooltip hint.
  > * {
    transition: 0.4s ease all;
    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    > * {
      visibility: visible;
      opacity: 1;
    }
  }

  
  position: relative; // Allow this div to be a
  // point of orientation for the tooltip text.
`

const Displayed = styled.div`
  display: inline;

  position: absolute;
  margin-top: 2rem;
  margin-left: -50%;              // position top-left corner in the center of parent div
  transform: translate(-50%, 0);  // set div's horizontal anchorpoint to the center 

  @media (max-width: 768px) {
    float: left;
    margin: none;
    min-width: 100vw;
    > * {
      min-width: 100vw;
    }
  }
  

  // max-width: 80vw; // Ensure the hint doesn't spill off the page.
  height: auto;
  > * {
    height: auto;
    // max-width: 80vw;
  }
  
  z-index: 3; // Ensure the hint displays overtop the rest of the webpage.
`

const ArrowWrapper = styled.div`
  display: inline;
  margin-top: 1.1rem;
  
  position: absolute;
  margin-left: -50%;
  transform: translate(-50%, 0);
  z-index: 5;
`
const InnerArrow = styled.div`
  height: 15px;
  width: 15px;
  transform: translate(0, 50%) rotate(45deg);

  // These paths were quite confusing to create, but they basically ensure that the box shadow
  // can spill out past the clipping path, but half of the div is obscured so it looks like a triangle.
  -webkit-clip-path: polygon(-100% 0%, -100% 200%, 0% 100%, 100% 0%, 200% -100%, -100% -100%);
  clip-path: polygon(-100% 0%, -100% 200%, 0% 100%, 100% 0%, 200% -100%, -100% -100%);
`

const UpArrow = () => {
  return (
    <ArrowWrapper>
      <InnerArrow className="tooltip-bg-color soft-dark-shadow" />
    </ArrowWrapper>
  );
}

const ToolTip = ({text, children}) => {
  return (
    <>
    <TextWrapper>{text}
      <UpArrow/>
      <Displayed
        className="soft-dark-shadow soft-radius tooltip-bg-color"
        style={{padding:"1rem"}}
      >
        {children}
      </Displayed>
    </TextWrapper>
    </>
  );
}


export default ToolTip;