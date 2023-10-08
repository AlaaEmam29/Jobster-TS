import styled from "styled-components";
import FormRegister from "../features/register/FormRegister";
const StyledRegister = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Register() {
  return (
    <StyledRegister>
      <FormRegister />
    </StyledRegister>
  );
}
