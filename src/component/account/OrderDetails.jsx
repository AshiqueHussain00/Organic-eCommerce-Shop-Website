import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { orderHistory } from '../../data/common/order-history';
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import { IoMdCheckmark } from "react-icons/io";
import { useLocation } from 'react-router-dom';


// {
//   id: "1",
//   orderId: "101",
//   customerName: "Daniel Russell",
//   date: "15 September, 2024",
//   NoOfProducts: 3,
//   status: "processing",
//   billing: {
//       address: "4140 Parker Rd. Allentown, New Mexico 31134",
//       email: "dainnrussell@gmail.com",
//       phone: "(671) 565-0110",
//   },
//   shipping: {
//       address: "4140 Parker Rd. Allentown, New Mexico 31134",
//       email: "dainnrussell@gmail.com",
//       phone: "(671) 565-0110",
//   },
//   paymentMethod: "Paypal",
//   subtotal: 335,
//   discount: "20%",
//   shipping: "free",
//   totalPrice: 84,
//   orderedProduct: [

//       {
//           id: 's5',
//           name: 'Banana Chips',
//           sku: '2SJ4243',
//           price: 14,
//           quantity: 2,
//           images: [
//               {
//                   main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
//                   thumbnails: [
//                       'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
//                       'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
//                       'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
//                       'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
//                   ]
//               }


//           ]

//       },
//       {
//           id: 'f2',
//           name: 'Papaya',
//           sku: '2SJ4256',
//           price: 23,
//           quantity: 1,
//           images: [
//               {
//                   main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
//                   thumbnails: [
//                       'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
//                       'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
//                       'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
//                   ]
//               }
//           ],

//       },
//       {
//           id: 'b4',
//           name: 'Maaza',
//           sku: '2SJ42789',
//           price: 16,
//           quantity: 3,
//           images: [
//               {
//                   main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
//                   thumbnails: [
//                       'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
//                       'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
//                       'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
//                       'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
//                   ]
//               }
//           ],

//       },

//   ]
// }





const steps = [
  {
    id: 1,
    step: 1,
    status: "order received",
    title: "Order received"
  },
  {
    id: 2,
    step: 2,
    status: "process",
    title: "Processing"
  },
  {
    id: 3,
    step: 3,
    status: "on the way",
    title: "On the way"
  },
  {
    id: 4,
    step: 4,
    status: "completed",
    title: "Delivered"
  },
]



