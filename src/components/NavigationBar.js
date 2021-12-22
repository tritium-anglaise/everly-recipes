import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = (props) => {
  return (
    <nav className="nav">
      <NavLink
        className={({isActive}) => `nav__link nav__link${isActive && '--hidden'}`}
        to="/"
      ><i className="fas fa-arrow-left" /> </NavLink>
      {props.children}
    </nav>
  );
};

export default NavigationBar;
