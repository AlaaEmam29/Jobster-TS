import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { UpdateUser } from "../user/types";
import { selectUser } from "../user/userSlice";
import { updateUser as updateUserThunk } from "../user/userThunk";
function useUpdate() {
  const { user, isLoading, error, flag } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const updateUser = (data: UpdateUser) => {
    dispatch(updateUserThunk(data));
  };

  return { user, isLoading, error, updateUser, flag };
}
export { useUpdate };
