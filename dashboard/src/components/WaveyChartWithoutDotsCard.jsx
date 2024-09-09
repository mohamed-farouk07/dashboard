import React from "react";
import { Box, Paper, Typography } from "@mui/material";
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

const wavyLineChartNoDotsOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true, // Hide the legend if you don't need it
      position: "bottom",
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          return tooltipItem.raw; // Customize tooltip content if needed
        },
      },
    },
  },
  elements: {
    line: {
      borderColor: "#5155C3", // Line color
      borderWidth: 2, // Line width
      tension: 0.4, // Adjust the line curve
    },
    point: {
      radius: 0, // Set radius to 0 to hide dots
      hitRadius: 0, // Optional: Set to 0 to prevent interactions with points
    },
  },
  scales: {
    x: {
      grid: {
        display: true, // Hide grid lines if needed
      },
    },
    y: {
      grid: {
        display: true, // Hide grid lines if needed
      },
    },
  },
};

const WaveyChartWithoutDotsCard = () => (
  <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
    <Box>
      <Typography variant="h6">Wavey Chart No Dots</Typography>
      <Line data={wavyLineChartData} options={wavyLineChartNoDotsOptions} />
      <Line data={wavyLineChartData} options={wavyLineChartNoDotsOptions} />
    </Box>
  </Paper>
);

export default WaveyChartWithoutDotsCard;
