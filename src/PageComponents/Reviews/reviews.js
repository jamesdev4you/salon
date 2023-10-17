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
import SingleReview from './singleReview.js';

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
        <SingleReview
          picture={testimonials[0].picture}
          description={testimonials[0].description}
          name={testimonials[0].name}
        />
        <SingleReview
          picture={testimonials[1].picture}
          description={testimonials[1].description}
          name={testimonials[1].name}
        />
        <SingleReview
          picture={testimonials[2].picture}
          description={testimonials[2].description}
          name={testimonials[2].name}
        />
        <SingleReview
          picture={testimonials[3].picture}
          description={testimonials[3].description}
          name={testimonials[3].name}
        />
        <SingleReview
          picture={testimonials[4].picture}
          description={testimonials[4].description}
          name={testimonials[4].name}
        />
        <SingleReview
          picture={testimonials[5].picture}
          description={testimonials[5].description}
          name={testimonials[5].name}
        />
      </Box>
      <Footer />
    </div>
  );
};

export default reviews;
