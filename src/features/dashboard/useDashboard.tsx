import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectDashboard } from "./dashboardSlice";
import { getAllStats as getAllStatsThunk } from "./dashboardThunk";

function useDashboard() {
  const { monthlyApplications, stats } = useAppSelector(selectDashboard);
  const dispatch = useAppDispatch();
  const getAllStats = () => {
    dispatch(getAllStatsThunk());
  };

  return { monthlyApplications, stats, getAllStats };
}
export { useDashboard };
