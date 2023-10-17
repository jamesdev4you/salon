import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Woman from '../assets/woman.jpg';
import WomanTwo from '../assets/woman2.jpg';
import WomanThree from '../assets/woman3.jpg';
import WomanFour from '../assets/woman4.jpg';
import { useNavigate } from 'react-router-dom';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
      <motion.div
        animate={controls}
        variants={squareVariants}
        initial='hidden'
        ref={ref}
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
            gap: '50px',
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
                  width: '18vw',
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
