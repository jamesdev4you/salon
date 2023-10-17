import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { MyServiceButton } from '../styledComponents.js';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const menuItems = [
  {
    id: 1,
    title: 'Hair',
    price: '$35',
    itemOne: 'Coloring',
    itemTwo: 'Highlights',
    itemThree: 'Full',
    itemFour: 'Add Color',
    itemFive: 'Men Haircut',
    itemSix: 'Child Haircut',
  },
  {
    id: 2,
    title: 'Facial',
    price: '$35',
    itemOne: 'Express',
    itemTwo: 'Luxury',
    itemThree: 'Bliss Signature',
    itemFour: 'Teen',
    itemFive: 'Back',
    itemSix: 'Bum Bum',
  },
  {
    id: 3,
    title: 'Mani-Pedi',
    price: '$35',
    itemOne: 'Manicure',
    itemTwo: 'Pedicure',
    itemThree: 'Shellac-Mani',
    itemFour: 'Nails',
    itemFive: 'Nail Polish',
    itemSix: 'Nail',
  },
];

const squareVariants = {
  visible: { opacity: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0 },
};

var myAtoi = function (menuItems) {
  let itemsArray = Object.keys(menuItems[0]);
  let filteredItems = itemsArray.filter((item) => item.includes('item'));

  console.log(filteredItems);

  for (const object of menuItems) {
    for (let i = 0; i < filteredItems.length; i++) {
      do {
        object[filteredItems[i]] += '.';
      } while (object[filteredItems[i]].length <= 15);
    }
  }

  return menuItems;
};

const HomeMenu = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const modifiedMenuItems = myAtoi(menuItems);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        backgroundPosition: 'center',
        background: '#1B1E1E',
        paddingTop: '7em',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          textAlign: 'center',
          marginBottom: '15px',
          fontFamily: 'Birds',
        }}
        color='secondary.main'
      >
        Our Menu
      </Typography>
      <motion.div
        style={{
          width: '85%',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '4em',
          gap: '50px',
        }}
        animate={controls}
        variants={squareVariants}
        initial='hidden'
        ref={ref}
      >
        {modifiedMenuItems.map(
          ({
            id,
            title,
            price,
            itemOne,
            itemTwo,
            itemThree,
            itemFour,
            itemFive,
            itemSix,
          }) => (
            <Box
              key={id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                fontAlign: 'center',
                width: '33%',
                height: '60vh',
                padding: '15px',
                backgroundColor: '#E4DCC0',
                borderRadius: '15px',
                borderBottom: '3px solid black',
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
              }}
            >
              <Box
                sx={{
                  width: '95%',
                  height: '95%',
                  border: '3px solid #1B1E1E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  variant='h1'
                  sx={{
                    marginBottom: '15px',
                    fontFamily: 'Birds',
                    width: '90%',
                    paddingTop: '.2em',
                    borderBottom: '3px solid #1B1E1E',
                    textAlign: 'center',
                    color: '#1B1E1E',
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant='h4'
                  sx={{
                    fontFamily: 'Mono',
                    marginBottom: '15px',
                    color: '#1B1E1E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  {itemOne}
                  {price}
                </Typography>
                <Typography
                  variant='h4'
                  sx={{
                    fontFamily: 'Mono',
                    marginBottom: '15px',
                    color: '#1B1E1E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  {itemTwo}
                  {price}
                </Typography>
                <Typography
                  variant='h4'
                  sx={{
                    fontFamily: 'Mono',
                    marginBottom: '15px',
                    color: '#1B1E1E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  {itemThree}
                  {price}
                </Typography>
                <Typography
                  variant='h4'
                  sx={{
                    fontFamily: 'Mono',
                    marginBottom: '15px',
                    color: '#1B1E1E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  {itemFour}
                  {price}
                </Typography>
                <Typography
                  variant='h4'
                  sx={{
                    fontFamily: 'Mono',
                    marginBottom: '15px',
                    color: '#1B1E1E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  {itemFive}
                  {price}
                </Typography>
                <Typography
                  variant='h4'
                  sx={{
                    fontFamily: 'Mono',
                    marginBottom: '25px',
                    color: '#1B1E1E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  {itemSix}
                  {price}
                </Typography>
                <MyServiceButton />
              </Box>
            </Box>
          )
        )}
      </motion.div>
    </Box>
  );
};

export default HomeMenu;
