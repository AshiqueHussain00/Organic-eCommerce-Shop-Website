import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity, calculateTotalPrice } from '../../redux/slice/cartSlice';


const SingleItem = ({ data }) => {


    const dispatch = useDispatch();

    const handleIncremenet = (id) => {
        if (id) {
            dispatch(increaseQuantity(id))
        }

    }
    const handleDecremenet = (id) => {

        if (id) {
            dispatch(decreaseQuantity(id));
        }

    }
    const handleDelete = (id) => {

        if (id) {
            dispatch(removeFromCart(id));
            dispatch(calculateTotalPrice());
        }

    }



    return (
        <div>
            <div className='hidden xs:grid md:hidden xmd:grid grid-cols-6 border py-4 font-normal text-gray-900 text-sm xl:text-[16px]'>

                <div className='flex items-center gap-x-3    col-span-2 pl-2'>
                    <div className='xlg:w-[100px] w-[80px] xlg:h-[100px] h-[80px] '>
                        <img src={data.images[0].main} alt={data.name} className='w-full h-full object-contain' />
                    </div>

                    <p className='tracking-wide'>{data.name}</p>
                </div>

                <div className=' flex items-center justify-center'>
                    $ {data.price.discounted}
                </div>

                <div className='flex  items-center justify-center gap-x-1 '>
                    <div className='flex items-center border py-1 px-1 xlg:px-2 gap-x-2 rounded-3xl'>
                        <div
                            onClick={() => handleDecremenet(data.id)}
                            className='border xlg:w-8 xlg:h-8 w-6 h-6 flex items-center justify-center rounded-full cursor-pointer text-lg bg-gray-50 transition-all duration-300  border-gray-50 hover:border-gray-900'>-</div>
                        <div>{data.quantity}</div>
                        <div
                            onClick={() => handleIncremenet(data.id)}
                            className=' xlg:w-8 xlg:h-8 w-6 h-6 flex items-center justify-center rounded-full text-lg bg-gray-50 cursor-pointer transition-all duration-300 border border-gray-50 hover:border-gray-900'>+</div>
                    </div>

                </div>

                <div className=' flex items-center justify-center'>
                    $ {data.totalPrice.toFixed(2)}

                </div>

                <div
                    onClick={() => handleDelete(data.id)}
                    className='text-xl xlg:text-[28px]  flex items-center justify-center cursor-pointer '>
                    <IoCloseCircleOutline className='text-gray-700 transition-all duration-300 hover:text-gray-400' />
                </div>

            </div>

            {/* ------------- for small screen -------------- */}

            <div className='xmd:hidden xs:hidden grid md:grid grid-cols-4 border- xsm:text-[16px] text-sm border'>

                <div className=' col-span-3 py-6 flex items-center gap-x-5'>

                    <div className='xsm:w-[100px] w-[80px] relative pl-3'>
                        <img src={data.images[0].main} alt={data.name} className='w-full h-full object-contain' />
                        <div
                            onClick={() => handleDelete(data.id)}
                            className=' text-xl xs:text-2xl xlg:text-[28px]  flex items-center  cursor-pointer absolute top-[-20px] left-2 '>
                            <IoCloseCircleOutline className='text-gray-700 transition-all duration-300 hover:text-gray-400' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-3'>

                        <p className='tracking-wide'>{data.name}</p>
                        <p className=''>Price: <span className='text-[16px]'>$ {data.price.discounted}</span></p>

                        <div className='flex  items-center  gap-x-1 '>

                            <div className='flex items-center border py-1 px-2 gap-x-2 rounded-3xl '>
                                <div
                                    onClick={() => handleDecremenet(data.id)}
                                    className='border xs:w-8 xs:h-8 w-6 h-6 flex items-center justify-center rounded-full cursor-pointer text-lg bg-gray-50 transition-all duration-300  border-gray-50 hover:border-gray-900'>-</div>
                                <div>{data.quantity}</div>
                                <div
                                    onClick={() => handleIncremenet(data.id)}
                                    className=' xs:w-8 xs:h-8 w-6 h-6 flex items-center justify-center rounded-full text-lg bg-gray-50 cursor-pointer transition-all duration-300 border border-gray-50 hover:border-gray-900'>+</div>
                            </div>

                        </div>
                       

                    </div>

                </div>

                <div className=' flex items-center justify-center'>
                    $ {data.totalPrice.toFixed(2)}

                </div>



            </div>



        </div>
    )
}

export default SingleItem