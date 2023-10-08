import styled from "styled-components";
const StyledNotFound = styled.section`
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.6rem;
  h1 {
    letter-spacing: 1rem;
    text-align: center;
  }
  img {
    width: 100%;
    max-width: 40rem;
    display: block;
    object-fit: cover;
  }
`;
import notFoundImage from "@/assets/images/notfound.svg";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useNavigate } from "react-router";
export default function NotFound() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <StyledNotFound>
      <img src={notFoundImage} alt="not found" />
      <Heading as="h1">Page Not Found</Heading>
      <Button size="large" onClick={backToHome}>
        Back to Home
      </Button>
    </StyledNotFound>
  );
}
