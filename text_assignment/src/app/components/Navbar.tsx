// import React from 'react'
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "white" }}>
      {/* <Container maxWidth="lg"> */}
      <Toolbar>
        <Typography flexGrow={1} variant="h6">
          <span className="bg-[#7B5AFF]">Logo</span>
        </Typography>
        <Button
          variant="contained"
          className="rounded-full"
          sx={{ backgroundColor: "#7B5AFF" }}
        >
          Facebook
        </Button>
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>
        <IconButton>
          <ErrorOutlineIcon />
        </IconButton>
        <Avatar alt="th" src="/images/img.png" />
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
};

export default Navbar;
