import React, {FC} from 'react';
import { Box, Grid, List, ListItem, Typography, Stack, IconButton, InputBase, Button, TextField } from "@mui/material"
import {Facebook} from "@mui/icons-material"

const Footer: FC = () => {
  return (
    <Box sx={{width:"100%", bgcolor:"#fffff", pt:3}}>
    <Box sx={{p:3}}>
    <Grid container spacing={1.5}>
    <Grid item xs={10} sm={3} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <img src={"/assets/4.jpg"} style={{height:"45px", width:"65px"}} />
    </Grid>
    <Grid item xs={10} sm={3}>
    <List>
    <ListItem>
    আমাদের সম্পর্কে

    </ListItem>
    <ListItem>

নীতিমালা

    </ListItem>
    <ListItem>
   
যোগাযোগ
    </ListItem>
    </List>
    </Grid>
    <Grid item xs={12} sm={3}>
    <Stack direction="column">
    <Typography>সোশ্যাল নেটওয়ার্ক</Typography>
    <Stack direction="row" spacing={1} >
    <IconButton color="primary">
    <Facebook />
    </IconButton>
    <IconButton color="error">
    <Facebook />
    </IconButton>
    <IconButton>
    <Facebook />
    </IconButton>
    </Stack>
    </Stack>
    </Grid>
    
    <Grid item xs={12} sm={3}>
    <Stack spacing={1}>
   <TextField label="সাবস্ক্রাইব করুন" type="email" placeholder="Enter your email here..." />
   <Button>সাবস্ক্রাইব</Button>
    </Stack>
    </Grid>
    </Grid>
    </Box>
    <Box sx={{py:1,px:3, display:"flex", justifyContent:"space-between" , alignItems:"center", bgcolor:"text.light"}}>
    <Typography variant="caption">© স্বত্ব সঞ্চারণ ২০১৪-২০১৮</Typography>
    <Typography variant="caption">সাইট ডেভেলপমেণ্ট - Syed Mahbub</Typography>
    </Box>
    </Box>
  );
};

export default Footer;
