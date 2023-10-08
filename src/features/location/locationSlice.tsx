import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import toast from "react-hot-toast";
import { getCurrentLocation } from "./locationThunk";

const initialState: { location: string } = {
  location: "",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentLocation.pending, (state) => {
      state.location = "loading...";
    });
    builder.addCase(getCurrentLocation.fulfilled, (state, action) => {
      state.location = action.payload;
    });
    builder.addCase(getCurrentLocation.rejected, (state, action) => {
      state.location = "Unknown";
      toast.remove();
      toast.error(action.payload as string);
    });
  },
});

export const selectLocation = (state: RootState) => state.location;
export default locationSlice.reducer;
