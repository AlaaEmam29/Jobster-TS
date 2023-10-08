import { z } from "zod";
import { jobDataSchemaType } from "../addJob/types";

export const searchSchema = z.object({
  search: z.string(),
  searchStatus: z
    .enum(["all", "interview", "declined", "pending"])
    .default("all"),
  searchType: z
    .enum(["all", "full-time", "part-time", "remote", "internship"])
    .default("all"),
  sortOptions: z.enum(["latest", "oldest", "a-z", "z-a"]).default("latest"),
});
const initStateSchema = z.object({
  isLoadingSearch: z.boolean().default(false),
  totalJobs: z.number().default(0),
  jobs: z.array(z.unknown()).default([]),
  numberOFJobs: z.number().default(0),
  page: z.number().default(1),
});
export type allJobsApiType = {
  monthlyApplications?: any;
  defaultStats?: any;
  jobs: jobDataSchemaType[];
  totalJobs: number;
  numOfPages: number;
};
export type PaginationType = {
  page?: number;
  search?: string;
  searchStatus?: string;
  searchType?: string;
  sortOptions?: string;
};

export type searchSchemaType = z.infer<typeof searchSchema>;
export type initStateSchemaType = z.infer<typeof initStateSchema>;
