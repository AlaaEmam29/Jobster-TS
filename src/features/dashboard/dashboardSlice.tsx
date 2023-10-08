import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { dashboardType } from "./types";
import { getAllStats } from "./dashboardThunk";
import toast from "react-hot-toast";
const initialState: dashboardType = {
  monthlyApplications: [],
  stats: {
    pending: 0,
    interview: 0,
    declined: 0,
  },
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllStats.fulfilled, (state, action) => {
      state.stats = action.payload.defaultStats;
      state.monthlyApplications = action.payload.monthlyApplications;
    });
    builder.addCase(getAllStats.rejected, (state, action) => {
      state.monthlyApplications = [];
      state.stats = {
        pending: 0,
        interview: 0,
        declined: 0,
      };
      toast.remove();
      toast.error(action.payload as string);
    });
  },
});

export const selectDashboard = (state: RootState) => state.dashboard;
export default dashboardSlice.reducer;
