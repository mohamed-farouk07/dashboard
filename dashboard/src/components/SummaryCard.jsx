import React from "react";
import {
  Divider,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";

const SummaryCard = () => (
  <Paper sx={{ padding: "16px", borderRadius: "25px" }}>
    <Grid container alignItems="center" justifyContent="space-between">
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </Typography>
      <Divider sx={{ width: "100%", my: 2 }} />
      <SouthIcon sx={{ color: "orange", fontSize: "50px" }} />
      <Typography variant="h4" sx={{ mx: 1 }}>
        287
      </Typography>
      <Typography variant="body2" sx={{ mx: 1, color: "#454545" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </Typography>
    </Grid>
  </Paper>
);

export default SummaryCard;
