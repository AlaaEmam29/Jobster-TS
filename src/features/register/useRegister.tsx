import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectUser } from "../user/userSlice";
import { registerUser as registerUserThunk } from "../user/userThunk";
import RegisterFormInput from "./types";

function useRegister() {
  const { user, isLoading, error, flag } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const registerUser = (data: RegisterFormInput) => {
    dispatch(registerUserThunk(data));
  };
  return { user, isLoading, error, registerUser, flag };
}
export { useRegister };
