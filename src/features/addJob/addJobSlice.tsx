import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import toast from "react-hot-toast";
import { jobSchemaType, jobStateType } from "./types";
import { addJob, updateJob } from "./addJobThunk";

const initialState: jobSchemaType & jobStateType = {
  isLoadingJob: false,
  isEditingJob: false,
  editJobId: "",
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: "full-time" || "part-time" || "remote" || "internship",
  statusOptions: "interview" || "declined" || "pending",
};

export const addJobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setEditJob: (state, action) => {
      state.isEditingJob = true;
      state.editJobId = action.payload._id;
      state.position = action.payload.position;
      state.company = action.payload.company;
      state.jobLocation = action.payload.jobLocation;
      state.jobTypeOptions = action.payload.jobType;
      state.statusOptions = action.payload.status;
    },
    cancelEditJob: (state) => {
      state.isEditingJob = false;
      state.editJobId = "";
      state.position = "";
      state.company = "";
      state.jobLocation = "";
      state.jobTypeOptions = "full-time";
      state.statusOptions = "pending";
    },
    cancelJobValue: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(addJob.pending, (state) => {
      state.isLoadingJob = true;
    });
    builder.addCase(addJob.fulfilled, (state, action) => {
      const { position, company, jobLocation, _id: id } = action.payload;
      state.isLoadingJob = false;
      state.editJobId = "";
      state.position = position;
      state.company = company;
      state.jobLocation = jobLocation;
      state.editJobId = id;

      toast.remove();
      toast.success(
        `Position: ${position} at ${company} in ${jobLocation} added successfully`,
      );
    });
    builder.addCase(addJob.rejected, (state, action) => {
      state.isLoadingJob = false;
      toast.remove();
      toast.error(action.payload as string);
    });
    builder.addCase(updateJob.pending, (state) => {
      state.isEditingJob = true;
    });
    builder.addCase(updateJob.fulfilled, (state, action) => {
      const { position, company, jobLocation, _id: id } = action.payload;
      state.isLoadingJob = false;
      state.isEditingJob = false;
      state.editJobId = "";
      state.position = position;
      state.company = company;
      state.jobLocation = jobLocation;
      state.editJobId = id;

      toast.remove();
      toast.success(
        `Position: ${position} at ${company} in ${jobLocation} updated successfully`,
      );
    });
    builder.addCase(updateJob.rejected, (state, action) => {
      state.isLoadingJob = false;
      toast.remove();
      toast.error(action.payload as string);
    });
  },
});

export const selectJob = (state: RootState) => state.job;
export const { setEditJob, cancelEditJob, cancelJobValue } =
  addJobSlice.actions;
export default addJobSlice.reducer;
