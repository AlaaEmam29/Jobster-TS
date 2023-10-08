import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { searchSchemaType, initStateSchemaType } from "./types";
import { allJobPagination, allJobs, deleteJob } from "./allJobThunk";
import toast from "react-hot-toast";
import { jobDataSchemaType } from "../addJob/types";
const initFilterState: searchSchemaType = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sortOptions: "latest",
};
type initType = initStateSchemaType &
  searchSchemaType & { isFiltering: boolean };
const initialState: initType = {
  isLoadingSearch: false,
  jobs: [],
  totalJobs: 0,
  numberOFJobs: 0,
  page: 1,
  isFiltering: false,
  ...initFilterState,
};

const applySearchFilter = (jobs: jobDataSchemaType[], search: string) => {
  if (!search) return jobs;
  const searchLower = search.toLowerCase();
  return jobs.filter(
    (job) =>
      job.position.toLowerCase().includes(searchLower) ||
      job.company.toLowerCase().includes(searchLower) ||
      job.jobLocation.toLowerCase().includes(searchLower),
  );
};
const applyStatusFilter = (jobs: jobDataSchemaType[], status: string) => {
  if (status === "all") return jobs;
  return jobs.filter(
    (job) => job.status.toLowerCase() === status.toLowerCase(),
  );
};
const applyTypeFilter = (jobs: jobDataSchemaType[], type: string) => {
  if (type === "all") return jobs;
  return jobs.filter((job) => job.jobType.toLowerCase() === type.toLowerCase());
};

const applySort = (jobs: jobDataSchemaType[], sortOptions: string) => {
  const direction = sortOptions === "a-z" || sortOptions === "oldest" ? 1 : -1;
  const result = jobs.slice().sort((a, b) => {
    if (sortOptions === "a-z" || sortOptions === "z-a") {
      return direction * a.position.localeCompare(b.position);
    } else if (sortOptions === "latest" || sortOptions === "oldest") {
      return (
        direction * (
          new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
        )
      );
    }

    return 0;
  });
  return result;
};


export const allJobSlice = createSlice({
  name: "allJob",
  initialState,
  reducers: {
    filterJobs: (state, action) => {
      state.isFiltering = true;
      state.search = action.payload.search;
      state.searchStatus = action.payload.searchStatus;
      state.searchType = action.payload.searchType;
      state.sortOptions = action.payload.sortOptions;
      let filteredJobs = applySearchFilter(
        [...state.jobs] as jobDataSchemaType[],
        action.payload.search,
      );
      filteredJobs = applyStatusFilter(
        filteredJobs,
        action.payload.searchStatus,
      );
      filteredJobs = applyTypeFilter(filteredJobs, action.payload.searchType);
      filteredJobs = applySort(filteredJobs, action.payload.sortOptions);
      state.jobs = filteredJobs;
      state.isFiltering = false;
    },
    clearFilter: (state) => {
      state.isFiltering = false;
      state.search = "";
      state.searchStatus = "all";
      state.searchType = "all";
      state.sortOptions = "latest";
      state.jobs = [...state.jobs];
    },
    nextPage: (state) => {
      state.page += 1;
    },
    prevPage: (state) => {
      state.page -= 1;
    },
    goToPage: (state, action) => {
      state.page = action.payload;
    },
    cleanJobs: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(allJobs.pending, (state) => {
      state.isLoadingSearch = true;
    });
    builder.addCase(allJobs.fulfilled, (state, action) => {
      state.isLoadingSearch = false;
      state.jobs = action.payload.jobs;
      state.totalJobs = action.payload.totalJobs;
      state.numberOFJobs = action.payload.numOfPages;
    });
    builder.addCase(allJobs.rejected, (state, action) => {
      state.isLoadingSearch = false;
      toast.remove();
      toast.error(action.payload as string);
    });
    builder.addCase(deleteJob.pending, (state) => {
      state.isLoadingSearch = true;
    });
    builder.addCase(deleteJob.fulfilled, (state, _) => {
      state.isLoadingSearch = false;
      toast.remove();
      toast.success("Job deleted successfully");
    });
    builder.addCase(deleteJob.rejected, (state, action) => {
      state.isLoadingSearch = false;
      toast.remove();
      toast.error(action.payload as string);
    });
    builder.addCase(allJobPagination.pending, (state) => {
      state.isLoadingSearch = true;
    });
    builder.addCase(allJobPagination.fulfilled, (state, action) => {
      state.isLoadingSearch = false;
      state.jobs = action.payload.jobs;
      state.totalJobs = action.payload.totalJobs;
      state.numberOFJobs = action.payload.numOfPages;
    });

    builder.addCase(allJobPagination.rejected, (state, action) => {
      state.isLoadingSearch = false;
      toast.remove();
      toast.error(action.payload as string);
    });
  },
});

export const selectAllJob = (state: RootState) => state.allJob;
export const {
  filterJobs,
  clearFilter,
  cleanJobs,

  nextPage,
  prevPage,
  goToPage,
} = allJobSlice.actions;
export default allJobSlice.reducer;
