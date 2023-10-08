import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  allJobPaginationApi,
  allJobsApi,
  deleteJobApi,
} from "../../services/jobApi";
import { PaginationType, allJobsApiType } from "./types";

export const allJobs = createAsyncThunk("job/allJobs", async (_, thunkAPI) => {
  try {
    const jobs = await allJobsApi();
    return jobs as allJobsApiType;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteJob = createAsyncThunk(
  "job/deleteJob",
  async (id: string, thunkAPI) => {
    try {
      const jobs = await deleteJobApi(id);
      return jobs as { msg: string };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const allJobPagination = createAsyncThunk(
  "job/allJobPagination",
  async (_, thunkAPI) => {
    try {
      const params = {
        status: (thunkAPI?.getState() as any)?.allJob?.searchStatus,
        jobType: (thunkAPI?.getState() as any)?.allJob?.searchType,
        sort: (thunkAPI?.getState() as any)?.allJob?.sortOptions,
        page: (thunkAPI?.getState() as any)?.allJob?.page,
        search: (thunkAPI?.getState() as any)?.allJob?.search,
      } as PaginationType;
      const jobs = await allJobPaginationApi(params);

      return jobs as allJobsApiType;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
