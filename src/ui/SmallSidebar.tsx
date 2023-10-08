import styled, { css } from "styled-components";
import MainNavbar from "./MainNavbar";
import Overlay from "./Overlay";
import Logo from "./Logo";
import Button from "./Button";
import { IoCloseSharp } from "react-icons/io5";
import { useSliderToggle } from "../context/SliderToggleContext";
const StyledSmallSidebar = styled.div<{
  on?: undefined| string;
}>`
  background: var(--white);
  height: 90vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.01);
  width: 90%;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  overflow-x: hidden;

  img {
    width: 18rem;
    margin: 2rem auto;
  }

  button {
    all: unset;
    cursor: pointer;
    position: absolute;
    left: 0%;
    padding: 1rem;
    top: 0;
    &:hover {
      background-color: transparent;
    }
    svg {
      fill: var(--red);
      width: 4.8rem;
      height: 4.8rem;
      stroke-width: 2;
    }
  }

  border-radius: 0.5rem;
  transition: var(--transition);
  visibility: hidden;

  ${(props) =>
    props.on &&
    css`
      transform: scale(1) translate(-50%, -50%);
      visibility: visible;
    `}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 4rem;
  height: 85%;
`;
export default function SmallSidebar() {
  const { on, toggle } = useSliderToggle();
  return (
    <>
      <Overlay on={on ? true.toString() : undefined}  onClick={toggle} />
      <StyledSmallSidebar on={on ? true.toString() : undefined} >
        <Button onClick={toggle}>
          <IoCloseSharp />
        </Button>
        <Wrapper>
          <Logo />

          <MainNavbar toggle={toggle} />
        </Wrapper>
      </StyledSmallSidebar>
    </>
  );
}
