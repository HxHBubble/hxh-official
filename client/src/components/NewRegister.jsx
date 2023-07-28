import React, { useState } from 'react'
import NavBar from './NavBar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Logo from '../static/logo.png';
import Paper from '@mui/material/Paper';
import { Avatar, TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import FormHelperText from '@mui/material/FormHelperText';

import { useDispatch, useSelector } from 'react-redux';
import { createNewTeamAsync, registeredTeamsAction } from '../store/RegisterTeam';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const NewRegister = () => {

  const dispatch = useDispatch();
  const teamData = useSelector((state) => state.registeredTeams.teamData)
  let notifyData = useSelector((state) => state.registeredTeams.notifyData)

  const [errorMsg, setErrorMsg] = useState({});

  const notifyClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(registeredTeamsAction.resetNotify(null));
  };

  return (
    <div className='newreg-bg'>
      <NavBar />
      <Grid sx={{ flexGrow: 1, height: '80%' }} container spacing={2}>
        <Grid item md={6} xs={12} sx={{ justifyContent: 'center', }}>

          <Typography variant="h4" component="h3" sx={{ marginTop: '60px', color: '#F0FF42', textShadow: '1px 1px 1px #000', fontFamily: '"Lucida Console", "Courier New", monospace' }}>
            Team Registration Form </Typography>

          <Avatar
            alt="HxH Logo"
            src={Logo}
            sx={{ width: 120, height: 120, margin: '50px', placeSelf: 'center' }} />
        </Grid>
        <Grid item md={6} xs={12} sx={{ justifyContent: 'center', placeSelf: 'center' }}>
          <Paper elevation={8} sx={{ maxWidth: '80%', transition: '1s', padding: '5%', borderRadius: '20%', backgroundColor: '#CFF5E7', opacity: '0.65', "&:hover": { opacity: '1', borderRadius: '2% 10%' }, }}>

            <TextField id="teamName" label="Team Name" value={teamData.teamName} required error={Boolean(errorMsg.teamName)} helperText={errorMsg.teamName ? errorMsg.teamName : ""} onChange={(e) => { dispatch(registeredTeamsAction.setTeamName(e.target.value)); setErrorMsg({ ...errorMsg, teamName: '' }); }} sx={{ width: '70%', margin: '1%' }} />
            <TextField id="discordId" label="Discord ID" value={teamData.discordId} required error={Boolean(errorMsg.discordId)} helperText={errorMsg.discordId ? errorMsg.discordId : ""} onChange={(e) => { dispatch(registeredTeamsAction.setDiscordId(e.target.value)); setErrorMsg({ ...errorMsg, discordId: '' }) }} sx={{ width: '70%', margin: '1%' }} />
            <TextField id="player1" label="Player 1" value={teamData.player1} required error={Boolean(errorMsg.player1)} helperText={errorMsg.player1 ? errorMsg.player1 : ""} onChange={(e) => { dispatch(registeredTeamsAction.setPlayer1(e.target.value)); setErrorMsg({ ...errorMsg, player1: '' }) }} sx={{ width: '70%', margin: '1%' }} />
            <TextField id="player2" label="Player 2" value={teamData.player2} required error={Boolean(errorMsg.player2)} helperText={errorMsg.player2 ? errorMsg.player2 : ""} onChange={(e) => { dispatch(registeredTeamsAction.setPlayer2(e.target.value)); setErrorMsg({ ...errorMsg, player2: '' }) }} sx={{ width: '70%', margin: '1%' }} />
            <TextField id="player3" label="Player 3" value={teamData.player3} required error={Boolean(errorMsg.player3)} helperText={errorMsg.player3 ? errorMsg.player3 : ""} onChange={(e) => { dispatch(registeredTeamsAction.setPlayer3(e.target.value)); setErrorMsg({ ...errorMsg, player3: '' }) }} sx={{ width: '70%', margin: '1%' }} />
            <TextField id="player4" label="Player 4" value={teamData.player4} required error={Boolean(errorMsg.player4)} helperText={errorMsg.player4 ? errorMsg.player4 : ""} onChange={(e) => { dispatch(registeredTeamsAction.setPlayer4(e.target.value)); setErrorMsg({ ...errorMsg, player4: '' }) }} sx={{ width: '70%', margin: '1%' }} />
            <TextField id="player5" label="Player 5" value={teamData.player5} required error={Boolean(errorMsg.player5)} helperText={errorMsg.player5 ? errorMsg.player5 : ""} onChange={(e) => { dispatch(registeredTeamsAction.setPlayer5(e.target.value)); setErrorMsg({ ...errorMsg, player5: '' }) }} sx={{ width: '70%', margin: '1%' }} />

            <FormControl sx={{ width: '70%', margin: '1%' }} required error={Boolean(errorMsg.teamRank)}>
              <InputLabel id="rank-select-label">Team Rank</InputLabel>
              <Select
                labelId="rank-select-label"
                id="rank-select"
                value={teamData.teamRank}
                label="Team Rank"
                onChange={(e) => { dispatch(registeredTeamsAction.setTeamRank(e.target.value)); setErrorMsg({ ...errorMsg, teamRank: '' }) }}
              >
                <MenuItem value={"IRON"}>Iron</MenuItem>
                <MenuItem value={"BRONZE"}>Bronze</MenuItem>
                <MenuItem value={"SILVER"}>Silver</MenuItem>
                <MenuItem value={"GOLD"}>Gold</MenuItem>
                <MenuItem value={"PLATINUM"}>Platinum</MenuItem>
                <MenuItem value={"DIAMOND"}>Diamond</MenuItem>
                <MenuItem value={"ASCENDENT"}>Ascendent</MenuItem>
                <MenuItem value={"IMMORTAL"}>Immortal</MenuItem>
                <MenuItem value={"RADIANT"}>Radiant</MenuItem>
              </Select>
                <FormHelperText>{errorMsg.teamRank ? errorMsg.teamRank : ""}</FormHelperText>
            </FormControl>

            <Button variant="outlined" sx={{ width: '70%', margin: '1%' }} onClick={() => {
              if (teamData.teamName === "") {
                setErrorMsg({ ...errorMsg, teamName: 'This Feild Required' })
              } else if (teamData.discordId === "") {
                setErrorMsg({ ...errorMsg, discordId: 'This Feild Required' })
              } else if (teamData.player1 === "") {
                setErrorMsg({ ...errorMsg, player1: 'This Feild Required' })
              } else if (teamData.player2 === "") {
                setErrorMsg({ ...errorMsg, player2: 'This Feild Required' })
              } else if (teamData.player3 === "") {
                setErrorMsg({ ...errorMsg, player3: 'This Feild Required' })
              } else if (teamData.player4 === "") {
                setErrorMsg({ ...errorMsg, player4: 'This Feild Required' })
              } else if (teamData.player5 === "") {
                setErrorMsg({ ...errorMsg, player5: 'This Feild Required' })
              } else if (teamData.teamRank === "") {
                setErrorMsg({ ...errorMsg, teamRank: 'Select any Option' })
              }  else {
                dispatch(createNewTeamAsync({ teamName: teamData.teamName, discordId: teamData.discordId, player1: teamData.player1, player2: teamData.player2, player3: teamData.player3, player4: teamData.player4, player5: teamData.player5, teamRank: teamData.teamRank }));
              }
            }}>Submit</Button>


          </Paper>

          <Snackbar open={Boolean(notifyData)} autoHideDuration={10000} onClose={notifyClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} >
            <Alert onClose={notifyClose} severity={notifyData === null ? "info" : notifyData.status === 201 ? "success" : "error"} sx={{ width: '100%' }}>
              {notifyData ? notifyData.message : "Something Went Wrong Try Again Later"}
            </Alert>
          </Snackbar>

        </Grid>
      </Grid>
    </div>
  )
}

export default NewRegister