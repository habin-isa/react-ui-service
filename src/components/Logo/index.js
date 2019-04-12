import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => (
  <div className='logo'>
    <Link className="logoLink" to="/">
      <b>VEGI</b>TABLE
    </Link>
  </div>
);

export default Logo;