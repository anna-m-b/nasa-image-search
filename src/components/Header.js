import React from 'react';
import nasaLogo from '../images/nasa.jpg';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <img
        width="500px"
        className="header_nasa-logo"
        src={nasaLogo}
        alt="Nasa Logo"
      />
    </div>
  );
};

export default Header;
