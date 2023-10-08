import { z } from "zod";

export const schemaJob = z.object({
  position: z.string().nonempty({ message: "Position is required" }),
  company: z.string().nonempty({ message: "Company is required" }),
  jobLocation: z.string().nonempty({ message: "Job Location is required" }),
  jobTypeOptions: z
    .enum(["full-time", "part-time", "remote", "internship"])
    .default("full-time"),
  statusOptions: z
    .enum(["interview", "declined", "pending"])
    .default("pending"),
});

export const schemaState = z.object({
  isLoadingJob: z.boolean().default(false),
  isEditingJob: z.boolean().default(false),
  editJobId: z.string().default(""),
});

export const schemaJobData = z.object({
  company: z.string(),
  createdBy: z.string(),
  jobLocation: z.string(),
  jobType: z.string(),
  position: z.string(),
  status: z.string(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
  __v: z.number(),
  _id: z.string(),
});
export const updateJobSchema = z.object({
  company: z.string() || z.undefined(),
  jobLocation: z.string(),
  jobType: z.string(),
  position: z.string(),
  status: z.string(),
  _id: z.string(),
});

export type updateJobSchemaType = z.infer<typeof updateJobSchema>;
export type jobDataSchemaType = z.infer<typeof schemaJobData>;

export type jobSchemaType = z.infer<typeof schemaJob>;
export type JobState = jobSchemaType;

export type jobStateType = z.infer<typeof schemaState>;
