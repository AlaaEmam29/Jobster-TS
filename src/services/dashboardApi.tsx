import { handleError } from "../utils/helper";
import { allJobsApiType } from "../features/allJob/types";
import API from "./API";

export const getStatsApi = async (): Promise<allJobsApiType> => {
  try {
    const request = await API.get("/jobs/stats");
    return request.data;
  } catch (error) {
    throw   handleError(error);  }
};
