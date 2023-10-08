import styled from "styled-components";
import Logo from "./Logo";
const StyledNavLanding = styled.nav`
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 2rem auto;
  height: var(--nav-height);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-between;
  img {
    width: 20rem;
    display: block;
    object-fit: cover;
  }
`;
export default function NavLanding() {
  return (
    <StyledNavLanding>
      <Logo />
    </StyledNavLanding>
  );
}
