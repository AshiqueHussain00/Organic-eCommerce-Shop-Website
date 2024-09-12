
import './App.css'
import ProductSection from './component/home4/ProductSection';
import Banner from './component/home4/Banner';
import Banners from './component/home3/Banners';
import FeaturedProduct from './component/home4/FeaturedProduct';


function App() {
  return (
    
    
   

    <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-poppins'>

      <ProductSection/>
      <Banners/>
      <Banner/>
      <FeaturedProduct/>
  
    </div>
  );
}

export default App;
