import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => (
  <Box>
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
  </Box>
);

export default SearchBar;
