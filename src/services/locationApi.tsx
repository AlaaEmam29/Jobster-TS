import axios from "axios";
import toast from "react-hot-toast";
import { LocationInfoType } from "../features/location/types";

export const getAddress = async (
  latitude: number,
  longitude: number,
): Promise<LocationInfoType | undefined> => {
  try {
    const { data } = await axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
    );

    return data;
  } catch (error) {
    toast.error("Error getting address");
  }
};
