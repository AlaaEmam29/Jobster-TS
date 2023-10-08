import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectLocation } from "./locationSlice";
import { getCurrentLocation } from "./locationThunk";

export const useCurrentLocation = () => {
  const { location } = useAppSelector(selectLocation);
  const dispatch = useAppDispatch();

  const currentLocation = async () => {
    await dispatch(getCurrentLocation());
  };
  return { location, currentLocation };
};
