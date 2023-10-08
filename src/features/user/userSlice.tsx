/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { loginUser, registerUser, updateUser, loginDemo } from "./userThunk";
import toast from "react-hot-toast";
import { getUser, removeUser, setUser } from "../../utils/localStorageUser";
import { User, UserState } from "./types";

const user: User = {
  name: "",
  email: "",
  password: "",
};
const initialState: UserState = {
  user: user || getUser(),
  isLoading: false,
  error: null,
  flag: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      removeUser();
      state.user = {} as User;
      state.error = null;
      state.isLoading = false;
      state.flag = "";
      toast.remove();
      toast.success("Logged out successfully");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.flag = "";
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.flag = "toLoginPage";
      toast.remove();
      toast.success(`${state?.user?.name} registered successfully`);
      setUser(state.user);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? "An error occurred.";
      toast.remove();
      toast.error(state.error);
      state.flag = "";
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.flag = "";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.flag = "toHomePage";
      toast.remove();
      toast.success(`${state?.user?.name} logged successfully`);
      setUser(state.user);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? "An error occurred.";
      toast.remove();
      toast.error(state.error);
      state.flag = "toLoginPage";
    });
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
      state.flag = "";
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.flag = "";
      toast.remove();
      toast.success(`${state?.user?.name} updated successfully`);
      setUser(state.user);
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? "An error occurred.";
      toast.remove();
      toast.error(state.error);
      state.flag = "";
    });
    builder.addCase(loginDemo.pending, (state) => {
      state.isLoading = true;
      state.flag = "";
    });
    builder.addCase(loginDemo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      setUser(state.user);
      state.flag = "toHomePage";
      toast.remove();
      toast.success(`${state?.user?.name} logged successfully`);
    });
    builder.addCase(loginDemo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? "An error occurred.";
      toast.remove();
      toast.error(state.error);
      state.flag = "toLoginPage";
    });
  },
});

export const selectUser = (state: RootState) => state.user;
export const { logoutUser } = UserSlice.actions;
export default UserSlice.reducer;
