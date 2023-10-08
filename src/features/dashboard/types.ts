import { z } from "zod";

const dashboardSchema = z.object({
  stats: z.object({
    pending: z.number().default(0),
    interview: z.number().default(0),
    declined: z.number().default(0),
  }),
  monthlyApplications: z.array(z.unknown()).default([]),
});
export type dashboardType = z.infer<typeof dashboardSchema>;
