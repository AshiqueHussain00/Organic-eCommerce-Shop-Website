const fruitsData = [
    {
        id: 'f1',
        name: "Green Apple",
        sku: "F1234",
        price: { original: 40.0, discounted: 25.00, discountPercentage: 5 },
        category: "Fruits",
        tags: ["Fruits", "Healthy", "Apple", "Green"],
        rating: 4.5,
        reviews: 8,
        inStock: true,
        mainDec: 'Green Apple are sweet fruit known for their vibrant green color and nutritional value.',
        brand: 'Organic Farms',
        socialMedia: [{ facebook: FaFacebookF }, { instagram: FaInstagram }, { pinterest: FaPinterestP }, { twitter: FaTwitter }],
        actions: [{ like: FaHeart }, { views: FaEye }],
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [{ main: 'https://img.freepik.com/free-photo/green-apple-isolated-white_2829-9403.jpg', thumbnails: [] }],
        description: { dec1: 'High in fiber...', dec2: 'Contains antioxidants...', dec3: [], dec4: 'Versatile fruit...' },
        additionalInformation: { weight: "0.5 kg", color: "Green", type: "Organic", category: "Fruits", stockStatus: "Available", stockQuantity: 1100 },
        customerFeedback: [
            { name: "John Doe", reviewImg: 'img1.png', feedback: "Fresh and sweet!", rating: 5 },
            { name: "Jane Smith", reviewImg: 'img2.png', feedback: "A bit too crunchy.", rating: 4 },
        ],
        promotions: { discount: "40% Discount", organic: "80% Organic" },
    },
    {
        id: 'f2',
        name: "Red Apple",
        sku: "F4321",
        price: { original: 45.0, discounted: 30.00, discountPercentage: 10 },
        category: "Fruits",
        tags: ["Fruits", "Healthy", "Apple", "Red"],
        rating: 4.2,
        reviews: 10,
        inStock: true,
        mainDec: 'Red Apple is known for its sweetness and bright red color.',
        brand: 'Fresh Farms',
        socialMedia: [{ facebook: FaFacebookF }, { instagram: FaInstagram }, { pinterest: FaPinterestP }, { twitter: FaTwitter }],
        actions: [{ like: FaHeart }, { views: FaEye }],
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [{ main: 'https://img.freepik.com/free-photo/red-apple-isolated-white_2829-9403.jpg', thumbnails: [] }],
        description: { dec1: 'Rich in vitamins...', dec2: 'Helps improve immunity...', dec3: [], dec4: 'Best for snacking...' },
        additionalInformation: { weight: "0.5 kg", color: "Red", type: "Organic", category: "Fruits", stockStatus: "Available", stockQuantity: 900 },
        customerFeedback: [
            { name: "Alice Brown", reviewImg: 'img3.png', feedback: "Very juicy!", rating: 5 },
            { name: "Bob Martin", reviewImg: 'img4.png', feedback: "Could be sweeter.", rating: 4 },
        ],
        promotions: { discount: "30% Discount", organic: "90% Organic" },
    },
    {
        id: 'f3',
        name: "Banana",
        sku: "F5678",
        price: { original: 20.0, discounted: 15.00, discountPercentage: 25 },
        category: "Fruits",
        tags: ["Fruits", "Healthy", "Banana", "Yellow"],
        rating: 4.8,
        reviews: 12,
        inStock: true,
        mainDec: 'Bananas are rich in potassium and known for their energy-boosting properties.',
        brand: 'Nature\'s Delight',
        socialMedia: [{ facebook: FaFacebookF }, { instagram: FaInstagram }, { pinterest: FaPinterestP }, { twitter: FaTwitter }],
        actions: [{ like: FaHeart }, { views: FaEye }],
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [{ main: 'https://img.freepik.com/free-photo/bananas-isolated-white_2829-9403.jpg', thumbnails: [] }],
        description: { dec1: 'Provides quick energy...', dec2: 'Helps with muscle recovery...', dec3: [], dec4: 'Perfect for on-the-go snacking...' },
        additionalInformation: { weight: "1 kg", color: "Yellow", type: "Organic", category: "Fruits", stockStatus: "Available", stockQuantity: 1500 },
        customerFeedback: [
            { name: "Chris Lee", reviewImg: 'img5.png', feedback: "Perfect ripeness!", rating: 5 },
            { name: "Diana Wilson", reviewImg: 'img6.png', feedback: "Could be fresher.", rating: 3 },
        ],
        promotions: { discount: "25% Discount", organic: "85% Organic" },
    },
    {
        id: 'f4',
        name: "Blueberries",
        sku: "F9123",
        price: { original: 60.0, discounted: 45.00, discountPercentage: 20 },
        category: "Fruits",
        tags: ["Fruits", "Healthy", "Blueberries"],
        rating: 4.7,
        reviews: 20,
        inStock: true,
        mainDec: 'Blueberries are loaded with antioxidants and are known for boosting brain health.',
        brand: 'Super Berries',
        socialMedia: [{ facebook: FaFacebookF }, { instagram: FaInstagram }, { pinterest: FaPinterestP }, { twitter: FaTwitter }],
        actions: [{ like: FaHeart }, { views: FaEye }],
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [{ main: 'https://img.freepik.com/free-photo/blueberries-isolated-white_2829-9403.jpg', thumbnails: [] }],
        description: { dec1: 'Supports brain function...', dec2: 'Rich in antioxidants...', dec3: [], dec4: 'Perfect for adding to breakfast...' },
        additionalInformation: { weight: "0.3 kg", color: "Blue", type: "Organic", category: "Fruits", stockStatus: "Available", stockQuantity: 700 },
        customerFeedback: [
            { name: "Emily Davis", reviewImg: 'img7.png', feedback: "Very fresh and tasty!", rating: 5 },
            { name: "Frank Thomas", reviewImg: 'img8.png', feedback: "A bit expensive.", rating: 4 },
        ],
        promotions: { discount: "20% Discount", organic: "100% Organic" },
    },
    {
        id: 'f5',
        name: "Green Apple",
        sku: "F5678",
        price: {
            original: 40.0,
            discounted: 25.00,
            discountPercentage: 5,
        },
        category: "Fruits",
        tags: ["Fruits", "Healthy", "Apple", "Green"],
        rating: 4.3,
        reviews: 12,
        inStock: true,
        mainDec: 'Green Apple are sweet fruit known for their vibrant green color and nutritional value.',
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
                main: 'https://img.freepik.com/free-photo/green-apple-isolated-white_2829-9403.jpg?t=st=1726594556~exp=1726598156~hmac=be92c856b6a4f2999035a6376beedc156f7d8d9db7cc7d1e0008db95275ef9aa&w=740',
                thumbnails: [
                    'https://img.freepik.com/premium-photo/three-green-apple-isolated-white-background-bunch-whole-fruits_92795-2474.jpg?w=740',
                    'https://images.unsplash.com/photo-1579183396663-79422002e473?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyZWVuJTIwYXBwbGVzfGVufDB8fDB8fHww',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fblogcard-images%2FNone%2F7428c538-d994-4f1d-ad81-2b4a65578923.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1512578659172-63a4634c05ec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBhcHBsZXN8ZW58MHx8MHx8fDA%3D',
                ],
            },
        ],
        description: {
            dec1: 'Green apples are high in fiber, which can help with digestion and relieve constipation and diarrhea',
            dec2: 'Green apples contain antioxidants like quercetin, catechin, and chlorogenic acid, which can help fight illness and aging',
            dec3: ['Green apples contain vitamin A and vitamin C, as well as calcium and iron.', 'Green apples are low in calories and can be part of a weight management regimen', 'Green apples contain flavonoids, which can help protect cells from oxidative stress.'],
            dec4: 'Green apples are a versatile fruit that can be eaten raw or used in cooking. They have many health benefits',
        },
        additionalInformation: {
            weight: "0.5 kg",
            color: "Green",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 1100,
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
            discount: "40% Discount",
            organic: "80% Organic",
        },
    },
    
    {
        id: 'f6',
        name: "Green Apple",
        sku: "F9876",
        price: {
            original: 50.0,
            discounted: 30.00,
            discountPercentage: 10,
        },
        category: "Fruits",
        tags: ["Fruits", "Healthy", "Apple", "Green"],
        rating: 4.6,
        reviews: 10,
        inStock: true,
        mainDec: 'Green Apple are sweet fruit known for their vibrant green color and nutritional value.',
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
                main: 'https://img.freepik.com/free-photo/green-apple-isolated-white_2829-9403.jpg?t=st=1726594556~exp=1726598156~hmac=be92c856b6a4f2999035a6376beedc156f7d8d9db7cc7d1e0008db95275ef9aa&w=740',
                thumbnails: [
                    'https://img.freepik.com/premium-photo/three-green-apple-isolated-white-background-bunch-whole-fruits_92795-2474.jpg?w=740',
                    'https://images.unsplash.com/photo-1579183396663-79422002e473?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyZWVuJTIwYXBwbGVzfGVufDB8fDB8fHww',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fblogcard-images%2FNone%2F7428c538-d994-4f1d-ad81-2b4a65578923.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1512578659172-63a4634c05ec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBhcHBsZXN8ZW58MHx8MHx8fDA%3D',
                ],
            },
        ],
        description: {
            dec1: 'Green apples are high in fiber, which can help with digestion and relieve constipation and diarrhea',
            dec2: 'Green apples contain antioxidants like quercetin, catechin, and chlorogenic acid, which can help fight illness and aging',
            dec3: ['Green apples contain vitamin A and vitamin C, as well as calcium and iron.', 'Green apples are low in calories and can be part of a weight management regimen', 'Green apples contain flavonoids, which can help protect cells from oxidative stress.'],
            dec4: 'Green apples are a versatile fruit that can be eaten raw or used in cooking. They have many health benefits',
        },
        additionalInformation: {
            weight: "0.6 kg",
            color: "Green",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 900,
        },
        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Delicious and healthy!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "Not bad, a bit tart.",
                rating: 3,
            },
        ],
        promotions: {
            discount: "30% Discount",
            organic: "90% Organic",
        },
    },
    {
        id: 'f7',
        name: "Blueberry",
        sku: "F5678",
        price: {
            original: 50.0,
            discounted: 35.00,
            discountPercentage: 30,
        },
        category: "Fruits",
        tags: ["Fruits", "Healthy", "Blueberry", "Antioxidants"],
        rating: 4.7,
        reviews: 12,
        inStock: true,
        mainDec: 'Blueberries are small but packed with antioxidants and nutrients.',
        brand: 'Nature Fresh',
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
                main: 'https://img.freepik.com/free-photo/blueberry-isolated_144627-14308.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/handful-fresh-blueberries_144627-21339.jpg?w=740',
                    'https://images.unsplash.com/photo-1517686469429-929eac995e1d?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fblueberries.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1593952096093-1d61d5c98b53?w=1000&auto=format&fit=crop&q=60',
                ],
            },
        ],
        description: {
            dec1: 'Blueberries are rich in fiber and vitamin C, which promote a healthy immune system.',
            dec2: 'They contain powerful antioxidants that protect against heart disease and aging.',
            dec3: ['Blueberries improve memory and cognitive function.', 'They are low in calories and perfect for weight management.', 'Blueberries can help reduce blood pressure and improve skin health.'],
            dec4: 'Blueberries are versatile and can be consumed fresh, frozen, or added to a variety of dishes.',
        },
        additionalInformation: {
            weight: "0.3 kg",
            color: "Blue",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 850,
        },
        customerFeedback: [
            {
                name: "Emily Davis",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "So fresh and delicious!",
                rating: 5,
            },
            {
                name: "Liam Johnson",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "Loved the taste and quality.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "30% Discount",
            organic: "85% Organic",
        },
    },
    {
        id: 'f8',
        name: "Mango",
        sku: "F2349",
        price: {
            original: 60.0,
            discounted: 45.00,
            discountPercentage: 25,
        },
        category: "Fruits",
        tags: ["Fruits", "Sweet", "Mango", "Tropical"],
        rating: 4.9,
        reviews: 20,
        inStock: true,
        mainDec: 'Mangoes are known as the king of fruits, with their sweet and rich flavor.',
        brand: 'Tropical Farms',
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
                main: 'https://img.freepik.com/free-photo/fresh-ripe-mango_1339-36317.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/sliced-mango_144627-18867.jpg?w=740',
                    'https://images.unsplash.com/photo-1615473486775-d66c2b12dfee?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fmangoes.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1517686469429-929eac995e1d?w=1000&auto=format&fit=crop&q=60',
                ],
            },
        ],
        description: {
            dec1: 'Mangoes are rich in vitamin A and C, promoting healthy skin and immune system.',
            dec2: 'They contain enzymes that aid in digestion and improve gut health.',
            dec3: ['Mangoes are a good source of antioxidants.', 'They are perfect for smoothies, salads, and desserts.', 'Mangoes are known to boost eye health and reduce inflammation.'],
            dec4: 'Mangoes are a versatile fruit used in savory and sweet dishes.',
        },
        additionalInformation: {
            weight: "1.0 kg",
            color: "Yellow",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 1200,
        },
        customerFeedback: [
            {
                name: "Oliver Wilson",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "The best mangoes I've ever had!",
                rating: 5,
            },
            {
                name: "Sophia Brown",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "Very juicy and sweet.",
                rating: 5,
            },
        ],
        promotions: {
            discount: "25% Discount",
            organic: "90% Organic",
        },
    },
    {
        id: 'f9',
        name: "Strawberry",
        sku: "F4567",
        price: {
            original: 40.0,
            discounted: 30.00,
            discountPercentage: 25,
        },
        category: "Fruits",
        tags: ["Fruits", "Sweet", "Strawberry", "Berry"],
        rating: 4.8,
        reviews: 18,
        inStock: true,
        mainDec: 'Strawberries are a juicy and sweet fruit, perfect for a healthy snack.',
        brand: 'Berry Delight',
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
                main: 'https://img.freepik.com/free-photo/fresh-strawberries_144627-20127.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/sliced-strawberries_144627-20126.jpg?w=740',
                    'https://images.unsplash.com/photo-1585821164222-2d0ef2c6a9e7?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fstrawberries.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1508514177221-188bafc6fa59?w=1000&auto=format&fit=crop&q=60',
                ],
            },
        ],
        description: {
            dec1: 'Strawberries are rich in antioxidants and vitamin C, supporting heart health.',
            dec2: 'They help reduce inflammation and promote radiant skin.',
            dec3: ['Strawberries improve blood sugar control and boost metabolism.', 'Perfect for smoothies, desserts, and salads.', 'They are low in calories and support weight management.'],
            dec4: 'Strawberries can be enjoyed fresh or used in various recipes.',
        },
        additionalInformation: {
            weight: "0.5 kg",
            color: "Red",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 1000,
        },
        customerFeedback: [
            {
                name: "Ava Martinez",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Super fresh and tasty!",
                rating: 5,
            },
            {
                name: "Noah Rodriguez",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "These strawberries are just amazing.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "25% Discount",
            organic: "95% Organic",
        },
    },
    {
        id: 'f10',
        name: "Pineapple",
        sku: "F9876",
        price: {
            original: 70.0,
            discounted: 55.00,
            discountPercentage: 21,
        },
        category: "Fruits",
        tags: ["Fruits", "Tropical", "Pineapple", "Sweet"],
        rating: 4.6,
        reviews: 25,
        inStock: true,
        mainDec: 'Pineapples are a tropical fruit known for their sweet and tangy flavor.',
        brand: 'Tropical Joy',
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
                main: 'https://img.freepik.com/free-photo/pineapple-isolated_144627-23215.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/whole-sliced-pineapple_144627-22178.jpg?w=740',
                    'https://images.unsplash.com/photo-1587049352851-f29531c9baee?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fpineapple.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1603228259366-79d7b9db2b23?w=1000&auto=format&fit=crop&q=60',
                ],
            },
        ],
        description: {
            dec1: 'Pineapples are rich in vitamins, enzymes, and antioxidants.',
            dec2: 'They help boost the immune system, build strong bones, and aid digestion.',
            dec3: ['Pineapples are low in calories but high in nutrients, including vitamin C.', 'They help reduce inflammation and support digestive health.', 'Pineapples are great for smoothies and salads.'],
            dec4: 'Pineapples are delicious fresh or used in a variety of tropical recipes.',
        },
        additionalInformation: {
            weight: "1.2 kg",
            color: "Yellow",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 950,
        },
        customerFeedback: [
            {
                name: "Isabella Garcia",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Loved the sweetness of this pineapple!",
                rating: 5,
            },
            {
                name: "Ethan Martinez",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "Very fresh and juicy.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "21% Discount",
            organic: "90% Organic",
        },
    },
    {
        id: 'f11',
        name: "Papaya",
        sku: "F1123",
        price: {
            original: 50.0,
            discounted: 40.00,
            discountPercentage: 20,
        },
        category: "Fruits",
        tags: ["Fruits", "Tropical", "Papaya", "Digestive"],
        rating: 4.5,
        reviews: 15,
        inStock: true,
        mainDec: 'Papayas are known for their digestive benefits and sweet flavor.',
        brand: 'Exotic Farms',
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
                main: 'https://img.freepik.com/free-photo/papaya_144627-20419.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/fresh-papaya-sliced-half_144627-18827.jpg?w=740',
                    'https://images.unsplash.com/photo-1528831663370-4e8a2bfa0f9d?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fpapayas.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1587049532180-8b392bde92d9?w=1000&auto=format&fit=crop&q=60',
                ],
            },
        ],
        description: {
            dec1: 'Papayas are a rich source of fiber, vitamin C, and antioxidants.',
            dec2: 'They support digestive health, improve heart health, and may fight inflammation.',
            dec3: ['Papayas are low in calories and rich in enzymes that aid digestion.', 'Great for smoothies, fruit bowls, and desserts.', 'Papayas promote healthy skin and may reduce oxidative stress.'],
            dec4: 'Papayas are best eaten fresh or used in tropical-inspired dishes.',
        },
        additionalInformation: {
            weight: "1.5 kg",
            color: "Orange",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 800,
        },
        customerFeedback: [
            {
                name: "Mia Taylor",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Great quality papaya!",
                rating: 4,
            },
            {
                name: "James Anderson",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "Helped with digestion, really good.",
                rating: 5,
            },
        ],
        promotions: {
            discount: "20% Discount",
            organic: "88% Organic",
        },
    },
    {
        id: 'f12',
        name: "Avocado",
        sku: "F7890",
        price: {
            original: 100.0,
            discounted: 85.00,
            discountPercentage: 15,
        },
        category: "Fruits",
        tags: ["Fruits", "Healthy Fats", "Avocado", "Nutrient-Dense"],
        rating: 4.9,
        reviews: 30,
        inStock: true,
        mainDec: 'Avocados are creamy, rich in healthy fats, and nutrient-dense.',
        brand: 'Green Farms',
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
                main: 'https://img.freepik.com/free-photo/avocado-isolated_144627-24453.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/avocados-whole-halved_144627-23728.jpg?w=740',
                    'https://images.unsplash.com/photo-1587049463764-75fb60f94ef7?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Favocados.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1565061824358-46b6f30311c4?w=1000&auto=format&fit=crop&q=60',
                ],
            },
        ],
        description: {
            dec1: 'Avocados are rich in monounsaturated fats and fiber, supporting heart health.',
            dec2: 'They are loaded with vitamins and minerals, including potassium and vitamin E.',
            dec3: ['Avocados help lower cholesterol levels and improve nutrient absorption.', 'Perfect for guacamole, salads, or spreads.', 'Avocados can enhance skin health and support weight management.'],
            dec4: 'Enjoy avocados fresh or used in various savory dishes.',
        },
        additionalInformation: {
            weight: "0.4 kg",
            color: "Green",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 500,
        },
        customerFeedback: [
            {
                name: "Sophia Wilson",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Creamy and fresh, just what I wanted!",
                rating: 5,
            },
            {
                name: "Liam Thomas",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "Best avocados I've had in a long time.",
                rating: 5,
            },
        ],
        promotions: {
            discount: "15% Discount",
            organic: "99% Organic",
        },
    },
    {
        id: 'f13',
        name: "Kiwi",
        sku: "F4567",
        price: {
            original: 60.0,
            discounted: 45.00,
            discountPercentage: 25,
        },
        category: "Fruits",
        tags: ["Fruits", "Tropical", "Kiwi", "Vitamin C"],
        rating: 4.7,
        reviews: 20,
        inStock: true,
        mainDec: 'Kiwis are small, green, and packed with vitamins, especially vitamin C.',
        brand: 'Tropical Treats',
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
                main: 'https://img.freepik.com/free-photo/kiwi-fruit-isolated_144627-17137.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/sliced-kiwi-fruit_144627-18979.jpg?w=740',
                    'https://images.unsplash.com/photo-1596786932708-5d7648e62312?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fkiwi.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1580644143066-4cbaedb6dd70?w=1000&auto=format&fit=crop&q=60',
                ],
            },
        ],
        description: {
            dec1: 'Kiwis are rich in vitamin C, which supports the immune system.',
            dec2: 'They contain antioxidants that help combat oxidative stress and inflammation.',
            dec3: ['Kiwis are high in dietary fiber, which aids in digestion.', 'They also contain vitamins K and E, beneficial for overall health.', 'Kiwis are versatile and can be added to various dishes.'],
            dec4: 'Kiwis can be eaten fresh or used in fruit salads and desserts.',
        },
        additionalInformation: {
            weight: "0.3 kg",
            color: "Brown and Green",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 650,
        },
        customerFeedback: [
            {
                name: "Olivia Moore",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Sweet and tangy, just perfect!",
                rating: 5,
            },
            {
                name: "Lucas Lee",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "Great quality kiwis, very fresh.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "25% Discount",
            organic: "90% Organic",
        },
    },
    {
        id: 'f14',
        name: "Pomegranate",
        sku: "F2234",
        price: {
            original: 80.0,
            discounted: 65.00,
            discountPercentage: 19,
        },
        category: "Fruits",
        tags: ["Fruits", "Pomegranate", "Antioxidants", "Juicy"],
        rating: 4.8,
        reviews: 18,
        inStock: true,
        mainDec: 'Pomegranates are known for their juicy seeds and high antioxidant content.',
        brand: 'Fruit Paradise',
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
                main: 'https://img.freepik.com/free-photo/pomegranate-fruit-isolated_144627-22111.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/pomegranate-opened_144627-19537.jpg?w=740',
                    'https://images.unsplash.com/photo-1593642532973-d31b6557f21b?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fpomegranates.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1584041170650-2e34e6a6a1eb?w=1000&auto=format&fit=crop&q=60',
                ],
            },
        ],
        description: {
            dec1: 'Pomegranates are rich in antioxidants, which help protect the body from free radicals.',
            dec2: 'They have anti-inflammatory properties and may improve heart health.',
            dec3: ['Pomegranates contain vitamins C and K, supporting immune function and bone health.', 'Their seeds are juicy and can be enjoyed fresh or in beverages.', 'Pomegranates may help reduce blood pressure and cholesterol levels.'],
            dec4: 'Pomegranates are excellent for snacking or adding to salads and smoothies.',
        },
        additionalInformation: {
            weight: "0.6 kg",
            color: "Red",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 400,
        },
        customerFeedback: [
            {
                name: "Emma Johnson",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Amazing taste, highly recommended!",
                rating: 5,
            },
            {
                name: "Benjamin Davis",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "Very juicy and sweet.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "19% Discount",
            organic: "85% Organic",
        },
    },
    {
        id: 'f16',
        name: "Mango",
        sku: "F4456",
        price: {
            original: 70.0,
            discounted: 55.00,
            discountPercentage: 21,
        },
        category: "Fruits",
        tags: ["Fruits", "Tropical", "Mango", "Sweet"],
        rating: 4.9,
        reviews: 25,
        inStock: true,
        mainDec: 'Mangoes are tropical fruits known for their sweet, juicy flavor and vibrant color.',
        brand: 'Tropical Harvest',
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
                main: 'https://img.freepik.com/free-photo/mango-fruit-isolated_144627-22107.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/sliced-mango-fruit_144627-19765.jpg?w=740',
                    'https://images.unsplash.com/photo-1507852101377-380708b5a062?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fmango.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1504694090668-c4f68b4efb1c?w=1000&auto=format&fit=crop&q=60',
                ],
            },
        ],
        description: {
            dec1: 'Mangoes are rich in vitamins A and C, promoting healthy skin and immune function.',
            dec2: 'They contain antioxidants that help combat oxidative stress and inflammation.',
            dec3: ['Mangoes are high in dietary fiber, aiding in digestion and preventing constipation.', 'Their sweet flavor makes them ideal for smoothies, salads, and desserts.', 'Mangoes are also a good source of folate, which is important for cell function.'],
            dec4: 'Enjoy mangoes fresh or in a variety of tropical recipes.',
        },
        additionalInformation: {
            weight: "0.4 kg",
            color: "Yellow and Red",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 800,
        },
        customerFeedback: [
            {
                name: "Ava Carter",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Incredibly juicy and sweet!",
                rating: 5,
            },
            {
                name: "Ethan Brown",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "Delicious, but a bit expensive.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "21% Discount",
            organic: "95% Organic",
        },
    },
    {
        id: 'f17',
        name: "Papaya",
        sku: "F5567",
        price: {
            original: 50.0,
            discounted: 38.00,
            discountPercentage: 24,
        },
        category: "Fruits",
        tags: ["Fruits", "Tropical", "Papaya", "Vitamin C"],
        rating: 4.5,
        reviews: 15,
        inStock: true,
        mainDec: 'Papayas are tropical fruits with a sweet, musky flavor and vibrant orange flesh.',
        brand: 'Tropical Harvest',
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
                main: 'https://img.freepik.com/free-photo/papaya-fruit-isolated_144627-19185.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/sliced-papaya-fruit_144627-17956.jpg?w=740',
                    'https://images.unsplash.com/photo-1601541819115-3a2b9c8b9f48?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fpapaya.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1560476788-bc70fd40ecf2?w=1000&auto=format&fit=crop&q=60',
                ],
            },
        ],
        description: {
            dec1: 'Papayas are rich in vitamin C, which supports immune function and skin health.',
            dec2: 'They contain enzymes like papain, which aids in digestion.',
            dec3: ['Papayas are low in calories and high in antioxidants.', 'Their sweet flavor makes them a great addition to smoothies and salads.', 'Papayas also have anti-inflammatory properties.'],
            dec4: 'Enjoy papayas fresh or in a variety of tropical dishes.',
        },
        additionalInformation: {
            weight: "0.8 kg",
            color: "Orange",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 550,
        },
        customerFeedback: [
            {
                name: "Mia Garcia",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Sweet and refreshing, a perfect tropical treat!",
                rating: 5,
            },
            {
                name: "Noah Martinez",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "Very fresh, but a bit expensive.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "24% Discount",
            organic: "85% Organic",
        },
    },
    {
        id: 'f18',
        name: "Cherry",
        sku: "F6678",
        price: {
            original: 90.0,
            discounted: 75.00,
            discountPercentage: 17,
        },
        category: "Fruits",
        tags: ["Fruits", "Berries", "Cherry", "Sweet"],
        rating: 4.6,
        reviews: 19,
        inStock: true,
        mainDec: 'Cherries are small, round fruits known for their sweet-tart flavor and vibrant color.',
        brand: 'Berry Best',
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
                main: 'https://img.freepik.com/free-photo/cherry-fruit-isolated_144627-20568.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/sliced-cherry-fruit_144627-19034.jpg?w=740',
                    'https://images.unsplash.com/photo-1595273406980-e1f6a68959d3?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fcherries.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1504674900247-6b5402f9c48d?w=1000&auto=format&fit=crop&q=60',
                ],
            },
        ],
        description: {
            dec1: 'Cherries are high in antioxidants, which help reduce inflammation and oxidative stress.',
            dec2: 'They are also rich in vitamins A and C, supporting overall health.',
            dec3: ['Cherries contain dietary fiber, which aids in digestion.', 'Their sweet-tart flavor makes them ideal for snacking or desserts.', 'Cherries may also help improve sleep quality.'],
            dec4: 'Enjoy cherries fresh or in a variety of sweet dishes and beverages.',
        },
        additionalInformation: {
            weight: "0.4 kg",
            color: "Red",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 400,
        },
        customerFeedback: [
            {
                name: "Sophia Lee",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Sweet and juicy cherries, highly recommend!",
                rating: 5,
            },
            {
                name: "Liam Wilson",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "Good quality, but a bit on the pricey side.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "17% Discount",
            organic: "90% Organic",
        },
    },
    {
        id: 'f19',
        name: "Kiwi",
        sku: "F7789",
        price: {
            original: 60.0,
            discounted: 45.00,
            discountPercentage: 25,
        },
        category: "Fruits",
        tags: ["Fruits", "Tropical", "Kiwi", "Vitamin C"],
        rating: 4.7,
        reviews: 22,
        inStock: true,
        mainDec: 'Kiwi is a small, brown, fuzzy fruit with a vibrant green interior and a unique sweet-tart flavor.',
        brand: 'Fresh Picks',
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
                main: 'https://img.freepik.com/free-photo/kiwi-fruit-isolated_144627-21109.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/sliced-kiwi-fruit_144627-20234.jpg?w=740',
                    'https://images.unsplash.com/photo-1542751613-51cb4c1b873e?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fkiwi.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1511226747640-510b780f684d?w=1000&auto=format&fit=crop&q=60',
                ],
            },
        ],
        description: {
            dec1: 'Kiwi is an excellent source of vitamin C, essential for immune function and skin health.',
            dec2: 'It contains dietary fiber, which aids in digestion and promotes a healthy gut.',
            dec3: ['Kiwi is also rich in antioxidants, which help protect cells from oxidative damage.', 'Its unique flavor makes it a popular choice for fruit salads and smoothies.', 'Kiwi provides essential nutrients like potassium and vitamin K.'],
            dec4: 'Enjoy kiwi fresh or in various recipes for a nutrient boost.',
        },
        additionalInformation: {
            weight: "0.3 kg",
            color: "Green with Brown Skin",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 650,
        },
        customerFeedback: [
            {
                name: "Olivia Turner",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Fresh and tangy, a great addition to any fruit salad!",
                rating: 5,
            },
            {
                name: "James White",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "Good quality but a little too tart for my taste.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "25% Discount",
            organic: "90% Organic",
        },
    },
    {
        id: 'f20',
        name: "Mango",
        sku: "F5567",
        price: {
            original: 70.0,
            discounted: 50.00,
            discountPercentage: 29,
        },
        category: "Fruits",
        tags: ["Fruits", "Tropical", "Mango", "Sweet"],
        rating: 4.8,
        reviews: 30,
        inStock: true,
        mainDec: 'Mango is a delicious tropical fruit with a sweet flavor and a juicy, fibrous texture.',
        brand: 'Tropical Delights',
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
                main: 'https://img.freepik.com/free-photo/ripe-mango-isolated-white-background_1150-34456.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/juicy-mango-slices_1150-36100.jpg?w=740',
                    'https://images.unsplash.com/photo-1554066124-1648a7ffb3d1?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fblogcard-images%2FNone%2F7a790f1e-bcbb-46a2-a84e-1db689758d95.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1549185913-7b4f91d12a9a?w=1000&auto=format&fit=crop&q=60',
                ],
            },
        ],
        description: {
            dec1: 'Mangoes are high in vitamin C, which supports the immune system and skin health.',
            dec2: 'They also contain vitamin A and antioxidants that are beneficial for eye health.',
            dec3: ['Mangoes have digestive enzymes like amylase that aid in digestion.', 'They are low in calories and can be part of a weight management diet.', 'Mangoes are versatile and can be enjoyed fresh, in smoothies, or as a topping.'],
            dec4: 'Savor mangoes fresh or in a variety of dishes for a sweet, tropical flavor.',
        },
        additionalInformation: {
            weight: "0.4 kg",
            color: "Yellow-Orange",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 750,
        },
        customerFeedback: [
            {
                name: "Emily Brown",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Absolutely delicious and juicy mangoes!",
                rating: 5,
            },
            {
                name: "Michael Clark",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "Good mangoes, but they were a bit underripe.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "29% Discount",
            organic: "85% Organic",
        },
    },
    {
        id: 'f21',
        name: "Pineapple",
        sku: "F9998",
        price: {
            original: 80.0,
            discounted: 60.00,
            discountPercentage: 25,
        },
        category: "Fruits",
        tags: ["Fruits", "Tropical", "Pineapple", "Sweet"],
        rating: 4.6,
        reviews: 18,
        inStock: true,
        mainDec: 'Pineapple is a tropical fruit with a sweet, tangy flavor and a juicy, fibrous texture.',
        brand: 'Tropical Treats',
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
                main: 'https://img.freepik.com/free-photo/fresh-pineapple-isolated_1150-27721.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/pineapple-slices_1150-29694.jpg?w=740',
                    'https://images.unsplash.com/photo-1580915747027-d8c34c3da8a1?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fblogcard-images%2FNone%2F6f905a4a-208c-4d41-b6b2-00b7f60c4d6b.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1536542700772-dde8f10f6274?w=1000&auto=format&fit=crop&q=60',
                ],
            },
        ],
        description: {
            dec1: 'Pineapples are rich in vitamin C, supporting immune function and skin health.',
            dec2: 'They contain bromelain, an enzyme that helps with digestion and inflammation.',
            dec3: ['Pineapples are a good source of manganese, which supports bone health.', 'Their sweet and tangy flavor makes them perfect for a variety of dishes.', 'They are low in fat and calories, making them a healthy choice.'],
            dec4: 'Enjoy pineapples fresh, in juices, or as a tropical addition to your recipes.',
        },
        additionalInformation: {
            weight: "0.6 kg",
            color: "Yellow",
            type: "Organic",
            category: "Fruits",
            stockStatus: "Available",
            stockQuantity: 500,
        },
        customerFeedback: [
            {
                name: "Ava Martinez",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Sweet and juicy, just like I love it!",
                rating: 5,
            },
            {
                name: "William Taylor",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "Good quality but a bit too tart for me.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "25% Discount",
            organic: "95% Organic",
        },
    },
    
];
