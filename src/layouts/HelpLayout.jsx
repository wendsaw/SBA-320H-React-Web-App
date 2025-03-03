import { NavLink, Outlet } from "react-router-dom";





const HelpLayout = () => {



    return ( 
<div className="help-layout">

<h2>Website Help</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat delectus alias architecto commodi, 
    cum neque vero, soluta quas at omnis porro! Ad atque cum ipsa, 
    maiores sunt adipisci reprehenderit accusamus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat delectus alias architecto commodi, 
    cum neque vero, soluta quas at omnis porro! Ad atque cum ipsa, 
    maiores sunt adipisci reprehenderit accusamus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat delectus alias architecto commodi, 
    cum neque vero, soluta quas at omnis porro! Ad atque cum ipsa, 
    maiores sunt adipisci reprehenderit accusamus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat delectus alias architecto commodi, 
    cum neque vero, soluta quas at omnis porro! Ad atque cum ipsa, 
    maiores sunt adipisci reprehenderit accusamus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat delectus alias architecto commodi, 
    cum neque vero, soluta quas at omnis porro! Ad atque cum ipsa, 
    maiores sunt adipisci reprehenderit accusamus.</p>

    <nav>
        <NavLink to='faq'>Wiew the FAQ</NavLink>
        <NavLink to='contact'>Contact US</NavLink>

    </nav>

    <Outlet/>


</div>


     );
}
 
export default HelpLayout;