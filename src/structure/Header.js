import React from 'react';
import iceCreamImg from '../assets/img/ultimate-ice-cream.svg';
import FocusLink from './FocusLink';

const Header = () => {
  return (
    <header>
      <h1>
        <img src={iceCreamImg} alt="" />
        React Ice Cream Store
      </h1>
      <nav>
        <FocusLink to="/" activeClassName="active" exact>
          Menu
        </FocusLink>
      </nav>
    </header>
  );
};

export default Header;
