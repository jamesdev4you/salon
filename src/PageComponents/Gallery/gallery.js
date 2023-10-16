import React from 'react';
import HomeHeader from '../Home/homeHeader';
import NavBar from '../NavBar/navbar';
import homeImage from '../assets/headerhome.jpg';
import contactImage from '../assets/headercontact.jpg';
import headerReviews from '../assets/headerReviews.jpg';
import headerTeam from '../assets/headerTeam.jpg';
import headerGallery from '../assets/headerGallery.jpg';
import Woman from '../assets/woman.jpg';
import WomanTwo from '../assets/woman2.jpg';
import WomanThree from '../assets/woman3.jpg';
import WomanFour from '../assets/woman4.jpg';
import WomanFive from '../assets/woman5.jpg';
import Twitter from '../assets/twitter.png';
import Youtube from '../assets/youtube.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Typography } from '@mui/material';
import { MyServiceButton } from '../styledComponents.js';

const itemData = [
  {
    img: homeImage,
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: contactImage,
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: headerReviews,
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: headerTeam,
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: headerGallery,
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: Woman,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: WomanTwo,
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: WomanThree,
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: WomanFour,
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: WomanFive,
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: Twitter,
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: Youtube,
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];

const gallery = (props) => {
  return (
    <div>
      <NavBar />
      <HomeHeader headerOp={props.headerOp} />
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          backgroundColor: '#1B1E1E',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='h1'
          sx={{
            textAlign: 'center',
            marginBottom: '15px',
            fontFamily: 'Birds',
            paddingTop: '.8em',
          }}
          color='secondary.main'
        >
          Our Gallery
        </Typography>
        <ImageList sx={{ width: '80%', height: '80vh' }}>
          <ImageListItem key='Subheader' cols={2}>
            <ListSubheader
              component='div'
              sx={{ backgroundColor: '#E4DCC0', color: '#1B1E1E' }}
            >
              Click on the button below photos to set up an appointment!
            </ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading='lazy'
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={<MyServiceButton />}
                sx={{ paddingRight: '15px' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
};

export default gallery;
