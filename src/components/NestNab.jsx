




import { NavLink } from "react-router-dom";

import React from "react";


const NestNab = () => {

    return (

      
        <nav className="Nest-nab">
          <NavLink to='/' className="links">Catalog</NavLink>
          <NavLink to='about' className="links">Downloads</NavLink>
          <NavLink to='help' className="links">Recommendation</NavLink>
          <NavLink to='/' className="links">Services</NavLink>
          <NavLink to='/' className="links">Events</NavLink>
          <NavLink to='/' className="links">Research</NavLink>
          <NavLink to='/' className="links">Teens</NavLink>
          <NavLink to='/' className="links">Kids</NavLink>



        </nav>
      
        
      );
}
 
export default NestNab;