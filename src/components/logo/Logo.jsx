import React from 'react';
import logo from '../../assets/logo.svg';
import "./logo.css";

const Logo = () => {
  return (
    <>
        <a href="#" target="_blank" className="logo">
          <img src={logo} alt="NR" />
        </a>
    </>
  )
}

export default Logo;