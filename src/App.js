import { Routes, Route } from "react-router-dom";



//components import

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import BookDetails from "./components/Books";
import Books from "./components/BookDetails";


function App() {
  return (
    <>
<NavBar/>
    <Routes>

      
        
        <Route index element={<Home />} />
        <Route path="books" element={< Books />} />
        <Route path="booksdetails/:id" element={<BookDetails />} />
      
    </Routes>
    </>
  );
}

export default App;
