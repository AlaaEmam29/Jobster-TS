import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, loginTester, register, update } from "../../services/authApi";
import { UpdateUser, User } from "./types";
import { UnauthorizedError } from "../../utils/helper";
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (data: User, thunkAPI) => {
    try {
      const user = await register(data);
      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data: User, thunkAPI) => {
    try {
      const user = await login(data);
      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const loginDemo = createAsyncThunk("user/login", async (_, thunkAPI) => {
  const demoData = {
    email: "demousertest@demo.com",
    password: "123456789",
  } as User;
  console.log(demoData, "demoData")
  try {
    const user = await loginTester(demoData);
    return user;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data: UpdateUser, thunkAPI) => {
    try {
      const user = await update(data);
      return user;
    } catch (error: any) {
      return UnauthorizedError(error, thunkAPI);
    }
  },
);
