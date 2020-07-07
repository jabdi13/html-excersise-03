import React from 'react';
import Menu from './Menu';
import logo from '../images/Logo.png';
import '../css/components/Header.css';

const Header = () => {
  return (
    <header className="Header">
      <a href="">
        <img src={logo} />
      </a>
      <Menu />
    </header>
  );
};

export default Header;