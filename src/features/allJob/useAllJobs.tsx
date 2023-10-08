import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectAllJob } from "./allJobSlice";
import { allJobs as allJobsThunk } from "./allJobThunk";

export const useAllJobs = () => {
  const { isLoadingSearch, jobs, numberOFJobs, page, totalJobs } =
    useAppSelector(selectAllJob);
  const dispatch = useAppDispatch();
  const fetchJobs = async () => {
    await dispatch(allJobsThunk());
  };

  return { isLoadingSearch, jobs, numberOFJobs, page, totalJobs, fetchJobs };
};
