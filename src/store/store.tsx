import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import addJobReducer from "../features/addJob/addJobSlice";
import locationReducer from "../features/location/locationSlice";
import allJobReducer from "../features/allJob/allJobSlice";
import dashboardReducer from "../features/dashboard/dashboardSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    job: addJobReducer,
    location: locationReducer,
    allJob: allJobReducer,
    dashboard: dashboardReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
