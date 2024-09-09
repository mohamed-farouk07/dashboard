import React from "react";
import { Box, LinearProgress, Paper, Typography } from "@mui/material"

const LinearProgressCard = () => (
  <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
    <Typography variant="h6">Horizontal Bar Chart</Typography>
    <Box sx={{ position: "relative", height: "15px" }}>
      <LinearProgress
        sx={{
          height: "15px",
          borderRadius: "5px",
          background: "#fff", // Background color of the track
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
        variant="determinate"
        value={100}
      />
      <Box
        sx={{
          height: "100%",
          borderRadius: "5px",
          position: "absolute",
          top: 0,
          left: 0,
          width: "30%", // Adjust this width as needed
          backgroundColor: "#ff6f61", // First color segment
        }}
      />
      <Box
        sx={{
          height: "100%",
          borderRadius: "5px",
          position: "absolute",
          top: 0,
          left: "30%", // Adjust this position as needed
          width: "30%", // Adjust this width as needed
          backgroundColor: "#5155C3", // Second color segment
        }}
      />
      {/* Add more segments as needed */}
    </Box>
  </Paper>
);

export default LinearProgressCard;
