import { Toaster } from "react-hot-toast";
import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import Spinner from "./ui/Spinner";
import NotFound from "./page/NotFound";
import ProtectRoute from "./ui/ProtectRoute";
import ProtectedAuth from "./ui/ProtectedAuth";
const Landing = lazy(() => import("./page/Landing"));
const Register = lazy(() => import("./page/Register"));
const Login = lazy(() => import("./page/Login"));
const Dashboard = lazy(() => import("./page/Dashboard"));
const Profile = lazy(() => import("./page/Profile"));
const AddJob = lazy(() => import("./page/AddJob"));
const AllJob = lazy(() => import("./page/AllJob"));

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route
          element={
            <Suspense fallback={<Spinner />}>
              <ProtectRoute>
                <AppLayout />
              </ProtectRoute>
            </Suspense>
          }
        >
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-Job" element={<AddJob />} />
          <Route path="/all-Jobs" element={<AllJob />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="job/:id" element={<AddJob />} />
        </Route>
        <Route
          path="/landing"
          element={
            <Suspense fallback={<Spinner />}>
              <Landing />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<Spinner />}>
              <ProtectedAuth>
                <Register />
              </ProtectedAuth>
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Spinner />}>
              <ProtectedAuth>
                <Login />
              </ProtectedAuth>
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{ margin: "1rem" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "1.6rem",
            maxWidth: "fit-content",
            padding: "1.6rem 2.4rem",
            backgroundColor: "var(grey-50)",
            color: "var(grey-700)",
          },
        }}
      />
    </React.Fragment>
  );
}

export default App;
