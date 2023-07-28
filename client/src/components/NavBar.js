import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Logo from '../static/logo.png';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }} className='navBar'>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none', color: 'white'}}>
        <Toolbar>
        <Avatar
        alt="HxH Logo"
        variant="rounded"
        className='hxhlogo'
        src={Logo}
        onClick={() => {
            navigate('/', { replace: true });
          }}
        sx={{ width: 70, height: 70, cursor: 'pointer' }}
      />
          <h2 className="hxhtitle">
            HxH ESports
          </h2>

          <Button color="inherit" onClick={ () => {
        navigate('/teamdetails', { replace: true });
      }}>Teams</Button>

          <Button color="inherit" onClick={ () => {
        navigate('/newteamregistration', { replace: true });
      }}>Register Team</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar