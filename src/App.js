
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


//components import


//Layouts
import RootLayout from './layouts/RoutLayout';
import HelpLayout from './layouts/HelpLayout';
//pages

import Home from "./pages/Home";
import About from './pages/About';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import Catalog from './pages/Catalog';
import Error from './pages/Error';
import BookDetails from './components/BookDetails';

const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='help' element={<HelpLayout/>}>
        <Route path='faq' element={<Faq/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
      <Route path="catalog" element={<Catalog />} />
      <Route path='*' element={<Error/>}></Route>
      <Route path='book/:id' element={<BookDetails/>}/>

    </Route>

  )
)

function App() {
  return (
    <>
      <div className="content">

      </div>
      <RouterProvider router={router} />
    </>


  );
}

export default App;
