import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectUser } from "../user/userSlice";
import { loginDemo as loginDemoThunk } from "../user/userThunk";

function useLoginDemo() {
  const { isLoading: isLoadingDemo } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const loginUserDemo = async() => {
    const result = await dispatch(loginDemoThunk());
    return result;
  };

  return { isLoadingDemo, loginUserDemo };
}
export { useLoginDemo };
