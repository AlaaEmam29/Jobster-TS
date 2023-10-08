import React from "react";
import usePathPattern from "../hooks/usePathPattern";
import { useAppSelector } from "../hooks/hooks";
import { getUser } from "../utils/localStorageUser";
import { selectUser } from "../features/user/userSlice";
import { Navigate } from "react-router";
const routes: [string, string] = ["/login", "/register"];

export default function ProtectedAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAlreadyAuth = usePathPattern(routes);
  const userLocalStorage = getUser();
  const { user: userRedux } = useAppSelector(selectUser);
  const isAuthenticated = userRedux?.email || userLocalStorage?.email;
  if (isAlreadyAuth && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}
