import { useContext } from "react";
import { BooksContext } from "../components/BooksList"; 

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
    
      {<SearBar/>}
      </div>

    </>
  );
};

export default Catalog;