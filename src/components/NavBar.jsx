
import { Link, NavLink } from "react-router-dom";

import React from "react";


const NavBar = () => {

    return (

      <header>
        <nav className="navbar">
          <NavLink to='/' className="links">Home</NavLink>
          <NavLink to='about' className="links">About</NavLink>
          <Link to='help' className="links">Help</Link>
        </nav>
      </header>
        
      );
}
 
export default NavBar;