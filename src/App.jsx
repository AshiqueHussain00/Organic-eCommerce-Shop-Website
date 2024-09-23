import './App.css';
import Navbar from './component/common/navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetailsDescription from './component/common/ProductDetailsDescription';


import Loader from './component/common/Loader';

// import OrderHistory from './component/common/OrderHistory';

// Homepage
const Home1 = lazy(() => import('./pages/homepages/Home1'));
const Home2 = lazy(() => import('./pages/homepages/Home2'));
const Home3 = lazy(() => import('./pages/homepages/Home3'));
const Home4 = lazy(() => import('./pages/homepages/Home4'));
const Home5 = lazy(() => import('./pages/homepages/Home5'));


//Shop
const Shop1 = lazy(() => import('./pages/homepages/Shop1'));
const Shop2 = lazy(() => import('./pages/homepages/Shop2'))

// blog
const Blog = lazy(() => import('./component/common/Blog'))
const SingleBlog = lazy(() => import('./component/common/SingleBlog'))

//About 
const About = lazy(() => import('./pages/About/About'))

//Cart & Wishlist
const Cart = lazy(() => import('./pages/Cart'));
const Wishlist = lazy(() => import('./pages/Wishlist'));


//Contact
const ContactForm = lazy(() => import('./component/common/ContactForm'));



const App = () => {

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      once: true,
      duration: 900,
      easing: "ease-out-sine",
      delay: 100,
    });
  }, []);

  AOS.refresh();


  return (
    <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-poppins'>
      <Navbar />
  
      <Suspense fallback={<Loader/>}>
        <Routes>
          {/* ---------- homepages ------- */}
          <Route path='/' element={<Home1 />} />
          <Route path='/home2' element={<Home2 />} />
          <Route path='/home3' element={<Home3 />} />
          <Route path='/home4' element={<Home4 />} />
          <Route path='/home5' element={<Home5 />} />
          <Route path='/product/:productCategory/:productId' element={<ProductDetailsDescription/>}/>

          {/* ------------- Shop ------------- */}
          <Route path='/shop1' element={<Shop1 />} />
          <Route path='/shop2' element={<Shop2 />} />

          {/* blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          {/* ------------ About --------------- */}
          <Route path='/about-us' element={<About />} />

          {/* ------------ Cart & WishList--------------- */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />



          {/* ------------- Contact --------------- */}
          <Route path='/contact-us' element={<ContactForm />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
