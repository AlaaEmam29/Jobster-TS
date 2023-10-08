import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { clearFilter, filterJobs as filterJobsSlice } from "./allJobSlice";
import { searchSchemaType } from "./types";
import { useAllJobs } from "./useAllJobs";

function useFilter() {
  const { isFiltering } = useAppSelector((state) => state.allJob);
  const dispatch = useAppDispatch();
  const filterJobs = (data: searchSchemaType) => {
    dispatch(filterJobsSlice(data));
  };
  const { fetchJobs } = useAllJobs();
  const resetFilter = () => {
    dispatch(clearFilter());
    fetchJobs();
  };
  return {
    isFiltering,
    filterJobs,
    resetFilter,
  };
}
export { useFilter };
