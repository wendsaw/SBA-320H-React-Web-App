
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
import Downloads from './pages/Downloads';
import Events from './pages/Events';
import Kids from './pages/Kids';
import Recommendatio from './pages/Recommendation';
import Research from './pages/Research';
import Services from './pages/Services';
import Teens from './pages/Teens';

const router = createBrowserRouter(

  createRoutesFromElements(

     <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='help' element={<HelpLayout />}>
      <Route path='faq' element={<Faq />} />
      <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='*' element={<Error />}></Route>
      <Route path='book/:id' element={<BookDetails />} />
      


      <Route path="catalog" element={<Catalog />} />
      <Route path="download" element={<Downloads />} />
      <Route path="events" element={<Events />} />
      <Route path="kids" element={<Kids />} />
      <Route path="recommendation" element={<Recommendatio />} />
      <Route path="research" element={<Research />} />
      <Route path="services" element={<Services />} />
      <Route path="teens" element={<Teens />} />
      


    </Route>

    
  )
)

function App() {
  return (
    <>


      <RouterProvider router={router} />


    </>


  );
}

export default App;
