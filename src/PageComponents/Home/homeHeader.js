import React from 'react';
import homeimage from '../assets/headerhome.jpg';
import { Typography, Box } from '@mui/material';
import { MyStyledButton } from '../styledComponents.js';
import '../../index.css';

const homeHeader = (props) => {
  return (
    <Box
      sx={{
        width: 'auto',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${homeimage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '600px',
          height: '300px',
          background:
            'linear-gradient(to bottom right, rgba(225,225,225, 1), rgba(255,215,0,.7)) padding-box, linear-gradient(to right, rgb(255,237,195), rgb(255,237,195)) border-box',
          borderRadius: '15px',
          border: '4px solid transparent',
        }}
      >
        <Typography
          variant='h1'
          color='primary.main'
          sx={{ fontFamily: 'Birds' }}
        >
          Betsy's Salon
        </Typography>
        <Typography
          variant='h3'
          color='primary.main'
          sx={{ marginBottom: '15px', fontFamily: 'Birds' }}
        >
          of Tampa Bay
        </Typography>
        <MyStyledButton />
      </Box>
      <Box
        sx={{
          width: '500px',
          height: '200px',
          position: 'relative',
          bottom: '-10%',
          background:
            'linear-gradient(to bottom right, rgba(225,225,225, 1), rgba(255,215,0,.7)) padding-box, linear-gradient(to right, rgb(255,237,195), rgb(255,237,195)) border-box',
          borderRadius: '15px',
          border: '4px solid transparent',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant='h4'
          color='primary.main'
          sx={{
            textAlign: 'center',
            marginBottom: '15px',
            fontFamily: 'Birds',
          }}
        >
          Find a salonist that fits your taste!
        </Typography>
        <MyStyledButton />
      </Box>
    </Box>
  );
};

export default homeHeader;
