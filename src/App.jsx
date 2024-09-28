import './App.css';
import Navbar from './component/common/navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, Suspense, lazy } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';






import ViewModal from './component/common/ViewModal';
import Loader from './component/common/Loader';
import SidebarToggle from './component/common/SidebarToggle';
import CheckoutPage from './component/checkout/CheckoutPage';

// import SidebarToggle from './component/common/SidebarToggle';


// Homepage
const Home1 = lazy(() => import('./pages/homepages/Home1'));
const Home2 = lazy(() => import('./pages/homepages/Home2'));
const Home3 = lazy(() => import('./pages/homepages/Home3'));
const Home4 = lazy(() => import('./pages/homepages/Home4'));
const Home5 = lazy(() => import('./pages/homepages/Home5'));



//Shop
const Shop1 = lazy(() => import('./pages/shop/Shop1'));
const Shop2 = lazy(() => import('./pages/homepages/Shop2'))

// blog
const Blog = lazy(() => import('./component/common/Blog'))
const SingleBlog = lazy(() => import('./component/common/SingleBlog'))


//About 
const About = lazy(() => import('./pages/About/About'))

//ProductDetails
import ProductDetailDescriptionPage from './pages/ProductDetailDescriptionPage';


//Cart & Wishlist
const Cart = lazy(() => import('./pages/Cart'));
const Wishlist = lazy(() => import('./pages/Wishlist'));

//Checkout
const Checkout = lazy(() => import('./pages/Checkout'));


// Account
const Account = lazy(() => import('./pages/Account'));
const CreateAccountForm = lazy(() => import('./component/account/CreateAccount'));
const SignInForm = lazy(()=> import('./component/account/sign'))
const OrderHistory = lazy(()=> import('./component/account/OrderHistory'))
const OrderDetails = lazy(() => import('./component/account/OrderDetails'));
const Setting = lazy(() => import('./component/account/Setting'))


//Contact
const ContactForm = lazy(() => import('./component/common/ContactForm'));

//Error404
import Error404 from './component/error/Error404';
 






const ScrollTop = lazy(() => import('./component/common/ScrollTop'))




const App = () => {


  const product = useSelector((state) => state.view.product)
  const location = useLocation();


  useEffect(() => {

    window.scrollTo({
      top: 10,

    });

  }, [location.pathname])

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



  // const navigate = useNavigate();

  return (
    <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-poppins'>
      <Navbar />
     
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* ---------- homepages ------- */}
          <Route path='/' element={<Home1 />} />
          <Route path='/home2' element={<Home2 />} />
          <Route path='/home3' element={<Home3 />} />
          <Route path='/home4' element={<Home4 />} />
          <Route path='/home5' element={<Home5 />} />
          
          <Route path='/product/:productCategory/:productId' element={<ProductDetailDescriptionPage />} />

          {/* ------------- Shop ------------- */}
          <Route path='/shop1' element={<Shop1 />} />
          <Route path='/shop2' element={<Shop2 />} />

          {/* blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          {/* ------------ About --------------- */}
          <Route path='/about-us' element={<About />} />

          {/* ------------ Cart & WishList--------------- */}
          <Route path='/shopping-cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />

          {/* ------------ Checkout ------------- */}

          <Route path='/shopping-cart/checkout' element={<Checkout />} />

          {/* --------- Account ------- */}

          <Route path='/account/create-account' element={<CreateAccountForm/>}/>
          <Route path='/account/login' element={<SignInForm/>}/>

          <Route element={<Account />}>
            
         
            <Route path='/account/order-history' element={<OrderHistory/>}/>
            <Route path='/account/order-history/order-detail/:orderId' element={<OrderDetails />} />
            <Route path='/account/settings' element={<Setting/>}/>

          </Route>



          {/* ------------- Contact --------------- */}
          <Route path='/contact-us' element={<ContactForm />} />

          
          


          {/*---------------- Error----------------- */}
          <Route path="*" element={<Navigate to="/404" state={{ is404: true }} />} />
          <Route path="/404" element={<Error404 />} />

        </Routes>


        <ScrollTop />

      </Suspense>







      {
        product && <ViewModal />
      }

    </div>
  );
};

export default App;
