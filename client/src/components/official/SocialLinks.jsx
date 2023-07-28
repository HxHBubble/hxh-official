import { Avatar, Box,  Grid, Typography } from '@mui/material';
import React from 'react';
const SocialLinks = ({Social, Title, Data1, Linkto}) => {
    return (
        <Box className='social' sx={{margin:'auto'}}>
            <a href={Linkto} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none' }}>
                <Grid container spacing={2} sx={{overflow:'hidden', width:'180px',height:'100px', color:'white',textShadow:'1px 1px 2px black, 0 0 1em gold, 0 0 0.2em yellow',  transition:'2s', "&:hover":{ transform:'scale(1.5)'}}}>
                    <Grid item xs={12} md={4} sx={{display:'flex', width:'160px',height:'100px', alignSelf:'center  '}}>

                        <Avatar sx={{width:'60px',height:'60px', alignSelf:'center'}} src={Social}/>
                        <Box sx={{ width:'100px',height:'60px', alignSelf:'center', display:'block', padding:{md: '20% 8%', xs:'4%'}}}>
                            <Typography sx={{fontSize:'0.75em', textAlign:'left', height:'26px'}}>{Title}</Typography>
                            <Typography sx={{fontSize:'0.50em', textAlign:'left', height:'16px'}}>{Data1}</Typography>
                        </Box>
                        
                        </Grid>
                        </Grid>
            </a>
        </Box>
    )
}

export default SocialLinks