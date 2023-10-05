import React from 'react';
import { Box, Typography } from '@mui/material';

const homeServices = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '75vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        backgroundPosition: 'center',
        background: 'linear-gradient(to right, #E2C170, #F6DA91, #E2C170)',
        paddingTop: '50px',
      }}
    >
      <Typography
        variant='h1'
        color='primary.main'
        sx={{
          textAlign: 'center',
          marginBottom: '15px',
          fontFamily: 'Birds',
          textDecoration: 'underline',
        }}
      >
        Our Services
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: '150px',
        }}
      >
        <Box
          sx={{
            width: '25%',
            height: '550px',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          }}
        ></Box>
        <Box
          sx={{
            width: '25%',
            height: '550px',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          }}
        ></Box>
        <Box
          sx={{
            width: '25%',
            height: '550px',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default homeServices;
