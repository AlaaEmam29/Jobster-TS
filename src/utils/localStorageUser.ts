import { User } from "../features/user/types";

function setUser(user: User) {
  localStorage.setItem("user", JSON.stringify(user));
}
function getUser() {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
}
function removeUser() {
  localStorage.removeItem("user");
}
export { setUser, getUser, removeUser };
