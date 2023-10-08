import { css, styled } from "styled-components";
import Logo from "./Logo";
import MainNavbar from "./MainNavbar";
import { useSliderToggle } from "../context/SliderToggleContext";
const StyledSidebar = styled.aside<{
  on?: undefined| string;
}>`
  grid-column: 1 / 2;
  padding: 3.2rem 2.4rem;
  grid-row: 1 / -1;
  border-right: 1px solid var(--primary-50);

  background-color: var(--white);
  img {
    width: 18rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  ${(props) =>
    props.on !== undefined &&
    css`
      display: none;
    `}
`;
export default function Sidebar() {
  const { on } = useSliderToggle();
  return (
    <StyledSidebar on={on ? "true" : undefined}>
      <Logo />
      <MainNavbar />
      {/* <AddButtonTest/>  for add dummy data*/}
    </StyledSidebar>
  );
}
