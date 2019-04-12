import React from 'react';
import './Header.css';
import Logo from '../../components/Logo';
import Hamburger from '../../components/Hamburger';
// import SideBar from '../SideBar';

const Header = () => (
  <div className='header'>
    <Logo />
    <Hamburger />
    {/* <SideBar pageWrapId={"App"} outerContainerId={"App"} /> */}
  </div>
);

export default Header;