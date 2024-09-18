import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons
import reviewimg1 from '../../assets/common/product/reviewimg1.svg'
import reviewimg2 from '../../assets/common/product/reviewimg2.svg'
import brand from '../../assets/common/product/brand.svg'
import SingleItem from './SingleItem';




const cart = [
    {
        id: "s1",
        name: "Tomato Ketchup",
        sku: "2SJ1123",
        price: {
            original: 30.0,
            discounted: 17.28,
            discountPercentage: 54,
        },
        category: "Snacks",
        tags: ["Snacks", "Healthy", "Vegetarian", "Kid foods" , "Tiffin"],
        rating: 4.7,
        reviews: 6,
        inStock: true,
        mainDec: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: "https://tse1.mm.bing.net/th?id=OIP.r0gtL-F5uRAgZYthj_0qxgAAAA&pid=Api&P=0&h=180" ,
        socialMedia: [
            { facebook: FaFacebookF },
            { instagram: FaInstagram },
            { pinterest: FaPinterestP },
            { twitter: FaTwitter }
        ],
        actions: [
            { like: FaHeart },
            { views: FaEye }
        ],
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/?lang=en', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: "https://www.on9deals.com/images/deals01/kissan-fresh-tomato-ketchup.jpg",
                thumbnails: [
                    "https://indiakaaoffer.com/wp-content/uploads/2017/02/kissan-ketchup.jpg",
                    'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/6435c2127563551.61443f21cc79b.jpg',
                    'https://4.imimg.com/data4/PM/JT/MY-8511449/kissan-tomato-ketchup-1000x1000.png',
                    'https://www.jiomart.com/images/product/600x600/490006845/kissan-fresh-tomato-ketchup-200-g-product-images-o490006845-p590087140-3-202203150528.jpg',
                ],
            },
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: ['100 g of fresh leaves provides.', 'Aliquam ac est at augue volutpat elementum.', 'Quisque nec enim eget sapien molestie.', 'Proin convallis odio volutpat finibus posuere.'],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. ',
        },
        additionalInformation: {
            weight: "1kg",
            color: "Red",
            type: "Organic",
            category: "Snacks",
            stockStatus: "Available",
            stockQuantity: 8412,
            // tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
        },
        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: reviewimg1,
                feedback: "The product is really fresh and organic. I love it!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                coustomerimg: reviewimg2,
                feedback: "Great product, fast delivery.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "64% Discount",
            organic: "100% Organic",
        },
    },
    {
        id: "s2",
        name: "Maggi Noodles",
        sku: "2SJ1723",
        price: {
            original: 10.0,
            discounted: 6.28,
            discountPercentage: 78,
        },
        category: "Snacks",
        tags: ["Snacks", "Healthy", "Vegetarian", "Kid foods" , "Tiffin"],
        rating: 4.7,
        reviews: 10,
        inStock: true,
        mainDec: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: brand,
        socialMedia: [
            { facebook: FaFacebookF },
            { instagram: FaInstagram },
            { pinterest: FaPinterestP },
            { twitter: FaTwitter }
        ],
        actions: [
            { like: FaHeart },
            { views: FaEye }
        ],
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/?lang=en', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: "https://5.imimg.com/data5/SELLER/Default/2022/7/MU/PJ/SD/5742893/maggi-noodles.jpg",
                thumbnails: [
                    "https://i.pinimg.com/736x/fd/f6/ab/fdf6ab5a30b921bc4b8b68ccf5db040e.jpg",
                    'https://images-cdn.ubuy.co.in/65f34c183bf0de2fbe358cb9-maggi-noodles-2-minutes-masala-noodles.jpg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/326567588/OI/QT/EG/183700103/maggi-noodles.jpeg',
                    'https://www.honeywhatscooking.com/wp-content/uploads/2022/02/Pav-Bhaji-Maggi-Noodles4-e1672251408882.jpg',
                ],
            },
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: ['100 g of fresh leaves provides.', 'Aliquam ac est at augue volutpat elementum.', 'Quisque nec enim eget sapien molestie.', 'Proin convallis odio volutpat finibus posuere.'],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. ',
        },
        additionalInformation: {
            weight: "70g",
            color: "yellow",
            type: "-",
            category: "Snacks",
            stockStatus: "Available",
            stockQuantity: 9012,
            // tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
        },
        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: reviewimg1,
                feedback: "The product is really fresh and organic. I love it!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                coustomerimg: reviewimg2,
                feedback: "Great product, fast delivery.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "64% Discount",
            organic: "100% Organic",
        },
    },
    {
        id: "s3",
        name: "Choco Chips",
        sku: "2SJ1223",
        price: {
            original: 15.0,
            discounted: 9.28,
            discountPercentage: 64,
        },
        category: "Snacks",
        tags: ["Snacks", "Healthy", "Kid foods" , "Tiffin"],
        rating: 4.9,
        reviews: 9,
        inStock: true,
        mainDec: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: "https://tse1.mm.bing.net/th?id=OIP.r0gtL-F5uRAgZYthj_0qxgAAAA&pid=Api&P=0&h=180" ,
        socialMedia: [
            { facebook: FaFacebookF },
            { instagram: FaInstagram },
            { pinterest: FaPinterestP },
            { twitter: FaTwitter }
        ],
        actions: [
            { like: FaHeart },
            { views: FaEye }
        ],
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/?lang=en', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: "https://m.media-amazon.com/images/I/61d8ZCFHrVL._SX679_.jpg",
                thumbnails: [
                    "https://m.media-amazon.com/images/I/71sYQUU77OL._SX679_.jpg",
                    'https://m.media-amazon.com/images/I/71zAMuzmhSL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/61Cwflh9eZL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/61F+nnZ59tL._SX679_.jpg',
                ],
            },
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: ['100 g of fresh leaves provides.', 'Aliquam ac est at augue volutpat elementum.', 'Quisque nec enim eget sapien molestie.', 'Proin convallis odio volutpat finibus posuere.'],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. ',
        },
        additionalInformation: {
            weight: "200g",
            color: "brown",
            type: "-",
            category: "Snacks",
            stockStatus: "Available",
            stockQuantity: 1012,
            // tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
        },
        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: reviewimg1,
                feedback: "The product is really fresh and organic. I love it!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                coustomerimg: reviewimg2,
                feedback: "Great product, fast delivery.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "64% Discount",
            organic: "100% Organic",
        },
    },
    {
        id: "s4",
        name: "Bingo Potato Chips",
        sku: "2SJ5643",
        price: {
            original: 8.0,
            discounted:6.28,
            discountPercentage: 79,
        },
        category: "Snacks",
        tags: ["Snacks", "Kid foods" , "Tiffin"],
        rating: 3.9,
        reviews: 12,
        inStock: true,
        mainDec: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: "https://tse1.mm.bing.net/th?id=OIP.r0gtL-F5uRAgZYthj_0qxgAAAA&pid=Api&P=0&h=180" ,
        socialMedia: [
            { facebook: FaFacebookF },
            { instagram: FaInstagram },
            { pinterest: FaPinterestP },
            { twitter: FaTwitter }
        ],
        actions: [
            { like: FaHeart },
            { views: FaEye }
        ],
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/?lang=en', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: "https://m.media-amazon.com/images/I/81oQOYKZHxL._SX679_.jpg",
                thumbnails: [
                    "https://m.media-amazon.com/images/I/71XLL1TsOTL._SX679_.jpg",
                    'https://m.media-amazon.com/images/I/71uhLAEF6OL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/6105Uf5JwzL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/81HR1VFz14L._SX679_.jpg',
                ],
            },
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: ['100 g of fresh leaves provides.', 'Aliquam ac est at augue volutpat elementum.', 'Quisque nec enim eget sapien molestie.', 'Proin convallis odio volutpat finibus posuere.'],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. ',
        },
        additionalInformation: {
            weight: "50g",
            color: "-",
            type: "-",
            category: "Snacks",
            stockStatus: "Available",
            stockQuantity: 6012,
            // tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
        },
        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: reviewimg1,
                feedback: "The product is really fresh and organic. I love it!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                coustomerimg: reviewimg2,
                feedback: "Great product, fast delivery.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "64% Discount",
            organic: "100% Organic",
        },
    },
   
]

const CartBottom = () => {
    
    const cartItems = useSelector((state) => state.cart.items);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalPrice = useSelector((state) => state.cart.totalPrice)
    const dispatch = useDispatch();


  return (
    <div className='border-2 border-red-700 flex '>

        {/* --------- left --------------- */}
        <div className='w-[65%]'>

            {/* ---------- upper ---------- */}

            <div>

              {/* -------- heading ----------- */}

              <div className='grid grid-cols-6 border-2 border-blue-600 w-full'>

                <div className='px-6 border col-span-2'>Product</div>
                <div className='border'>Price</div>
                <div className='border'>Quantity</div>
                <div className='border'>SubTotal</div>
                <div className='border'></div>

              </div>


              {/* ----------- content --------- */}
              <div className='flex flex-col w-full border-2 border-blue-500'>
                {
                    cart.map((item) => (
                        <SingleItem key={item.id} data={item}/>
                    ))
                }
              </div>

            </div>


            {/* --------- bottom -------------- */}

            <div>

            </div>

        </div>

        {/* ---------- right --------------- */}

        <div>

        </div>

    </div>
  )
}

export default CartBottom