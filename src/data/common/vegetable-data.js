import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons
export const vegetableData = [
    {
        id: 'v1',
        name: "Carrot",
        sku: "1PL2493",
        price: {
            original: 30.0,
            discounted: 12.00,
            discountPercentage: 60,
        },
        category: "Vegetables",
        tags: ["Vegetables", "Healthy", "Carrot", "Orange"],
        rating: 4.5,
        reviews: 10,
        inStock: true,
        mainDec: 'Carrots are a root vegetable known for their vibrant color and nutritional value.',
        brand: 'Organic Farms',
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
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://ansfoods.com/wp-content/uploads/2014/10/carrot.png',
                thumbnails: [
                    'https://www.bordbia.ie/globalassets/bordbia2020/food-and-living/best-in-season-2020/veg/carrot.png',
                    'https://static.vecteezy.com/system/resources/previews/023/225/196/original/cute-carrot-vegetable-free-png.png',
                    'https://cdn-icons-png.flaticon.com/512/4525/4525184.png',
                    'https://www.heddensofwoodtown.co.uk/wp-content/uploads/2022/04/Bunch-Carrots.png',
                ],
            },
        ],
        description: {
            dec1: 'Carrots are a great source of vitamin A and beta-carotene.',
            dec2: 'They support eye health and improve digestion.',
            dec3: ['Boosts immune system.', 'Promotes skin health.', 'Rich in fiber and antioxidants.'],
            dec4: 'Perfect for snacking, cooking, or adding to salads.',
        },
        additionalInformation: {
            weight: "0.5 kg",
            color: "Orange",
            type: "Organic",
            category: "Vegetables",
            stockStatus: "Available",
            stockQuantity: 1500,
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
            discount: "60% Discount",
            organic: "100% Organic",
        },
    },
    {
        id: 'v2',
        name: "Tomato",
        sku: "2PL3649",
        price: {
            original: 25.0,
            discounted: 10.00,
            discountPercentage: 60,
        },
        category: "Vegetables",
        tags: ["Vegetables", "Healthy", "Tomato", "Red"],
        rating: 4.2,
        reviews: 12,
        inStock: true,
        mainDec: 'Tomatoes are a staple in many cuisines and are rich in vitamins.',
        brand: 'Fresh Organics',
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
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://gallafoods.com/wp-content/uploads/2016/11/tomato-1.png',
                thumbnails: [
                    'https://cdn.pixabay.com/photo/2017/07/17/21/58/tomato-2514018_640.png',
                    'https://png.pngtree.com/png-clipart/20240314/original/pngtree-tomato-cute-cartoon-character-png-image_14582409.png',
                    'https://yourdigitalboat.com/kagome/wp-content/uploads/2024/07/Tomato-icon.png',
                    'https://www.naturesmiracle.in/images/imagebox/tt.png',
                ],
            },
        ],
        description: {
            dec1: 'Tomatoes are packed with antioxidants and vitamin C.',
            dec2: 'They help reduce the risk of heart disease and cancer.',
            dec3: ['Supports skin health.', 'Improves digestion.', 'Rich in lycopene.'],
            dec4: 'Great for sauces, salads, and sandwiches.',
        },
        additionalInformation: {
            weight: "0.5 kg",
            color: "Red",
            type: "Organic",
            category: "Vegetables",
            stockStatus: "Available",
            stockQuantity: 3200,
        },
        customerFeedback: [
            {
                name: "George Lewis",
                reviewImg: 'https://www.thomas.co/sites/default/files/thomas-files/styles/hero_media/public/2024-01/header_person10.png?itok=iDeD8K6C',
                feedback: "Very fresh and juicy!",
                rating: 5,
            },
            {
                name: "Martha Davis",
                reviewImg: 'https://www.thomas.co/sites/default/files/thomas-files/styles/hero_media/public/2024-04/header_person8%20%281%29.png?itok=hSDDbRnG',
                feedback: "Good quality but some were a little soft.",
                rating: 3,
            },
        ],
        promotions: {
            discount: "60% Discount",
            organic: "100% Organic",
        },
    },
    {
        id: 'v3',
        name: "Broccoli",
        sku: "3PR5124",
        price: {
            original: 55.0,
            discounted: 22.00,
            discountPercentage: 60,
        },
        category: "Vegetables",
        tags: ["Vegetables", "Healthy", "Broccoli", "Green"],
        rating: 4.7,
        reviews: 18,
        inStock: true,
        mainDec: 'Broccoli is a rich source of vitamins, minerals, and antioxidants.',
        brand: 'Fresh Greens',
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
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://png.pngtree.com/png-clipart/20231224/original/pngtree-collage-of-fresh-green-broccoli-isolated-on-white-background-healthy-food-png-image_13924155.png',
                thumbnails: [
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRgzI-nhQnC_9iEFAxfRaMJywISEHHmVxtQ&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioBqie0ALGz6Nw4kzAVc8CaKhwZPq79RN_g&s',
                    'https://www.thegoodmoodfood.com.au/siteassets/foods/green/broccoli-lg.png',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMTMR0MKMZGgI0C9XxkWc6g7S8cbCjNyXFQ&s',
                ],
            },
        ],
        description: {
            dec1: 'Broccoli is a great vegetable for boosting immunity.',
            dec2: 'It’s loaded with fiber and supports heart health.',
            dec3: ['Reduces inflammation.', 'Supports digestive health.', 'Rich in vitamins C and K.'],
            dec4: 'Ideal for stir-fries, soups, and salads.',
        },
        additionalInformation: {
            weight: "0.7 kg",
            color: "Green",
            type: "Organic",
            category: "Vegetables",
            stockStatus: "Available",
            stockQuantity: 1200,
        },
        customerFeedback: [
            {
                name: "Alice Walker",
                reviewImg: 'https://www.thomas.co/sites/default/files/thomas-files/styles/hero_media/public/2024-01/header_person7.png?itok=42pdYZm1',
                feedback: "The quality is top-notch!",
                rating: 5,
            },
            {
                name: "Henry Roberts",
                reviewImg: 'https://www.thomas.co/sites/default/files/thomas-files/styles/hero_media/public/2024-01/header_person6.png?itok=bSxYU0HS',
                feedback: "Fresh but a bit overpriced.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "60% Discount",
            organic: "100% Organic",
        },
    },
    {
        id: 'v4',
        name: "Spinach",
        sku: "4VE8642",
        price: {
            original: 20.0,
            discounted: 8.00,
            discountPercentage: 60,
        },
        category: "Vegetables",
        tags: ["Vegetables", "Healthy", "Spinach", "Green"],
        rating: 4.8,
        reviews: 22,
        inStock: true,
        mainDec: 'Spinach is a leafy green that’s packed with vitamins and minerals.',
        brand: 'Green Leaf',
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
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GDzyFw_L_MeITrqHYVv57FJGEqsh91wX8g&s',
                thumbnails: [
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzd51H8FlD7FFwF-ttFB169tI4A_v8ZfHdFQ&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS003_k1ODM_FR094WfjptKC1FFwFxno-CnJQ&s',
                    'https://www.bigbasket.com/media/uploads/p/m/40138448-4_1-fresho-baby-spinach.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3Ub-LSDa0xsQjga39tyPyy_KNvbDTlj4hw&s',
                ],
            },
        ],
        description: {
            dec1: 'Spinach is rich in iron and helps maintain healthy blood.',
            dec2: 'It supports eye health and reduces inflammation.',
            dec3: ['Rich in vitamins A, C, and K.', 'Boosts overall health.', 'Great for weight management.'],
            dec4: 'Perfect for salads, smoothies, and sautés.',
        },
        additionalInformation: {
            weight: "0.3 kg",
            color: "Green",
            type: "Organic",
            category: "Vegetables",
            stockStatus: "Available",
            stockQuantity: 2000,
        },
        customerFeedback: [
            {
                name: "Robert Johnson",
                reviewImg: 'https://www.systemloesungen-hisl.de/wp-content/uploads/2023/04/person-ausbildung-systemischer-psychologischer-berater-fernlehrgang.png',
                feedback: "Very fresh and tender!",
                rating: 5,
            },
            {
                name: "Linda Martinez",
                reviewImg: 'https://www.thomas.co/sites/default/files/thomas-files/styles/hero_media/public/2024-01/Person%20test%20larger_0.png?itok=A3r9eWNS',
                feedback: "Good quality, but arrived wilted.",
                rating: 3,
            },
        ],
        promotions: {
            discount: "60% Discount",
            organic: "100% Organic",
        },
    },
    {
        id: 'v5',
        name: "Cucumber",
        sku: "5VE7548",
        price: {
            original: 15.0,
            discounted: 6.00,
            discountPercentage: 60,
        },
        category: "Vegetables",
        tags: ["Vegetables", "Healthy", "Cucumber", "Green"],
        rating: 4.4,
        reviews: 14,
        inStock: true,
        mainDec: 'Cucumbers are hydrating and great for refreshing summer salads.',
        brand: 'Green Delight',
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
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DLsz6HRbqrW7yR2bvvq6nHWxxwwBKbFEqA&s',
                thumbnails: [
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVYjX-kG3Bj1o53XqQbYgEQLhk_51VYcu2w&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX6NtCcEwciuisuCMhUDVPHgo7ZooPwq8pg&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNovJGHBJkZs-lu8KBYcO4ZFKTWl0MRFKRA&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4rf0Ai6x5Y3ceOk98eBsLAxyvvliVgktKg&s',
                ],
            },
        ],
        description: {
            dec1: 'Cucumbers are low in calories but high in hydration.',
            dec2: 'They help in weight loss and detoxification.',
            dec3: ['Hydrates the body.', 'Supports skin health.', 'Rich in antioxidants.'],
            dec4: 'Ideal for salads, smoothies, and snacks.',
        },
        additionalInformation: {
            weight: "0.3 kg",
            color: "Green",
            type: "Organic",
            category: "Vegetables",
            stockStatus: "Available",
            stockQuantity: 2500,
        },
        customerFeedback: [
            {
                name: "Emily White",
                reviewImg: 'https://kentuckycounselingcenter.com/wp-content/uploads/2022/01/thinking-man-gf9b9e7a8b_1920.png',
                feedback: "Crisp and fresh, exactly what I wanted.",
                rating: 5,
            },
            {
                name: "Michael Clark",
                reviewImg: 'https://choiceindia.com/static/media/sub-broker-franchise-without-deposit.4bd50f5882ccb3185012.webp',
                feedback: "A bit too watery, but still good.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "60% Discount",
            organic: "100% Organic",
        },
    },
    {
        id: 'v6',
        name: "Brinjal",
        sku: "4PL3496",
        price: {
            original: 18.0,
            discounted: 10.00,
            discountPercentage: 44,
        },
        category: "Vegetables",
        tags: ["Vegetables", "Healthy", "Brinjal", "Purple"],
        rating: 4.6,
        reviews: 9,
        inStock: true,
        mainDec: 'Brinjal, also known as eggplant, is a versatile vegetable with a unique flavor.',
        brand: 'Veggie Delight',
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
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/xl/10000584_11-fresho-brinjal-nagpur.jpg',
                thumbnails: [
                    'https://www.pureroot.in/uploads/products/1643002685_Nagpur-Brinjal-Baigan.webp',
                    'https://kippsmart.com/wp-content/uploads/2020/06/brinjal.png',
                    'https://png.pngtree.com/png-vector/20220902/ourmid/pngtree-eggplant-fresh-vegetable-brinjal-food-png-image_6135345.png',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kl3Yjh6nM3N6FA765E4GmqUuRXyJhyTfXQ&s',
                ],
            },
        ],
        description: {
            dec1: 'Brinjal is a good source of dietary fiber and essential nutrients.',
            dec2: 'It supports heart health and helps in weight management.',
            dec3: ['Rich in antioxidants.', 'Low in calories.', 'Helps with digestion.'],
            dec4: 'Ideal for grilling, roasting, or making curries.',
        },
        additionalInformation: {
            weight: "0.6 kg",
            color: "Purple",
            type: "Organic",
            category: "Vegetables",
            stockStatus: "Available",
            stockQuantity: 800,
        },
        customerFeedback: [
            {
                name: "Sarah Wilson",
                reviewImg: 'https://www.transparentpng.com/download/happy-person/VJdvLa-download-happy-blackman-png.png',
                feedback: "Delicious and perfect for my curry recipes.",
                rating: 5,
            },
            {
                name: "Tom Brown",
                reviewImg: 'https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png',
                feedback: "Good quality, but a bit too bland.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "44% Discount",
            organic: "100% Organic",
        },
    },
    {
        id: 'v7',
        name: "Potato",
        sku: "5PL3497",
        price: {
            original: 22.0,
            discounted: 12.00,
            discountPercentage: 45,
        },
        category: "Vegetables",
        tags: ["Vegetables", "Healthy", "Potato", "Starchy"],
        rating: 4.4,
        reviews: 15,
        inStock: true,
        mainDec: 'Potatoes are a versatile root vegetable that can be cooked in many ways.',
        brand: 'Farm Fresh',
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
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://images.squarespace-cdn.com/content/v1/5b5b5824f2e6b10639fdaf09/a277eae9-bf1a-4e66-9daf-dd2e60209073/Produce+Storage+Tips+icons+%289%29.png',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/71lvEUw5k8L._AC_UF894,1000_QL80_.jpg',
                    'https://www.bushwickpotato.com/wp-content/uploads/2022/12/potato.png',
                    'https://www.pureroot.in/uploads/products/1640342068_Long-Potato.webp',
                    'https://info.ifa.coop/hubfs/potato-growing-guide-img1b.png',
                ],
            },
        ],
        description: {
            dec1: 'Potatoes are a good source of vitamins B6 and C.',
            dec2: 'They provide energy and are great for a balanced diet.',
            dec3: ['Rich in potassium.', 'Supports digestive health.', 'Versatile in cooking.'],
            dec4: 'Great for baking, mashing, or frying.',
        },
        additionalInformation: {
            weight: "1 kg",
            color: "Brown",
            type: "Organic",
            category: "Vegetables",
            stockStatus: "Available",
            stockQuantity: 1200,
        },
        customerFeedback: [
            {
                name: "Emma Johnson",
                reviewImg: 'https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png',
                feedback: "Great potatoes for making fries and mashed potatoes.",
                rating: 5,
            },
            {
                name: "Daniel Lee",
                reviewImg: 'https://www.transparentpng.com/download/happy-person/VJdvLa-download-happy-blackman-png.png',
                feedback: "Decent quality, but some were a bit small.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "45% Discount",
            organic: "100% Organic",
        },
    },
];
