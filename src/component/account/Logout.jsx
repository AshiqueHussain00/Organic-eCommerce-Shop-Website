import React from 'react'
import { useRef, useEffect } from 'react'
import { useOnclickOutside } from '../../hooks/useOnclickOutside'
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCart } from '../../redux/slice/cartSlice';
import { resetWishlist } from '../../redux/slice/wishlistSlice';
import { toast } from 'react-hot-toast';


const Logout = ({ isLogout, setIsLogout }) => {

    const myRef = useRef(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useOnclickOutside(myRef, () => setIsLogout(false));

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.4 }, // Modal starts off-screen (above the viewport)
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4

            },
        },
        exit: { opacity: 0, scale: 0, transition: { duration: 0.3 } }, // Exit animation
    };




    useEffect(() => {

        if (isLogout) {
            document.body.style.overflow = 'hidden';
        } else {

            document.body.style.overflow = 'auto';

        }

        return () => {
            document.body.style.overflow = 'auto';
        }

    }, [isLogout])


    const logoutHandler = () => {

        dispatch(resetCart());
        dispatch(resetWishlist());
        navigate("/");
        toast.success("Logout Successfully");
        setIsLogout(false);
        

    }


    return (
        <motion.div className='fixed inset-0 grid place-items-center  z-[9999] overflow-auto bg-gray-900 bg-opacity-10  backdrop-blur-sm text-gray-900' >


            <AnimatePresence>
                <motion.div
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className=' border  rounded-lg p-8 sm:min-w-[420px] xs:min-w-[350px] min-w-[28px] min-h-[240px] flex flex-col justify-between gap-4 bg-white-100 relative' ref={myRef} onClick={(event) => event.stopPropagation()} >

                    <div className='flex flex-col gap-y-6'>
                        <h2 className='text-xl font-semibold xs:text-2xl'> Logout</h2>
                        <p className='xs:text-[16px] text-sm'> Are you sure you want to logout?</p>
                    </div>



                    <div className='flex w-full gap-4'>
                        <button
                        onClick={logoutHandler}
                         className='w-full px-4 py-2 transition-all duration-200 border-2 border-primary rounded-xl hover:bg-primary hover:text-white-100'>
                            Yes
                        </button>

                        {/* ------------- Cancel Button ---------------- */}

                        <button
                        onClick={()=> setIsLogout(false)}
                         className='w-full px-4 py-2 transition-all duration-200 border-2 border-primary rounded-xl hover:bg-primary hover:text-white-100'>

                            No
                        </button>

                    </div>
                </motion.div>
            </AnimatePresence>

        </motion.div>
    )
}


export default Logout