

import Logo from "../components/Logo";
import SearBar from "../components/SearBar";
import HomeLayout from "../layouts/HomeLayout";
<img src="../public/images/logo" alt="" />

const Home = () => {
  

  return (
    <>
    <div className="home">
      <Logo/>

   <span>Denver Public Library</span>
   <HomeLayout/>
      <SearBar/>
      </div>
      
    </>
  );
};

export default Home;
