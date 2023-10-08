/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import styled from "styled-components";
import SearchForm from "../features/allJob/SearchForm";
import { useAllJobs } from "../features/allJob/useAllJobs";
import { FadeLoader } from "react-spinners";
import AllJobContainer from "../features/allJob/AllJobContainer";
import { useDeleteJob } from "../features/allJob/useDeleteJob";
import { useFilter } from "../features/allJob/useFilter";
const ContainerJobs = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export default function AllJob() {
  const { isLoadingSearch, fetchJobs } = useAllJobs();
  const { isLoadingDelete } = useDeleteJob();
  const { isFiltering } = useFilter();

  const isLoading = isLoadingSearch || isLoadingDelete || isFiltering;
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <ContainerJobs>
      <SearchForm />
      {isLoading ? (
        <FadeLoader color="#1d4ed8" cssOverride={{ margin: "0 auto" }} />
      ) : (
        <AllJobContainer />
      )}
    </ContainerJobs>
  );
}
