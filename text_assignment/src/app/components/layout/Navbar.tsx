// // import React from 'react'
// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "../shared/Button";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Wrapper from "../shared/Wrapper";

// const Navbar = () => {
//   return (
//     <header className="sticky top-0 z-10  bg-white">
//       <Wrapper>
//     <AppBar sx={{ backgroundColor: "white" }}>
//       {/* <Container maxWidth="lg"> */}
//       <Toolbar>
//         <Typography flexGrow={1} variant="h6">
//           <span className="bg-[#7B5AFF]">Logo</span>
//         </Typography>
//         <Button
//           variant="contained"
//           className="rounded-full"
//           sx={{ backgroundColor: "#7B5AFF" }}
//         >
//           Facebook
//         </Button>
//         <IconButton>
//           <NotificationsNoneIcon />
//         </IconButton>
//         <IconButton>
//           <ErrorOutlineIcon />
//         </IconButton>
//         <Avatar alt="th" src="/images/img.png" />
//         <IconButton>
//           <ExpandMoreIcon />
//         </IconButton>
//       </Toolbar>
//       {/* </Container> */}
//     </AppBar>
//     </Wrapper>
//     </header>
//   );
// };

// export default Navbar;

import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10  bg-white shadow-sm">
    <Wrapper>
    <div className="flex justify-between 
     py-4  items-center   ">
        {/* <div className="text-xl font-bold">Panaverse dao</div> */} 
    {/* <Image src={'/logo.png'} alt="panaverse dao" height={100} width={100}/> */}
      
   
            {/* <div className='static md:hidden text-3xl'><BiAlignLeft /></div> */}
            <Typography flexGrow={1} variant="h6">
           <span className="bg-[#7B5AFF]">Logo</span>
        </Typography>
            <Button text={"Facebook"}/>
          
            
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
    </div>
    
    </Wrapper>
    </header>
  )
}

export default Navbar