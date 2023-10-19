import React from 'react';
import { Typography, Box } from '@mui/material';
import '../../index.css';

export default function homeHeader(props) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '95vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${props.headerOp.backgroundImg})`,
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
          width: { lg: '600px', md: '400px', sm: '400px', xs: '90vw'},
          height: { lg: '300px', md: '25vh', sm: '25vh', xs: '25vh'},
          background: '#E4DCC0',
          borderRadius: '15px',
          border: '4px solid #1B1E1E',
        }}
      >
        <Typography
          color='primary.main'
          sx={{ fontFamily: 'Birds', fontSize: {lg: '98px', md: '64px', sm: '64px',  xs: '74px'}, lineHeight: {xs: '.7em', sm:'.7em', md: '1em', lg: '1em', } }}
        >
          {props.headerOp.title}
        </Typography>
        <Typography
          color='primary.main'
          sx={{ fontFamily: 'Birds', fontSize: {lg: '58px', md: '44px', sm: '44px', xs: '44px'},}}
        >
          {props.headerOp.desc}
        </Typography>
        <props.headerOp.button />
      </Box>
    </Box>
  );
}
