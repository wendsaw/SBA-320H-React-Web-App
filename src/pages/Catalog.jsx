import {  createContext, useContext } from "react";

// Create a context
const UserContext = createContext();

const Catalog = () => {
  // Use the context correctly
  const books = useContext(UserContext);

  return (
    <>
      {books ? <h1>{books.volumeInfo?.title}</h1> : <h1>Loading...</h1>}
    </>
  );
};

export default Catalog