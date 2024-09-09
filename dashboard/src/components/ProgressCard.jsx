import React from "react";
import { Box, LinearProgress, Paper, Typography } from "@mui/material";

const ProgressCard = () => (
  <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
    <Box container alignItems="center" justifyContent="space-between">
      <Box item>
        <Typography variant="h5">Lorem Ipsum</Typography>
      </Box>
    </Box>
    <Box
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
    </Box>
  </Paper>
);

export default ProgressCard;
