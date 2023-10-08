import React from "react";
import { Navigate } from "react-router";
import { selectUser } from "../features/user/userSlice";
import { useAppSelector } from "../hooks/hooks";
import { getUser } from "../utils/localStorageUser";

export default function ProtectRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const userLocalStorage = getUser();
  const { user: userRedux } = useAppSelector(selectUser);
  const isAuthenticated = userRedux?.email || userLocalStorage?.email;
  if (!isAuthenticated) {
    return <Navigate to="/landing" replace />;
  }
  if (isAuthenticated) {
    return children;
  }
}
