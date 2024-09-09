import React from "react";
import { Paper } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const CalendarCard = () => (
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
);

export default CalendarCard;
