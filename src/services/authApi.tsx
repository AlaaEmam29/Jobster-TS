import { handleError } from "../utils/helper";
import { UpdateUser, User } from "../features/user/types";
import API from "./API";

export const register = async (user: User): Promise<User> => {
  try {
    const request = await API.post("/auth/register", user);
    return request.data.user as User;
  } catch (error: any) {
    throw   handleError(error);
  }
};

export const login = async (user: User): Promise<User> => {
  try {
    const request = await API.post("/auth/login", user);
    return request.data.user as User;
  } catch (error: any) {
    throw   handleError(error);
  }
};
export const loginTester = async (user: User): Promise<User> => {
  try {
    const request = await API.post("/auth/login", user);
    return request.data.user as User;
  } catch (error: any) {
   throw   handleError(error);
  }
};

export const update = async (user: UpdateUser): Promise<User> => {
  try {
    const res = await API.patch("/auth/updateUser", user);
    return res.data.user as User;
  } catch (error: any) {
    if (error.response.status === 401) {
      throw new Error("Unauthorized user");
    }
   throw   handleError(error);
  }
};
