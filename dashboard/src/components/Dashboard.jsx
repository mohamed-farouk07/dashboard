import React from "react";
import {
  Box,
  Divider,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
  LinearProgress,
} from "@mui/material";
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
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";

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
        borderColor: "blue",
        tension: 0.1,
      },
    ],
  };

  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Dataset 1",
        data: [33, 53, 85, 41, 44, 65, 60],
        backgroundColor: "rgba(75,192,192,1)",
      },
      {
        label: "Dataset 2",
        data: [33, 25, 35, 51, 54, 76, 69],
        backgroundColor: "orange",
      },
      {
        label: "Dataset 3",
        data: [33, 25, 35, 51, 54, 76, 69],
        backgroundColor: "orange",
      },
    ],
  };

  const doughnutData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["red", "blue", "yellow"],
        hoverBackgroundColor: ["darkred", "darkblue", "darkyellow"],
      },
    ],
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ flexGrow: 1, padding: "24px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Typography variant="h5">Lorem Ipsum</Typography>
                </Grid>
                <Grid item>
                  <Select
                    defaultValue="Option 1"
                    sx={{
                      border: "1px solid #5155C3",
                      borderRadius: "20px",
                      padding: "4px 12px", // Reduce padding to make the select smaller
                      fontSize: "0.875rem", // Adjust font size
                      height: "32px", // Adjust height
                    }}
                  >
                    <MenuItem value="Option 1">Option 1</MenuItem>
                    <MenuItem value="Option 2">Option 2</MenuItem>
                    <MenuItem value="Option 3">Option 3</MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                sx={{ marginTop: 2 }}
              >
                <NorthIcon sx={{ color: "#5155C3", fontSize: "50px" }} />
                <Typography variant="h4" sx={{ mx: 1 }}>
                  1974
                </Typography>
                <Typography variant="body2" sx={{ mx: 1, color: "#454545" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </Typography>
                <Divider sx={{ width: "100%", my: 2 }} />
                <SouthIcon sx={{ color: "orange", fontSize: "50px" }} />
                <Typography variant="h4" sx={{ mx: 1 }}>
                  287
                </Typography>
                <Typography variant="body2" sx={{ mx: 1, color: "#454545" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </Typography>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
              <DateCalendar
                sx={{
                  "& .Mui-selected": {
                    backgroundColor: "orange",
                  },
                  "& .Mui-selected:hover": {
                    backgroundColor: "orange",
                  },
                  "& .Mui-selected:focus": {
                    backgroundColor: "orange",
                  },
                  "& .MuiPickersDay-root.Mui-selected": {
                    backgroundColor: "orange",
                  },
                  "& .MuiPickersDay-root.Mui-selected:hover": {
                    backgroundColor: "orange",
                  },
                  "& .MuiPickersDay-root.Mui-selected:focus": {
                    backgroundColor: "orange",
                  },
                }}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Typography variant="h5">Lorem Ipsum</Typography>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                justifyContent="start"
                sx={{ marginTop: 2 }}
              >
                <Box sx={{ width: "100%", mb: 2 }}>
                  <LinearProgress
                    sx={{
                      height: "15px",
                      borderRadius: "5px",
                      border: "1px solid #5155C3",
                      background: "#ffff",
                      "& .MuiLinearProgress-bar": {
                        background: "linear-gradient(to right, #ffff, #5155C3)",
                      },
                    }}
                    variant="determinate"
                    value={70}
                  />
                  <Typography variant="body2" sx={{ mt: 1, color: "#454545" }}>
                    Progress 70%
                  </Typography>
                </Box>
                <Box sx={{ width: "100%", mb: 2 }}>
                  <LinearProgress
                    sx={{
                      height: "15px",
                      borderRadius: "5px",
                      border: "1px solid orange",
                      background: "#ffff",
                      "& .MuiLinearProgress-bar": {
                        background: "linear-gradient(to right, #ffff, orange)",
                      },
                    }}
                    variant="determinate"
                    value={95}
                  />
                  <Typography variant="body2" sx={{ mt: 1, color: "#454545" }}>
                    Progress 95%
                  </Typography>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <LinearProgress
                    sx={{
                      height: "15px",
                      borderRadius: "5px",
                      border: "1px solid #5155C3",
                      background: "#ffff",
                      "& .MuiLinearProgress-bar": {
                        background: "linear-gradient(to right, #ffff, #5155C3)",
                      },
                    }}
                    variant="determinate"
                    value={30}
                  />
                  <Typography variant="body2" sx={{ mt: 1, color: "#454545" }}>
                    Progress 30%
                  </Typography>
                </Box>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
              <Typography variant="h6">Line Chart</Typography>
              <Line data={lineChartData} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
              <Typography variant="h6">Bar Chart</Typography>
              <Bar data={barChartData} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
              <Typography variant="h6">Doughnut Chart</Typography>
              <Doughnut data={doughnutData} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

export default Dashboard;
