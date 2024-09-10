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
      display: true,
      position: "bottom",
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          return tooltipItem.raw;
        },
      },
    },
  },
  elements: {
    line: {
      borderColor: "#5155C3",
      borderWidth: 2,
      tension: 0.4,
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
      },
    },
    y: {
      grid: {
        display: true,
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
