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
import '../../index.css';

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
          height: {
            xl: '110vh',
            lg: '110vh',
            md: 'auto',
            sm: 'auto',
            xs: 'auto',
          },
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
            fontSize: { lg: '98px', md: '64px', sm: '64px', xs: '70px' },
          }}
        >
          Get In Touch
        </Typography>
        <Typography
          color='secondary.main'
          sx={{
            textAlign: 'center',
            marginBottom: '3%',
            fontFamily: 'Birds',
            fontSize: {
              xs: '30px',
              sm: '60px',
              md: '35px',
              lg: '40px',
              xl: '60px',
            },
            paddingLeft: {
              xs: '5px',
              sm: '0px',
              md: '0px',
              lg: '0px',
              xl: '0px',
            },
            paddingRight: {
              xs: '5px',
              sm: '0px',
              md: '0px',
              lg: '0px',
              xl: '0px',
            },
            paddingBottom: {
              xs: '50px',
              sm: '0px',
              md: '0px',
              lg: '0px',
              xl: '0px',
            },
          }}
        >
          <span style={{ color: 'red' }}>*</span>For first time clients please
          reach out through phone first
        </Typography>
        <motion.div
          className='contactFlexBox'
          animate={controls}
          variants={squareVariants}
          initial='hidden'
          ref={ref}
        >
          <Box
            sx={{
              width: {
                xl: '40%',
                lg: '50%',
                md: '60%',
                sm: '90%',
                xs: '100%',
              },
              height: '60vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: {
                xl: '0px',
                lg: '0px',
                md: '50px',
                sm: '50px',
                xs: '50px',
              },
              marginTop: {
                xl: '0px',
                lg: '0px',
                md: '50px',
                sm: '50px',
                xs: '50px',
              },
            }}
          >
            <ContactForm />
          </Box>
          <Box
            sx={{
              height: {
                xl: '60vh',
                lg: '60vh',
                md: 'auto',
                sm: 'auto',
                xs: 'auto',
              },
              width: {
                xl: '40%',
                lg: '40%',
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
                  lg: 'row',
                  md: 'row',
                  sm: 'column',
                  xs: 'column',
                },
                borderBottom: {
                  xl: '1px solid #E4DCC0',
                  lg: '1px solid #E4DCC0',
                  md: '1px solid #E4DCC0',
                  sm: 'none',
                  xs: 'none',
                },
              }}
            >
              <Box
                sx={{
                  height: '170px',
                  width: '100%',
                  borderBottom: {
                    xl: 'none',
                    lg: 'none',
                    md: 'none',
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
                    lg: '10%',
                    md: '10%',
                    sm: '0%',
                    xs: '0%',
                  },
                  height: '170px',
                  width: '100%',
                  borderBottom: {
                    xl: 'none',
                    lg: 'none',
                    md: 'none',
                    sm: '1px solid #E4DCC0',
                    xs: '1px solid #E4DCC0',
                  },
                  paddingTop: {
                    xl: 'none',
                    lg: 'none',
                    md: 'none',
                    sm: '18px',
                    xs: '18px',
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
                        lg: '60px',
                        md: '60px',
                        sm: '60px',
                        xs: '40px',
                      },
                      width: {
                        xl: '60px',
                        lg: '60px',
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
                        lg: '60px',
                        md: '60px',
                        sm: '60px',
                        xs: '40px',
                      },
                      width: {
                        xl: '60px',
                        lg: '60px',
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
                        lg: '60px',
                        md: '60px',
                        sm: '60px',
                        xs: '40px',
                      },
                      width: {
                        xl: '60px',
                        lg: '60px',
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
                        lg: '60px',
                        md: '60px',
                        sm: '60px',
                        xs: '40px',
                      },
                      width: {
                        xl: '60px',
                        lg: '60px',
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
