import React from "react";
import Heading from "./Heading";
import styled from "styled-components";
const StyledBox = styled.div`
  background-color: var(--white);
  border-radius: var(--borderRadius);
  width: 100%;
  padding: 3rem 3.6rem 4rem;
  box-shadow: var(--shadow-2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

type Props = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode | React.ReactNode[];
};
function Title({ as = "h1", children }: Props) {
  return <Heading as={as}>{children}</Heading>;
}
function Body({ children }: Props) {
  return <>{children}</>;
}
function Box({ children }: Props) {
  return <StyledBox>{children}</StyledBox>;
}
Box.Title = Title;
Box.Body = Body;
export default Box;
