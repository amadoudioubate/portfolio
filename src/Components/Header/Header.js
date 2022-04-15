import React from 'react';
import NavBar from '../NavBar/NavBar';
import Logo from '../Logo/Logo';
import './Header.css';

function Header() {
  return (
    <header>
        <Logo />
        <NavBar/>
    </header>
  )
}

export default Header;