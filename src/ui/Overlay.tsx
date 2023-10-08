import styled, { css } from "styled-components";

const Overlay = styled.div<{
  on?: undefined| string;
}>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  display: none;

  ${(props) =>
    props.on &&
    css`
      display: block;
    `}
  overflow-x: hidden;
`;
export default Overlay;
