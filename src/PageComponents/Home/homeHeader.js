import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import homeimage from '../assets/headerhome.jpg';
import { MyStyledButton } from '../styledComponents.js';

const homeHeader = (props) => {
  return (
    <Box sx={{
        width: 'auto',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',
        backgroundImage: `url(${homeimage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
    }}>
        <Typography variant='h1' color='primary.main'>Betsy's Salon</Typography>
        <Typography variant='h3' color='primary.main' sx={{marginBottom: '10px'}}>of Tampa Bay</Typography>
        <MyStyledButton />
        <Box sx={{
          width: '500px',
          height: '200px',
          position: 'relative',
          bottom: '-40%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '15px',
          border: '5px solid black',
          backgroundColor: 'white',
        }}></Box>
    </Box>
  )
}

export default homeHeader