
import { Link } from "react-router-dom";

import React from "react";


const NavBar = () => {

    return (
        <nav className="navbar">

          <Link to='/' className="links">Home</Link>
          <Link to='books' className="links">About</Link>
          <Link to='help' className="links">Help</Link>
        
      
        </nav>
      );
}
 
export default NavBar;