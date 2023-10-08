import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectAllJob } from "./allJobSlice";
import { deleteJob as deleteJobThunk } from "./allJobThunk";
import { useAllJobs } from "./useAllJobs";

export const useDeleteJob = () => {
  const { isLoadingSearch: isLoadingDelete } = useAppSelector(selectAllJob);
  const dispatch = useAppDispatch();
  const { fetchJobs } = useAllJobs();
  async function deleteJob(id: string) {
    const result = await dispatch(deleteJobThunk(id));
    if (result.meta.requestStatus === "fulfilled") {
      await fetchJobs();
    }
  }

  return { isLoadingDelete, deleteJob };
};
