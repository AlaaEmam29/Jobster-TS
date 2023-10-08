import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectJob, setEditJob as setEditJobAction } from "./addJobSlice";
import { jobDataSchemaType, updateJobSchemaType } from "./types";
import { updateJob as updateJobThunk } from "./addJobThunk";
import { useAllJobs } from "../allJob/useAllJobs";

function useEditJob() {
  const { isLoadingJob, isEditingJob, editJobId, ...job } =
    useAppSelector(selectJob);
  const dispatch = useAppDispatch();
  const { fetchJobs } = useAllJobs();

  const setEditJob = (job: jobDataSchemaType) => {
    dispatch(setEditJobAction(job));
  };
  const updateJob = async (job: updateJobSchemaType) => {
    const result = await dispatch(updateJobThunk(job));

    if (result.meta.requestStatus === "fulfilled") {
      await fetchJobs();
    }
    return result;
  };
  return { isLoadingJob, isEditingJob, updateJob, editJobId, job, setEditJob };
}
export { useEditJob };
