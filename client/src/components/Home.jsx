import React from 'react'
import NavBar from './NavBar';
import moment from 'moment';
import Grid from '@mui/material/Grid';

const Home = () => {
    const currentTime = moment().format('LLL');
const TounomentTime = moment("January 13, 2023 3:00 PM")
  return (
    <div className='home-bg'>
    <NavBar />
    <Grid sx={{ flexGrow: 1 , height: '80%'}} container spacing={2}>
    <Grid item md={6} xs={12} sx={{justifyContent:'center', placeSelf:'center'}}> 
    <h1> to HxH</h1>
    <h1>Valorant Tournoment</h1>
    
    </Grid>
    <Grid item md={6} xs={12} sx={{justifyContent:'center', placeSelf:'center'}}> 
    <h1>{TounomentTime.diff(currentTime,'hour')} Hrs Left</h1>
    
    </Grid>
    </Grid>
    </div>
  )
}

export default Home