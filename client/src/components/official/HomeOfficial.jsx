import React, { useState, useEffect } from 'react'
import './HomeOfficial.css'
import myVideo from '../../static/vedio-bg.m4v'
import { Box, Button, Grid, Tooltip, Typography, Paper } from '@mui/material'
import NavLinks from './NavLinks'
import SocialLinks from './SocialLinks'
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from 'react-router-dom';

import youtube from '../../static/icons/youtube.svg'
import instagram from '../../static/icons/instagram.svg'
import discord from '../../static/icons/discord.svg'
import tournament from '../../static/notify/Tournament.jpg'
import GameInfo from '../GameInfo'
import PlayerInfo from '../PlayerInfo'
import logo from '../../static/cursor.png'

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Wobble from 'react-reveal/Wobble';


const HomeOfficial = () => {

  const [display, setDisplay] = useState(false);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 500) {
      return setDisplay(false)
    } else if (window.scrollY > 500) {
      return setDisplay(true)
    }
  }

  useEffect(() => {


    window.addEventListener('scroll', listenScrollEvent);
  
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    
    }
  }, []);


  const navigate = useNavigate();

  return (
    <Box className='official-main'>

      <video src={myVideo} autoPlay loop muted />
      
      <NavLinks />
      <Box className='first-content' id='Home'>
        <Fade>
          <h1 style={{ marginTop: '10%', textShadow: '1px 1px 2px black, 0 0 1em yellow, 0 0 0.2em gold' }}>Welcome to HxH Offcial</h1>
        </Fade>
        <Flip bottom>
          <Box sx={{ display: { sm: 'flex', xs: 'block' }, margin: { lg: '20% auto', md: '15% auto', xs: '25% 25%' } }}>
            <SocialLinks Social={youtube} Title="Youtube" Data1="HxH" Linkto="https://www.youtube.com/channel/UCxhxdLLMzk5BR5OpdQSIX5g" />
            <SocialLinks Social={instagram} Title="Instagram" Data1="TeamHxH" Linkto="https://www.instagram.com/teamhxh_/" />
            <SocialLinks Social={discord} Title="Discord" Data1="HxHOfficial" Linkto="https://discord.com/invite/9pSsnmRppx" />
          </Box>
        </Flip>
        <Tooltip title="Start Browsing">
          <IconButton aria-label="Start Browsing" size="large" onClick={() => {
            // window.scrollTo({
            //     top: 800, 
            //     behavior: 'smooth'
            //     /* you can also use 'auto' behaviour
            //        in place of 'smooth' */
            //   });
            const element = document.getElementById('annouance');
            if (element) {
              // 👇 Will scroll smoothly to the top of the next section
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }} sx={{
            color: 'white', position: 'absolute', bottom: '3%', "&:hover": {
              border: "1px solid #FFF",
              color: 'white',
              backgroundColor: 'transparent',
            },
          }}>
            <ExpandMoreIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
      <Box id='annouance' sx={{ width: '100%', height: { lg: '100vh', md: 'auto' } }}>
        <Typography variant="h1" component="h1" sx={{ fontWeight: '700', paddingTop: '1%' }}>      Grand Valorant Championship Tournament</Typography>
        <p style={{ WebkitWritingMode: 'vertical-lr', position: 'absolute', height: 'max-content', textShadow: '1px 1px 2px black, 0 0 1em yellow, 0 0 0.2em gold', color: 'white' }}>Sponser by <b>RyUk</b> &emsp;&emsp;&emsp;  Organized by Team HxH</p>
        <Grid container spacing={2} sx={{ marginTop: '3%' }}>
          <Grid item md={6} xs={12}>
            <img className='banner' src={tournament} alt='Notification Details' />
          </Grid>
          <Grid item md={6} xs={12}>
            <Wobble>  <Typography variant="h1" component="h3" sx={{ color: 'gold', fontSize: '2.25rem', margin: '3%', animation: 'blinker 1s step-start infinite', textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF' }}>Register Here</Typography></Wobble>
            <Button variant="outlined" sx={{ borderColor: 'gold', color: 'gold', animation: 'glowbox 2s ease-in-out infinite', transition: '0.5s', '&:hover': { transform: 'scale(1.5)', transition: '0.6s', boxShadow: '1px 1px 2px black, 0 0 1em yellow, 0 0 0.2em gold' } }} onClick={() => { navigate('/newteamregistration', { replace: true }); }}>Register</Button>
            <Fade bottom> <Paper elevation={2} sx={{ backgroundColor: '#000', opacity: '0.75', height: 'auto', width: { lg: '600px', md: '450px', "&:hover": { opacity: '1' } }, margin: 'auto' }}>
              <Typography variant="h1" component="h3" sx={{ color: 'white', fontSize: '2.25rem', margin: '3%', textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF' }}>Rules</Typography>
              <Typography variant="h1" component="h4" sx={{ color: 'white', fontSize: '1.25rem', margin: '3%', textAlign: 'left' }}>Any	individual	who	cheats	during	an	event	will	be	penalized	by	disqualification</Typography>
              <Typography variant="h1" component="h4" sx={{ color: 'white', fontSize: '1.25rem', margin: '3%', textAlign: 'left' }}>If	a	member	of	a	team	or	a	person	associated	with	a	team	commits	an	act	of	Toxic,
                the	team	will	be	disqualified	from	the	tournament</Typography>
              <Typography variant="h1" component="h4" sx={{ color: 'white', fontSize: '1.25rem', margin: '3%', textAlign: 'left' }}>Match Making opponent team is randamized. Don't negotiate to change teams</Typography>
              <Typography variant="h1" component="h4" sx={{ color: 'white', fontSize: '1.25rem', margin: '3%', textAlign: 'left' }}>Map must be selected as a random. Each team can eliminate one map.</Typography>
              <Typography variant="h1" component="h4" sx={{ color: 'white', fontSize: '1.25rem', margin: '3%', textAlign: 'left' }}>Defender and Attacker Position choosed by Toss Winner</Typography>
              <Typography variant="h1" component="h4" sx={{ color: 'white', fontSize: '1.25rem', margin: '3%', textAlign: 'left' }}>If any Query Team Leader should contact only in Discord</Typography>
            </Paper></Fade>
          </Grid>
        </Grid>
      </Box>
      <Box id='community' sx={{ width: '100%', height: '100vh' }}><Fade bottom>
        <h1 style={{ fontSize: '95px', textShadow: '0 0 3px yellow, 0 0 5px gold' }}>HxH Esports Community</h1>
        <p style={{ fontFamily: 'Satisfy', textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF' }}>HxH eSports is a Professional eSports Organization that owns teams across the globe in various games such as CS:GO, Valorant, Fortnite, Overwatch, Rocket Leauge etc</p>
        <br />
        <h1 className='tagtitle' style={{ fontFamily: 'BenchNine', textShadow: '0 0 3px yellow, 0 0 5px gold' }}> Keep Calm and Game On </h1>
        <GameInfo /></Fade>
      </Box><Fade bottom>
        <Box id='teams' sx={{ width: '100%', height: '100vh', display: 'flex', flexFlow: 'wrap' }}>
          <h1 style={{ fontFamily: 'BenchNine', textAlign: 'center', width: '100%', textShadow: '0 0 3px yellow, 0 0 5px gold', margin: 'auto' }}>Top 10 Teams </h1>
          <Box sx={{ width: '90%', display: 'flex', flexFlow: 'wrap', margin: '2% auto' }}>
            <PlayerInfo TeamName='Team 1' TotalWins='0' />
            <PlayerInfo TeamName='Team 2' TotalWins='0' />
            <PlayerInfo TeamName='Team 3' TotalWins='0' />
            <PlayerInfo TeamName='Team 4' TotalWins='0' />
            <PlayerInfo TeamName='Team 5' TotalWins='0' />
            <PlayerInfo TeamName='Team 6' TotalWins='0' />
            <PlayerInfo TeamName='Team 7' TotalWins='0' />
            <PlayerInfo TeamName='Team 8' TotalWins='0' />
            <PlayerInfo TeamName='Team 9' TotalWins='0' />
            <PlayerInfo TeamName='Team 10' TotalWins='0' />

          </Box>
        </Box> </Fade>
      <Box id='aboutus' sx={{ width: '100%', height: '100vh', display: 'flex', flexFlow: 'wrap', position: 'relative' }}>
        <img className='aboutlogo' src={logo} alt="HxH Logo" />
        <Box sx={{ textAlign: 'center', width: '100%' }}>
          <Typography variant="h3" className='titleabout'>HxH Official</Typography>
        </Box>
        <Box sx={{ width: '100%', display: { md: 'flex', xs: 'block' }, margin: 'auto' }}>
          <SocialLinks Social={youtube} Title="Youtube" Data1="HxH" Linkto="https://www.youtube.com/channel/UCxhxdLLMzk5BR5OpdQSIX5g" />
          <SocialLinks Social={instagram} Title="Instagram" Data1="TeamHxH" Linkto="https://www.instagram.com/teamhxh_/" />
          <SocialLinks Social={discord} Title="Discord" Data1="HxHOfficial" Linkto="https://discord.com/invite/9pSsnmRppx" />
        </Box>
        <Box sx={{ width: '100%', height: '25px', color: 'black', backgroundColor: '#f2df84', position: 'absolute', bottom: '0', left: '0', borderRadius: '20px 20px 0px 0px' }}>
          Copyright &#169; 2023 HxH Official. All rights Reserved&#174;
        </Box>
      </Box>

      <Tooltip title="back to top">
        <IconButton aria-label="Start Browsing" size="large" onClick={() => {

          const element = document.getElementById('Home');
          if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }} sx={display ? {
          color: 'white', position: 'fixed', bottom: '3%', right: '5%', "&:hover": {
            border: "1px solid #fff",
            color: 'white',
            backgroundColor: 'transparent',

          },
        } : { display: 'none' }}>
          <ExpandLessIcon fontSize="large" />
        </IconButton>
      </Tooltip>

    </Box>
  )
}

export default HomeOfficial