import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Dashboard />
    </Box>
  );
}

export default App;
