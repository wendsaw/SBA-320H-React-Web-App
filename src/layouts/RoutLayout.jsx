
import { NavLink, Outlet} from "react-router-dom";

const RootLayout = () => {

    return ( 

        <>
        <div className="layout">
        <header>
        <nav className="navbar">
          <NavLink to='/' className="links">Home</NavLink>
          <NavLink to='about' className="links">About</NavLink>
          <NavLink to='help' className="links">Help</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>

        </div>
        
        </>
     );
}
 
export default RootLayout;