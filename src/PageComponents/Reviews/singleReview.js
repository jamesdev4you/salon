import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

const SingleReview = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      style={{ width: '70%' }}
      animate={controls}
      variants={squareVariants}
      initial='hidden'
      ref={ref}
    >
      <Box
        style={{
          width: '100%',
          height: '20vh',
          marginBottom: '50px',
          marginTop: '50px',
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
            backgroundImage: `url(${props.picture})`,
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
          <Typography variant='h5' sx={{ width: '90%', textAlign: 'center' }}>
            {props.description}
          </Typography>
          <Typography
            variant='h5'
            sx={{ width: '90%', textAlign: 'right', fontFamily: 'Birds' }}
          >
            - {props.name}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default SingleReview;
