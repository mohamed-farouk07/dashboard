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
  TextField,
  InputAdornment,
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
import SearchIcon from "@mui/icons-material/Search";

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
        borderColor: "#5155C3",
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
        backgroundColor: "#5155C3",
      },
      {
        label: "Dataset 2",
        data: [33, 25, 35, 51, 54, 76, 69],
        backgroundColor: "orange",
      },
    ],
  };

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
    cutout: "70%", // Creates the doughnut effect
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

  const BarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

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

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ flexGrow: 1, padding: "24px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
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
                      padding: "4px 12px",
                      fontSize: "0.875rem",
                      height: "32px",
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

          <Grid item xs={12} md={6} lg={3}>
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

          <Grid item xs={12} md={6} lg={3}>
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

          <Grid item xs={12} md={6} lg={3}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search..."
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      bgcolor: "#5155C3",
                      borderRadius: "60%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <SearchIcon sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 3,
                backgroundColor: "#fff",
                border: "1px solid transparent",
                borderRadius: "20px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                  borderColor: "#5155C3",
                },
              }}
            />
            <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
              <Typography variant="h6">Wavey Chart</Typography>
              <Line data={wavyLineChartData} options={wavyLineChartOptions} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
              <Typography variant="h6">Line Chart</Typography>
              <Line data={lineChartData} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
              <Typography variant="h6">Horizontal Bar Chart</Typography>
              <Bar data={horizontalBarData} options={horizontalBarOptions} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
              <Typography variant="h6">Bar Chart</Typography>
              <Bar data={barChartData} options={BarOptions} />
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
                  <Typography variant="h6">Doughnut Chart</Typography>
                </Grid>
                <Grid item>
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
                </Grid>
              </Grid>
              <Box sx={{ height: "250px" }}>
                <Doughnut
                  data={doughnutData}
                  options={doughnutOptions}
                  plugins={[centerTextPlugin]}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

export default Dashboard;
