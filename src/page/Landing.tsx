import styled from "styled-components";
import NavLanding from "../ui/NavLanding";
import Container from "../ui/Container";
import Grid from "../ui/Grid";
import Hero from "../ui/Hero";
import Info from "../ui/Info";
const StyledLanding = styled.main`
  .container {
    height: calc(100vh - 12rem);

    .grid-h {
      height: 100%;
    }
    @media screen and (max-width: 1280px) {

      padding: 2rem;
    }
    @media screen and (max-width: 850px) {
      padding: 3rem;

    }
    
  }
`;

export default function Landing() {
  return (
    <StyledLanding>
      <NavLanding />
      <Container className="container">
        <Grid col={2} gap={1.6} className="grid-h">
          <Info />
          <Hero />
        </Grid>
      </Container>
    </StyledLanding>
  );
}
