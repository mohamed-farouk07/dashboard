import React from "react";
import { Box, MenuItem, Paper, Select, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
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

const doughnutData = {
  labels: ["Data1", "Data2"],
  datasets: [
    {
      data: [30, 70],
      backgroundColor: ["orange", "#5155C3"],
      hoverBackgroundColor: ["darkorange", "#5155C3"],
    },
  ],
};

const doughnutOptions = {
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
    tooltip: {
      enabled: true,
    },
  },
  cutout: "70%",
  responsive: true,
  maintainAspectRatio: false,
};

const centerTextPlugin = {
  id: "centerTextPlugin",
  afterDraw(chart) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;
    ctx.save();
    const text = "70% / 30%";
    ctx.font = "bold 24px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, width / 2, height / 2);
    ctx.restore();
  },
};

const DoughnutChartCard = () => (
  <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
    <Box container alignItems="center" justifyContent="space-between">
      <Box item>
        <Typography variant="h6">Doughnut Chart</Typography>
      </Box>
      <Box item>
        <Select
          defaultValue="Option 1"
          sx={{
            border: "1px solid #5155C3",
            borderRadius: "20px",
            padding: "4px 12px",
            fontSize: "0.875rem",
            height: "32px",
          }}
        >
          <MenuItem value="Option 1">Option 1</MenuItem>
          <MenuItem value="Option 2">Option 2</MenuItem>
          <MenuItem value="Option 3">Option 3</MenuItem>
        </Select>
      </Box>
    </Box>
    <Box sx={{ height: "250px" }}>
      <Doughnut
        data={doughnutData}
        options={doughnutOptions}
        plugins={[centerTextPlugin]}
      />
    </Box>
  </Paper>
);

export default DoughnutChartCard;
