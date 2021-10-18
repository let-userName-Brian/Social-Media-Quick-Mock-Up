import { Typography, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import image from "./image.png"


export default function About() {
  
    return (
      <Box sx={{ p: 4, width: "100vw",height: "100vh", backgroundImage:`url(${image})`, }}> 
        <Typography variant="h3" color="white">About</Typography>
        <Paper elevation={5} sx={{ p: 4, m: 4, width: '70vw'}}>
          <Typography variant='body1' justifyContent='center'>
            The most popular social networking site, which allows anyone to share photos, comments and videos online. 
            Founded in 2021 by Brian, the site is free to members and derives its revenue from ads. The RandomApp name 
            came from the paper document with names and faces issued to college freshmen to help them get acquainted 
            with each other. Using the built-in search, members can locate other Facebook members and "friend" them by 
            sending them an invitation, or they can invite people to join Facebook (see Faceslam). Facebook offers instant 
            messaging and photo sharing, and Facebook's email is the only messaging system many students ever use!
            </Typography>
          </Paper>
      </Box>
    )
  }
  