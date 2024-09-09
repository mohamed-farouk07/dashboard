import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
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

const barChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Dataset 1",
      data: [33, 53, 85, 41, 44, 65, 60],
      backgroundColor: "#5155C3",
    },
    {
      label: "Dataset 2",
      data: [33, 25, 35, 51, 54, 76, 69],
      backgroundColor: "orange",
    },
  ],
};

const BarOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const BarChartCard = () => (
  <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
    <Box>
      <Typography variant="h6">Bar Chart</Typography>
      <Bar data={barChartData} options={BarOptions} />
    </Box>
  </Paper>
);

export default BarChartCard;
