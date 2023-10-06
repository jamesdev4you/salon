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
        borderBottom: '2px solid #E4DCC0',
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
            'linear-gradient(to bottom right, rgba(205, 180, 80, .1), rgba(255,215,0,.7)) padding-box, linear-gradient(to right, rgb(255,237,195), rgb(255,237,195)) border-box',
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
    </Box>
  );
};

export default homeHeader;
