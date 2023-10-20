import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Woman from '../assets/woman.jpg';
import WomanTwo from '../assets/woman2.jpg';
import WomanThree from '../assets/woman3.jpg';
import WomanFour from '../assets/woman4.jpg';
import { useNavigate } from 'react-router-dom';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../index.css';

const HomeStylists = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const navigate = useNavigate();

  const [hoveredOne, setHoveredOne] = useState(false);
  const [hoveredTwo, setHoveredTwo] = useState(false);
  const [hoveredThree, setHoveredThree] = useState(false);
  const [hoveredFour, setHoveredFour] = useState(false);

  const photosStylists = [
    {
      picture: Woman,
      hovered: hoveredOne,
      setHovered: setHoveredOne,
      title: 'James Boyle',
      targetId: 'womanOne',
    },
    {
      picture: WomanTwo,
      hovered: hoveredTwo,
      setHovered: setHoveredTwo,
      title: 'James Boyle',
      targetId: 'womanTwo',
    },
    {
      picture: WomanThree,
      hovered: hoveredThree,
      setHovered: setHoveredThree,
      title: 'James Boyle',
      targetId: 'womanThree',
    },
    {
      picture: WomanFour,
      hovered: hoveredFour,
      setHovered: setHoveredFour,
      title: 'James Boyle',
      targetId: 'womanFour',
    },
  ];

  const squareVariants = {
    visible: { opacity: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0 },
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: { md: 'auto', lg: '90vh', xl: '95vh' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        backgroundPosition: 'center',
        background: '#C2AD90',
        paddingTop: {
          xs: '50px',
          sm: '50px',
          md: '50px',
          lg: '150px',
          xl: '180px',
        },
      }}
    >
      <motion.div
        animate={controls}
        variants={squareVariants}
        initial='hidden'
        ref={ref}
      >
        <Typography
          sx={{
            textAlign: 'center',
            marginBottom: '15px',
            fontFamily: 'Birds',
            fontSize: { lg: '98px', md: '64px', sm: '64px', xs: '70px' },
          }}
        >
          Our Stylists
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: { md: 'auto', lg: '60vh', xl: '60vh' },
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'column',
              lg: 'row',
              xl: 'row',
            },
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: {
              xs: '50px',
              sm: '50px',
              md: '50px',
              lg: '150px',
              xl: '70px',
            },
            gap: { xs: '30px', sm: '30px', md: '30px', xl: '20px' },
            marginBottom: { xs: '50px', sm: '30px', md: '30px', xl: '20px' },
          }}
        >
          {photosStylists.map(
            ({ picture, setHovered, hovered, title, targetId }) => (
              <Box
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => {
                  navigate('/team', { state: { targetId: targetId } });
                }}
                sx={{
                  width: {
                    xs: '80vw',
                    sm: '50vw',
                    md: '50vw',
                    lg: '20vw',
                    xl: '18vw',
                  },
                  height: '60vh',
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
                  border: '3px solid #191C1C',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                }}
              >
                <Typography
                  variant='h4'
                  sx={{
                    color: hovered ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,0)',
                    fontFamily: 'birds',
                  }}
                >
                  {title}
                </Typography>
                <Button></Button>
              </Box>
            )
          )}
        </Box>
      </motion.div>
    </Box>
  );
};

export default HomeStylists;
