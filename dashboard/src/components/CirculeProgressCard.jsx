import React from "react";
import {
  Box,
  CircularProgress,
  Paper,
  Typography,
  Button,
} from "@mui/material";

const CirculeProgressCard = () => (
  <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={75}
          size={180}
          thickness={7}
          sx={{
            color: "#5155C3",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            component="div"
            color="textSecondary"
            fontWeight="bold"
          >
            75%
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ m: 1, color: "#454545" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#5155C3",
          color: "#fff",
          borderRadius: "25px",
          paddingX: 3,
          paddingY: 1,
          textTransform: "none",
          marginTop: 2,
          width: "200px",
        }}
      >
        Subscribe
      </Button>
    </Box>
  </Paper>
);

export default CirculeProgressCard;
