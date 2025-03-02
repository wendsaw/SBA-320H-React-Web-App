import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



//components import
import NavBar from "./components/NavBar";

//pages

import Home from "./pages/Home";
import About from './pages/About';
import Help from './pages/Help'


function App() {
  return (
    <>
       <div className="content">
        <NavBar />
        </div>
      <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
      </Routes>
      </main>
    </>
  );
}

export default App;
