import React from 'react'
import Veg from '../../assets/common/categories/Vege.svg'
import ProductCard from '../common/ProductCard'
import allproductData from '../../data/common/allproductData'


const featuredProduct = [
  
        {
            id: 101,
            imageSrc: Veg,
            type: "Vegetable",
            productName: 'Green Apple',
            price: '14.99',
            oldPrice: '29.99',
            rating: 4,
            isSale: true,
            isBestSeller: true,
            saleText: 'Discount!',
            bestSellerText: 'Sale 50%'
        },
        {
            id: 2,
            imageSrc: Veg,
            type: "Fruit",
            productName: 'Green Apple',
            price: '14.99',
            oldPrice: '29.99',
            rating: 4,
            isSale: true,
            isBestSeller: false,
            saleText: 'Discount!',
            bestSellerText: ''
        },
        {
            id: 3,
            imageSrc: Veg,
            type: "Snacks",
            productName: 'Green Apple',
            price: '14.99',
            oldPrice: '29.99',
            rating: 4,
            isSale: true,
            isBestSeller: false,
            saleText: 'Discount!',
            bestSellerText: ''
        },
        {
            id: 4,
            imageSrc: Veg,
            type: "Fruit",
            productName: 'Green Apple',
            price: '14.99',
            oldPrice: '29.99',
            rating: 4,
            isSale: true,
            isBestSeller: false,
            saleText: 'Discount!',
            bestSellerText: ''
        },
        {
            id: 5,
            imageSrc: Veg,
            type: "Snacks",
            productName: 'Green Apple',
            price: '14.99',
            oldPrice: '29.99',
            rating: 4,
            isSale: true,
            isBestSeller: false,
            saleText: 'Discount!',
            bestSellerText: ''
        },
        {
            id: 6,
            imageSrc: Veg,
            type: "Fruit",
            productName: 'Green Apple',
            price: '14.99',
            oldPrice: '29.99',
            rating: 4,
            isSale: true,
            isBestSeller: false,
            saleText: 'Discount!',
            bestSellerText: ''
        }
    
]


const FeaturedProduct = () => {
  return (
    <section className='w-full relative  py-20'>

        {/* --------- container --------- */}
        <div className='w-11/12 xmd:w-10/12 mx-auto  flex flex-col gap-y-8'>

            <h1 data-aos="fade-left" className='text-center xmd:text-[40px] text-4xl font-semibold'>Featured Products</h1>

            <div data-aos="fade-right" className='w-full xxs:w-[80%] mx-auto xs:w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-5 gap-x-1 gap-y-1'>
                {
                    allproductData.slice(0,5).map((product) => (
                        <ProductCard
                        key={product.id}
                        imageSrc={product.images[0].main}
                        productName={product.name}
                        price={product.price.discounted}
                        oldPrice={product.original}
                        rating={product.rating}
                        // isBestSeller={product.isBestSeller}
                        // bestSellerText={product.bestSellerText}

                    />
                    ))
                }
            </div>

          
        </div>

    </section>
  )
}

export default FeaturedProduct