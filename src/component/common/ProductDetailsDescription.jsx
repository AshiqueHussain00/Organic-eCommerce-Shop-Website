import React, { useState } from 'react';
import { CookingData as vegetableData } from '../../data/common/CookingData';
import { useParams } from 'react-router-dom';
import { FaStar , FaStarHalfAlt ,FaRegStar } from 'react-icons/fa';


function ProductDetailsDescription() {

    // State to track the selected product (initially null to show product list)
    const [selectedProduct, setSelectedProduct] = useState(null);
    console.log(selectedProduct);

    // Function to handle product selection
    const handleProductSelect = (productId) => {
        const product = vegetableData.find((item) => item.id === productId);
        setSelectedProduct(product);
    };

    // Function to handle image change on thumbnail click
    const handleImageChange = (imageSrc) => {
        setSelectedProduct((prevProduct) => (prevProduct ? {
            ...prevProduct,
            currentImage: imageSrc,
        } : null));
    };

    // If no product is selected, show the list of products
    if (!selectedProduct) {
        return (
            <div className="grid grid-cols-1 gap-6 p-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
                {vegetableData.map((product) => (
                    <div
                        key={product.id}
                        className="p-4 bg-white  border rounded-lg shadow hover:cursor-pointer"
                        onClick={() => handleProductSelect(product.id)}
                    >
                        <div className='w-full h-48 mb-4 '>
                            <img
                                src={product.images[0].main}
                                alt={product.name}
                                className=" w-full h-full object-contain  rounded-lg"
                            />

                        </div>

                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p className="text-gray-600">{product.mainDec}</p>
                    </div>
                ))}
            </div>
        );
    }
    //  SINGLE PRODUCT FULL DEATAILED DESCRIPTION
    return (
        <section className="w-10/12 mx-auto">
            {/* IMAGES && DETAILS */}
            <div className="flex flex-row m-6 p-2 gap-12">
                {/* PRODUCT IMAGES   */}
                {/* Main Image and Thumbnails */}


                <div className="flex flex-col md:flex-row justify-center gap-4">
                    {/* PRODUCT IMAGES */}
                    {/* Main Image and Thumbnails */}

                    <div className="grid grid-cols-4 md:grid-cols-1 gap-2 thumbnails">
                        {selectedProduct.images[0].thumbnails.map((thumbnail, index) => (
                            <img
                                key={index}
                                src={thumbnail}
                                alt={`Thumbnail ${index + 1}`}
                                className="object-contain w-16 h-16 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500"
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
                                className="object-contain rounded-lg shadow-lg h-[400px] w-[450px]"
                            />
                        </div>
                    </div>
                </div>





                {/* PRODUCT DETAILS */}

                <div className="flex flex-col p-6">

                    <div className="flex flex-col items-start gap-2">

                        {/* NAME && STOCK */}
                        <div className="flex  flex-row items-center gap-2 text-start">
                            <h2 className="text-4xl font-semibold">{selectedProduct.name}</h2>
                            <h3 className={`text-lg rounded-lg px-1 ${selectedProduct.inStock ? 'text-green-600' : 'text-red-700'} ${selectedProduct.inStock ? 'bg-soft_primary' : 'bg-red-300'}`}>{selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}</h3>
                        </div>
                        {/* RATING && SKU CODE */}
                        <div className="flex flex-row gap-6">
                            <h2 className="flex space-x-1">{Array.from({length:5} , (elem , index) => {
                                let number = index + 0.5;
                               return ( <span key = {index}>
                                          {selectedProduct.rating >= index + 1 ? (
          <FaStar className="text-yellow-800" />
        ) : selectedProduct.rating >= number ? (
          <FaStarHalfAlt className="text-yellow-800" />
        ) : (
          <FaRegStar className="text-yellow-800" />
        )}

                                </span>)
                            })} <span className="text-sm mr-2">{selectedProduct.review} Reviews</span></h2>
                            <h3 className="text-lg font-semibold">SKU: <span className="text-base font-normal">{selectedProduct.sku}</span></h3>
                        </div>
                        {/* PRICE && DISCOUNT */}
                        <div className="flex flex-row gap-2 items-center text-start">
                            <p className="font-bold text-gray-400 flex flex-row items-center">
                                <span className="text-lg  text-gray-400 line-through">${selectedProduct.price.original}</span>
                                <span className="ml-2 text-2xl text-green-500">${selectedProduct.price.discounted}</span>
                            </p>
                            <p className="text-sm font-semibold bg-red-200 p-1 rounded-lg text-red-500">{selectedProduct.promotions.discount}</p>

                        </div>


                    </div>
                    <hr className="w-full border-t border-gray-300 my-4" />

                    <div className="flex flex-col gap-2">
                        {/* BRAND && SHARE ITEM */}
                        <div className="flex flex-row items-center justify-between gap-12">
                            <h3 className="text-md font-semibold">Brand: <span className="text-sm font-normal">{selectedProduct.brand}</span></h3>

                            <h3 className="flex space-x-4 text-sm items-center">Share Item: {selectedProduct.socialMedia.map((social, index) => {
                                const Icon = Object.values(social)[0];
                                return (
                                    <a
                                        href={selectedProduct.socialLink[index]}
                                        key={index}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 transition hover:bg-primary hover:text-white-200 p-1 hover:rounded-full"
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}</h3>

                        </div>

                        {/* MAIN DESCRIPTION */}

                        <div>
                            <p className="text-sm text-gray-500">{selectedProduct.mainDec}</p>
                        </div>

                    </div>

                    <hr className="w-full border-t border-gray-300 my-4" />



                </div>

            </div>

            {/* </div> */}

        </section>
    )
}

export default ProductDetailsDescription;
