import { z } from "zod";

export const LocationInfoSchema = z.object({
  city: z.string(),
  continent: z.string(),
  continentCode: z.string(),
  countryCode: z.string(),
  countryName: z.string(),
  latitude: z.number(),
  locality: z.string(),
  localityLanguageRequested: z.string(),
  longitude: z.number(),
  lookupSource: z.string(),
  plusCode: z.string(),
  postcode: z.string(),
  principalSubdivision: z.string(),
  principalSubdivisionCode: z.string(),
  localityInfo: z.object({
    administrative: z.array(z.unknown()),
    informative: z.array(z.unknown()),
  }),
});

export type LocationInfoType = z.infer<typeof LocationInfoSchema>;
