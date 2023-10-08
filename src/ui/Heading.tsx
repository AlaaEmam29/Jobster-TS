import styled, { css } from "styled-components";
const Heading = styled.h1<{ as?: string }>`
  line-height: 1.4;

  letter-spacing: 0.1rem;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 3rem;
      font-weight: 500;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3.5rem;
      font-weight: 600;
      text-align: center;
      letter-spacing: 0.05rem;
    `}
  ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 2.5rem;
      font-weight: 500;
      line-height: 1.4;
    `}
`;
export default Heading;
