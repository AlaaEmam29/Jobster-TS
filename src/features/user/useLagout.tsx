import { useAppDispatch } from "../../hooks/hooks";
import { logoutUser } from "./userSlice";
import { cancelJobValue } from "../addJob/addJobSlice";
import { cleanJobs } from "../allJob/allJobSlice";

function useLogout() {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logoutUser());
    dispatch(cancelJobValue());
    dispatch(cleanJobs());
  };

  return { logout };
}

export { useLogout };
