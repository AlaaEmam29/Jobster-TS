import { Outlet } from "react-router";
import styled, { css } from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Container from "./Container";
import { useMediaPredicate } from "react-media-hook";
import SmallSidebar from "./SmallSidebar";
import { useSliderToggle } from "../context/SliderToggleContext";
const StyledAppLayout = styled.section`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;
const Main = styled.main<{ on?: undefined| string }>`
  padding: 4rem 4.8rem 6.4rem;
  overflow: auto;

  ${(props) =>
    props.on !== undefined &&
    css`
      grid-column: 1 / -1;
    `}
  @media screen and (max-width: 850px) {
    grid-column: 1 / -1;
    padding: 1rem;
  }
`;

export default function AppLayout() {
  const toggleSidebarSmall = useMediaPredicate("(max-width: 850px)");
  const { on } = useSliderToggle();

  return (
    <StyledAppLayout>
      <Header />
      {toggleSidebarSmall ? <SmallSidebar /> : <Sidebar />}
      <Main on={on ? "true" : undefined}>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}
