import React, { useState , useEffect } from 'react';
import { CookingData as vegetableData } from '../../data/common/CookingData';
import allproductData from '../../data/common/allproductData';
import { useParams } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import BreadCrumbs from './BreadCrumbs';


function ProductDetailsDescription() {


    const {productCategory , productId} = useParams();
    {console.log(productId);}

    // State to track the selected product (initially null to show product list)
    const [selectedProduct, setSelectedProduct] = useState(null);
    const product = allproductData.find((item) => item.id === productId);
    
    

    // Function to handle product selection
    useEffect(()=>{
       if(product){
           setSelectedProduct(product);
       }
    },[product])
    

    // Function to handle image change on thumbnail click
    const handleImageChange = (imageSrc) => {
        setSelectedProduct((prevProduct) => (prevProduct ? {
            ...prevProduct,
            currentImage: imageSrc,
        } : null));
    };


    //Product Quanitity Increment and Decrement
    const [amount, setAmount] = useState(0);

    const Increment = () => {
        // Only increment if the product is in stock
        if (selectedProduct.inStock) {
            setAmount((amount) => amount + 1);
        }
    };

    const Decrement = () => {
        // Decrease amount only if greater than or equal to  1
        setAmount((amount) => (amount >= 1 ? amount - 1 : 0));
    };

    // If no product is selected, show the list of products
    // if (!selectedProduct) {
    //     return (
    //         <div className="grid grid-cols-1 gap-6 p-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
    //             {vegetableData.map((product) => (
    //                 <div
    //                     key={product.id}
    //                     className="p-4 bg-white  border rounded-lg shadow hover:cursor-pointer"
    //                     onClick={() => handleProductSelect(product.id)}
    //                 >
    //                     <div className='w-full h-48 mb-4 '>
    //                         <img
    //                             src={product.images[0].main}
    //                             alt={product.name}
    //                             className=" w-full h-full object-contain  rounded-lg"
    //                         />

    //                     </div>

    //                     <h2 className="text-xl font-bold">{product.name}</h2>
    //                     <p className="text-gray-600">{product.mainDec}</p>
    //                 </div>
    //             ))}
    //         </div>
    //     );
    // }

    if (!selectedProduct) {
        return <h2>Product not found</h2>;
      }

    //  SINGLE PRODUCT FULL DEATAILED DESCRIPTION
    return (
        <section className="w-full xxs:w-11/12 mx-auto">
            <BreadCrumbs/>
            {/* IMAGES && DETAILS */}
            <div className="flex flex-col xmd:flex-row m-2 p-1 gap-4 xmd:m-2 xmd:px-2 lg:m-10 xmd:gap-4  xmd:justify-between xxl:gap-6">

                <div className="flex flex-col-reverse md:flex-row   gap-4 md:items-center md:justify-center">
                    {/* PRODUCT IMAGES */}
                    {/* Main Image and Thumbnails */}

                    <div className="grid grid-cols-4 md:grid-cols-1 gap-2 p-2  md:p-4 xmd:p-2 justify-items-center  xmd:gap-2 thumbnails">
                        {selectedProduct.images[0].thumbnails.map((thumbnail, index) => (
                            <img
                                key={index}
                                src={thumbnail}
                                alt={`Thumbnail ${index + 1}`}
                                className="object-contain w-[60px] h-[60px] md:w-[90px] md:h-[80px]  border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-600"
                                onClick={() => handleImageChange(thumbnail)}
                            />
                        ))}
                    </div>

                    <div>
                        <div>
                            {/* Main Image */}
                            <img
                                src={selectedProduct.currentImage || selectedProduct.images[0].main}
                                alt={selectedProduct.name}
                                className="object-contain rounded-lg shadow-lg min-w-full h-auto md:h-[350px] md:w-[400px] "
                            />
                        </div>
                    </div>
                </div>





                {/* PRODUCT DETAILS */}

                <div className="flex flex-col p-1 md:py-4 md:px-12 xmd:px-8 lg:px-8 xxl:mx-2 xxl:px-32">

                    <div className="flex flex-col items-start gap-2 px-2">

                        {/* NAME && STOCK */}
                        <div className="flex  flex-row  gap-1 md:gap-2 text-start justify-center items-center">
                            <h2 className="text-2xl md:text-3xl  xlg:text-4xl font-semibold">{selectedProduct.name}</h2>
                            <h3 className={`text-sm md:text-base rounded-lg px-1 md:px-2  font-semibold whitespace-nowrap  ${selectedProduct.inStock ? 'text-green-600' : 'text-red-700'} ${selectedProduct.inStock ? 'bg-soft_primary' : 'bg-red-300'}`}>{selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}</h3>
                        </div>
                        {/* RATING && SKU CODE */}
                        <div className="flex flex-row  items-center gap-6">
                            <h2 className="flex space-x-1">{Array.from({ length: 5 }, (elem, index) => {
                                let number = index + 0.5;
                                return (<span key={index}>
                                    {selectedProduct.rating >= index + 1 ? (
                                        <FaStar className="text-yellow-800 h-[12px] w-[12px]" />
                                    ) : selectedProduct.rating >= number ? (
                                        <FaStarHalfAlt className="text-yellow-800 h-[12px] w-[12px]" />
                                    ) : (
                                        <FaRegStar className="text-yellow-800 h-[12px] w-[12px]" />
                                    )}

                                </span>)
                            })} <span className="text-xs md:text-sm mr-2 font-medium text-gray-500">{selectedProduct.review} Reviews</span></h2>
                            <h3 className="text-sm md:text-lg font-semibold">SKU: <span className="text-xs md:text-base text-gray-500 font-normal">{selectedProduct.sku}</span></h3>
                        </div>
                        {/* PRICE && DISCOUNT */}
                        <div className="flex flex-row gap-2 items-center text-start">
                            <p className="font-bold text-gray-400 flex flex-row items-center">
                                <span className="text-md md:text-lg  text-gray-400 line-through">${selectedProduct.price.original}</span>
                                <span className="ml-2 mr-2 text-xl md:text-2xl text-green-500">${selectedProduct.price.discounted}</span>
                            </p>
                            <p className="text-xs md:text-sm font-semibold bg-red-100 p-1 rounded-lg text-red-500">{selectedProduct.promotions.discount}</p>

                        </div>


                    </div>
                    <hr className="w-full border-t border-gray-300 my-4" />

                    <div className="flex flex-col gap-2">
                        {/* BRAND && SHARE ITEM */}
                        <div className="flex flex-row items-center justify-between gap-4 md:gap-12">
                            <h3 className="text-sm  md:text-base  xmd:text-sm xlg:text-base font-semibold">Brand: <span className="text-xs md:text-sm xmd:text-xs xlg:text-sm font-medium">{selectedProduct.brand}</span></h3>

                            {/* <h3 className="flex space-x-2 md:space-x-4  xmd:space-x-2 text-xs md:text-base xmd:text-xs  xlg:text-base items-center font-semibold text-gray-800 mr-1">Share item:  {selectedProduct.socialMedia.map((social, index) => {
                                const Icon = Object.values(social)[0];
                                return (
                                    <a
                                        href={selectedProduct.socialLink[index]}
                                        key={index}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 transition hover:bg-primary hover:text-white-200 p-1 hover:rounded-full"
                                    >
                                        <Icon className="h-[15px] w-[15px] md:h-[20px] md:w-[20px] xmd:h-[15px] xmd:w-[15px]  xlg:h-[20px] xlg:w-[20px]" />
                                    </a>
                                );
                            })}</h3> */}

                        </div>

                        {/* MAIN DESCRIPTION */}

                        <div>
                            <p className="text-sm text-gray-500">{selectedProduct.mainDec}</p>
                        </div>

                    </div>

                    <hr className="w-full border-t border-gray-300 my-4" />

                    {/* AMOUNT OF ITEM && ADD TO CART */}
                    <div className="flex  flex-row lg:flex-col  gap-5 xxs:gap-4 md:gap-6 p-2 ">

                       

                        <div className="flex space-x-3 xxs:space-x-4 md:space-x-6 justify-center">
                            <button className="flex items-center text-md md:text-lg font-medium text-white-200 px-2 xxs:px-4 md:px-12 xxl:px-20 py-2 bg-light-branding-success rounded-full">Add to Cart <HiOutlineShoppingBag className="ml-2 h-[20px] w-[20px]" /></button>

                        </div>

                        <div className="flex space-x-3 xxs:space-x-4 md:space-x-6 justify-center">
                            <div className="flex space-x-3 lg:space-x-8 bg-white-300 rounded-full p-1 md:px-3 md:py-2 lg:justify-center items-center">
                                <button onClick={Decrement} ><FaMinusCircle style={{ color: 'gray' }} className="h-[20px] w-[20px] md:h-[25px] md:w-[25px]" /></button>
                                <div className="text-md md:text-lg">{amount}</div>
                                <button onClick={Increment}><FaPlusCircle style={{ color: 'gray' }} className="h-[20px] w-[20px] md:h-[25px] md:w-[25px]" /></button>
                            </div>
                            <button><GoHeart className="h-[25px] w-[25px] ml-2" /></button>
                        </div>
                    </div>





                    <hr className="w-full border-t border-gray-300 my-4" />

                    {/* CATEGORY && TAGS */}

                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm md:text-base flex items-center font-semibold text-black-900 ">Categories: <span className="text-sm ml-2 font-medium text-gray-500">{selectedProduct.category}</span></h3>
                        <h3 className="text-sm md:text-base font-semibold">Tag: {""}<span>{selectedProduct.tags.map((tag, index) => (<span key={index} className="mr-2 text-sm font-medium text-gray-500">{tag}</span>))}</span></h3>
                    </div>
                </div>



            </div>



        </section>
    )
}

export default ProductDetailsDescription;
