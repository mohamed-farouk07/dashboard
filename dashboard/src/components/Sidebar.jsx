import React, { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Divider,
  Avatar,
} from "@mui/material";
import {
  HomeOutlined,
  StarBorderOutlined,
  SettingsOutlined,
  Forum as ForumIcon,
  Home as HomeIcon,
  Star as StarIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
  Logout as LogoutIcon, // Import the Logout icon
  ForumOutlined,
} from "@mui/icons-material";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        width: 250,
        height: "auto",
        backgroundColor: "#5155C3",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px 0",
        borderTopLeftRadius: "40px",
        borderBottomLeftRadius: "40px",
      }}
    >
      <Avatar
        sx={{ my: 5, textAlign: "center", bgcolor: "#fff", color: "orange" }}
      />
      <Divider sx={{ width: "80%" }} />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "auto",
          width: '100%',
        }}
      >
        <ListItemButton
          onClick={() => handleListItemClick(0)}
          selected={selectedIndex === 0}
          sx={{
            justifyContent: "center",
            mb: "15px",
            width: '100%',
            "&:hover": {
              backgroundColor: "#3F44B5",
            },
            "&.Mui-selected": {
              backgroundColor: "#3F44B5",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: selectedIndex === 0 ? "#fff" : "#E5E5E5",
              minWidth: "auto",
              "& .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            }}
          >
            {selectedIndex === 0 ? <HomeIcon /> : <HomeOutlined />}
          </ListItemIcon>
        </ListItemButton>
        
        <ListItemButton
          onClick={() => handleListItemClick(1)}
          selected={selectedIndex === 1}
          sx={{
            justifyContent: "center",
            mb: "15px",
            width: '100%',
            "&:hover": {
              backgroundColor: "#3F44B5",
            },
            "&.Mui-selected": {
              backgroundColor: "#3F44B5",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: selectedIndex === 1 ? "#fff" : "#E5E5E5",
              minWidth: "auto",
              "& .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            }}
          >
            {selectedIndex === 1 ? <ForumIcon /> : <ForumOutlined />}
          </ListItemIcon>
        </ListItemButton>
        
        <ListItemButton
          onClick={() => handleListItemClick(2)}
          selected={selectedIndex === 2}
          sx={{
            justifyContent: "center",
            mb: "15px",
            width: '100%',
            "&:hover": {
              backgroundColor: "#3F44B5",
            },
            "&.Mui-selected": {
              backgroundColor: "#3F44B5",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: selectedIndex === 2 ? "#fff" : "#E5E5E5",
              minWidth: "auto",
              "& .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            }}
          >
            {selectedIndex === 2 ? <SettingsIcon /> : <SettingsOutlined />}
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton
          onClick={() => handleListItemClick(3)}
          selected={selectedIndex === 3}
          sx={{
            justifyContent: "center",
            mb: "15px",
            width: '100%',
            "&:hover": {
              backgroundColor: "#3F44B5",
            },
            "&.Mui-selected": {
              backgroundColor: "#3F44B5",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: selectedIndex === 3 ? "#fff" : "#E5E5E5",
              minWidth: "auto",
              "& .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            }}
          >
            {selectedIndex === 3 ? <StarIcon /> : <StarBorderOutlined />}
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton
          onClick={() => handleListItemClick(4)}
          selected={selectedIndex === 4}
          sx={{
            justifyContent: "center",
            mb: "15px",
            width: '100%',
            "&:hover": {
              backgroundColor: "#3F44B5",
            },
            "&.Mui-selected": {
              backgroundColor: "#3F44B5",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: selectedIndex === 4 ? "#fff" : "#E5E5E5",
              minWidth: "auto",
              "& .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            }}
          >
            {selectedIndex === 4 ? <MenuIcon /> : <MenuIcon />}
          </ListItemIcon>
        </ListItemButton>
      </List>
      
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: '100%',
          paddingBottom: '16px',
        }}
      >
        <ListItemButton
          onClick={() => handleListItemClick(5)}
          sx={{
            justifyContent: "center",
            width: '100%',
            "&:hover": {
              backgroundColor: "#3F44B5",
            },
            "&.Mui-selected": {
              backgroundColor: "#3F44B5",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: "#E5E5E5",
              minWidth: "auto",
              "& .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            }}
          >
            <LogoutIcon />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
