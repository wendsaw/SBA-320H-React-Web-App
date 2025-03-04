
import { NavLink, Outlet} from "react-router-dom";

const HomeLayout = () => {


    return ( 

        <>
        <div className="home-layout">
        <nav className="Nest-nab">
          <NavLink to='catalog' className="links">Catalog</NavLink>
          <NavLink to='download' className="links">Downloads</NavLink>
          <NavLink to='recommendation' className="links">Recommendation</NavLink>
          <NavLink to='services' className="links">Services</NavLink>
          <NavLink to='events' className="links">Events</NavLink>
          <NavLink to='research' className="links">Research</NavLink>
          <NavLink to='teens' className="links">Teens</NavLink>
          <NavLink to='kids' className="links">Kids</NavLink>

        </nav>
     
      <main>
        <Outlet/>
      </main>

        </div>
        
        </>
     );
}

export default HomeLayout;