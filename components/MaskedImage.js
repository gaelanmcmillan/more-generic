import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: ${props => props.width || "100px"};
  height: ${props => props.height || "100px"};
  background-color: ${props => props.background || "white"};
`;

const Mask = styled.div`
  -webkit-mask-image: ${props => props.src || "none"};
  mask-image: ${props => props.src || "none"};
  -webkit-mask-size: ${props => props.size || "100%"};
  mask-size: ${props => props.size || "100%"};
  -webkit-mask-repeat: ${props => props.repeat || "no-repeat"};
  mask-repeat: ${props => props.repeat || "no-repeat"};

  width: 100%;
  height: 100%;
  position: relative;
`;

const ColorBox = styled.div`
  position: absolute;
  display: inline-block;
  background-color: ${props => props.foreground || "black"};
  width: inherit;
  height: inherit;
`;

const MaskedImage = ({ src, width, height, background, foreground, children }) => {
  return (
    <>
      <Wrapper width={width} height={height} background={background}>
        <Mask src={`url("${src}")`}>
          {children}
          {((fg) => fg === undefined ? <></> : <ColorBox foreground={foreground} />)(foreground)}
        </Mask>
      </Wrapper>
    </>
  );
}

export default MaskedImage;