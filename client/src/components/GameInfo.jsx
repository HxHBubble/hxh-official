import React from 'react'
import valoimg from '../static/valorant.svg'
import frtnitimg from '../static/fortnite.svg'
import overwatch from '../static/overwatch.svg'
import csgo from '../static/csgo.svg'
import rleauge from '../static/rleauge.svg'
import { Box } from '@mui/material'

const GameInfo = () => {
  return (
    <Box className='image-games' sx={{ display: 'flex', margin: { md: '0% 0%', lg: '5% 15%' } }}>
      <Box className="image-games" sx={{ margin: { md: '2% ', lg: '5%' } }} >
        <img src={valoimg} alt="valo" />
        <h1 style={{ textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF' }}>Valorant</h1>
      </Box>

      <Box className="image-games" sx={{ margin: { md: '2% ', lg: '5%' } }}>  <img src={frtnitimg} alt="Fortnight" /><h1 style={{ textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF' }}>Fortnite</h1></Box>
      <Box className="image-games" sx={{ margin: { md: '2% ', lg: '5%' } }}> <img src={overwatch} alt="OverWatch" /><h1 style={{ textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF' }}>Overwatch</h1></Box>
      <Box className="image-games" sx={{ margin: { md: '2% ', lg: '5%' } }}>   <img src={csgo} alt="CS:GO" /><h1 style={{ textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF' }}>CS GO</h1></Box>
      <Box className="image-games" sx={{ margin: { md: '2% ', lg: '5%' } }}>  <img src={rleauge} alt="Rocket Leauge" /><h1 style={{ textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF' }}>Rocket Leauge</h1></Box>

    </Box>
  )
}

export default GameInfo