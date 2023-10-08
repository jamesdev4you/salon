import React from 'react';
import { Box, Typography, SvgIcon } from '@mui/material';
import { ReactComponent as FacialIcon } from '../assets/beauty-treatment.svg';
import { ReactComponent as ManicureIcon } from '../assets/manicure.svg';
import { ReactComponent as StylistIcon } from '../assets/hair.svg';

const servicesInformation = [
  {
    logo: FacialIcon,
    viewBox: '0 0 128 128',
    title: 'Facials',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem, posuere sodales molestie dictum, gravida id nisl. In hac habitasse platea dictumst. In rutrum est vel libero mattis vehicula. Phasellus facilisis orci enim, vel tristique nulla venenatis sed. Phasellus eleifend, magna quis pulvinar facilisis, nibh tellus commodo libero, vel varius diam libero et quam. Aenean facilisis scelerisque nunc, nec ullamcorper risus dignissim ut. Maecenas et urna ullamcorper, vestibulum lectus dignissim, scelerisque massa.',
  },
  {
    logo: ManicureIcon,
    viewBox: '0 0 512 512',
    title: 'Mani-Pedi',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem, posuere sodales molestie dictum, gravida id nisl. In hac habitasse platea dictumst. In rutrum est vel libero mattis vehicula. Phasellus facilisis orci enim, vel tristique nulla venenatis sed. Phasellus eleifend, magna quis pulvinar facilisis, nibh tellus commodo libero, vel varius diam libero et quam. Aenean facilisis scelerisque nunc, nec ullamcorper risus dignissim ut. Maecenas et urna ullamcorper, vestibulum lectus dignissim, scelerisque massa.',
  },
  {
    logo: StylistIcon,
    viewBox: '0 0 64 64',
    title: 'Hair Stylist',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem, posuere sodales molestie dictum, gravida id nisl. In hac habitasse platea dictumst. In rutrum est vel libero mattis vehicula. Phasellus facilisis orci enim, vel tristique nulla venenatis sed. Phasellus eleifend, magna quis pulvinar facilisis, nibh tellus commodo libero, vel varius diam libero et quam. Aenean facilisis scelerisque nunc, nec ullamcorper risus dignissim ut. Maecenas et urna ullamcorper, vestibulum lectus dignissim, scelerisque massa.',
  },
];

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
          justifyContent: 'center',
          gap: '100px',
          marginTop: '80px',
        }}
      >
        {servicesInformation.map(({ logo, title, description, viewBox }) => (
          <Box
            sx={{
              width: '25%',
              height: '60vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'start',
              padding: '2em',
              gap: '1em',
              backgroundColor: '#E4DCC0',
              borderRadius: '20px',
              boxShadow:
                'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}
          >
            <SvgIcon
              component={logo}
              viewBox={viewBox}
              sx={{ height: '100px', width: '100px' }}
            />
            <Typography variant='h3'>{title}</Typography>
            <Typography variant='p'>{description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default homeServices;
