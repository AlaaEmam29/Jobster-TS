import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import { useNavigate } from "react-router";
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  span {
    color: var(--primary-500);
  }
  p {
    font-size: 1.8rem;
    line-height: 1.8;
  }
  h1 {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
  }
`;

export default function Info() {
  const navigate = useNavigate();
  const handleGetStarted = (): void => {
    navigate("/register");
  };
  return (
    <StyledInfo>
      <Heading as="h1">
        Job <span>Tracking</span> App
      </Heading>
      <p>
        Welcome to JOBSTER! Your online job search made easy. Login with your
        email to discover a wide range of job openings, and refine your search
        with filters and sorting options. Keep track of your applications and
        their progress effortlessly. JOBSTER is your trusted companion in
        finding and landing your dream job
      </p>
      <div>
        <Button size="large" onClick={handleGetStarted}>
          Get Started
        </Button>
      </div>
    </StyledInfo>
  );
}
