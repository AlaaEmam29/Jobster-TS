import { matchPath } from "react-router";
import { useLocation } from "react-router";

const usePathPattern = (routes: string[]): string | undefined => {
  const { pathname } = useLocation();
  return routes.find((route) => matchPath(route, pathname));
};
export default usePathPattern;
