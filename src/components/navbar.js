import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <div className="nav">
        <h2 className="logo"><NavLink className="logo-link" exact to="/">Mushroom World
        </NavLink></h2>
        <ul className="nav-menu">
          <li><NavLink className="nav-menu__link" exact to="/">Home</NavLink></li>
          <li><NavLink className="nav-menu__link" to="/edible">Edible</NavLink></li>
          <li><NavLink className="nav-menu__link" to="/not-edible">Not Edible</NavLink></li>
        </ul>
    </div>
);

export default Navbar;
