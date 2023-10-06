import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';
import Youtube from '../assets/youtube.png';

const homeContact = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '25vh',
        paddingBottom: '20px',
        backgroundColor: '#C2AD90',
        display: 'flex',
        flexDirection: 'column',
        justifyCotent: 'center',
        alignItems: 'center',
        gap: '60px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: {
            xl: '150px',
            lg: '150px',
            md: '90px',
            sm: '90px',
            xs: '80px',
          },
          paddingTop: '70px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Link href='https://www.instagram.com/petersonedvania/'>
          <Box
            sx={{
              height: {
                xl: '120px',
                lg: '100px',
                md: '60px',
                sm: '60px',
                xs: '40px',
              },
              width: {
                xl: '120px',
                lg: '100px',
                md: '60px',
                sm: '60px',
                xs: '40px',
              },
              backgroundImage: `url(${Facebook})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'right',
              cursor: 'pointer',
            }}
          ></Box>
        </Link>
        <Link href='https://www.instagram.com/petersonedvania/'>
          <Box
            sx={{
              height: {
                xl: '120px',
                lg: '100px',
                md: '60px',
                sm: '60px',
                xs: '40px',
              },
              width: {
                xl: '120px',
                lg: '100px',
                md: '60px',
                sm: '60px',
                xs: '40px',
              },
              backgroundImage: `url(${Instagram})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'right',
              cursor: 'pointer',
            }}
          ></Box>
        </Link>
        <Link href='https://www.instagram.com/petersonedvania/'>
          <Box
            sx={{
              height: {
                xl: '120px',
                lg: '100px',
                md: '60px',
                sm: '60px',
                xs: '40px',
              },
              width: {
                xl: '120px',
                lg: '100px',
                md: '60px',
                sm: '60px',
                xs: '40px',
              },
              backgroundImage: `url(${Twitter})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'right',
              cursor: 'pointer',
            }}
            src='#'
          ></Box>
        </Link>
        <Link href='https://www.instagram.com/petersonedvania/'>
          <Box
            sx={{
              height: {
                xl: '120px',
                lg: '100px',
                md: '60px',
                sm: '60px',
                xs: '40px',
              },
              width: {
                xl: '120px',
                lg: '100px',
                md: '60px',
                sm: '60px',
                xs: '40px',
              },
              backgroundImage: `url(${Youtube})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'right',
              cursor: 'pointer',
            }}
            src='https://www.instagram.com/petersonedvania/'
          ></Box>
        </Link>
      </Box>
    </Box>
  );
};

export default homeContact;
