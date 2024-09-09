import React from "react";
import { Box, Grid } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import SummaryCard from "./SummaryCard";
import CalendarCard from "./CalendarCard";
import ProgressCard from "./ProgressCard";
import SearchBar from "./SearchBar";
import WaveyChartCard from "./WaveyChartCard";
import CirculeProgressCard from "./CirculeProgressCard";
import WaveyChartWithoutDotsCard from "./WaveyChartWithoutDotsCard";
import LineChartCard from "./LineChartCard";
import HorizontalBarCard from "./HorizontalBarCard";
import BarChartCard from "./BarChartCard";
import LinearProgressCard from "./LinearProgressCard";
import DoughnutChartCard from "./DoughnutChartCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ flexGrow: 1, padding: "24px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <SummaryCard />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <CalendarCard />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <ProgressCard />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <SearchBar />
            <WaveyChartWithoutDotsCard />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <WaveyChartCard />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <CirculeProgressCard />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <LinearProgressCard />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <HorizontalBarCard />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <LineChartCard />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <BarChartCard />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <DoughnutChartCard />
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

export default Dashboard;
