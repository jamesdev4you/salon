import React from 'react';
import { Typography, Box } from '@mui/material';
import '../../index.css';

export default function homeHeader(props) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
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
          {props.headerOp.title}
        </Typography>
        <Typography
          variant='h3'
          color='primary.main'
          sx={{ marginBottom: '15px', fontFamily: 'Birds' }}
        >
          {props.headerOp.desc}
        </Typography>
        <props.headerOp.button />
      </Box>
    </Box>
  );
}
