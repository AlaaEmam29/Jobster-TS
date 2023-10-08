import styled from "styled-components";
import FormLogin from "../features/login/FormLogin";
const StyledLogin = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Register() {
  return (
    <StyledLogin>
      <FormLogin />
    </StyledLogin>
  );
}
