import './App.css'
import Home1 from './component/home1/HOme1';
import Home5 from './component/home5/Home5'
import Home4 from './pages/homepages/Home4';
// import Homepage2 from './component/home2/homepage2'
import Home3 from './component/home3/Home3';
import Navbar from './component/common/navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const App = () => {


  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
        once: true,
        duration: 900,
        easing: "ease-out-sine",
        delay: 100,
    })
  }, []);

    AOS.refresh();
 

  return (

    <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-poppins'>
      <Navbar/>
      {/* <Homepage2/> */}
      {/* <Home4/> */}
      {/* <Home1/> */}
      {/* <Home5/> */}
      <Home3 />
    </div>
  );
};

export default App;
