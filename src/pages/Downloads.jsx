import SearBar from "../components/SearBar";
import Logo from "../components/Logo";
import { NavLink } from "react-router-dom";

const Downloads = () => {


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
 
export default Downloads;