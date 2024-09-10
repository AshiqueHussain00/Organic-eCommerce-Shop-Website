import './App.css'
import ProductDetails from './component/common/Productdetails';
import Navbar from './component/common/navbar';

import ShowProduct from './component/common/ShowProduct'
import Home1 from './component/home1/Home1'
import Banner from './component/home3/Banner'
import HeaderBottom from './component/home3/headerBottom'



function App() {


  return (

    <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-poppins'>
      <Navbar/>
      {/* <ShowProduct/>
      <Home1/> */}
    <Banner/>
    {/* <HeaderBottom/> */}

    </div>





  )
}

export default App
