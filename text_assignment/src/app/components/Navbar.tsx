// import React from 'react'
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { BubbleChart } from "@mui/icons-material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { deepOrange } from "@mui/material/colors";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{backgroundColor:'white',Width:'15px'}}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
          flexGrow={1}
            variant="h6"
            
            
            sx={{
              
              
              mr: 2,
              display: { xs: "none", md: "flex" },
             
            }}
          >
           <span className="bg-[#7B5AFF]">Logo</span>
            
          </Typography>
          <Button  variant = 'contained' className="rounded-full" sx={{backgroundColor:'#7B5AFF'}}>Facebook</Button>
        <IconButton><NotificationsNoneIcon/></IconButton>
        <IconButton><ErrorOutlineIcon/></IconButton>
        <Avatar alt="" src="./images/img.png" />
        
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
