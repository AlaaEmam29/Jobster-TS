import { useAllJobs } from "./useAllJobs";
import Heading from "../../ui/Heading";
import styled from "styled-components";
import React from "react";
import { useDeleteJob } from "./useDeleteJob";
import Job from "./Job";
import { BiSolidCity } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { formatDate } from "../../utils/helper";
import Tag from "../../ui/Tag";
import { useNavigate } from "react-router";
import { jobDataSchemaType } from "../addJob/types";
import { useEditJob } from "../addJob/useEditJob";
import Pagination from "../../ui/Pagination";
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  svg {
    fill: var(--grey-400);
    font-size: 2.4rem;
  }
  p {
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    margin-bottom: 0;
    font-size: 1.5rem;
  }
`;
const StyledJobs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;
const StylePagination = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  margin-bottom: 3rem;
  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const AllJobContainer = () => {
  const { jobs, numberOFJobs, page, totalJobs } = useAllJobs();
  const { deleteJob } = useDeleteJob();
  const navigate = useNavigate();
  const { setEditJob } = useEditJob();
  const handleUpdateJob = (job: jobDataSchemaType) => {
    navigate(`/job/${job._id}`);
    setEditJob(job);
  };
  const calcPage = page - 1;
  const start = jobs.length < 10 ? calcPage * 10 : calcPage * jobs.length + 1;
  const end =
    jobs.length < 10
      ? calcPage * 10 + jobs.length
      : calcPage * jobs.length + jobs.length;

  return (
    <div>
      <StylePagination>
        <Heading as="h2">
          Showing {start} - {end} of {totalJobs} jobs
        </Heading>
        {numberOFJobs > 1 && <Pagination />}
      </StylePagination>
      <StyledJobs>
        {jobs.map((job: any) => {
          return (
            <Job key={job._id}>
              <React.Fragment>
                <Job.Header>
                  <Job.Icon>{job.company.charAt(0)}</Job.Icon>
                  <div>
                    <Job.Title>{job.position}</Job.Title>
                    <Job.Company>{job.company}</Job.Company>
                  </div>
                </Job.Header>
                <Job.Info>
                  <Info>
                    <BiSolidCity />
                    <p>{job.jobLocation}</p>
                  </Info>
                  <Info>
                    <FaCalendarAlt />
                    <p>{formatDate(job.updatedAt)}</p>
                  </Info>
                  <Info>
                    <FaToolbox />
                    <p>{job.jobType.replace(/-/g, " ")}</p>
                  </Info>
                  <Tag status={job.status}>{job.status}</Tag>
                </Job.Info>
                <Job.Footer>
                  <Job.EditBtn onClick={() => handleUpdateJob(job)} />
                  <Job.DeleteBtn onClick={() => deleteJob(job._id)} />
                </Job.Footer>
              </React.Fragment>
            </Job>
          );
        })}
      </StyledJobs>
    </div>
  );
};

export default AllJobContainer;