const OrderDetails = () => {

  const { orderId } = useParams();
  const location = useLocation();

  const [order, setOrder] = useState([]);

  const [stepNumber, setStepNUmber] = useState(1);

  let reachedStep;

  useEffect(() => {

    const productOrder = orderHistory.filter(item => item.orderId === orderId);

    setOrder(productOrder[0]);

    const filterArray = steps.filter(item => item.status.toLowerCase() === productOrder[0].status.toLowerCase());

    console.log(filterArray)

    if (filterArray.length !== 0) {
      setStepNUmber(filterArray[0].step);
    }






  }, [location.pathname]);


  return (
    <section className='w-full xmd:px-4 px-3 py-6'>


      {
        order.length !== 0 ? (

          <div className=' flex flex-col gap-y-10 '>

            {/* ----------- 1st row --------- */}


            <div className='flex items-center justify-between border py-3 px-2 '>

              <div className='flex smd:flex-row flex-col xmd:gap-x-3 gap-x-2 gap-y-2'>

                <h2 className='text-xl font-semibold text-gray-900'>Order Details</h2>
                <p className='flex items-center text-gray-700 text-sm'><GoDotFill className='text-gray-600 text-xs' /> {order.date}</p>
                <p className='flex items-center text-gray-700 text-sm'><GoDotFill className='text-gray-600 text-xs' /> {order.NoOfProducts} Products</p>

              </div>

              <Link
                to={`/account/order-history`}
                state={{ id: true }}
                className="ml-4 text-primary lg:text-base text-sm transition-all duration-300 hover:text-branding-success hover:underline"
              >
                Back to List
              </Link>



            </div>

            {/* --------- 2nd row -------- */}

            <div className='grid lg:grid-cols-3 grid-cols-2 gap-x-4  gap-y-6  '>

              {/* --------- address ------ */}

              <div className='flex flex-col xs:flex-row  col-span-2 lg:justify-start justify-between lg:gap-x-0 gap-x-2 '>

                {/* ------- billing address ----- */}

                <div className='flex flex-col xs:mb-0 mb-6'>

                  <p className='border lg:rounded-tr-lg rounded-t-lg py-2 px-2 uppercase text-gray-400 text-sm font-medium'>Billing Address</p>

                  <div className='flex flex-col gap-y-5  px-2 py-5 border lg:rounded-bl-lg rounded-b-lg'>

                    <div className='flex flex-col gap-y-1 '>
                      <h2 className='text-gray-900 font-normal xl:text-base text-sm'>{order.customerName}</h2>
                      <p className='text-sm text-gray-600 font-normal xl:w-[90%]'>{order.billing.address}</p>
                    </div>


                    <div className='flex flex-col gap-y-1 text-sm'>
                      <h2 className=' text-gray-400 font-normal'>Email</h2>
                      <p className='text-gray-900'>{order.billing.email}</p>
                    </div>

                    <div className='flex flex-col gap-y-1 text-sm'>
                      <h2 className=' text-gray-400 font-normal'>Phone</h2>
                      <p className='text-gray-900'>{order.billing.phone}</p>
                    </div>

                  </div>


                </div>

                {/* -------- shipping address ----- */}

                <div className='flex flex-col   '>

                  <p className='border lg:rounded-tr-lg rounded-t-lg py-2 px-2 uppercase text-gray-400 text-sm font-medium'>Shipping Address</p>

                  <div className='flex flex-col gap-y-5  px-2 py-5 border lg:rounded-br-lg rounded-b-lg '>

                    <div className='flex flex-col gap-y-1 '>
                      <h2 className='text-gray-900 font-normal xl:text-base text-sm'>{order.customerName}</h2>
                      <p className='text-sm text-gray-600 font-normal xl:w-[90%]'>{order.shipping.address}</p>
                    </div>


                    <div className='flex flex-col gap-y-1 text-sm'>
                      <h2 className=' text-gray-400 font-normal'>Email</h2>
                      <p className='text-gray-900'>{order.shipping.email}</p>
                    </div>

                    <div className='flex flex-col gap-y-1 text-sm'>
                      <h2 className=' text-gray-400 font-normal'>Phone</h2>
                      <p className='text-gray-900'>{order.shipping.phone}</p>
                    </div>

                  </div>


                </div>




              </div>

              {/* ------- order-details ------- */}

              <div className='col-span-1 border rounded-lg hidden lg:flex flex-col w-full  '>

                <div className='flex py-3 px-3 gap-x-2 border-b'>

                  <p className='flex flex-col border-r w-full'>
                    <span className='uppercase text-xs xl:text-[13px] text-gray-400'>Order Id</span>
                    <span className='text-sm text-gray-900'>#{order.orderId}</span>

                  </p>

                  <p className='flex flex-col w-full'>
                    <span className='uppercase text-xs xl:text-[13px] text-gray-400'>Payment Method</span>
                    <span className='text-sm text-gray-900'>{order.paymentMethod}</span>

                  </p>

                </div>

                <div className='flex flex-col text-sm px-3'>

                  <p className='w-full flex justify-between  py-3 border-b'>

                    <span className='text-gray-600'>Subtotal:</span>
                    <span className='text-gray-900'>${order.subtotal.toFixed(2)}</span>

                  </p>

                  <p className='w-full flex justify-between  py-3 border-b'>

                    <span className='text-gray-600'>Discount</span>
                    <span className='text-gray-900'>{order.discount}</span>

                  </p>

                  <p className='w-full flex justify-between  py-3 border-b'>

                    <span className='text-gray-600'>Shipping</span>
                    <span className='text-gray-900 capitalize'>{order.shippingCharge}</span>

                  </p>

                  <p className='w-full flex justify-between  py-3 xl:text-lg text-base'>

                    <span className='text-gray-900 '>Total</span>
                    <span className=' capitalize text-branding-success'>${order.totalPrice.toFixed(2)}</span>

                  </p>

                </div>

              </div>

            </div>



            {/* --------- small screen (order  detail row ) --------- */}

            <div className=' border rounded-lg lg:hidden flex flex-col w-full  '>

              <div className='flex py-3 px-3 gap-x-2 border-b'>

                <p className='flex flex-col border-r w-full'>
                  <span className='uppercase text-xs xl:text-[13px] text-gray-400'>Order Id</span>
                  <span className='text-sm text-gray-900'>#{order.orderId}</span>

                </p>

                <p className='flex flex-col w-full'>
                  <span className='uppercase text-xs xl:text-[13px] text-gray-400'>Payment Method</span>
                  <span className='text-sm text-gray-900'>{order.paymentMethod}</span>

                </p>

              </div>

              <div className='flex flex-col text-sm px-3'>

                <p className='w-full flex justify-between  py-3 border-b'>

                  <span className='text-gray-600'>Subtotal:</span>
                  <span className='text-gray-900'>${order.subtotal.toFixed(2)}</span>

                </p>

                <p className='w-full flex justify-between  py-3 border-b'>

                  <span className='text-gray-600'>Discount</span>
                  <span className='text-gray-900'>{order.discount}</span>

                </p>

                <p className='w-full flex justify-between  py-3 border-b'>

                  <span className='text-gray-600'>Shipping</span>
                  <span className='text-gray-900 capitalize'>{order.shippingCharge}</span>

                </p>

                <p className='w-full flex justify-between  py-3 xl:text-lg text-base'>

                  <span className='text-gray-900 '>Total</span>
                  <span className=' capitalize text-branding-success'>${order.totalPrice.toFixed(2)}</span>

                </p>

              </div>

            </div>

            {/* ------------ 3rd row -------- */}

            <div className='flex justify-center border-2 border-green-500'>



              <div className=' grid grid-cols-4 w-full xxl:w-[90%] border border-red-700'>


                {
                  steps.map((data) => {



                    return (
                      <div key={data.id} className={`flex flex-col gap-y-3`}>


                        <div className='flex items-center '>

                          <div className={`border-2 border-primary text-lg 
                          ${data.step > stepNumber ? "border-dashed bg-white-100 text-primary" : "bg-primary text-white-100"
                            }
                              w-[60px] h-[60px] flex items-center justify-center rounded-full`}>
                            {
                              data.step <= stepNumber ? (<span><IoMdCheckmark className='text-xl' /></span>) : (<span>0{data.step}</span>)
                            }

                          </div>

                          {
                            data.step < 4 ? (
                              <div className={`w-[65%] xxl:w-[75%] h-[8px] mx-auto 
                                ${data.step < stepNumber ? "bg-primary" : "bg-gray-200"
                                }
                              `}>

                              </div>
                            ) : ""



                          }



                        </div>

                        <p className={`border w-max translate-x-[-6px] text-sm tracking-wider`}>
                          {data.title}
                        </p>




                      </div>
                    )
                  })
                }



              </div>

            </div>


            {/* ------------ 4th row -------- */}

            <div className='flex flex-col'>

              {/* ---------- heading --------- */}

              <div className='grid grid-cols-5 border sm:text-sm text-[13px] font-semibold  text-gray-500 text-medium uppercase py-3 rounded-t-md w-full'>

                <div className=' col-span-2  pl-5 flex items-center'>Product</div>
                <div className=' flex justify-center items-center'>Price</div>
                <div className='flex justify-center items-center text-center'>Quantity</div>
                <div className='flex justify-center items-center text-center'>Subtotal </div>
              </div>

              {/* <h2 className='md:hidden block font-semibold mb-6'>Ordered Products</h2> */}


              {/* ------- products ------- */}
              <div className='flex flex-col w-full '>

                {
                  order.orderedProduct.map((item) => (
                    <SingleProduct item={item} key={item.id} />
                  ))
                }

              </div>


            </div>


          </div>


        ) : (
          <div>

          </div>
        )
      }


    </section>
  )
}

export default OrderDetails