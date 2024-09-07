import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
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
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'; // Import DateCalendar
import { LocalizationProvider } from '@mui/x-date-pickers'; // Import LocalizationProvider
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Import the date adapter

// Register the components you need
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
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'orange',
        tension: 0.1,
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: 'blue',
        tension: 0.1,
      },
    ],
  };

  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [33, 53, 85, 41, 44, 65, 60],
        backgroundColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Dataset 2',
        data: [33, 25, 35, 51, 54, 76, 69],
        backgroundColor: 'orange',
      },
      {
        label: 'Dataset 3',
        data: [33, 25, 35, 51, 54, 76, 69],
        backgroundColor: 'orange',
      },
    ],
  };

  const doughnutData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['red', 'blue', 'yellow'],
        hoverBackgroundColor: ['darkred', 'darkblue', 'darkyellow'],
      },
    ],
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}> {/* Wrap with LocalizationProvider */}
      <Box sx={{ flexGrow: 1, padding: '24px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: '16px' }}>
              <DateCalendar />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: '16px' }}>
              <Typography variant="h6">Line Chart</Typography>
              <Line data={lineChartData} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: '16px' }}>
              <Typography variant="h6">Bar Chart</Typography>
              <Bar data={barChartData} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: '16px' }}>
              <Typography variant="h6">Doughnut Chart</Typography>
              <Doughnut data={doughnutData} />
            </Paper>
          </Grid>
          {/* Add more grid items as needed for other sections */}
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

export default Dashboard;
