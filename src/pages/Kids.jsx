
import SearBar from "../components/SearBar";
import Logo from "../components/Logo";
import { NavLink } from "react-router-dom";

const Kids = () => {


    return (  

        <>
        <div className="home">
      <Logo/>

   <span>Wend Book Store</span>
    
      {<SearBar/>}
      <br></br>
      <NavLink to="/" > <p style={{ color: "red", fontSize: "18px" }}>Page still under construnction please go to homepage to make book selection</p></NavLink>
      </div>
        </>
    );
}
 
export default Kids;