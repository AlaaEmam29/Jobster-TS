import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectUser } from "../user/userSlice";
import { loginUser as loginUserThunk } from "../user/userThunk";
import LoginFormInput from "./types";

function useLogin() {
  const { user, isLoading, error, flag } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const loginUser = (data: LoginFormInput) => {
    dispatch(loginUserThunk(data));
  };

  return { user, isLoading, error, loginUser, flag };
}
export { useLogin };
