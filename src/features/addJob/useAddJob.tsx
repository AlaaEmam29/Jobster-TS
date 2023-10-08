import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectJob } from "./addJobSlice";
import { addJob as addJobThunk } from "./addJobThunk";
import { JobState } from "./types";

function useAddJob() {
  const { isLoadingJob, editJobId, ...job } = useAppSelector(selectJob);

  const dispatch = useAppDispatch();
  const addJob = (data: JobState) => {
    return dispatch(addJobThunk(data));
  };

  return { isLoadingJob, editJobId, job, addJob };
}
export { useAddJob };
