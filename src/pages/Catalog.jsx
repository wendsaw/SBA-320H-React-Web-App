import { useContext } from "react";
import { BooksContext } from "../components/BooksList"; 
import { NavLink } from "react-router-dom";

import SearBar from '../components/SearBar'
import Logo from '../components/Logo'


const Catalog = () => {

  const books = useContext(BooksContext);
  console.log(books);
  
 

  return (
    <>
    <div className="home">
      <Logo/>

   <span>Wend Book Store</span>
    
      {<SearBar/>} <br></br>
      <NavLink to="/"> <p style={{ color: "red", fontSize: "18px" }}>Page still under construnction please go homepage to make book selection</p></NavLink>
      </div>

    </>
  );
};

export default Catalog;