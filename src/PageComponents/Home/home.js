import React from 'react';
import HomeHeader from '../Home/homeHeader.js';
import HomeServices from '../Home/homeServices.js';
import HomeStylists from './homeStylists.js';
import HomeMenu from './homeMenu.js';
import NavBar from '../NavBar/navbar.js';
import homeimage from '../assets/headerhome.jpg';
import Footer from '../Footer/footer.js';
import { motion } from 'framer-motion';

export default function home(props) {
  return (
    <div>
      <NavBar />
      <HomeHeader headerOp={props.headerOp} />
      <HomeServices />
      <HomeStylists />
      <HomeMenu />
      <Footer />
    </div>
  );
}
