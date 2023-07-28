import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

const PlayerInfo = ({TeamName, TotalWins}) => {
  return (
    <Box className="player-info" sx={{width:'250px',margin:'auto'}}>
        <Avatar sx={{width:'100px', height:"100px", marginInline:'auto',margin: '5% auto', padding: '2% 2%', border: '5px white solid', boxSizing: 'border-box', borderRadius: '70px'}}/>
        <Typography variant='h2' component='h3' sx={{fontSize:'1.25rem'}}>{TeamName}</Typography>
        <Typography variant='h2' component='h3' sx={{fontSize:'1.25rem'}}>{TotalWins}</Typography>

    </Box>
  )
}

export default PlayerInfo