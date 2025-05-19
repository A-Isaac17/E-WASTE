import { FaRecycle, FaTruck, FaUsers } from "react-icons/fa";
import MetricsCard from "./MetricsCard";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "E-Waste Collected (kg)",
        data: [200, 350, 400, 300, 500],
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <MetricsCard
          title="Total E-Waste Collected"
          value="1,750 kg"
          icon={<FaRecycle />}
        />
        <MetricsCard
          title="Active Collection Requests"
          value="23"
          icon={<FaTruck />}
        />
        <MetricsCard
          title="Registered Users"
          value="1,245"
          icon={<FaUsers />}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">E-Waste Collection Trend</h3>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
