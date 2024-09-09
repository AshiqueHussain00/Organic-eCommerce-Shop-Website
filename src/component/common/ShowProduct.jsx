import React from 'react'
import Veg from '../../assets/common/categories/Vege.svg'
import SmallProductCard from './SmallProductCard';



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

            <div className='w-11/12 xmd:w-10/12 mx-auto border-2 border-red-600 grid grid-cols-4 gap-x-6'>



                {/* -------- hot deals ----- */}
                <div className='flex flex-col border-2 border-red-700 gap-y-4'>

                    <h1 className='text-xl font-medium'>Hot Deals</h1>

                    {
                        hotDealData.slice(0, 3).map((product , index) => (

                           <SmallProductCard key={index} product={product}/>
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