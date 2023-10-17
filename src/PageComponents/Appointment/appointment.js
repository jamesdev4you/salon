import React, { useEffect } from 'react';
import { Typography, Box, Link } from '@mui/material';
import HomeHeader from '../Home/homeHeader.js';
import NavBar from '../NavBar/navbar.js';
import '../../index.css';
import ContactForm from './contactForm.js';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';
import Youtube from '../assets/youtube.png';
import Footer from '../Footer/footer.js';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const squareVariants = {
  visible: { opacity: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0 },
};

const Appointment = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div>
      <NavBar />
      <HomeHeader headerOp={props.headerOp} />
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
          Get In Touch
        </Typography>
        <Typography
          variant='h4'
          color='secondary.main'
          sx={{
            textAlign: 'center',
            marginBottom: '3%',
            fontFamily: 'Birds',
          }}
        >
          <span style={{ color: 'red' }}>*</span>For first time clients please
          reach out through phone first
        </Typography>
        <motion.div
          style={{
            width: '80%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
          animate={controls}
          variants={squareVariants}
          initial='hidden'
          ref={ref}
        >
          <Box
            sx={{
              width: '35%',
              height: '60vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ContactForm />
          </Box>
          <Box
            sx={{
              height: '60vh',
              width: {
                xl: '40%',
                lg: '60%',
                md: '100%',
                sm: '100%',
                xs: '100%',
              },

              marginBottom: '50px',
            }}
          >
            <Box
              sx={{
                height: '200px',
                width: '100%',
                borderBottom: '1px solid #E4DCC0',
              }}
            >
              <Typography
                sx={{
                  fontSize: '36px',
                  color: '#E4DCC0',
                  fontStyle: 'italic',
                }}
              >
                Address
              </Typography>
              <Typography
                sx={{
                  fontSize: '20px',
                  color: '#E4DCC0',
                  paddingTop: '30px',
                }}
              >
                9602 W Linebaugh Ave, Westchase, FL 33626
              </Typography>
              <Typography sx={{ fontSize: '20px', color: '#E4DCC0' }}>
                Get in touch for more info!
              </Typography>
            </Box>
            <Box
              sx={{
                height: 'auto',
                width: '100%',
                display: 'flex',
                paddingTop: '30px',
                flexDirection: {
                  xl: 'row',
                  lg: 'column',
                  md: 'column',
                  sm: 'column',
                  xs: 'column',
                },
                borderBottom: '1px solid #E4DCC0',
              }}
            >
              <Box
                sx={{
                  height: '170px',
                  width: '100%',
                  borderBottom: {
                    xl: 'none',
                    lg: '1px solid #E4DCC0',
                    md: '1px solid #E4DCC0',
                    sm: '1px solid #E4DCC0',
                    xs: '1px solid #E4DCC0',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '36px',
                    color: '#E4DCC0',
                    fontStyle: 'italic',
                  }}
                >
                  Telephone
                </Typography>
                <Typography
                  sx={{
                    fontSize: '20px',
                    color: 'white',
                    paddingTop: '30px',
                  }}
                >
                  <a
                    href='tel:7274879698'
                    style={{ color: '#E4DCC0', textDecoration: 'none' }}
                  >
                    #727-487-9698
                  </a>
                </Typography>
              </Box>
              <Box
                sx={{
                  marginLeft: {
                    xl: '30%',
                    lg: '0%',
                    md: '0%',
                    sm: '0%',
                    xs: '0%',
                  },
                  marginTop: {
                    xl: '0%',
                    lg: '30px',
                    md: '30px',
                    sm: '30px',
                    xs: '30px',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '36px',
                    color: '#E4DCC0',
                    fontStyle: 'italic',
                  }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{
                    fontSize: '20px',
                    color: '#E4DCC0',
                    paddingTop: '30px',
                  }}
                >
                  brazilianfitnessus@email.com
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: '200px',
                width: '100%',
                marginTop: '30px',
              }}
            >
              <Typography
                sx={{
                  fontSize: '36px',
                  color: '#E4DCC0',
                  fontStyle: 'italic',
                  marginBottom: '5%',
                }}
              >
                Social Medias
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'start',
                  gap: '5%',
                }}
              >
                <Link href='https://www.instagram.com/petersonedvania/'>
                  <Box
                    sx={{
                      height: {
                        xl: '60px',
                        lg: '100px',
                        md: '60px',
                        sm: '60px',
                        xs: '40px',
                      },
                      width: {
                        xl: '60px',
                        lg: '100px',
                        md: '60px',
                        sm: '60px',
                        xs: '40px',
                      },
                      backgroundImage: `url(${Facebook})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'right',
                      cursor: 'pointer',
                    }}
                  ></Box>
                </Link>
                <Link href='https://www.instagram.com/petersonedvania/'>
                  <Box
                    sx={{
                      height: {
                        xl: '60px',
                        lg: '100px',
                        md: '60px',
                        sm: '60px',
                        xs: '40px',
                      },
                      width: {
                        xl: '60px',
                        lg: '100px',
                        md: '60px',
                        sm: '60px',
                        xs: '40px',
                      },
                      backgroundImage: `url(${Instagram})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'right',
                      cursor: 'pointer',
                    }}
                  ></Box>
                </Link>
                <Link href='https://www.instagram.com/petersonedvania/'>
                  <Box
                    sx={{
                      height: {
                        xl: '60px',
                        lg: '100px',
                        md: '60px',
                        sm: '60px',
                        xs: '40px',
                      },
                      width: {
                        xl: '60px',
                        lg: '100px',
                        md: '60px',
                        sm: '60px',
                        xs: '40px',
                      },
                      backgroundImage: `url(${Twitter})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'right',
                      cursor: 'pointer',
                    }}
                    src='#'
                  ></Box>
                </Link>
                <Link href='https://www.instagram.com/petersonedvania/'>
                  <Box
                    sx={{
                      height: {
                        xl: '60px',
                        lg: '100px',
                        md: '60px',
                        sm: '60px',
                        xs: '40px',
                      },
                      width: {
                        xl: '60px',
                        lg: '100px',
                        md: '60px',
                        sm: '60px',
                        xs: '40px',
                      },
                      backgroundImage: `url(${Youtube})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'right',
                      cursor: 'pointer',
                    }}
                    src='https://www.instagram.com/petersonedvania/'
                  ></Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>
      <Footer />
    </div>
  );
};

export default Appointment;
