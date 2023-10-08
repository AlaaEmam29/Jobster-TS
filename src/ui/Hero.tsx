import hero from "@/assets/images/main.svg";
import styled from "styled-components";
const StyledImg = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;
export default function Hero() {
  return (
    <div>
      <StyledImg src={hero} alt="hero" />
    </div>
  );
}
