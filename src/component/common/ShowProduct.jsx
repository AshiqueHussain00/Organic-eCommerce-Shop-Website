import React from 'react'
import Veg from '../../assets/common/categories/Vege.svg'


const products = [
    {
        
        image: Veg,
        productName: 'Green Apple',
        price: '14.99',
        oldPrice: '29.99',
        rating: 1,
        isBestSeller: true,
        isSale: true,

    },
    {
        image: Veg,
        productName: 'Banana',
        rating: 4,
        price: '9.99',
        isBestSeller: true,
        isSale: false,

    },
    {
        image: Veg,
        productName: 'Orange',
        price: '7.99',
        rating: 4,
        isBestSeller: true,
        isSale: true,

    },
    {
        image: Veg,
        productName: 'Mango',
        price: '19.99',
        rating: 5,
        isBestSeller: false,
        isSale: true,


    },
    {
        image: Veg,
        productName: 'Mango',
        price: '19.99',
        rating: 5,
        isBestSeller: false,
        isSale: false,

    },
    {
        image: Veg,
        productName: 'Mango',
        price: '19.99',
        rating: 2,
        isBestSeller: false,
        isSale: false,

    },
    {
        image: Veg,
        productName: 'Mango',
        price: '19.99',
        rating: 4,
        isBestSeller: false,
        isSale: false,

    },
    {
        image: Veg,
        productName: 'Mango',
        price: '19.99',
        rating: 3,
        isBestSeller: true,
        isSale: false,

    },

    {
        image: Veg,
        productName: 'Mango',
        price: '19.99',
        rating: 5,
        isBestSeller: true,
        isSale: true,

    },
];



const ShowProduct = ({ isHotSale = true }) => {

    const hotDealData = products.filter(product => product.isSale === true);
    const bestSellerData = products.filter(product => product.isBestSeller === true);
    const topRatedProduct = products.filter(product => product.rating >= 4);

    return (
        <section className='w-full py-10'>

            {/* --------- container -------- */}

            <div className='w-11/12 xmd:w-10/12 mx-auto border-2 border-red-600 grid grid-cols-4'>



                {/* -------- hot deals ----- */}
                <div className='flex flex-col border-2 border-red-700 gap-y-4'>

                    <h1 className='text-xl'>Hot Deals</h1>

                    {
                        hotDealData.slice(0, 3).map((product , index) => (
                            <div className='flex gap-x-3  border border-gray-100 pr-4 py-3 rounded-lg  transition-all duration-200 hover:border-branding-success green-shadow group' key={index}>

                                <div>
                                    <img src={product.image} alt={product.productName} />
                                </div>

                               {/* -------- content  ------- */}
                                <div className='flex flex-col  justify-center '>

                                    {/* ----- product name ------ */}

                                    <p className='text-sm'>{product.productName}</p>

                                    {/* ---- price -- */}

                                    <p>{`$${product.price}`}</p>

                                    {/* Rating (Stars) */}
                                    <div className="flex items-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-5 h-5 ${i < product.rating ? 'text-branding-warning' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>

                                </div>

                            </div>
                        ))
                    }


                </div>

                {/* --------- best Seller -------- */}
                <div>

                </div>

                {/* --------- top rated ------------- */}

                <div>

                </div>

                {/* -------------- sales -------------- */}

                <div>

                </div>

            </div>



        </section>
    )
}

export default ShowProduct