import { NavLink } from "react-router-dom";



const Error = () => {

    return ( 

        <div className="error">

            <h1>Page not Found</h1>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Debitis voluptatum saepe error fuga, esse magni rerum voluptates,
                recusandae facilis officiis commodi, labore laboriosam quo similique 
                libero eos cum sapiente eaque.</p>
                <p>Go to <NavLink to='/'>Home Page</NavLink></p>
        </div>
     );
}
 
export default Error;