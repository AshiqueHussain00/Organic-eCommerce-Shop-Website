import React from 'react'
import { useRef, useEffect } from 'react'
import { useOnclickOutside } from '../../hooks/useOnclickOutside'
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineClose } from "react-icons/md";


const Logout = ({ isLogout, setIsLogout }) => {

    const myRef = useRef(null)
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



    return (
        <motion.div className='fixed inset-0 grid place-items-center  z-[9999] overflow-auto bg-gray-900 bg-opacity-10  backdrop-blur-sm text-gray-900' >


            <AnimatePresence>
                <motion.div
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className=' border border-primary rounded-lg p-8 sm:min-w-[420px] xs:min-w-[350px] min-w-[28px] min-h-[240px] flex flex-col justify-between gap-4 bg-white-100 relative' ref={myRef} onClick={(event) => event.stopPropagation()} >

                    <p className='absolute text-2xl cursor-pointer right-10 top-6 text-gray-900' onClick={() => setIsLogout(false)}><MdOutlineClose /></p>

                    <div className='flex flex-col gap-y-6'>
                        <h2 className='xs:text-2xl text-xl font-semibold'> Logout</h2>
                        <p className='xs:text-[16px] text-sm'> Are you sure you want to logout?</p>
                    </div>



                    <div className='flex w-full gap-4'>
                        <button className='border-2 w-full px-4 py-2 transition-all duration-200 border-primary rounded-xl hover:bg-primary hover:text-white-100'>
                            Yes
                        </button>

                        {/* ------------- Cancel Button ---------------- */}

                        <button className='border-2 w-full px-4 py-2 transition-all duration-200 border-primary rounded-xl hover:bg-primary hover:text-white-100'>

                            No
                        </button>

                    </div>
                </motion.div>
            </AnimatePresence>

        </motion.div>
    )
}


export default Logout