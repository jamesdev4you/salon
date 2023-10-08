import React from 'react';
import homeimage from '../assets/headerhome.jpg';
import { Typography, Box } from '@mui/material';
import { MyServiceButton } from '../styledComponents.js';
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
          background: '#E4DCC0',
          borderRadius: '15px',
          border: '4px solid #1B1E1E',
        }}
      >
        <Typography
          variant='h1'
          color='primary.main'
          sx={{ fontFamily: 'Birds' }}
        >
          Shear Bliss
        </Typography>
        <Typography
          variant='h3'
          color='primary.main'
          sx={{ marginBottom: '15px', fontFamily: 'Birds' }}
        >
          of Tampa Bay
        </Typography>
        <MyServiceButton />
      </Box>
    </Box>
  );
};

export default homeHeader;
