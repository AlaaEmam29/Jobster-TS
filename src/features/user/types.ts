export interface User {
  name?: string;
  email: string;
  password: string;
  location?: string;
  lastName?: string;
}
export interface UpdateUser {
  name: string;
  lastName: string;
  email: string;
  location: string;
}

export interface UserState {
  user: User;
  isLoading: boolean;
  error: any;
  flag: string;
}
