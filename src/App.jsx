import React, { useEffect, useState, Suspense, lazy } from 'react';
import './App.css';
import Navbar from './component/common/navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ViewModal from './component/common/ViewModal';
import Loader from './component/common/Loader';
import ScrollTop from './component/common/ScrollTop';
import PopupNewsletter from './component/common/popup/PopupNewsletter'; // Import the PopupNewsletter component

// Homepage
const Home1 = lazy(() => import('./pages/homepages/Home1'));
const Home2 = lazy(() => import('./pages/homepages/Home2'));
const Home3 = lazy(() => import('./pages/homepages/Home3'));
const Home4 = lazy(() => import('./pages/homepages/Home4'));
const Home5 = lazy(() => import('./pages/homepages/Home5'));

// Shop
const Shop1 = lazy(() => import('./pages/shop/Shop1'));
const Shop2 = lazy(() => import('./pages/shop/Shop2'));

// Blog
const Blog = lazy(() => import('./component/common/Blog'));
const SingleBlog = lazy(() => import('./component/common/SingleBlog'));

// About
const About = lazy(() => import('./pages/About/About'));

// ProductDetails
import ProductDetailDescriptionPage from './pages/ProductDetailDescriptionPage';

// Cart & Wishlist
const Cart = lazy(() => import('./pages/Cart'));
const Wishlist = lazy(() => import('./pages/Wishlist'));

// Checkout
const Checkout = lazy(() => import('./pages/Checkout'));

// Account
const Account = lazy(() => import('./pages/Account'));
const CreateAccount = lazy(() => import('./component/account/CreateAccount'));
const SignInForm = lazy(() => import('./component/account/sign'));
const OrderHistory = lazy(() => import('./component/account/OrderHistory'));
const OrderDetails = lazy(() => import('./component/account/OrderDetails'));
const Dashboard = lazy(() => import('./component/account/Dashboard'));
const Setting = lazy(() => import('./component/account/Setting'));

// Contact
const ContactForm = lazy(() => import('./pages/contact/ContactForm'));

// Error404
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

const App = () => {
  const product = useSelector((state) => state.view.product);
  const location = useLocation();
  
  const [showNewsletter, setShowNewsletter] = useState(false); // State for controlling the newsletter popup visibility

  useEffect(() => {
    window.scrollTo({ top: 10 });
  }, [location.pathname]);

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

  useEffect(() => {
    // Show newsletter popup after 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      setShowNewsletter(true);
    }, 5000);

    // Clear timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowNewsletter(false); // Function to close the newsletter popup
  };

  return (
    <div className="max-w-[100vw] min-h-screen overflow-x-hidden font-poppins">
      <Navbar />

      <Suspense fallback={<Loader />}>
        <Routes>
          {/* ---------- Homepages ------- */}
          <Route path='/' element={<Home1 />} />
          <Route path='/home2' element={<Home2 />} />
          <Route path='/home3' element={<Home3 />} />
          <Route path='/home4' element={<Home4 />} />
          <Route path='/home5' element={<Home5 />} />

          {/* ------------- Shop ------------- */}
          <Route path='/shop1' element={<Shop1 />} />
          <Route path='/shop2' element={<Shop2 />} />

          {/* Blog */}
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<SingleBlog />} />

          {/* ------------ About --------------- */}
          <Route path='/about-us' element={<About />} />

          {/* ------------ Cart & WishList--------------- */}
          <Route path='/shopping-cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />

          {/* ------------ Checkout ------------- */}
          <Route path='/shopping-cart/checkout' element={<Checkout />} />

          {/* --------- Account ------- */}
          <Route path='/account/login' element={<SignInForm />} />
          <Route path='/account/create-account' element={<CreateAccount />} />
          <Route element={<Account />} >
            <Route path='/account/dashboard' element={<Dashboard />} />
            <Route path='/account/order-history' element={<OrderHistory />} />
            <Route path='/account/order-history/order-detail/:orderId' element={<OrderDetails />} />
            <Route path='/account/settings' element={<Setting />} />
          </Route>

          {/* ------------- Contact --------------- */}
          <Route path='/contact-us' element={<ContactForm />} />

          {/*---------------- Error----------------- */}
          <Route path='*' element={<Navigate to="/404" state={{ is404: true }} />} />
          <Route path='/404' element={<ErrorPage />} />
        </Routes>

        <ScrollTop />
      </Suspense>

      {/* Show newsletter popup if visible */}
      {showNewsletter && <PopupNewsletter onClose={handleClosePopup} />}

      {product && <ViewModal />}
    </div>
  );
};

export default App;
