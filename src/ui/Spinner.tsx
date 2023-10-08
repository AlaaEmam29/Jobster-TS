import { BounceLoader } from "react-spinners";
import styled from "styled-components";
const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export default function Spinner() {
  return (
    <StyledSpinner>
      <BounceLoader color="#1d4ed8" size={72} />
    </StyledSpinner>
  );
}
