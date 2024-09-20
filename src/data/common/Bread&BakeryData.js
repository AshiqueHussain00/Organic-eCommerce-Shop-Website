import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons
export const BreadData = [
    {
        id: 'br1',
        name: "English Oven Bread Whole Wheat",
        sku: "BB0001",
        price: {
            original: 50,
            discounted: 30,
            discountPercentage: 40
        },
        
        category: "Bread & Bakery",
        tags: ["Bread", "Whole Wheat", "Healthy", "Baking"],
        rating: 4.8,
        review: 35,
        inStock: true,
        mainDec: "English Oven Bread Whole Wheat is a hearty, nutritious bread made with whole wheat flour, perfect for a healthy diet and satisfying meals.",
        brand: "English Oven",
        // socialMedia: [
        //     { facebook: FaFacebookF },
        //     { instagram: FaInstagram },
        //     { pinterest: FaPinterestP },
        //     { twitter: FaTwitter }
        // ],
        // actions: [
        //     { like: FaHeart },
        //     { views: FaEye }
        // ],
        // socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/71YLQwJhqDL._SL1500_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/71My3WgwRsL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/91ML8csk3VL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/91S5dMUXsxL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/91h9mjBiMrL._SL1500_.jpg',
                ],
            },
        ],
    
        description: {
            dec1: 'Made with 100% whole wheat flour for added fiber and nutrients.',
            dec2: 'Supports heart health and aids in digestion.',
            dec3: ['Rich in essential vitamins and minerals.', 'Low in fat.', 'Perfect for sandwiches, toast, and as a healthy snack.'],
            dec4: 'Ideal for a wholesome diet and a delicious addition to any meal.'
        },
    
        additionalInformation: {
            weight: "400g",
            color: "Brown",
            type: "Whole wheat bread",
            category: "Bread & Bakery",
            stockStatus: "Available",
            stockQuantity: 300
        },
        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Fresh and sweet!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "A bit too crunchy for my taste.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "40% Discount"
        }
    },

    {
        id: 'br2',
        name: "English Oven Bread Brown",
        sku: "BB0002",
        price: {
            original: 60,
            discounted: 36,
            discountPercentage: 40
        },
        
        category: "Bread & Bakery",
        tags: ["Bread", "Brown Bread", "Healthy", "Baking"],
        rating: 4.6,
        review: 45,
        inStock: true,
        mainDec: "English Oven Bread Brown is a nutritious, fiber-rich bread made with brown flour, perfect for a balanced diet and delicious meals.",
        brand: "English Oven",
        // socialMedia: [
        //     { facebook: FaFacebookF },
        //     { instagram: FaInstagram },
        //     { pinterest: FaPinterestP },
        //     { twitter: FaTwitter }
        // ],
        // actions: [
        //     { like: FaHeart },
        //     { views: FaEye }
        // ],
        // socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/71zLJqDIGTL._SL1500_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/71XZwci+lmL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/810A+xJ-tPL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71i-MqHg3CL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71pzAY6K+4L._SL1500_.jpg',
                ],
            },
        ],
    
        description: {
            dec1: 'Made with high-quality brown flour, rich in fiber and nutrients.',
            dec2: 'Promotes heart health and aids digestion with every slice.',
            dec3: ['Packed with essential vitamins and minerals.', 'Low in fat and calories.', 'Great for sandwiches, toasts, and healthy snacks.'],
            dec4: 'An ideal choice for those who want a healthier bread option without sacrificing taste.'
        },
    
        additionalInformation: {
            weight: "400g",
            color: "Brown",
            type: "Brown bread",
            category: "Bread & Bakery",
            stockStatus: "Available",
            stockQuantity: 250
        },

        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Fresh and sweet!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "A bit too crunchy for my taste.",
                rating: 4,
            },
        ],
        
        promotions: {
            discount: "40% Discount"
        }
    },

    {
        id: 'br3',
        name: "English Oven Fruit Bun",
        sku: "BB0003",
        price: {
            original: 70,
            discounted: 42,
            discountPercentage: 40
        },
        
        category: "Bread & Bakery",
        tags: ["Bun", "Fruit Bun", "Sweet", "Baking"],
        rating: 4.7,
        review: 50,
        inStock: true,
        mainDec: "English Oven Fruit Bun is a delicious and sweet bun filled with dried fruits, perfect for a quick snack or a delightful treat.",
        brand: "English Oven",
        // socialMedia: [
        //     { facebook: FaFacebookF },
        //     { instagram: FaInstagram },
        //     { pinterest: FaPinterestP },
        //     { twitter: FaTwitter }
        // ],
        // actions: [
        //     { like: FaHeart },
        //     { views: FaEye }
        // ],
        // socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/717z6-vfg5L._SX679_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/71HzoZzUXrL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71VZ7CelLVL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71VhIvQdQZL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71h6+Sc+urL._SX679_.jpg',
                ],
            },
        ],
    
        description: {
            dec1: 'Filled with high-quality dried fruits for a naturally sweet flavor.',
            dec2: 'Perfect as a snack or a breakfast item with tea or coffee.',
            dec3: ['Rich in fiber and essential vitamins.', 'Soft and fluffy texture.', 'Great for a quick snack or a light meal.'],
            dec4: 'An ideal choice for those who enjoy a touch of sweetness with their bread products.'
        },
    
        additionalInformation: {
            weight: "300g",
            color: "Golden Brown",
            type: "Fruit Bun",
            category: "Bread & Bakery",
            stockStatus: "Available",
            stockQuantity: 150
        },
        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Fresh and sweet!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "A bit too crunchy for my taste.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "40% Discount"
        }
    },

    {
        id: 'br4',
        name: "Pintola Rice Cake",
        sku: "RC0001",
        price: {
            original: 40,
            discounted: 24,
            discountPercentage: 40
        },
        
        category: "Bread & Bakery",
        tags: ["Rice Cake", "Healthy", "Low Calorie", "Snack"],
        rating: 4.5,
        review: 60,
        inStock: true,
        mainDec: "Pintola Rice Cake is a light and crispy snack made from high-quality rice, perfect for a healthy and satisfying snack any time of the day.",
        brand: "Pintola",
        // socialMedia: [
        //     { facebook: FaFacebookF },
        //     { instagram: FaInstagram },
        //     { pinterest: FaPinterestP },
        //     { twitter: FaTwitter }
        // ],
        // actions: [
        //     { like: FaHeart },
        //     { views: FaEye }
        // ],
        // socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/61KxNptywWL._SX679_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/716R7dx30wL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71HM43sbQgL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71JTFcWI8fL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71ZI01vMXaL._SX679_.jpg',
                ],
            },
        ],
    
        description: {
            dec1: 'Crispy and light rice cakes made from high-quality rice.',
            dec2: 'Low in calories, perfect for a healthy diet.',
            dec3: ['Rich in whole grains.', 'Great for snacking or as a base for toppings.', 'Ideal for a quick, satisfying snack.'],
            dec4: 'A tasty and healthy option for those who are health-conscious and enjoy a light snack.'
        },
    
        additionalInformation: {
            weight: "200g",
            color: "White",
            type: "Rice Cake",
            category: "Snacks",
            stockStatus: "Available",
            stockQuantity: 200
        },
        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Fresh and sweet!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "A bit too crunchy for my taste.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "40% Discount"
        }
    },
    {
        id: 'br5',
        name: "Lotte Choco Pie",
        sku: "CP0001",
        price: {
            original: 80,
            discounted: 48,
            discountPercentage: 40
        },
        
        category: "Bread & Bakery",
        tags: ["Choco Pie", "Chocolate", "Sweet", "Dessert"],
        rating: 4.9,
        review: 120,
        inStock: true,
        mainDec: "Lotte Choco Pie is a delicious treat featuring soft, fluffy cake layers filled with a rich, creamy marshmallow center and covered in smooth chocolate.",
        brand: "Lotte",
        // socialMedia: [
        //     { facebook: FaFacebookF },
        //     { instagram: FaInstagram },
        //     { pinterest: FaPinterestP },
        //     { twitter: FaTwitter }
        // ],
        // actions: [
        //     { like: FaHeart },
        //     { views: FaEye }
        // ],
        // socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/817dgnh61GL._SX679_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/81oqdp7QC+L._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/6182lJ0PxeL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71FKa7256JL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/61hTLrPmPHL._SX679_.jpg',
                ],
            },
        ],
    
        description: {
            dec1: 'Soft, fluffy cake layers with a creamy marshmallow filling.',
            dec2: 'Coated in smooth, high-quality chocolate.',
            dec3: ['Rich chocolate flavor.', 'Perfect for satisfying your sweet tooth.', 'Great for desserts, snacks, or sharing with friends.'],
            dec4: 'A popular treat loved by people of all ages, ideal for any time of the day.'
        },
    
        additionalInformation: {
            weight: "320g",
            color: "Chocolate Brown",
            type: "Choco Pie",
            category: "Snacks",
            stockStatus: "Available",
            stockQuantity: 150
        },
        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Fresh and sweet!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "A bit too crunchy for my taste.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "40% Discount"
        }
    },
    {
        id: 'br6',
        name: "Britannia Gobble",
        sku: "GB0001",
        price: {
            original: 60,
            discounted: 36,
            discountPercentage: 40
        },
        
        category: "Bread & Bakery",
        tags: ["Gobble", "Biscuits", "Crunchy", "Snack"],
        rating: 4.4,
        review: 80,
        inStock: true,
        mainDec: "Britannia Gobble is a crunchy, flavorful biscuit that offers a delightful combination of taste and texture, perfect for snacking anytime.",
        brand: "Britannia",
        // socialMedia: [
        //     { facebook: FaFacebookF },
        //     { instagram: FaInstagram },
        //     { pinterest: FaPinterestP },
        //     { twitter: FaTwitter }
        // ],
        // actions: [
        //     { like: FaHeart },
        //     { views: FaEye }
        // ],
        // socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/61n0fnxZhUL._SX679_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/61G021d-NJL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/51nzBnYWVhL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/61+Y-1PrKcL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/61BvaxvA8TL._SL1500_.jpg',
                ],
            },
        ],
    
        description: {
            dec1: 'Crunchy biscuits with a satisfying, savory flavor.',
            dec2: 'Perfect for pairing with tea or as a standalone snack.',
            dec3: ['Rich in taste and texture.', 'Convenient for on-the-go snacking.', 'Ideal for all ages.'],
            dec4: 'A great choice for a quick and enjoyable snack break.'
        },
    
        additionalInformation: {
            weight: "250g",
            color: "Golden Brown",
            type: "Biscuit",
            category: "Snacks",
            stockStatus: "Available",
            stockQuantity: 180
        },
        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Fresh and sweet!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "A bit too crunchy for my taste.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "40% Discount"
        }
    }
    
    
    
    
    
    
];