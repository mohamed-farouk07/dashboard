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

const horizontalBarData = {
  labels: ["Data1", "Data2", "Data3", "Data4", "Data5"],
  datasets: [
    {
      label: "Dataset 1",
      data: [12, 19, 3, 5, 2],
      backgroundColor: "#5155C3",
    },
    {
      label: "Dataset 2",
      data: [2, 3, 20, 5, 1],
      backgroundColor: "#b3b5e5",
    },
  ],
};

const horizontalBarOptions = {
  indexAxis: "y",
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const HorizontalBarCard = () => (
  <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
    <Box>
      <Typography variant="h6">Horizontal Bar Chart</Typography>
      <Bar data={horizontalBarData} options={horizontalBarOptions} />
    </Box>
  </Paper>
);

export default HorizontalBarCard;
