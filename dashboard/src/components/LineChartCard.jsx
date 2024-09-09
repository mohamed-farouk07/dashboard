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

const lineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "orange",
      tension: 0.1,
    },
    {
      label: "Dataset 2",
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      borderColor: "#5155C3",
      tension: 0.1,
    },
  ],
};

const LineChartCard = () => (
  <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
    <Box>
      <Typography variant="h6">Line Chart</Typography>
      <Line data={lineChartData} />
    </Box>
  </Paper>
);

export default LineChartCard;
