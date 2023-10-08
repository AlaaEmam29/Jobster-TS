/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect } from "react";
import { useDashboard } from "../features/dashboard/useDashboard";
import { useAllJobs } from "../features/allJob/useAllJobs";
import Spinner from "../ui/Spinner";
import styled from "styled-components";
import Stats from "../features/dashboard/Stats";
import { BiSolidCalendarHeart, BiSolidPaperPlane } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import Heading from "../ui/Heading";
import MonthlyApp from "../features/dashboard/MonthlyApp";
const StyledDashboard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
export default function Dashboard() {
  const {  stats, getAllStats } = useDashboard();
  const { isLoadingSearch, fetchJobs } = useAllJobs();
  const { pending, interview, declined } = stats;
  useEffect(() => {
    getAllStats();
    fetchJobs();
  }, []);
  if (isLoadingSearch) {
    return <Spinner />;
  }
  return (
    <StyledDashboard>
      <Stats>
        <Stats.Stat $status="pending">
          <span>{pending}</span>
          <Stats.Icon>
            <BiSolidCalendarHeart />
          </Stats.Icon>
          <Heading as="h3">Pending Applications</Heading>
        </Stats.Stat>
        <Stats.Stat $status="interview">
          <span>{interview}</span>
          <Stats.Icon>
            <BiSolidPaperPlane />
          </Stats.Icon>
          <Heading as="h3">Interviews Applications</Heading>
        </Stats.Stat>

        <Stats.Stat $status="declined">
          <span>{declined}</span>
          <Stats.Icon>
            <AiFillCloseCircle />
          </Stats.Icon>
          <Heading as="h3">Jobs Declined</Heading>
        </Stats.Stat>
      </Stats>
      <MonthlyApp />
    </StyledDashboard>
  );
}
