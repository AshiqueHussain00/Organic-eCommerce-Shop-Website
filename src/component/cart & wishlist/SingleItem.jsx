import React from 'react'
// {
//     id: "s1",
//     name: "Tomato Ketchup",
//     sku: "2SJ1123",
//     price: {
//         original: 30.0,
//         discounted: 17.28,
//         discountPercentage: 54,
//     },
//     category: "Snacks",
//     tags: ["Snacks", "Healthy", "Vegetarian", "Kid foods" , "Tiffin"],
//     rating: 4.7,
//     reviews: 6,
//     inStock: true,
//     mainDec: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
//     brand: "https://tse1.mm.bing.net/th?id=OIP.r0gtL-F5uRAgZYthj_0qxgAAAA&pid=Api&P=0&h=180" ,
//     socialMedia: [
//         { facebook: FaFacebookF },
//         { instagram: FaInstagram },
//         { pinterest: FaPinterestP },
//         { twitter: FaTwitter }
//     ],
//     actions: [
//         { like: FaHeart },
//         { views: FaEye }
//     ],
//     socialLink: ['https://www.facebook.com/', 'https://twitter.com/?lang=en', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
//     images: [
//         {
//             main: "https://www.on9deals.com/images/deals01/kissan-fresh-tomato-ketchup.jpg",
//             thumbnails: [
//                 "https://indiakaaoffer.com/wp-content/uploads/2017/02/kissan-ketchup.jpg",
//                 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/6435c2127563551.61443f21cc79b.jpg',
//                 'https://4.imimg.com/data4/PM/JT/MY-8511449/kissan-tomato-ketchup-1000x1000.png',
//                 'https://www.jiomart.com/images/product/600x600/490006845/kissan-fresh-tomato-ketchup-200-g-product-images-o490006845-p590087140-3-202203150528.jpg',
//             ],
//         },
//     ],
//     description: {
//         dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
//         dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
//         dec3: ['100 g of fresh leaves provides.', 'Aliquam ac est at augue volutpat elementum.', 'Quisque nec enim eget sapien molestie.', 'Proin convallis odio volutpat finibus posuere.'],
//         dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. ',
//     },
//     additionalInformation: {
//         weight: "1kg",
//         color: "Red",
//         type: "Organic",
//         category: "Snacks",
//         stockStatus: "Available",
//         stockQuantity: 8412,
//         // tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
//     },
//     customerFeedback: [
//         {
//             name: "John Doe",
//             reviewImg: reviewimg1,
//             feedback: "The product is really fresh and organic. I love it!",
//             rating: 5,
//         },
//         {
//             name: "Jane Smith",
//             coustomerimg: reviewimg2,
//             feedback: "Great product, fast delivery.",
//             rating: 4,
//         },
//     ],
//     promotions: {
//         discount: "64% Discount",
//         organic: "100% Organic",
//     },
// },
const SingleItem = ({data}) => {
  return (
    <div className='grid grid-cols-6'>

        <div className='flex items-center border col-span-2'>
            <img src={data.images[0].main} alt="" className='w-[100px]'/>
            <p>{data.name}</p>
        </div>

        <div className='border flex items-center '>
            ${data.price.discounted}
        </div>

        <div className='flex border'>
            <div>-</div>
            <div>5</div>
            <div>+</div>
        </div>

        <div className='border'>
            $11420
        </div>

        <div className='border '>
            X
        </div>
             
    </div>
  )
}

export default SingleItem