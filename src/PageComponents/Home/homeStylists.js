import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Woman from '../assets/woman.jpg';
import WomanTwo from '../assets/woman2.jpg';
import WomanThree from '../assets/woman3.jpg';
import WomanFour from '../assets/woman4.jpg';
import WomanFive from '../assets/woman5.jpg';

const HomeStylists = () => {
  const [hoveredOne, setHoveredOne] = useState(false);
  const [hoveredTwo, setHoveredTwo] = useState(false);
  const [hoveredThree, setHoveredThree] = useState(false);
  const [hoveredFour, setHoveredFour] = useState(false);
  const [hoveredFive, setHoveredFive] = useState(false);

  const photosStylists = [
    {
      picture: Woman,
      hovered: hoveredOne,
      setHovered: setHoveredOne,
      title: 'James Boyle',
    },
    {
      picture: WomanTwo,
      hovered: hoveredTwo,
      setHovered: setHoveredTwo,
      title: 'James Boyle',
    },
    {
      picture: WomanThree,
      hovered: hoveredThree,
      setHovered: setHoveredThree,
      title: 'James Boyle',
    },
    {
      picture: WomanFour,
      hovered: hoveredFour,
      setHovered: setHoveredFour,
      title: 'James Boyle',
    },
    {
      picture: WomanFive,
      hovered: hoveredFive,
      setHovered: setHoveredFive,
      title: 'James Boyle',
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        backgroundPosition: 'center',
        background: '#C2AD90',
        paddingTop: '150px',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          textAlign: 'center',
          marginBottom: '15px',
          fontFamily: 'Birds',
        }}
      >
        Our Stylists
      </Typography>
      <Box
        sx={{
          width: '100%',
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        {photosStylists.map(({ picture, setHovered, hovered, title }) => (
          <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
              width: '15vw',
              height: '55vh',
              backgroundImage: hovered
                ? `linear-gradient(rgba(0, 0, 0, .6),rgba(0, 0, 0, .55)) , url(${picture})`
                : `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)) , url(${picture})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'none',
              backgroundPosition: 'bottom',
              borderRadius: '20px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              padding: hovered ? '.5em' : '0em',
              marginLeft: '25px',
              marginRight: '25px',
              alignItems: 'center',
              boxShadow:
                'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}
          >
            <Typography
              variant='h4'
              sx={{
                color: hovered ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,0)',
              }}
            >
              {title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeStylists;
