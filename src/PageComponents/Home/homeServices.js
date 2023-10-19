import React, { useEffect } from 'react';
import { Box, Typography, SvgIcon } from '@mui/material';
import { ReactComponent as FacialIcon } from '../assets/beauty-treatment.svg';
import { ReactComponent as FacialIconRight } from '../assets/sheet-mask.svg';
import { ReactComponent as ManicureIcon } from '../assets/manicure.svg';
import { ReactComponent as ManicureIconRight } from '../assets/nail-polish.svg';
import { ReactComponent as StylistIconRight } from '../assets/hair.svg';
import { ReactComponent as StylistIcon } from '../assets/women.svg';
import { MyServiceButton } from '../styledComponents.js';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../index.css';

const servicesInformation = [
  {
    logo: FacialIcon,
    logoRight: FacialIconRight,
    viewBox: '0 0 128 128',
    viewBoxRight: '0 0 512 512',
    title: 'Facials',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem, posuere sodales molestie dictum, gravida id nisl. In hac habitasse platea dictumst. In rutrum est vel libero mattis.',
  },
  {
    logo: ManicureIcon,
    logoRight: ManicureIconRight,
    viewBox: '0 0 512 512',
    viewBoxRight: '0 0 583.721 583.721',
    title: 'Mani-Pedi',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem, posuere sodales molestie dictum, gravida id nisl. In hac habitasse platea dictumst. In rutrum est vel libero mattis.',
  },
  {
    logo: StylistIcon,
    logoRight: StylistIconRight,
    viewBoxRight: '0 0 64 64',
    viewBox: '0 0 512 512',
    title: 'Hair Stylist',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem, posuere sodales molestie dictum, gravida id nisl. In hac habitasse platea dictumst. In rutrum est vel libero mattis.',
  },
];

const squareVariants = {
  visible: { opacity: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0 },
};

const HomeServices = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Box
      sx={{
        width: '100%',
        height: {sm: 'auto', md: '73vh', lg: '83vh', xl: '83vh'},
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        backgroundPosition: 'center',
        background: '#1B1E1E',
        paddingTop: '50px',
      }}
    >
      <Typography
        color='secondary.main'
        sx={{
          textAlign: 'center',
          marginBottom: '15px',
          fontFamily: 'Birds',
          fontSize: {lg: '98px', md: '64px', sm: '64px',  xs: '70px'},
        }}
      >
        Our Services
      </Typography>
      <motion.div
      className='stylesFlexBox'
        animate={controls}
        variants={squareVariants}
        initial='hidden'
        ref={ref}
      >
        {servicesInformation.map(
          ({ logo, logoRight, viewBox, viewBoxRight, title, description }) => (
            <Box
              sx={{
                height: {xs: '30em', sm: '30em', md: '32em', lg: '40em', xl: '40em'},
                width: {xs: '20em', sm: '30em', md: '18em', lg: '23em', xl: '30em'},
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                padding: '2em',
                gap: '.5em',
                backgroundColor: '#E4DCC0',
                borderRadius: '20px',
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
              }}
            >
              <Typography
                sx={{ color: 'primary.main', fontFamily: 'Birds', fontSize: {xs: '40px',sm: '60px', md: '35px', lg: '40px', xl: '60px'}}}
              >

                <SvgIcon
                  component={logoRight}
                  viewBox={viewBoxRight}
                  sx={{
                    height: {md: '30px', xl:'50px'},
                    width: {md: '30px', xl:'50px'},
                    color: '#000000',
                    marginRight: '15px',
                    display: {xs: 'none', sm: 'none', md: 'none', lg: 'inline'}
                  }}
                />
                {title}
                <SvgIcon
                  component={logo}
                  viewBox={viewBox}
                  sx={{
                    height: {xs: '30px', sm: '60px', md: '35px', xl:'50px'},
                    width: {xs:'30px', sm: '60px', md: '35px', xl:'50px'},
                    color: 'primary.main',
                    marginLeft: '15px',
                  }}
                />
              </Typography>
              <Typography variant='p' sx={{ color: '#5B5C50' }}>
                {description}
              </Typography>
              <Typography variant='p' sx={{ color: '#5B5C50', display: {xs: 'none', md: 'none', lg: 'none', xl: 'inline'} }}>
                {description}
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#5B5C50', display: {xs: 'none', sm: 'none', md: 'none', lg: 'inline'} }}
              >
                {description}
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#5B5C50', marginBottom: 'auto', }}
              >
                {description}
              </Typography>

              <MyServiceButton />
            </Box>
          )
        )}
      </motion.div>
    </Box>
  );
};

export default HomeServices;
