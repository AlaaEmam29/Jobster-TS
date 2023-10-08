import styled from "styled-components";
import { AreaChart } from "./AreaChart";
import { VerticalBar } from "./VerticalBar";
const StyledChartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  canvas {
    width: 100% !important;
    height: 400px !important;
  }
  @media screen and (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export default function ChartContainer() {
  return (
    <StyledChartContainer>
      <VerticalBar />
      <AreaChart />
    </StyledChartContainer>
  );
}
