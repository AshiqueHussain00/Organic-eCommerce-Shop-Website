import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons
import reviewimg1 from '../../assets/common/product/reviewimg1.svg'
import reviewimg2 from '../../assets/common/product/reviewimg2.svg'
import brand from '../../assets/common/product/brand.svg'

export const snacksData = [
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
    {
        id: "s5",
        name: "Banana Chips",
        sku: "2SJ4243",
        price: {
            original: 21.0,
            discounted:17.28,
            discountPercentage: 64,
        },
        category: "Snacks",
        tags: ["Snacks", "Kid foods" , "Tiffin"],
        rating: 4.9,
        reviews: 15,
        inStock: false,
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
                main: "https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg",
                thumbnails: [
                    "https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg",
                    'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                    'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180',
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
            weight: "300g",
            color: "-",
            type: "-",
            category: "Snacks",
            stockStatus: "Not Available",
            stockQuantity: 0,
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
        id: "s6",
        name: "Gujarati Khakra",
        sku: "2SJ42753",
        price: {
            original: 60.0,
            discounted:54.28,
            discountPercentage: 82,
        },
        category: "Snacks",
        tags: ["Snacks", "Kid foods" , "Vegetarian" , "Tiffin" , "Breakfast"],
        rating: 4.9,
        reviews: 15,
        inStock: false,
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
                main: "https://m.media-amazon.com/images/I/81cU2tl-3EL._SX679_PIbundle-5,TopRight,0,0_AA679SH20_.jpg",
                thumbnails: [
                    "https://m.media-amazon.com/images/I/81d9ZbSP--L._SX679_.jpg",
                    'https://m.media-amazon.com/images/I/81jJcc+mzwL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/81c9xsS5AwL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/81lj9NP5JxL._SX679_.jpg',
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
            weight: "800gm",
            color: "-",
            type: "-",
            category: "Snacks",
            stockStatus: "Not Available",
            stockQuantity: 0,
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
        id: "s7",
        name: "Organic Chakli",
        sku: "2SJ42456",
        price: {
            original: 40.0,
            discounted:32.28,
            discountPercentage: 32,
        },
        category: "Snacks",
        tags: ["Snacks", "Kid foods"  , "Tiffin" ],
        rating: 4.5,
        reviews: 25,
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
                main: "https://m.media-amazon.com/images/I/51DqtmXiomL._SX679_.jpg",
                thumbnails: [
                    "https://m.media-amazon.com/images/I/51SXARVMl0L._SX679_.jpg",
                    'https://m.media-amazon.com/images/I/714-31OgGZL._SX679_.jpg',
                    'https://recipes.timesofindia.com/photo/58067399.cms?imgsize=432080',
                    'http://4.bp.blogspot.com/-fpKbX40AEA0/TxhIT1rtfCI/AAAAAAAADOM/56YPW2oK2CM/s1600/chakli.jpg',
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
            weight: "200gm",
            color: "brown",
            type: "-",
            category: "Snacks",
            stockStatus: "Available",
            stockQuantity: 1230,
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