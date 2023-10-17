import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import HomeHeader from '../Home/homeHeader.js';
import NavBar from '../NavBar/navbar.js';
import Woman from '../assets/woman.jpg';
import Woman2 from '../assets/woman2.jpg';
import Woman3 from '../assets/woman3.jpg';
import Woman4 from '../assets/woman4.jpg';
import Woman5 from '../assets/woman5.jpg';
import '../../index.css';
import Footer from '../Footer/footer.js';

const reviews = (props) => {
  const testimonials = [
    {
      picture: Woman,
      name: 'James Boyle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem, posuere sodales molestie dictum, gravida id nisl. In hac habitasse platea dictumst. In rutrum est vel libero mattis.',
    },
    {
      picture: Woman2,
      name: 'James Boyle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem, posuere sodales molestie dictum, gravida id nisl. In hac habitasse platea dictumst. In rutrum est vel libero mattis.',
    },
    {
      picture: Woman3,
      name: 'James Boyle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem, posuere sodales molestie dictum, gravida id nisl. In hac habitasse platea dictumst. In rutrum est vel libero mattis.',
    },
    {
      picture: Woman4,
      name: 'James Boyle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem, posuere sodales molestie dictum, gravida id nisl. In hac habitasse platea dictumst. In rutrum est vel libero mattis.',
    },
    {
      picture: Woman5,
      name: 'James Boyle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem, posuere sodales molestie dictum, gravida id nisl. In hac habitasse platea dictumst. In rutrum est vel libero mattis.',
    },
    {
      picture: Woman,
      name: 'James Boyle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem, posuere sodales molestie dictum, gravida id nisl. In hac habitasse platea dictumst. In rutrum est vel libero mattis.',
    },
  ];

  return (
    <div>
      <NavBar />
      <HomeHeader headerOp={props.headerOp} />
      <Box
        sx={{
          height: 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1B1E1E',
        }}
      >
        <Typography
          variant='h1'
          sx={{ paddingTop: '50px', fontFamily: 'Birds', color: '#E4DCC0' }}
        >
          Testimonials
        </Typography>
        {testimonials.map(({ picture, name, description }) => (
          <Box
            sx={{
              width: '60%',
              height: '20vh',
              margin: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '.5em',
              paddingLeft: '2em',
              paddingRight: '2em',
              backgroundColor: '#E4DCC0',
              borderRadius: '20px',
            }}
          >
            <Box
              sx={{
                height: '10em',
                width: '10em',
                backgroundImage: `url(${picture})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'none',
                backgroundPosition: 'center',
                borderRadius: '50%',
                border: '3px solid #1B1E1E',
              }}
            />
            <Box
              sx={{
                height: '10em',
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant='h5'
                sx={{ width: '90%', textAlign: 'center' }}
              >
                {description}
              </Typography>
              <Typography
                variant='h5'
                sx={{ width: '90%', textAlign: 'right', fontFamily: 'Birds' }}
              >
                - {name}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Footer />
    </div>
  );
};

export default reviews;
