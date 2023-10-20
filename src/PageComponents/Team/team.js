import React from 'react';
import HomeHeader from '../Home/homeHeader.js';
import NavBar from '../NavBar/navbar.js';
import { Typography, Box } from '@mui/material';
import Woman from '../assets/woman.jpg';
import Woman2 from '../assets/woman2.jpg';
import Woman3 from '../assets/woman3.jpg';
import Woman4 from '../assets/woman4.jpg';
import { MyTeamButton, MyTeamButtonDark } from '../styledComponents.js';
import '../../index.css';
import Footer from '../Footer/footer.js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Team = (props) => {
  const { state } = useLocation();
  const { targetId } = state || {};

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView();
    }
  }, [targetId]);

  const teamSections = [
    {
      picture: Woman,
      title: 'James Boyle',
      job: 'Founder / Beauty Analyst',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nibh sed sapien fermentum vulputate at vitae sapien. Donec consequat ultricies risus nec faucibus. Integer facilisis erat et dui dapibus, a ullamcorper elit mollis. Aenean in luctus lorem.',
      primaryColor: '#1B1E1E',
      backgroundColor: '#E4DCC0',
      dabutton: <MyTeamButtonDark />,
      section: 'womanOne',
    },
    {
      picture: Woman2,
      title: 'James Boyle',
      job: 'Founder / Beauty Analyst',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nibh sed sapien fermentum vulputate at vitae sapien. Donec consequat ultricies risus nec faucibus. Integer facilisis erat et dui dapibus, a ullamcorper elit mollis. Aenean in luctus lorem.',
      primaryColor: '#E4DCC0',
      backgroundColor: '#1B1E1E',
      dabutton: <MyTeamButton />,
      section: 'womanTwo',
    },
    {
      picture: Woman3,
      title: 'James Boyle',
      job: 'Founder / Beauty Analyst',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nibh sed sapien fermentum vulputate at vitae sapien. Donec consequat ultricies risus nec faucibus. Integer facilisis erat et dui dapibus, a ullamcorper elit mollis. Aenean in luctus lorem.',
      primaryColor: '#1B1E1E',
      backgroundColor: '#E4DCC0',
      dabutton: <MyTeamButtonDark />,
      section: 'womanThree',
    },
    {
      picture: Woman4,
      title: 'James Boyle',
      job: 'Founder / Beauty Analyst',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nibh sed sapien fermentum vulputate at vitae sapien. Donec consequat ultricies risus nec faucibus. Integer facilisis erat et dui dapibus, a ullamcorper elit mollis. Aenean in luctus lorem.',
      primaryColor: '#E4DCC0',
      backgroundColor: '#1B1E1E',
      dabutton: <MyTeamButton />,
      section: 'womanFour',
    },
  ];

  return (
    <div>
      <NavBar />
      <HomeHeader headerOp={props.headerOp} />
      <Box
        sx={{
          height: 'auto',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1B1E1E',
        }}
      >
        {teamSections.map(
          ({
            picture,
            title,
            job,
            desc,
            primaryColor,
            backgroundColor,
            dabutton,
            section,
          }) => (
            <Box
              id={section}
              sx={{
                width: '100%',
                height: {
                  xs: 'auto',
                  sm: 'auto',
                  md: 'auto',
                  lg: 'auto',
                  xl: '80vh',
                },
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '50px',
                padding: {
                  xs: 'none',
                  sm: 'none',
                  md: 'none',
                  lg: '1em',
                  xl: '14em',
                },
                backgroundColor: backgroundColor,
              }}
            >
              <Box
                sx={{
                  width: '30%',
                  height: '62vh',
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  borderColor: primaryColor,
                  borderRadius: '15px',
                  background: `url(${picture})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'none',
                  backgroundPosition: 'center',
                  display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'none',
                    xl: 'flex',
                  },
                }}
              />
              <Box
                sx={{
                  width: {
                    xs: '90%',
                    sm: '90%',
                    md: '90%',
                    lg: '80%',
                    xl: '70%',
                  },
                  height: {
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'auto',
                    xl: '62vh',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: '15px',
                  borderWidth: {
                    xs: '0px',
                    sm: '0px',
                    md: '0px',
                    lg: '0px',
                    xl: '3px',
                  },
                  borderStyle: 'solid',
                  borderColor: {
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'none',
                    xl: primaryColor,
                  },
                  borderRadius: '15px',
                  padding: '15px',
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: '200px',
                      sm: '200px',
                      md: '300px',
                      lg: '300px',
                      xl: 'none',
                    },
                    height: {
                      xs: '200px',
                      sm: '200px',
                      md: '300px',
                      lg: '300px',
                      xl: 'none',
                    },
                    borderColor: primaryColor,
                    borderWidth: '3px',
                    borderStyle: 'solid',
                    borderRadius: '50%',
                    background: `url(${picture})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'none',
                    backgroundPosition: 'center',
                    display: {
                      xs: 'flex',
                      sm: 'flex',
                      md: 'flex',
                      lg: 'flex',
                      xl: 'none',
                    },
                  }}
                />
                <Typography
                  sx={{
                    color: primaryColor,
                    fontFamily: 'Birds',
                    fontSize: {
                      lg: '98px',
                      md: '64px',
                      sm: '64px',
                      xs: '60px',
                    },
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{
                    color: primaryColor,
                    fontFamily: 'Birds',
                    fontSize: {
                      xl: '50px',
                      lg: '58px',
                      md: '54px',
                      sm: '44px',
                      xs: '24px',
                    },
                  }}
                >
                  {job}
                </Typography>
                <Typography
                  variant='p'
                  sx={{ color: primaryColor, width: '90%' }}
                >
                  {desc}
                </Typography>
                <Typography
                  variant='p'
                  sx={{ color: primaryColor, width: '90%' }}
                >
                  {desc}
                </Typography>
                <Typography
                  variant='p'
                  sx={{ color: primaryColor, width: '90%' }}
                >
                  {desc}
                </Typography>
                {dabutton}
              </Box>
            </Box>
          )
        )}
      </Box>
      <Footer />
    </div>
  );
};

export default Team;
