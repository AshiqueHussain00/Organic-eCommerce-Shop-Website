
import './App.css'
import ProductSection from './component/home4/ProductSection';
import Banner from './component/home4/Banner';
import FeaturedProduct from './component/home4/FeaturedProduct';
import VideoSection from './component/home4/VideoSection'
import LatestNewsSection from './component/home4/LatestNewsSection';
import Home5 from './component/Home5/Home5';

function App() {
  return (
    
    <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-poppins'>

      <ProductSection/>
      <Banner/>
      <FeaturedProduct/>
      <VideoSection/>
    <LatestNewsSection/>


    
  
    </div>
  );
}

export default App;
