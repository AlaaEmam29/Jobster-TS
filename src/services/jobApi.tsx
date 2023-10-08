import { handleError } from "../utils/helper";
import {
  jobDataSchemaType,
  updateJobSchemaType,
} from "../features/addJob/types";
import API from "./API";
import { PaginationType, allJobsApiType } from "../features/allJob/types";
export const addJobApi = async (job: any): Promise<jobDataSchemaType> => {
  try {
    const request = await API.post("/jobs", job);
    return request.data.job as jobDataSchemaType;
  } catch (error: any) {
    if (error.response.status === 401) {
      throw new Error("Unauthorized user");
    }
throw   handleError(error);  }
};

export const allJobsApi = async (): Promise<allJobsApiType> => {
  try {
    const request = await API.get("/jobs");
    const { jobs, totalJobs, numOfPages } = request.data;
    return { jobs, totalJobs, numOfPages };
  } catch (error: any) {
throw   handleError(error);
  }
};
export const deleteJobApi = async (id: string): Promise<any> => {
  try {
    const request = await API.delete(`/jobs/${id}`);
    return request.data;
  } catch (error) {
    throw   handleError(error);
  }
};

export const updateJobApi = async (
  data: updateJobSchemaType,
): Promise<jobDataSchemaType> => {
  const { _id: id, ...job } = data;
  try {
    const request = await API.patch(`/jobs/${id}`, job);
    const { updatedJob } = request.data;

    return updatedJob;
  } catch (error) {
throw   handleError(error);  }
};
export const allJobPaginationApi = async (
  params: PaginationType,
): Promise<allJobsApiType> => {
  try {
    const request = await API.get("/jobs", { params });
    const { jobs, totalJobs, numOfPages } = request.data;
    return { jobs, totalJobs, numOfPages };
  } catch (error: any) {
throw   handleError(error);
  }
};
