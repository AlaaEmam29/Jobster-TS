import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  nextPage as nextPageSlice,
  goToPage as goToPageSlice,
  prevPage as prevPageSlice,
} from "./allJobSlice";
import { allJobPagination } from "./allJobThunk";

function usePagination() {
  const { page, numberOFJobs, totalJobs } = useAppSelector(
    (state) => state.allJob,
  );
  const dispatch = useAppDispatch();
  const fetchJobPagination = async () => {
    await dispatch(allJobPagination());
  };
  const nextPage = async () => {
    if (page === numberOFJobs) return;
    dispatch(nextPageSlice());
    await fetchJobPagination();
  };
  const prevPage = () => {
    if (page === 1) return;
    dispatch(prevPageSlice());
    fetchJobPagination();
  };
  const goToPage = (page: number) => {
    dispatch(goToPageSlice(page));
    fetchJobPagination();
  };
  return {
    page,
    nextPage,
    prevPage,
    goToPage,
    numberOFJobs,
    totalJobs,
  };
}
export { usePagination };
