import styled, { css } from "styled-components";
import Navbar from "./Navbar";
import { useSliderToggle } from "../context/SliderToggleContext";
const StyledHeader = styled.header<{
  on?: undefined| string;
}>`
  grid-column: 2 / -1;
  grid-row: 1 / 2;

  background-color: var(--white);
  background: var(--white);
  padding: 2.4rem;

  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.on !== undefined &&
    css`
      grid-column: 1 / -1;
      width: 100%;
    `}

  @media screen and (max-width: 850px) {
    grid-column: 1 / -1;
    width: 100%;
  }
`;
export default function Header() {
  const { on } = useSliderToggle();

  return (
    <StyledHeader on={on ? "true" : undefined}>
      <Navbar />
    </StyledHeader>
  );
}
