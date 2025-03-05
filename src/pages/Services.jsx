

import Logo from "../components/Logo";
import SearBar from "../components/SearBar";
import { NavLink } from "react-router-dom";


const Services = () => {


    return (  

        <>
        <div className="home">
      <Logo/>

   <span>Wend Book Store</span>
    
      {<SearBar/>}

      <br></br>
      <NavLink to="/" > <p>Page still in construnction please go to homepage to make book selection</p></NavLink>
      </div>
        </>
    );
}
 
export default Services;