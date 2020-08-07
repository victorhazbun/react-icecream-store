import React from 'react';
import iceCreamImg from '../assets/img/ultimate-ice-cream.svg';

const Header = () => {
  return (
    <header>
      <h1>
        <img src={iceCreamImg} alt=""/>
        React Ice Cream Store
      </h1>
    </header>
  );
};

export default Header;
