import React from "react";
import { FiX } from "react-icons/fi"; // Import cross icon
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import { removeFromCart , calculateTotalPrice } from "../../redux/slice/cartSlice";
import { toast } from "react-hot-toast";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  useEffect(() => {

    if (isOpen) {

      document.body.style.overflow = 'hidden';
    } else {

      document.body.style.overflow = 'auto';

    }

    return () => {
      document.body.style.overflow = 'auto';
    }

  }, [isOpen]);



  const handleRemoveFromCart = (id) => {
       if(id){
        dispatch(removeFromCart(id));
        dispatch(calculateTotalPrice());
        toast.error("Remove from Cart!");
       }
  }



  return (
    <div
      className={`fixed top-0 right-0 h-full w-[460px] bg-white-100  text-gray-900 shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      {/* Cross button to close sidebar */}
      <button
        className="absolute text-black-800 top-8 right-9 hover:text-gray-700"
        onClick={toggleSidebar}
      >
        <FiX size={28} />
      </button>

      <div className="flex flex-col justify-between h-full p-6 gap-y-6">
        {/* Cart Content */}
        <div className="flex flex-col gap-y-8 ">

          <h2 className="text-lg font-bold tracking-wider ">Shopping Card <span>({cart.length})</span></h2>


          {
            cart.length !== 0 ? (
              <div className="flex flex-col gap-y-2 h-[450px] overflow-y-scroll border">
                {
                  cart.map((item, index) => (

                    <div key={index} className="flex items-center justify-between py-4 pl-2 border-b">

                      <div className="flex items-center gap-x-5">

                        <div className="w-[80px] h-[80px]">
                          <img src={item.images[0].main} alt={item.name} className="object-contain w-full h-full" />
                        </div>

                        <div className="flex flex-col">

                          <p>{item.name}</p>
                          <p>$ {item.price.discounted.toFixed(2)}</p>

                        </div>


                      </div>

                      <div
                      onClick={()=> handleRemoveFromCart(item.id)}
                       className="mr-4 text-2xl text-gray-600 transition-all duration-200 cursor-pointer hover:text-gray-400">
                          <IoCloseCircleOutline/>
                      </div>


                    </div>
                  ))
                }

              </div>
            ) : (
              <div className="h-[300px]  grid place-items-center text-xl tracking-wider  text-gray-400">
                Cart is Empty
              </div>
            )
          }







        </div>

        {/* Checkout Button - Positioned at the bottom */}
        <div className="mt-auto checkout ">
          <div className="flex items-center justify-between mb-4">
            <p className="font-bold text-gray-900">{cart.length} Products</p>
            <p className="font-bold text-gray-900">$ {totalPrice.toFixed(2)}</p>
          </div>

          <div className="flex flex-col gap-y-4">

            {/* Link to Checkout Page */}

            <button

              className="w-full py-2 font-bold transition-all duration-300 border-2 rounded-full bg-primary text-white-100 hover:bg-white-100 hover:border-primary hover:text-primary"
              onClick={() => {
                toggleSidebar()
                navigate("/shopping-cart/checkout");
              }}
            >
              Checkout
            </button>

            <button

              className="w-full py-2 font-bold transition-all duration-300 border-2 rounded-full border-gray-50 bg-gray-50 text-primary hover:text-branding-success hover:border-branding-success "
              onClick={() => {
                toggleSidebar()
                navigate("/shopping-cart");
              }}
            >
              Go To Cart
            </button>




          </div>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
