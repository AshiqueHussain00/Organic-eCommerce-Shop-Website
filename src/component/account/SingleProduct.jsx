import React from 'react'

const SingleProduct = ({ item }) => {


    return (
        <>
            <div className='py-6 border grid grid-cols-5  text-sm '>


                {/* --------- product --------- */}
                <div className='flex  items-center  gap-x-3 col-span-2 pl-2  relative'>
                    <div className='w-[80px] h-[80px]  '>

                        <img src={item.images[0].main} alt={item.name} className='w-full h-full object-contain' />
                    </div>

                    <div className='flex flex-col gap-y-4 justify-center '>
                        <p className='tracking-wide text-center'>{item.name}</p>

                    </div>



                </div>


                {/* ---------- price ---------- */}

                <div className=' flex items-center justify-center '>
                    $ {item.price}
                </div>


                {/* ---------- quantity --------- */}

                <div className=' flex items-center justify-center text-sm '>
                    x{item.quantity}
                </div>


                {/* ------ subtotal --------- */}
                <div className=' flex items-center justify-center text-sm '>
                    $ {(item.price * item.quantity).toFixed(2)}
                </div>






            </div>

              {/* ------ small screen ------- */}

            {/* <div className='flex border rounded-lg p-4 '>

               
                    <div className='w-[80px] h-[80px]'>
                        <img src={item.images[0].main} alt="ordered-product" className='w-full h-full object-cover' />

                    </div>

                    <div>
                        <p>{item.name}</p>
                        <p>$ {item.price.toFixed(2)}</p>
                    </div>
              

            </div> */}
        </>

    )
}

export default SingleProduct