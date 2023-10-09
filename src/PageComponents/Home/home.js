import React from 'react';
import HomeHeader from '../Home/homeHeader.js';
import HomeServices from '../Home/homeServices.js';
import HomeStylists from './homeStylists.js';
import HomeMenu from './homeMenu.js';
import NavBar from '../NavBar/navbar.js';

const home = () => {
  return (
    <>
      <NavBar />
      <HomeHeader />
      <HomeServices />
      <HomeStylists />
      <HomeMenu />
    </>
  );
};

export default home;
