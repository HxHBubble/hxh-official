import React, {useState, useEffect} from 'react'
import './HomeOfficial.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import logo from '../../static/cursor.png';
import { Link } from '@mui/material';

const pages = ['Announcement', 'Community', 'Teams', 'About Us'];


const NavLinks = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [bgcolor, setbgcolor] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    switch(e.target.innerText){
      case "ANNOUNCEMENT":
        let announce = document.getElementById('annouance');
          if (announce) {
            // 👇 Will scroll smoothly to the top of the next section
            announce.scrollIntoView({ behavior: 'smooth' });
          }
      break;
      case "COMMUNITY":
         let community = document.getElementById('community');
          if (community) {
            // 👇 Will scroll smoothly to the top of the next section
            community.scrollIntoView({ behavior: 'smooth' });
          }
      break;
      case "TEAMS":
         let teams = document.getElementById('teams');
          if (teams) {
            // 👇 Will scroll smoothly to the top of the next section
            teams.scrollIntoView({ behavior: 'smooth' });
          }
      break;
      case "ABOUT US":
         let about = document.getElementById('aboutus');
          if (about) {
            // 👇 Will scroll smoothly to the top of the next section
            about.scrollIntoView({ behavior: 'smooth' });
          }
      break;
      default:
         let element = document.getElementById('Home');
          if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
          }
        break;
    }
  };

  const listenScrollEvent = (event) => {
    if (window.scrollY < 500) {
      return setbgcolor(false)
    } else if (window.scrollY > 500) {
      return setbgcolor(true)
    } 
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <AppBar position="fixed" sx={bgcolor ? 
    {backgroundColor:'transparent' ,   marginTop:'5%', width:'150px', left:'0', top:'25%'} 
    : {backgroundColor: 'transparent',  marginTop:'50px'} }>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar src={logo} sx={bgcolor ?{display: 'none'} :{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="titleborder"
            sx={bgcolor ?{display: 'none'} :{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              
            }}
          >
           HxH Offcial
          </Typography>

          <Box sx={bgcolor ?{display: 'none'} :{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      
          <Avatar src={logo} sx={bgcolor ?{display: 'none'} :{ display: { xs: 'flex', md: 'none' }, mr: 1 }}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HxH Offcial
          </Typography>
          <Box sx={bgcolor ?
             {opacity:'0.4', "&:hover":{opacity:'1' }}
             :{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, placeContent:'flex-end', transition:'transform 0.5s' }}>
            {pages.map((page) => (
              <Link
                key={page}
                className="pagelink"
                onClick={handleCloseNavMenu}
                sx={bgcolor ?
                  {my: 2, color: 'white', display: 'block', opacity:'0.4', "&:hover":{opacity:'1',color:'pink' ,textShadow: '1px 1px 2px black, 0 0 1em yellow, 0 0 0.2em gold'}}
                  :{ my: 2, color: 'white', display: 'block',"&:hover":{color:'pink'} }}
              >
                {page}
              </Link>
            ))}
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavLinks