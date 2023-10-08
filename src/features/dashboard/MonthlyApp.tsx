import Heading from "../../ui/Heading";
import styled from "styled-components";
import ChartContainer from "./ChartContainer";
const StyledMonthlyApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;
export default function MonthlyApp() {
  return (
    <StyledMonthlyApp>
      <Heading as="h3">Monthly Applications</Heading>
      <ChartContainer />
    </StyledMonthlyApp>
  );
}
