import React from 'react';
import "./header.css";
import Logo from '../logo/Logo';

const Header = (props) => {
  return (
    <header>
        <Logo />
        {props.children}
    </header>
  )
}

export default Header;