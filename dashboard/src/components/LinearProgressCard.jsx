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
          background: "#fff",
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
          width: "30%",
          backgroundColor: "#ff6f61",
        }}
      />
      <Box
        sx={{
          height: "100%",
          borderRadius: "5px",
          position: "absolute",
          top: 0,
          left: "30%",
          width: "30%",
          backgroundColor: "#5155C3",
        }}
      />
    </Box>
  </Paper>
);

export default LinearProgressCard;
