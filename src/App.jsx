import './App.css'

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
       {/* <Homepage2/>  */}
      {/* <Home4/> */}
      {/* <Home1/> */}
      {/* <Home5/> */}
      {/* <Home3 /> */}
    
    </div>
  );
};

export default App;
