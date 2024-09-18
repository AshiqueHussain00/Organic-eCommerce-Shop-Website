import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons
import reviewimg1 from '../../assets/common/product/reviewimg1.svg'
import reviewimg2 from '../../assets/common/product/reviewimg2.svg'
import brand from '../../assets/common/product/brand.svg'

export const beverageData = [
    {
        id: "b1",
        name: "Nescafe Intenso Coffe",
        sku: "2SJ424789",
        price: {
            original: 40.0,
            discounted:31.28,
            discountPercentage: 26,
        },
        category: "beverages",
        tags: ["drink"],
        rating: 4.7,
        reviews: 16,
        inStock: true,
        mainDec: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: brand ,
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
                main: "https://m.media-amazon.com/images/I/61IEkgsJ7ZL._SL1500_.jpg",
                thumbnails: [
                    "https://m.media-amazon.com/images/I/71jp2xa0d9L._SL1500_.jpg",
                    'https://m.media-amazon.com/images/I/61lJjn6lEoS._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71TStoVV7nS._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/61ui61dQ7bS._SL1500_.jpg',
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
            weight: "100gm",
            color: "brown",
            type: "-",
            category: "beverages",
            stockStatus: "Available",
            stockQuantity: 230,
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
                rating: 3,
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
        id: "b2",
        name: "Maaza Mango Drink",
        sku: "2SJ424466",
        price: {
            original: 34.0,
            discounted:28.28,
            discountPercentage: 32,
        },
        category: "beverages",
        tags: ["beverage" , "drink" , "juice"],
        rating: 3.9,
        reviews: 21,
        inStock: true,
        mainDec: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: brand ,
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
                main: "https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg",
                thumbnails: [
                    "https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg",
                    'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg',
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
            weight: "600ml",
            color: "orange",
            type: "drink",
            category: "beverages",
            stockStatus: "Available",
            stockQuantity: 4530,
            // tags: ["beverage" , "drink" , "juice"],
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
                rating: 3,
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
        id: "b3",
        name: "Pepsi",
        sku: "2SJ424251",
        price: {
            original: 15.0,
            discounted:14.28,
            discountPercentage: 10,
        },
        category: "beverages",
        tags: ["beverage" , "drink" , "juice"],
        rating: 4.1,
        reviews: 16,
        inStock: true,
        mainDec: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: brand ,
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
                main: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRjzMnVuhhRfRIc3IDhIu-jC2LbJ9eFpwocR6s9yQddPEUZL5OPqjdo4nV7f0SKO9vY-_xUbPhCgneMZ3n8ueY28cZTc62jT2PUiHdL7rn8wc9Tefp2Uk2oCg&usqp=CAE",
                thumbnails: [
                    "https://www.google.com/url?q=https://www.jiomart.com/p/groceries/pepsi-2-l/490004176%3Fsource%3Dfbads%26city%3DTirupati%26pin%3D517517&opi=95576897&sa=U&ved=0ahUKEwjf3afV5cuIAxXCXWwGHeaJCmgQrzwIqAM&usg=AOvVaw2vqoGZ_re4fLknKrfP6LrG",
                    'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRwyCeUD2gzKHw_ShlHuWYn1X6RL8uvx7tORip0TmzmXl-zUZ8fA0UYTJEQGM7i0YGhKLxnwKY_B-mfIcHzRBgID1JrG-ovHA&usqp=CAE',
                    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ_B-grQ_UJoRwNq-rBDv5_eG3NHWDbPaGde0kqlX9aARqTz3N2AKIE_pYcvuNRselM8DLBuvUz-KLIZC7dhgIKgsD-7RMOWA&usqp=CAY',
                    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQG03tvXyhJK1U3lcInLs8ZFFUyOuuethaUB8p5BNKRKZd5WacOf6yV09PXo7o2Z5Ls8KNgYD8SgJik1ToeZR8W-g-ulUM1p7tDuFQjTnIvwKJZW2PCC2qG&usqp=CAE',
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
            weight: "2l",
            color: "black",
            type: "drink",
            category: "beverages",
            stockStatus: "Available",
            stockQuantity: 1250,
            // tags: ["beverage" , "drink" , "juice"],
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
                rating: 3,
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
        id: "b4",
        name: "Mishti Doi",
        sku: "2SJ424156",
        price: {
            original: 15.0,
            discounted:13.28,
            discountPercentage: 35,
        },
        category: "beverages",
        tags: ["beverage" , "yogurt"],
        rating: 4.6,
        reviews: 25,
        inStock: true,
        mainDec: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: brand ,
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
                main: "https://growstar.in/wp-content/uploads/2021/08/294186_3-mother-dairy-mishti-doi.jpg",
                thumbnails: [
                    "https://m.media-amazon.com/images/I/71ce+IPSirS.jpg",
                    'https://www.jiomart.com/images/product/original/490800891/mother-dairy-misthi-doi-400-g-cup-product-images-o490800891-p590041372-2-202206141810.jpg?im=Resize=(1000,1000)',
                    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/assets/products/sliding_images/jpeg/3ad09f60-f095-4a92-b591-a8f61d3ede83.jpg?ts=1707564214https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                    'https://cdn.zeptonow.com/production///tr:w-600,ar-869-1025,pr-true,f-auto,q-80/inventory/product/867c532d-78ee-4b54-a623-fb0f86411a53-1eE7vpUmDZDsGeWRm8trczZ2LUTbCy3Km.jpeg',
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
            weight: "400gm",
            color: "white",
            type: "dairy",
            category: "beverages",
            stockStatus: "Available",
            stockQuantity: 1530,
            // tags: ["beverage" , "yogurt"],
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
                rating: 3,
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
        id: "b5",
        name: "Elaichi Chai",
        sku: "2SJ424621",
        price: {
            original: 40.0,
            discounted: 36.28,
            discountPercentage: 16,
        },
        category: "beverages",
        tags: ["beverage" , "drink"],
        rating: 3.6,
        reviews: 16,
        inStock: true,
        mainDec: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: brand ,
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
                main: "https://m.media-amazon.com/images/I/51QYpZdK6jL._SL1000_.jpg",
                thumbnails: [
                    "https://m.media-amazon.com/images/I/61aKe-VMb6L._SL1000_.jpg",
                    'https://m.media-amazon.com/images/I/51YFQZ4QVsL._SL1000_.jpg',
                    'https://m.media-amazon.com/images/I/51zA4e9cSnL._SL1000_.jpg',
                    'https://m.media-amazon.com/images/I/41eeJ2zt7UL._SL1000_.jpg',
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
            weight: "350gm",
            color: "brown",
            type: "drink",
            category: "beverages",
            stockStatus: "Available",
            stockQuantity: 6530,
            // tags: ["beverage" , "drink"],
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
                rating: 3,
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
        id: "b6",
        name: "Paper boat jaljeera",
        sku: "2SJ424561",
        price: {
            original: 13.0,
            discounted: 10.28,
            discountPercentage: 21,
        },
        category: "beverages",
        tags: ["beverage" , "drink" , "juice"],
        rating: 4.2,
        reviews: 10,
        inStock: false,
        mainDec: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: brand ,
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
                main: "https://m.media-amazon.com/images/I/61-TQBHZHGL._SL1500_.jpg",
                thumbnails: [
                    "https://m.media-amazon.com/images/I/719P9w84DKL._SL1500_.jpg",
                    'https://m.media-amazon.com/images/I/71IAuUCWTyL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71uFV5nY2gL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71flyxYPYwL._SL1500_.jpg',
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
            weight: "100ml",
            color: "yellow",
            type: "drink",
            category: "beverages",
            stockStatus: "Not Available",
            stockQuantity: 0,
            // tags: ["beverage" , "drink" , "juice"],
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
                rating: 3,
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
        id: "b7",
        name: "Diet Pepsi",
        sku: "2SJ4245123",
        price: {
            original: 43.0,
            discounted: 41.28,
            discountPercentage: 6,
        },
        category: "beverages",
        tags: ["beverage" , "drink" , "juice"],
        rating: 4.6,
        reviews: 19,
        inStock: true,
        mainDec: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: brand ,
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
                main: "https://m.media-amazon.com/images/I/51JbsTJlqCL.jpg",
                thumbnails: [
                    "https://m.media-amazon.com/images/I/417xcP18QQL.jpg",
                    'https://m.media-amazon.com/images/I/71o6haAKTtL.jpg',
                    'https://m.media-amazon.com/images/I/41feW0BCX7L.jpg',
                    'https://m.media-amazon.com/images/I/51CTOHx-lVL.jpg',
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
            weight: "300ml",
            color: "white",
            type: "drink",
            category: "beverages",
            stockStatus: "Not Available",
            stockQuantity: 0,
            // tags: ["beverage" , "drink" , "juice"],
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
                rating: 3,
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