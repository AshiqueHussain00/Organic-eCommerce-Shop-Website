
import './App.css'

import Home1 from './component/home1/Home1'

import ShowProduct from './component/common/ShowProduct'
import Navbar from './component/common/navbar.jsx'
import Home5 from './component/home5/Home5'


import ProductSection from './component/home4/ProductSection';
import Banner from './component/home4/Banner';
import Banners from './component/common/Banners';
import FeaturedProduct from './component/home4/FeaturedProduct';


function App() {
  return (
    
    
   

    <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-poppins'>
       <Navbar />
     {/* <Home5/> */}
    

      <ProductSection/>
      <Banners/>
      <Banner/>
      <FeaturedProduct/>
  
    </div>
  );
}

export default App;
