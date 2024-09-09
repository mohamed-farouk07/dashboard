import React from "react";
import { Paper } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend);

const wavyLineChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 40, 15, 25, 18, 40, 10],
      borderColor: "rgba(255, 165, 0, 1)",
      backgroundColor: "rgba(255, 165, 0, 0.2)",
      borderWidth: 2,
      tension: 0.7,
      fill: true,
    },
    {
      label: "Dataset 2",
      data: [10, 20, 15, 30, 25, 40, 35],
      borderColor: "rgba(0, 123, 255, 1)",
      backgroundColor: "rgba(0, 123, 255, 0.2)",
      borderWidth: 2,
      tension: 0.7,
      fill: true,
    },
  ],
};

const wavyLineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const WaveyChartCard = () => (
  <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
    <Line data={wavyLineChartData} options={wavyLineChartOptions} />
  </Paper>
);

export default WaveyChartCard;
