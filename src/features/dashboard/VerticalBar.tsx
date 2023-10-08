import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useDashboard } from "./useDashboard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export function VerticalBar() {
  const { monthlyApplications } = useDashboard();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };
  const labels = monthlyApplications.map((app: any) => app.date);

  const data = {
    labels,
    datasets: [
      {
        label: "Monthly Applications",
        data: monthlyApplications.map((app: any) => app.count),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
