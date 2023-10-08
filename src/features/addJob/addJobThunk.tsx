import { createAsyncThunk } from "@reduxjs/toolkit";
import { addJobApi, updateJobApi } from "../../services/jobApi";
import {  updateJobSchemaType } from "./types";
import { UnauthorizedError } from "../../utils/helper";

export const addJob = createAsyncThunk(
  "job/addJob",
  async (data: any, thunkAPI) => {
    try {
      const job = await addJobApi(data);
      return job;
    } catch (error: any) {
      return UnauthorizedError(error, thunkAPI);
    }
  },
);
export const updateJob = createAsyncThunk(
  "job/updateJob",
  async (data: updateJobSchemaType, thunkAPI) => {
    try {
      const job = await updateJobApi(data);
      return job;
    } catch (error: any) {
      return UnauthorizedError(error, thunkAPI);
    }
  },
);
