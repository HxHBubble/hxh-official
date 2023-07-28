import React from 'react'
import NavBar from './NavBar';
import Grid from '@mui/material/Grid';

const TeamDetails = () => {
  return (
    <div className='teamdetails-bg'>
    <NavBar />
    <Grid sx={{ flexGrow: 1 ,margin:'2%', height: '80%', width:'95%'}} container spacing={2}>
    <Grid item md={3} xs={12} sx={{justifyContent:'center'}}> 
    <h1>Team Details</h1>
    
    
    </Grid>
    <Grid item md={9} xs={12} sx={{justifyContent:'center'  }}> 
    <h1>Pics Vedios Etc.</h1>
    
    </Grid>
    </Grid>
    </div>
  )
}

export default TeamDetails