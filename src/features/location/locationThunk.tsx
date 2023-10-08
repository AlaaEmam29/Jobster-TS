import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAddress } from "../../services/locationApi";
import { getPosition } from "../../utils/helper";
import { LocationInfoType } from "./types";

export const getCurrentLocation = createAsyncThunk(
  "location/getCurrentLocation",
  async (_, thunkAPI) => {
    try {
      const position = await getPosition();
      const { latitude, longitude } = position.coords;
      const address = await getAddress(latitude, longitude);
      const { city, continent } = address as LocationInfoType;

      return `${city ?? "Unknown"}, ${continent ?? "Unknown"}`;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
