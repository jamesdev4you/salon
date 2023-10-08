import React from 'react';
import HomeHeader from '../Home/homeHeader.js';
import HomeServices from '../Home/homeServices.js';
import HomeStylists from './HomeStylists.js';
import HomeMenu from './homeMenu.js';
import HomeContact from './homeContact';

const home = () => {
  return (
    <>
      <HomeHeader />
      <HomeServices />
      <HomeStylists />
      <HomeMenu />
      <HomeContact />
    </>
  );
};

export default home;
