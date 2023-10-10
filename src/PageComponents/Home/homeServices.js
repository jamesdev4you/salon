import React from 'react';
import { Box, Typography, SvgIcon } from '@mui/material';
import { ReactComponent as FacialIcon } from '../assets/beauty-treatment.svg';
import { ReactComponent as FacialIconRight } from '../assets/sheet-mask.svg';
import { ReactComponent as ManicureIcon } from '../assets/manicure.svg';
import { ReactComponent as ManicureIconRight } from '../assets/nail-polish.svg';
import { ReactComponent as StylistIconRight } from '../assets/hair.svg';
import { ReactComponent as StylistIcon } from '../assets/women.svg';
import { MyServiceButton } from '../styledComponents.js';

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

const homeServices = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '83vh',
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
        variant='h1'
        color='secondary.main'
        sx={{
          textAlign: 'center',
          marginBottom: '15px',
          fontFamily: 'Birds',
        }}
      >
        Our Services
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '100px',
          marginTop: '80px',
        }}
      >
        {servicesInformation.map(
          ({ logo, logoRight, viewBox, viewBoxRight, title, description }) => (
            <Box
              sx={{
                width: '23%',
                height: '60vh',
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
                variant='h3'
                sx={{ color: 'primary.main', fontFamily: 'Birds' }}
              >
                <SvgIcon
                  component={logo}
                  viewBox={viewBox}
                  sx={{
                    height: '40px',
                    width: '40px',
                    color: 'primary.main',
                    marginRight: '15px',
                  }}
                />
                {title}
                <SvgIcon
                  component={logoRight}
                  viewBox={viewBoxRight}
                  sx={{
                    height: '40px',
                    width: '40px',
                    color: '#000000',
                    marginLeft: '25px',
                  }}
                />
              </Typography>
              <Typography variant='p' sx={{ color: '#5B5C50' }}>
                {description}
              </Typography>
              <Typography variant='p' sx={{ color: '#5B5C50' }}>
                {description}
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#5B5C50', marginBottom: 'auto' }}
              >
                {description}
              </Typography>

              <MyServiceButton />
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default homeServices;
