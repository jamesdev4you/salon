import React from 'react';
import { Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../../index.css';
import '../../navlink.css';

const footer = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', backgroundColor: '#E4DCC0' }}>
      <Box
        sx={{
          width: '90%',
          height: 'auto',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'start',
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
            }}
            variant='h5'
          >
            {' '}
            Pages{' '}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Ubuntu',
            }}
          >
            <NavLink to='/' className='nav_link'>
              {' '}
              Home{' '}
            </NavLink>
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Appointment
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/reviews' className='nav_link'>
              Reviews
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/team' className='nav_link'>
              Team
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/gallery' className='nav_link'>
              Gallery
            </NavLink>{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
            }}
            variant='h5'
          >
            {' '}
            Services{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Hair
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Nails
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Facials
            </NavLink>{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
            }}
            variant='h5'
          >
            {' '}
            Contact{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            <a
              href='tel:7274879698'
              style={{ color: 'black', textDecoration: 'none' }}
            >
              #727-487-9698
            </a>
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu', color: 'black' }}>
            {' '}
            brazilianfitnessus@email.com{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
            }}
            variant='h5'
          >
            {' '}
            Hours{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            Mon: 6:00am - 7:00pm{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            Tue: 12:00pm-7:00pm{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            Wed: 6:00am-7:00pm{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            Thu: 12:00pm-7:00pm{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            Fri: 6:00am-7:00pm{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            Sat: 8:00am-6:00pm{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}> Sun: CLOSED </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default footer;
