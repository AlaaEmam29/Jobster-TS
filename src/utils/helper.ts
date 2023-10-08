import { format, parseISO } from "date-fns";
import toast from "react-hot-toast";
import { logoutUser } from "../features/user/userSlice";

function handleError(error: any) {
  return  new Error(error?.response?.data?.msg || error?.message);
}
const getPosition = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const formatDate = (date: any) => {
  return format(parseISO(date), "iii MMM dd yyyy h:mm:ss");
};

const UnauthorizedError = (error: any, thunkAPI: any) => {
  if (error.message === "Unauthorized user") {
    toast.remove();
    thunkAPI.dispatch(logoutUser());
    return thunkAPI.rejectWithValue(error.message);
  }
};
export { handleError, getPosition, formatDate, UnauthorizedError };
