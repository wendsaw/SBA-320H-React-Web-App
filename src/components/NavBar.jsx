
import { Link } from "react-router-dom";

import React from "react";


const NavBar = () => {

    return (
        <nav className="navbar">

          <Link to='/'>Home</Link>
          <Link to='books'>Books</Link>
          <Link to='bookdetails/:id'>BookDetails</Link>
        
      
        </nav>
      );
}
 
export default NavBar;