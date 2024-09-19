import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch , useSelector } from 'react-redux';
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

    
    const dispatch = useDispatch();

    const handleIncremenet = (id) => {

    }
    const handleDecremenet = (id) => {

    }
    const handleDelete= (id) => {

    }




  return (
    <div>
    <div className='hidden xmd:grid grid-cols-6 border border-blue-600 py-4 font-normal text-gray-900 text-sm xl:text-[16px]'>

        <div className='flex items-center gap-x-3  border  col-span-2'>
            <div className='xlg:w-[100px] w-[80px]'>
            <img src={data.images[0].main} alt={data.name} className='w-full h-full object-contain'/>
            </div>
          
            <p className='tracking-wide'>{data.name}</p>
        </div>

        <div className='border flex items-center justify-center'>
            $ {data.price.discounted}
        </div>

        <div className='flex border items-center justify-center gap-x-1 '>
            <div className='flex items-center border py-1 px-1 xlg:px-2 gap-x-2 rounded-3xl'>
            <div 
            onClick={()=> handleDecremenet(data.id)}
            className='border xlg:w-8 xlg:h-8 w-6 h-6 flex items-center justify-center rounded-full cursor-pointer text-lg bg-gray-50 transition-all duration-300  border-gray-50 hover:border-gray-900'>-</div>
            <div>5</div>
            <div 
             onClick={()=> handleIncremenet(data.id)}
            className=' xlg:w-8 xlg:h-8 w-6 h-6 flex items-center justify-center rounded-full text-lg bg-gray-50 cursor-pointer transition-all duration-300 border border-gray-50 hover:border-gray-900'>+</div>
            </div>
          
        </div>

        <div className='border flex items-center justify-center'>
           {/* {data.totalPrice} */}
           $1400
        </div>

        <div 
         onClick={()=> handleDelete(data.id)}
        className='border text-xl xlg:text-[28px]  flex items-center justify-center cursor-pointer '>
            <IoCloseCircleOutline className='text-gray-700 transition-all duration-300 hover:text-gray-400'/>
        </div>
             
    </div>

    {/* ------------- for small screen -------------- */}

    <div className='xmd:hidden'>
{/* 
        <div>
            <img src={data.images[0].main} alt={data.name} />
        </div> */}

    </div>



    </div>
  )
}

export default SingleItem