import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStatsApi } from "../../services/dashboardApi";

export const getAllStats = createAsyncThunk(
  "dashboard/getAllStats",
  async (_, thunkAPI) => {
    try {
      const data = await getStatsApi();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
