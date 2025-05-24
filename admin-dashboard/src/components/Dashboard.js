import { useEffect, useState } from "react";
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

const Dashboard = ({ darkMode }) => {
  const [metrics, setMetrics] = useState({
    totalWaste: "1,750 kg",
    requests: "23",
    users: "1,245",
  });
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "E-Waste Collected (kg)",
        data: [200, 350, 400, 300, 500],
        borderColor: "#17a2b8",
        backgroundColor: "rgba(23, 162, 184, 0.2)",
        fill: true,
      },
    ],
  });

  useEffect(() => {
    fetch("https://mockapi.example.com/metrics")
      .then((res) => res.json())
      .then((data) => setMetrics(data))
      .catch((err) => console.error("Error fetching metrics:", err));

    fetch("https://mockapi.example.com/chart-data")
      .then((res) => res.json())
      .then((data) =>
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: "E-Waste Collected (kg)",
              data: data.values,
              borderColor: "#17a2b8",
              backgroundColor: "rgba(23, 162, 184, 0.2)",
              fill: true,
            },
          ],
        })
      )
      .catch((err) => console.error("Error fetching chart data:", err));
  }, []);

  return (
    <div>
      <h2 className="h4 fw-bold mb-4 text-info">Dashboard Overview</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
        <div className="col">
          <MetricsCard
            title="Total E-Waste Collected"
            value={metrics.totalWaste}
            icon={<FaRecycle />}
            darkMode={darkMode}
          />
        </div>
        <div className="col">
          <MetricsCard
            title="Active Collection Requests"
            value={metrics.requests}
            icon={<FaTruck />}
            darkMode={darkMode}
          />
        </div>
        <div className="col">
          <MetricsCard
            title="Registered Users"
            value={metrics.users}
            icon={<FaUsers />}
            darkMode={darkMode}
          />
        </div>
      </div>
      <div className={`card shadow-sm border-0 p-4 ${darkMode ? "card-dark-mode" : ""}`}>
        <h3 className="h5 fw-semibold mb-3 text-info">E-Waste Collection Trend</h3>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;