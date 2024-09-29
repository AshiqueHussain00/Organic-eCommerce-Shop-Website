import reviewimg1 from '../../assets/common/product/reviewimg1.svg'
import reviewimg2 from '../../assets/common/product/reviewimg2.svg'


const allproductData = [
    {
        id: 'f1',
        name: 'Green Apple',
        sku: 'F1234',
        price: { original: 40.0, discounted: 25.0, discountPercentage: 5 },
        category: 'Fruits',
        tags: ['Fruits', 'Healthy', 'Apple', 'Green'],
        rating: 3.9,
        reviews: 8,
        inStock: true,
        mainDec:
            'Green Apple are sweet fruit known for their vibrant green color and nutritional value.',
        brand: 'Organic Farms',

        images: [
            {
                main: 'https://img.freepik.com/free-photo/green-apple-isolated-white_2829-9403.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/40033824-5_2-fresho-apple-red-delicious-regular.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/40033824-4_2-fresho-apple-red-delicious-regular.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/40033824-3_2-fresho-apple-red-delicious-regular.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/40033824-2_13-fresho-apple-red-delicious-regular.jpg'
                ]
            }
        ],
        description: {
            dec1: 'High in fiber...',
            dec2: 'Contains antioxidants...',
            dec3: [],
            dec4: 'Versatile fruit...'
        },
        additionalInformation: {
            weight: '0.5 kg',
            color: 'Green',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 1100
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: 'img1.png',
                feedback: 'Fresh and sweet!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg: 'img2.png',
                feedback: 'A bit too crunchy.',
                rating: 4
            }
        ],
        promotions: { discount: '40% Discount', organic: '80% Organic' }
    },
    {
        id: 'f2',
        name: 'Red Apple',
        sku: 'F4321',
        price: { original: 45.0, discounted: 30.0, discountPercentage: 10 },
        category: 'Fruits',
        tags: ['Fruits', 'Healthy', 'Apple', 'Red'],
        rating: 4.2,
        reviews: 10,
        inStock: true,
        mainDec: 'Red Apple is known for its sweetness and bright red color.',
        brand: 'Fresh Farms',

        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/40033824_25-fresho-apple-red-delicious-regular.jpg',
                thumbnails: [
                    'https://www.jiomart.com/images/product/original/599991233/apple-red-delicious-usa-premium-imported-6-pc-product-images-o599991233-p591057875-3-202401241848.jpg?im=Resize=(420,420)',
                    'https://www.jiomart.com/images/product/original/599991233/apple-red-delicious-usa-premium-imported-6-pc-product-images-o599991233-p591057875-2-202401241848.jpg?im=Resize=(420,420)',
                    'https://www.jiomart.com/images/product/original/599991233/apple-red-delicious-usa-premium-imported-6-pc-product-images-o599991233-p591057875-1-202401241848.jpg?im=Resize=(420,420)',
                    'https://www.jiomart.com/images/product/original/599991233/apple-red-delicious-usa-premium-imported-6-pc-product-images-o599991233-p591057875-0-202401241848.jpg?im=Resize=(420,420)'
                ]
            }
        ],
        description: {
            dec1: 'Rich in vitamins...',
            dec2: 'Helps improve immunity...',
            dec3: [],
            dec4: 'Best for snacking...'
        },
        additionalInformation: {
            weight: '0.5 kg',
            color: 'Red',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 900
        },
        customerFeedback: [
            {
                name: 'Alice Brown',
                reviewImg: 'img3.png',
                feedback: 'Very juicy!',
                rating: 5
            },
            {
                name: 'Bob Martin',
                reviewImg: 'img4.png',
                feedback: 'Could be sweeter.',
                rating: 4
            }
        ],
        promotions: { discount: '30% Discount', organic: '90% Organic' }
    },
    {
        id: 'f3',
        name: 'Banana',
        sku: 'F5678',
        price: { original: 20.0, discounted: 15.0, discountPercentage: 25 },
        category: 'Fruits',
        tags: ['Fruits', 'Healthy', 'Banana', 'Yellow'],
        rating: 4.8,
        reviews: 12,
        inStock: true,
        mainDec:
            'Bananas are rich in potassium and known for their energy-boosting properties.',
        brand: "Nature's Delight",

        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/10000033_26-fresho-banana-yelakki.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/10000027-3_7-fresho-banana-robusta.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/10000033-6_1-fresho-banana-yelakki.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/10000033-3_4-fresho-banana-yelakki.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/10000033-2_5-fresho-banana-yelakki.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Provides quick energy...',
            dec2: 'Helps with muscle recovery...',
            dec3: [],
            dec4: 'Perfect for on-the-go snacking...'
        },
        additionalInformation: {
            weight: '1 kg',
            color: 'Yellow',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 1500
        },
        customerFeedback: [
            {
                name: 'Chris Lee',
                reviewImg: 'img5.png',
                feedback: 'Perfect ripeness!',
                rating: 5
            },
            {
                name: 'Diana Wilson',
                reviewImg: 'img6.png',
                feedback: 'Could be fresher.',
                rating: 3
            }
        ],
        promotions: { discount: '25% Discount', organic: '85% Organic' }
    },

    {
        id: 'f5',
        name: 'Green Apple',
        sku: 'F5678',
        price: {
            original: 40.0,
            discounted: 25.0,
            discountPercentage: 5
        },
        category: 'Fruits',
        tags: ['Fruits', 'Healthy', 'Apple', 'Green'],
        rating: 4.3,
        reviews: 12,
        inStock: true,
        mainDec:
            'Green Apple are sweet fruit known for their vibrant green color and nutritional value.',
        brand: 'Organic Farms',


        images: [
            {
                main: 'https://img.freepik.com/free-photo/green-apple-isolated-white_2829-9403.jpg?t=st=1726594556~exp=1726598156~hmac=be92c856b6a4f2999035a6376beedc156f7d8d9db7cc7d1e0008db95275ef9aa&w=740',
                thumbnails: [
                    'https://img.freepik.com/premium-photo/three-green-apple-isolated-white-background-bunch-whole-fruits_92795-2474.jpg?w=740',
                    'https://images.unsplash.com/photo-1579183396663-79422002e473?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyZWVuJTIwYXBwbGVzfGVufDB8fDB8fHww',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fblogcard-images%2FNone%2F7428c538-d994-4f1d-ad81-2b4a65578923.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1512578659172-63a4634c05ec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBhcHBsZXN8ZW58MHx8MHx8fDA%3D'
                ]
            }
        ],
        description: {
            dec1: 'Green apples are high in fiber, which can help with digestion and relieve constipation and diarrhea',
            dec2: 'Green apples contain antioxidants like quercetin, catechin, and chlorogenic acid, which can help fight illness and aging',
            dec3: [
                'Green apples contain vitamin A and vitamin C, as well as calcium and iron.',
                'Green apples are low in calories and can be part of a weight management regimen',
                'Green apples contain flavonoids, which can help protect cells from oxidative stress.'
            ],
            dec4: 'Green apples are a versatile fruit that can be eaten raw or used in cooking. They have many health benefits'
        },
        additionalInformation: {
            weight: '0.5 kg',
            color: 'Green',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 1100
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Fresh and sweet!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'A bit too crunchy for my taste.',
                rating: 4
            }
        ],
        promotions: {
            discount: '40% Discount',
            organic: '80% Organic'
        }
    },

    {
        id: 'f6',
        name: 'Green Apple',
        sku: 'F9876',
        price: {
            original: 50.0,
            discounted: 30.0,
            discountPercentage: 10
        },
        category: 'Fruits',
        tags: ['Fruits', 'Healthy', 'Apple', 'Green'],
        rating: 4.6,
        reviews: 10,
        inStock: true,
        mainDec:
            'Green Apple are sweet fruit known for their vibrant green color and nutritional value.',
        brand: 'Organic Farms',


        images: [
            {
                main: 'https://img.freepik.com/free-photo/green-apple-isolated-white_2829-9403.jpg?t=st=1726594556~exp=1726598156~hmac=be92c856b6a4f2999035a6376beedc156f7d8d9db7cc7d1e0008db95275ef9aa&w=740',
                thumbnails: [
                    'https://img.freepik.com/premium-photo/three-green-apple-isolated-white-background-bunch-whole-fruits_92795-2474.jpg?w=740',
                    'https://images.unsplash.com/photo-1579183396663-79422002e473?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyZWVuJTIwYXBwbGVzfGVufDB8fDB8fHww',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fblogcard-images%2FNone%2F7428c538-d994-4f1d-ad81-2b4a65578923.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1512578659172-63a4634c05ec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBhcHBsZXN8ZW58MHx8MHx8fDA%3D'
                ]
            }
        ],
        description: {
            dec1: 'Green apples are high in fiber, which can help with digestion and relieve constipation and diarrhea',
            dec2: 'Green apples contain antioxidants like quercetin, catechin, and chlorogenic acid, which can help fight illness and aging',
            dec3: [
                'Green apples contain vitamin A and vitamin C, as well as calcium and iron.',
                'Green apples are low in calories and can be part of a weight management regimen',
                'Green apples contain flavonoids, which can help protect cells from oxidative stress.'
            ],
            dec4: 'Green apples are a versatile fruit that can be eaten raw or used in cooking. They have many health benefits'
        },
        additionalInformation: {
            weight: '0.6 kg',
            color: 'Green',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 900
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Delicious and healthy!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'Not bad, a bit tart.',
                rating: 3
            }
        ],
        promotions: {
            discount: '30% Discount',
            organic: '90% Organic'
        }
    },
    {
        id: 'f7',
        name: 'Blueberries',
        sku: 'F9123',
        price: { original: 60.0, discounted: 45.0, discountPercentage: 20 },
        category: 'Fruits',
        tags: ['Fruits', 'Healthy', 'Blueberries'],
        rating: 4.7,
        reviews: 20,
        inStock: true,
        mainDec:
            'Blueberries are loaded with antioxidants and are known for boosting brain health.',
        brand: 'Super Berries',

        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/30009286_11-fresho-blueberry.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/30009286-3_2-fresho-blueberry.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/30009286-3_2-fresho-blueberry.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/30009286-3_2-fresho-blueberry.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/30009286-2_2-fresho-blueberry.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Supports brain function...',
            dec2: 'Rich in antioxidants...',
            dec3: [],
            dec4: 'Perfect for adding to breakfast...'
        },
        additionalInformation: {
            weight: '0.3 kg',
            color: 'Blue',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 700
        },
        customerFeedback: [
            {
                name: 'Emily Davis',
                reviewImg: 'img7.png',
                feedback: 'Very fresh and tasty!',
                rating: 5
            },
            {
                name: 'Frank Thomas',
                reviewImg: 'img8.png',
                feedback: 'A bit expensive.',
                rating: 4
            }
        ],
        promotions: { discount: '20% Discount', organic: '100% Organic' }
    },
    {
        id: 'f8',
        name: 'Mango',
        sku: 'F2349',
        price: {
            original: 60.0,
            discounted: 45.0,
            discountPercentage: 25
        },
        category: 'Fruits',
        tags: ['Fruits', 'Sweet', 'Mango', 'Tropical'],
        rating: 4.9,
        reviews: 20,
        inStock: true,
        mainDec:
            'Mangoes are known as the king of fruits, with their sweet and rich flavor.',
        brand: 'Tropical Farms',


        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/10000302_7-fresho-alphonso-mango-badami.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/10000306_4-fresho-lalbagh-mango-sindhura.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/10000306-2_2-fresho-lalbagh-mango-sindhura.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/1200345_2-bb-combo-mango-banganpalli.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/1200345_2-bb-combo-mango-banganpalli.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Mangoes are rich in vitamin A and C, promoting healthy skin and immune system.',
            dec2: 'They contain enzymes that aid in digestion and improve gut health.',
            dec3: [
                'Mangoes are a good source of antioxidants.',
                'They are perfect for smoothies, salads, and desserts.',
                'Mangoes are known to boost eye health and reduce inflammation.'
            ],
            dec4: 'Mangoes are a versatile fruit used in savory and sweet dishes.'
        },
        additionalInformation: {
            weight: '1.0 kg',
            color: 'Yellow',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 1200
        },
        customerFeedback: [
            {
                name: 'Oliver Wilson',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "The best mangoes I've ever had!",
                rating: 5
            },
            {
                name: 'Sophia Brown',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'Very juicy and sweet.',
                rating: 5
            }
        ],
        promotions: {
            discount: '25% Discount',
            organic: '90% Organic'
        }
    },
    {
        id: 'f9',
        name: 'Strawberry',
        sku: 'F4567',
        price: {
            original: 40.0,
            discounted: 30.0,
            discountPercentage: 25
        },
        category: 'Fruits',
        tags: ['Fruits', 'Sweet', 'Strawberry', 'Berry'],
        rating: 4.8,
        reviews: 18,
        inStock: true,
        mainDec:
            'Strawberries are a juicy and sweet fruit, perfect for a healthy snack.',
        brand: 'Berry Delight',


        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/10000263_13-fresho-strawberry.jpg',
                thumbnails: [
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Strawberry_gariguette_DSC03063.JPG/330px-Strawberry_gariguette_DSC03063.JPG',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/330px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29.jpg/353px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29.jpg',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Strawberries_at_Ljubljana_Central_Market.JPG/330px-Strawberries_at_Ljubljana_Central_Market.JPG'
                ]
            }
        ],
        description: {
            dec1: 'Strawberries are rich in antioxidants and vitamin C, supporting heart health.',
            dec2: 'They help reduce inflammation and promote radiant skin.',
            dec3: [
                'Strawberries improve blood sugar control and boost metabolism.',
                'Perfect for smoothies, desserts, and salads.',
                'They are low in calories and support weight management.'
            ],
            dec4: 'Strawberries can be enjoyed fresh or used in various recipes.'
        },
        additionalInformation: {
            weight: '0.5 kg',
            color: 'Red',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 1000
        },
        customerFeedback: [
            {
                name: 'Ava Martinez',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Super fresh and tasty!',
                rating: 5
            },
            {
                name: 'Noah Rodriguez',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'These strawberries are just amazing.',
                rating: 4
            }
        ],
        promotions: {
            discount: '25% Discount',
            organic: '95% Organic'
        }
    },
    {
        id: 'f10',
        name: 'Pineapple',
        sku: 'F9876',
        price: {
            original: 70.0,
            discounted: 55.0,
            discountPercentage: 21
        },
        category: 'Fruits',
        tags: ['Fruits', 'Tropical', 'Pineapple', 'Sweet'],
        rating: 4.6,
        reviews: 25,
        inStock: true,
        mainDec:
            'Pineapples are a tropical fruit known for their sweet and tangy flavor.',
        brand: 'Tropical Joy',


        images: [
            {
                main: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/330px-Pineapple_and_cross_section.jpg',
                thumbnails: [
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ananas_comosus_Victoria_P1190459.jpg/180px-Ananas_comosus_Victoria_P1190459.jpg',
                    'https://goplow.co.in/cdn/shop/products/37.png?v=1666166527',
                    'https://goplow.co.in/cdn/shop/products/37.png?v=1666166527',
                    'https://goplow.co.in/cdn/shop/products/37.png?v=1666166527'
                ]
            }
        ],
        description: {
            dec1: 'Pineapples are rich in vitamins, enzymes, and antioxidants.',
            dec2: 'They help boost the immune system, build strong bones, and aid digestion.',
            dec3: [
                'Pineapples are low in calories but high in nutrients, including vitamin C.',
                'They help reduce inflammation and support digestive health.',
                'Pineapples are great for smoothies and salads.'
            ],
            dec4: 'Pineapples are delicious fresh or used in a variety of tropical recipes.'
        },
        additionalInformation: {
            weight: '1.2 kg',
            color: 'Yellow',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 950
        },
        customerFeedback: [
            {
                name: 'Isabella Garcia',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Loved the sweetness of this pineapple!',
                rating: 5
            },
            {
                name: 'Ethan Martinez',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'Very fresh and juicy.',
                rating: 4
            }
        ],
        promotions: {
            discount: '21% Discount',
            organic: '90% Organic'
        }
    },
    {
        id: 'f11',
        name: 'Papaya',
        sku: 'F1123',
        price: {
            original: 50.0,
            discounted: 40.0,
            discountPercentage: 20
        },
        category: 'Fruits',
        tags: ['Fruits', 'Tropical', 'Papaya', 'Digestive'],
        rating: 4.5,
        reviews: 15,
        inStock: true,
        mainDec: 'Papayas are known for their digestive benefits and sweet flavor.',
        brand: 'Exotic Farms',


        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Papayas are a rich source of fiber, vitamin C, and antioxidants.',
            dec2: 'They support digestive health, improve heart health, and may fight inflammation.',
            dec3: [
                'Papayas are low in calories and rich in enzymes that aid digestion.',
                'Great for smoothies, fruit bowls, and desserts.',
                'Papayas promote healthy skin and may reduce oxidative stress.'
            ],
            dec4: 'Papayas are best eaten fresh or used in tropical-inspired dishes.'
        },
        additionalInformation: {
            weight: '1.5 kg',
            color: 'Orange',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 800
        },
        customerFeedback: [
            {
                name: 'Mia Taylor',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Great quality papaya!',
                rating: 4
            },
            {
                name: 'James Anderson',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'Helped with digestion, really good.',
                rating: 5
            }
        ],
        promotions: {
            discount: '20% Discount',
            organic: '88% Organic'
        }
    },
    {
        id: 'f12',
        name: 'Avocado',
        sku: 'F7890',
        price: {
            original: 100.0,
            discounted: 85.0,
            discountPercentage: 15
        },
        category: 'Fruits',
        tags: ['Fruits', 'Healthy Fats', 'Avocado', 'Nutrient-Dense'],
        rating: 4.9,
        reviews: 30,
        inStock: true,
        mainDec: 'Avocados are creamy, rich in healthy fats, and nutrient-dense.',
        brand: 'Green Farms',


        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/10000312_21-fresho-avocado.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/10000312-2_3-fresho-avocado.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/10000312-4_2-fresho-avocado.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/10000312-3_2-fresho-avocado.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/40147020_1-fresho-avocado-imported-small.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Avocados are rich in monounsaturated fats and fiber, supporting heart health.',
            dec2: 'They are loaded with vitamins and minerals, including potassium and vitamin E.',
            dec3: [
                'Avocados help lower cholesterol levels and improve nutrient absorption.',
                'Perfect for guacamole, salads, or spreads.',
                'Avocados can enhance skin health and support weight management.'
            ],
            dec4: 'Enjoy avocados fresh or used in various savory dishes.'
        },
        additionalInformation: {
            weight: '0.4 kg',
            color: 'Green',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 500
        },
        customerFeedback: [
            {
                name: 'Sophia Wilson',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Creamy and fresh, just what I wanted!',
                rating: 5
            },
            {
                name: 'Liam Thomas',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "Best avocados I've had in a long time.",
                rating: 5
            }
        ],
        promotions: {
            discount: '15% Discount',
            organic: '99% Organic'
        }
    },
    {
        id: 'f13',
        name: 'Kiwi',
        sku: 'F4567',
        price: {
            original: 60.0,
            discounted: 45.0,
            discountPercentage: 25
        },
        category: 'Fruits',
        tags: ['Fruits', 'Tropical', 'Kiwi', 'Vitamin C'],
        rating: 4.7,
        reviews: 20,
        inStock: true,
        mainDec:
            'Kiwis are small, green, and packed with vitamins, especially vitamin C.',
        brand: 'Tropical Treats',


        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/20000911_35-fresho-kiwi-green.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/20000911-2_40-fresho-kiwi-green.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/20000911-3_1-fresho-kiwi-green.jpg',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fkiwi.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1580644143066-4cbaedb6dd70?w=1000&auto=format&fit=crop&q=60'
                ]
            }
        ],
        description: {
            dec1: 'Kiwis are rich in vitamin C, which supports the immune system.',
            dec2: 'They contain antioxidants that help combat oxidative stress and inflammation.',
            dec3: [
                'Kiwis are high in dietary fiber, which aids in digestion.',
                'They also contain vitamins K and E, beneficial for overall health.',
                'Kiwis are versatile and can be added to various dishes.'
            ],
            dec4: 'Kiwis can be eaten fresh or used in fruit salads and desserts.'
        },
        additionalInformation: {
            weight: '0.3 kg',
            color: 'Brown and Green',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 650
        },
        customerFeedback: [
            {
                name: 'Olivia Moore',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Sweet and tangy, just perfect!',
                rating: 5
            },
            {
                name: 'Lucas Lee',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'Great quality kiwis, very fresh.',
                rating: 4
            }
        ],
        promotions: {
            discount: '25% Discount',
            organic: '90% Organic'
        }
    },
    {
        id: 'f14',
        name: 'Pomegranate',
        sku: 'F2234',
        price: {
            original: 80.0,
            discounted: 65.0,
            discountPercentage: 19
        },
        category: 'Fruits',
        tags: ['Fruits', 'Pomegranate', 'Antioxidants', 'Juicy'],
        rating: 4.8,
        reviews: 18,
        inStock: true,
        mainDec:
            'Pomegranates are known for their juicy seeds and high antioxidant content.',
        brand: 'Fruit Paradise',


        images: [
            {
                main: 'https://img.freepik.com/free-photo/pomegranate-fruit-isolated_144627-22111.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/pomegranate-opened_144627-19537.jpg?w=740',
                    'https://images.unsplash.com/photo-1593642532973-d31b6557f21b?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fpomegranates.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1584041170650-2e34e6a6a1eb?w=1000&auto=format&fit=crop&q=60'
                ]
            }
        ],
        description: {
            dec1: 'Pomegranates are rich in antioxidants, which help protect the body from free radicals.',
            dec2: 'They have anti-inflammatory properties and may improve heart health.',
            dec3: [
                'Pomegranates contain vitamins C and K, supporting immune function and bone health.',
                'Their seeds are juicy and can be enjoyed fresh or in beverages.',
                'Pomegranates may help reduce blood pressure and cholesterol levels.'
            ],
            dec4: 'Pomegranates are excellent for snacking or adding to salads and smoothies.'
        },
        additionalInformation: {
            weight: '0.6 kg',
            color: 'Red',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 400
        },
        customerFeedback: [
            {
                name: 'Emma Johnson',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Amazing taste, highly recommended!',
                rating: 5
            },
            {
                name: 'Benjamin Davis',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'Very juicy and sweet.',
                rating: 4
            }
        ],
        promotions: {
            discount: '19% Discount',
            organic: '85% Organic'
        }
    },
    {
        id: 'f16',
        name: 'Mango',
        sku: 'F4456',
        price: {
            original: 70.0,
            discounted: 55.0,
            discountPercentage: 21
        },
        category: 'Fruits',
        tags: ['Fruits', 'Tropical', 'Mango', 'Sweet'],
        rating: 4.9,
        reviews: 25,
        inStock: true,
        mainDec:
            'Mangoes are tropical fruits known for their sweet, juicy flavor and vibrant color.',
        brand: 'Tropical Harvest',


        images: [
            {
                main: 'https://img.freepik.com/free-photo/mango-fruit-isolated_144627-22107.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/sliced-mango-fruit_144627-19765.jpg?w=740',
                    'https://images.unsplash.com/photo-1507852101377-380708b5a062?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fmango.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1504694090668-c4f68b4efb1c?w=1000&auto=format&fit=crop&q=60'
                ]
            }
        ],
        description: {
            dec1: 'Mangoes are rich in vitamins A and C, promoting healthy skin and immune function.',
            dec2: 'They contain antioxidants that help combat oxidative stress and inflammation.',
            dec3: [
                'Mangoes are high in dietary fiber, aiding in digestion and preventing constipation.',
                'Their sweet flavor makes them ideal for smoothies, salads, and desserts.',
                'Mangoes are also a good source of folate, which is important for cell function.'
            ],
            dec4: 'Enjoy mangoes fresh or in a variety of tropical recipes.'
        },
        additionalInformation: {
            weight: '0.4 kg',
            color: 'Yellow and Red',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 800
        },
        customerFeedback: [
            {
                name: 'Ava Carter',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Incredibly juicy and sweet!',
                rating: 5
            },
            {
                name: 'Ethan Brown',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'Delicious, but a bit expensive.',
                rating: 4
            }
        ],
        promotions: {
            discount: '21% Discount',
            organic: '95% Organic'
        }
    },
    {
        id: 'f17',
        name: 'Papaya',
        sku: 'F1123',
        price: {
            original: 50.0,
            discounted: 40.0,
            discountPercentage: 20
        },
        category: 'Fruits',
        tags: ['Fruits', 'Tropical', 'Papaya', 'Digestive'],
        rating: 4.5,
        reviews: 15,
        inStock: true,
        mainDec: 'Papayas are known for their digestive benefits and sweet flavor.',
        brand: 'Exotic Farms',


        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Papayas are a rich source of fiber, vitamin C, and antioxidants.',
            dec2: 'They support digestive health, improve heart health, and may fight inflammation.',
            dec3: [
                'Papayas are low in calories and rich in enzymes that aid digestion.',
                'Great for smoothies, fruit bowls, and desserts.',
                'Papayas promote healthy skin and may reduce oxidative stress.'
            ],
            dec4: 'Papayas are best eaten fresh or used in tropical-inspired dishes.'
        },
        additionalInformation: {
            weight: '1.5 kg',
            color: 'Orange',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 800
        },
        customerFeedback: [
            {
                name: 'Mia Taylor',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Great quality papaya!',
                rating: 4
            },
            {
                name: 'James Anderson',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'Helped with digestion, really good.',
                rating: 5
            }
        ],
        promotions: {
            discount: '20% Discount',
            organic: '88% Organic'
        }
    },
    {
        id: 'f18',
        name: 'Cherry',
        sku: 'F6678',
        price: {
            original: 90.0,
            discounted: 75.0,
            discountPercentage: 17
        },
        category: 'Fruits',
        tags: ['Fruits', 'Berries', 'Cherry', 'Sweet'],
        rating: 4.6,
        reviews: 19,
        inStock: true,
        mainDec:
            'Cherries are small, round fruits known for their sweet-tart flavor and vibrant color.',
        brand: 'Berry Best',


        images: [
            {
                main: 'https://img.freepik.com/free-photo/cherry-fruit-isolated_144627-20568.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/sliced-cherry-fruit_144627-19034.jpg?w=740',
                    'https://images.unsplash.com/photo-1595273406980-e1f6a68959d3?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fcherries.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1504674900247-6b5402f9c48d?w=1000&auto=format&fit=crop&q=60'
                ]
            }
        ],
        description: {
            dec1: 'Cherries are high in antioxidants, which help reduce inflammation and oxidative stress.',
            dec2: 'They are also rich in vitamins A and C, supporting overall health.',
            dec3: [
                'Cherries contain dietary fiber, which aids in digestion.',
                'Their sweet-tart flavor makes them ideal for snacking or desserts.',
                'Cherries may also help improve sleep quality.'
            ],
            dec4: 'Enjoy cherries fresh or in a variety of sweet dishes and beverages.'
        },
        additionalInformation: {
            weight: '0.4 kg',
            color: 'Red',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 400
        },
        customerFeedback: [
            {
                name: 'Sophia Lee',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Sweet and juicy cherries, highly recommend!',
                rating: 5
            },
            {
                name: 'Liam Wilson',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'Good quality, but a bit on the pricey side.',
                rating: 4
            }
        ],
        promotions: {
            discount: '17% Discount',
            organic: '90% Organic'
        }
    },
    {
        id: 'f19',
        name: 'Kiwi',
        sku: 'F7789',
        price: {
            original: 60.0,
            discounted: 45.0,
            discountPercentage: 25
        },
        category: 'Fruits',
        tags: ['Fruits', 'Tropical', 'Kiwi', 'Vitamin C'],
        rating: 4.7,
        reviews: 22,
        inStock: true,
        mainDec:
            'Kiwi is a small, brown, fuzzy fruit with a vibrant green interior and a unique sweet-tart flavor.',
        brand: 'Fresh Picks',


        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/20000911_35-fresho-kiwi-green.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/20000911_35-fresho-kiwi-green.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/20000911_35-fresho-kiwi-green.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/20000911_35-fresho-kiwi-green.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/20000911_35-fresho-kiwi-green.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Kiwi is an excellent source of vitamin C, essential for immune function and skin health.',
            dec2: 'It contains dietary fiber, which aids in digestion and promotes a healthy gut.',
            dec3: [
                'Kiwi is also rich in antioxidants, which help protect cells from oxidative damage.',
                'Its unique flavor makes it a popular choice for fruit salads and smoothies.',
                'Kiwi provides essential nutrients like potassium and vitamin K.'
            ],
            dec4: 'Enjoy kiwi fresh or in various recipes for a nutrient boost.'
        },
        additionalInformation: {
            weight: '0.3 kg',
            color: 'Green with Brown Skin',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 650
        },
        customerFeedback: [
            {
                name: 'Olivia Turner',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Fresh and tangy, a great addition to any fruit salad!',
                rating: 2
            },
            {
                name: 'James White',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'Good quality but a little too tart for my taste.',
                rating: 4
            }
        ],
        promotions: {
            discount: '25% Discount',
            organic: '90% Organic'
        }
    },
    {
        id: 'f20',
        name: 'Mango',
        sku: 'F5567',
        price: {
            original: 70.0,
            discounted: 50.0,
            discountPercentage: 29
        },
        category: 'Fruits',
        tags: ['Fruits', 'Tropical', 'Mango', 'Sweet'],
        rating: 3.8,
        reviews: 30,
        inStock: true,
        mainDec:
            'Mango is a delicious tropical fruit with a sweet flavor and a juicy, fibrous texture.',
        brand: 'Tropical Delights',


        images: [
            {
                main: 'https://img.freepik.com/free-photo/ripe-mango-isolated-white-background_1150-34456.jpg?w=740',
                thumbnails: [
                    'https://img.freepik.com/free-photo/juicy-mango-slices_1150-36100.jpg?w=740',
                    'https://images.unsplash.com/photo-1554066124-1648a7ffb3d1?w=1000&auto=format&fit=crop&q=60',
                    'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fblogcard-images%2FNone%2F7a790f1e-bcbb-46a2-a84e-1db689758d95.webp&w=750&q=75',
                    'https://images.unsplash.com/photo-1549185913-7b4f91d12a9a?w=1000&auto=format&fit=crop&q=60'
                ]
            }
        ],
        description: {
            dec1: 'Mangoes are high in vitamin C, which supports the immune system and skin health.',
            dec2: 'They also contain vitamin A and antioxidants that are beneficial for eye health.',
            dec3: [
                'Mangoes have digestive enzymes like amylase that aid in digestion.',
                'They are low in calories and can be part of a weight management diet.',
                'Mangoes are versatile and can be enjoyed fresh, in smoothies, or as a topping.'
            ],
            dec4: 'Savor mangoes fresh or in a variety of dishes for a sweet, tropical flavor.'
        },
        additionalInformation: {
            weight: '0.4 kg',
            color: 'Yellow-Orange',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 750
        },
        customerFeedback: [
            {
                name: 'Emily Brown',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Absolutely delicious and juicy mangoes!',
                rating: 1
            },
            {
                name: 'Michael Clark',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'Good mangoes, but they were a bit underripe.',
                rating: 4
            }
        ],
        promotions: {
            discount: '29% Discount',
            organic: '85% Organic'
        }
    },
    {
        id: 'f21',
        name: 'Pineapple',
        sku: 'F9876',
        price: {
            original: 70.0,
            discounted: 55.0,
            discountPercentage: 21
        },
        category: 'Fruits',
        tags: ['Fruits', 'Tropical', 'Pineapple', 'Sweet'],
        rating: 4.6,
        reviews: 25,
        inStock: true,
        mainDec:
            'Pineapples are a tropical fruit known for their sweet and tangy flavor.',
        brand: 'Tropical Joy',


        images: [
            {
                main: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/330px-Pineapple_and_cross_section.jpg',
                thumbnails: [
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ananas_comosus_Victoria_P1190459.jpg/180px-Ananas_comosus_Victoria_P1190459.jpg',
                    'https://goplow.co.in/cdn/shop/products/37.png?v=1666166527',
                    'https://goplow.co.in/cdn/shop/products/37.png?v=1666166527',
                    'https://goplow.co.in/cdn/shop/products/37.png?v=1666166527'
                ]
            }
        ],
        description: {
            dec1: 'Pineapples are rich in vitamins, enzymes, and antioxidants.',
            dec2: 'They help boost the immune system, build strong bones, and aid digestion.',
            dec3: [
                'Pineapples are low in calories but high in nutrients, including vitamin C.',
                'They help reduce inflammation and support digestive health.',
                'Pineapples are great for smoothies and salads.'
            ],
            dec4: 'Pineapples are delicious fresh or used in a variety of tropical recipes.'
        },
        additionalInformation: {
            weight: '1.2 kg',
            color: 'Yellow',
            type: 'Organic',
            category: 'Fruits',
            stockStatus: 'Available',
            stockQuantity: 950
        },
        customerFeedback: [
            {
                name: 'Isabella Garcia',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Loved the sweetness of this pineapple!',
                rating: 5
            },
            {
                name: 'Ethan Martinez',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'Very fresh and juicy.',
                rating: 4
            }
        ],
        promotions: {
            discount: '21% Discount',
            organic: '90% Organic'
        }
    },

    // vegetables Data below

    {
        id: 'v1',
        name: 'Carrot',
        sku: '1PL2493',
        price: {
            original: 30.0,
            discounted: 12.0,
            discountPercentage: 60
        },
        category: 'Vegetables',
        tags: ['Vegetables', 'Healthy', 'Carrot', 'Orange'],
        rating: 1,
        reviews: 10,
        inStock: true,
        mainDec:
            'Carrots are a root vegetable known for their vibrant color and nutritional value.',
        brand: 'Organic Farms',


        images: [
            {
                main: 'https://ansfoods.com/wp-content/uploads/2014/10/carrot.png',
                thumbnails: [
                    'https://www.bordbia.ie/globalassets/bordbia2020/food-and-living/best-in-season-2020/veg/carrot.png',
                    'https://static.vecteezy.com/system/resources/previews/023/225/196/original/cute-carrot-vegetable-free-png.png',
                    'https://cdn-icons-png.flaticon.com/512/4525/4525184.png',
                    'https://www.heddensofwoodtown.co.uk/wp-content/uploads/2022/04/Bunch-Carrots.png'
                ]
            }
        ],
        description: {
            dec1: 'Carrots are a great source of vitamin A and beta-carotene.',
            dec2: 'They support eye health and improve digestion.',
            dec3: [
                'Boosts immune system.',
                'Promotes skin health.',
                'Rich in fiber and antioxidants.'
            ],
            dec4: 'Perfect for snacking, cooking, or adding to salads.'
        },
        additionalInformation: {
            weight: '0.5 kg',
            color: 'Orange',
            type: 'Organic',
            category: 'Vegetables',
            stockStatus: 'Available',
            stockQuantity: 1500
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Fresh and sweet!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'A bit too crunchy for my taste.',
                rating: 4
            }
        ],
        promotions: {
            discount: '60% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 'v2',
        name: 'Tomato',
        sku: '2PL3649',
        price: {
            original: 25.0,
            discounted: 10.0,
            discountPercentage: 60
        },
        category: 'Vegetables',
        tags: ['Vegetables', 'Healthy', 'Tomato', 'Red'],
        rating: 3.2,
        reviews: 12,
        inStock: true,
        mainDec: 'Tomatoes are a staple in many cuisines and are rich in vitamins.',
        brand: 'Fresh Organics',


        images: [
            {
                main: 'https://gallafoods.com/wp-content/uploads/2016/11/tomato-1.png',
                thumbnails: [
                    'https://cdn.pixabay.com/photo/2017/07/17/21/58/tomato-2514018_640.png',
                    'https://png.pngtree.com/png-clipart/20240314/original/pngtree-tomato-cute-cartoon-character-png-image_14582409.png',
                    'https://yourdigitalboat.com/kagome/wp-content/uploads/2024/07/Tomato-icon.png',
                    'https://www.naturesmiracle.in/images/imagebox/tt.png'
                ]
            }
        ],
        description: {
            dec1: 'Tomatoes are packed with antioxidants and vitamin C.',
            dec2: 'They help reduce the risk of heart disease and cancer.',
            dec3: [
                'Supports skin health.',
                'Improves digestion.',
                'Rich in lycopene.'
            ],
            dec4: 'Great for sauces, salads, and sandwiches.'
        },
        additionalInformation: {
            weight: '0.5 kg',
            color: 'Red',
            type: 'Organic',
            category: 'Vegetables',
            stockStatus: 'Available',
            stockQuantity: 3200
        },
        customerFeedback: [
            {
                name: 'George Lewis',
                reviewImg:
                    'https://www.thomas.co/sites/default/files/thomas-files/styles/hero_media/public/2024-01/header_person10.png?itok=iDeD8K6C',
                feedback: 'Very fresh and juicy!',
                rating: 5
            },
            {
                name: 'Martha Davis',
                reviewImg:
                    'https://www.thomas.co/sites/default/files/thomas-files/styles/hero_media/public/2024-04/header_person8%20%281%29.png?itok=hSDDbRnG',
                feedback: 'Good quality but some were a little soft.',
                rating: 3
            }
        ],
        promotions: {
            discount: '60% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 'v3',
        name: 'Broccoli',
        sku: '3PR5124',
        price: {
            original: 55.0,
            discounted: 22.0,
            discountPercentage: 60
        },
        category: 'Vegetables',
        tags: ['Vegetables', 'Healthy', 'Broccoli', 'Green'],
        rating: 4.7,
        reviews: 18,
        inStock: true,
        mainDec:
            'Broccoli is a rich source of vitamins, minerals, and antioxidants.',
        brand: 'Fresh Greens',


        images: [
            {
                main: 'https://png.pngtree.com/png-clipart/20231224/original/pngtree-collage-of-fresh-green-broccoli-isolated-on-white-background-healthy-food-png-image_13924155.png',
                thumbnails: [
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRgzI-nhQnC_9iEFAxfRaMJywISEHHmVxtQ&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioBqie0ALGz6Nw4kzAVc8CaKhwZPq79RN_g&s',
                    'https://www.thegoodmoodfood.com.au/siteassets/foods/green/broccoli-lg.png',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMTMR0MKMZGgI0C9XxkWc6g7S8cbCjNyXFQ&s'
                ]
            }
        ],
        description: {
            dec1: 'Broccoli is a great vegetable for boosting immunity.',
            dec2: 'It’s loaded with fiber and supports heart health.',
            dec3: [
                'Reduces inflammation.',
                'Supports digestive health.',
                'Rich in vitamins C and K.'
            ],
            dec4: 'Ideal for stir-fries, soups, and salads.'
        },
        additionalInformation: {
            weight: '0.7 kg',
            color: 'Green',
            type: 'Organic',
            category: 'Vegetables',
            stockStatus: 'Available',
            stockQuantity: 1200
        },
        customerFeedback: [
            {
                name: 'Alice Walker',
                reviewImg:
                    'https://www.thomas.co/sites/default/files/thomas-files/styles/hero_media/public/2024-01/header_person7.png?itok=42pdYZm1',
                feedback: 'The quality is top-notch!',
                rating: 5
            },
            {
                name: 'Henry Roberts',
                reviewImg:
                    'https://www.thomas.co/sites/default/files/thomas-files/styles/hero_media/public/2024-01/header_person6.png?itok=bSxYU0HS',
                feedback: 'Fresh but a bit overpriced.',
                rating: 4
            }
        ],
        promotions: {
            discount: '60% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 'v4',
        name: 'Spinach',
        sku: '4VE8642',
        price: {
            original: 20.0,
            discounted: 8.0,
            discountPercentage: 60
        },
        category: 'Vegetables',
        tags: ['Vegetables', 'Healthy', 'Spinach', 'Green'],
        rating: 2.1,
        reviews: 22,
        inStock: true,
        mainDec:
            'Spinach is a leafy green that’s packed with vitamins and minerals.',
        brand: 'Green Leaf',


        images: [
            {
                main: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GDzyFw_L_MeITrqHYVv57FJGEqsh91wX8g&s',
                thumbnails: [
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzd51H8FlD7FFwF-ttFB169tI4A_v8ZfHdFQ&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS003_k1ODM_FR094WfjptKC1FFwFxno-CnJQ&s',
                    'https://www.bigbasket.com/media/uploads/p/m/40138448-4_1-fresho-baby-spinach.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3Ub-LSDa0xsQjga39tyPyy_KNvbDTlj4hw&s'
                ]
            }
        ],
        description: {
            dec1: 'Spinach is rich in iron and helps maintain healthy blood.',
            dec2: 'It supports eye health and reduces inflammation.',
            dec3: [
                'Rich in vitamins A, C, and K.',
                'Boosts overall health.',
                'Great for weight management.'
            ],
            dec4: 'Perfect for salads, smoothies, and sautés.'
        },
        additionalInformation: {
            weight: '0.3 kg',
            color: 'Green',
            type: 'Organic',
            category: 'Vegetables',
            stockStatus: 'Available',
            stockQuantity: 2000
        },
        customerFeedback: [
            {
                name: 'Robert Johnson',
                reviewImg:
                    'https://www.systemloesungen-hisl.de/wp-content/uploads/2023/04/person-ausbildung-systemischer-psychologischer-berater-fernlehrgang.png',
                feedback: 'Very fresh and tender!',
                rating: 2
            },
            {
                name: 'Linda Martinez',
                reviewImg:
                    'https://www.thomas.co/sites/default/files/thomas-files/styles/hero_media/public/2024-01/Person%20test%20larger_0.png?itok=A3r9eWNS',
                feedback: 'Good quality, but arrived wilted.',
                rating: 2
            }
        ],
        promotions: {
            discount: '60% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 'v5',
        name: 'Cucumber',
        sku: '5VE7548',
        price: {
            original: 15.0,
            discounted: 6.0,
            discountPercentage: 60
        },
        category: 'Vegetables',
        tags: ['Vegetables', 'Healthy', 'Cucumber', 'Green'],
        rating: 4.4,
        reviews: 14,
        inStock: true,
        mainDec: 'Cucumbers are hydrating and great for refreshing summer salads.',
        brand: 'Green Delight',


        images: [
            {
                main: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DLsz6HRbqrW7yR2bvvq6nHWxxwwBKbFEqA&s',
                thumbnails: [
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVYjX-kG3Bj1o53XqQbYgEQLhk_51VYcu2w&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX6NtCcEwciuisuCMhUDVPHgo7ZooPwq8pg&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNovJGHBJkZs-lu8KBYcO4ZFKTWl0MRFKRA&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4rf0Ai6x5Y3ceOk98eBsLAxyvvliVgktKg&s'
                ]
            }
        ],
        description: {
            dec1: 'Cucumbers are low in calories but high in hydration.',
            dec2: 'They help in weight loss and detoxification.',
            dec3: [
                'Hydrates the body.',
                'Supports skin health.',
                'Rich in antioxidants.'
            ],
            dec4: 'Ideal for salads, smoothies, and snacks.'
        },
        additionalInformation: {
            weight: '0.3 kg',
            color: 'Green',
            type: 'Organic',
            category: 'Vegetables',
            stockStatus: 'Available',
            stockQuantity: 2500
        },
        customerFeedback: [
            {
                name: 'Emily White',
                reviewImg:
                    'https://kentuckycounselingcenter.com/wp-content/uploads/2022/01/thinking-man-gf9b9e7a8b_1920.png',
                feedback: 'Crisp and fresh, exactly what I wanted.',
                rating: 5
            },
            {
                name: 'Michael Clark',
                reviewImg:
                    'https://choiceindia.com/static/media/sub-broker-franchise-without-deposit.4bd50f5882ccb3185012.webp',
                feedback: 'A bit too watery, but still good.',
                rating: 4
            }
        ],
        promotions: {
            discount: '60% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 'v6',
        name: 'Brinjal',
        sku: '4PL3496',
        price: {
            original: 18.0,
            discounted: 10.0,
            discountPercentage: 44
        },
        category: 'Vegetables',
        tags: ['Vegetables', 'Healthy', 'Brinjal', 'Purple'],
        rating: 4.6,
        reviews: 9,
        inStock: true,
        mainDec:
            'Brinjal, also known as eggplant, is a versatile vegetable with a unique flavor.',
        brand: 'Veggie Delight',


        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/xl/10000584_11-fresho-brinjal-nagpur.jpg',
                thumbnails: [
                    'https://www.pureroot.in/uploads/products/1643002685_Nagpur-Brinjal-Baigan.webp',
                    'https://kippsmart.com/wp-content/uploads/2020/06/brinjal.png',
                    'https://png.pngtree.com/png-vector/20220902/ourmid/pngtree-eggplant-fresh-vegetable-brinjal-food-png-image_6135345.png',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kl3Yjh6nM3N6FA765E4GmqUuRXyJhyTfXQ&s'
                ]
            }
        ],
        description: {
            dec1: 'Brinjal is a good source of dietary fiber and essential nutrients.',
            dec2: 'It supports heart health and helps in weight management.',
            dec3: [
                'Rich in antioxidants.',
                'Low in calories.',
                'Helps with digestion.'
            ],
            dec4: 'Ideal for grilling, roasting, or making curries.'
        },
        additionalInformation: {
            weight: '0.6 kg',
            color: 'Purple',
            type: 'Organic',
            category: 'Vegetables',
            stockStatus: 'Available',
            stockQuantity: 800
        },
        customerFeedback: [
            {
                name: 'Sarah Wilson',
                reviewImg:
                    'https://www.transparentpng.com/download/happy-person/VJdvLa-download-happy-blackman-png.png',
                feedback: 'Delicious and perfect for my curry recipes.',
                rating: 5
            },
            {
                name: 'Tom Brown',
                reviewImg:
                    'https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png',
                feedback: 'Good quality, but a bit too bland.',
                rating: 4
            }
        ],
        promotions: {
            discount: '44% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 'v7',
        name: 'Potato',
        sku: '5PL3497',
        price: {
            original: 22.0,
            discounted: 12.0,
            discountPercentage: 45
        },
        category: 'Vegetables',
        tags: ['Vegetables', 'Healthy', 'Potato', 'Starchy'],
        rating: 4.4,
        reviews: 15,
        inStock: true,
        mainDec:
            'Potatoes are a versatile root vegetable that can be cooked in many ways.',
        brand: 'Farm Fresh',


        images: [
            {
                main: 'https://images.squarespace-cdn.com/content/v1/5b5b5824f2e6b10639fdaf09/a277eae9-bf1a-4e66-9daf-dd2e60209073/Produce+Storage+Tips+icons+%289%29.png',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/71lvEUw5k8L._AC_UF894,1000_QL80_.jpg',
                    'https://www.bushwickpotato.com/wp-content/uploads/2022/12/potato.png',
                    'https://www.pureroot.in/uploads/products/1640342068_Long-Potato.webp',
                    'https://info.ifa.coop/hubfs/potato-growing-guide-img1b.png'
                ]
            }
        ],
        description: {
            dec1: 'Potatoes are a good source of vitamins B6 and C.',
            dec2: 'They provide energy and are great for a balanced diet.',
            dec3: [
                'Rich in potassium.',
                'Supports digestive health.',
                'Versatile in cooking.'
            ],
            dec4: 'Great for baking, mashing, or frying.'
        },
        additionalInformation: {
            weight: '1 kg',
            color: 'Brown',
            type: 'Organic',
            category: 'Vegetables',
            stockStatus: 'Available',
            stockQuantity: 1200
        },
        customerFeedback: [
            {
                name: 'Emma Johnson',
                reviewImg:
                    'https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png',
                feedback: 'Great potatoes for making fries and mashed potatoes.',
                rating: 5
            },
            {
                name: 'Daniel Lee',
                reviewImg:
                    'https://www.transparentpng.com/download/happy-person/VJdvLa-download-happy-blackman-png.png',
                feedback: 'Decent quality, but some were a bit small.',
                rating: 4
            }
        ],
        promotions: {
            discount: '45% Discount',
            organic: '100% Organic'
        }
    },

    // cooking data below

    {
        id: 'c1',
        name: 'Oil',
        sku: 'CD00001',
        price: {
            original: 30,
            discounted: 12,
            discountPercentage: 60
        },

        category: 'Cooking',
        tags: ['Cooking', 'Healthy', 'Organic', 'Mustard'],
        rating: 4,
        review: 10,
        inStock: true,
        mainDec:
            'Cooking oil is a versatile fat used in frying, baking, and dressing, enhancing flavor and texture in various dishes.',
        brand: 'Organic India',


        images: [
            {
                main: 'https://organicindia.com/cdn/shop/files/613A0014_500x550.jpg?v=1695981451',
                thumbnails: [
                    'https://organicindia.com/cdn/shop/files/613A0710_500x550.jpg?v=1695981451',
                    'https://organicindia.com/cdn/shop/files/613A0710_500x550.jpg?v=1695981451',
                    'https://organicindia.com/cdn/shop/files/613A0008_500x550.jpg?v=1695981451',
                    'https://organicindia.com/cdn/shop/files/613A0010_500x550.jpg?v=1695981451'
                ]
            }
        ],

        description: {
            dec1: 'Mustard oil is rich in monounsaturated fats and omega-3 fatty acids.',
            dec2: 'It promotes heart health and supports joint function.',
            dec3: [
                'Boosts circulation.',
                'Has natural anti-inflammatory properties.',
                'Rich in antioxidants.'
            ],
            dec4: 'Ideal for cooking, frying, or adding to pickles and marinades.'
        },

        additionalInformation: {
            weight: '1 L',
            color: 'Golden yellow',
            type: 'Cold-pressed',
            category: 'Cooking',
            stockStatus: 'Available',
            stockQuantity: 500
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Fresh and sweet!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'A bit too crunchy for my taste.',
                rating: 4
            }
        ],
        promotions: {
            discount: '60% Discount',
            organic: '100% Organic'
        }
    },

    {
        id: 'c2',
        name: 'Pink Salt',
        sku: 'CD00002',
        price: {
            original: 20,
            discounted: 8,
            discountPercentage: 60
        },

        category: 'Cooking',
        tags: ['Cooking', 'Healthy', 'Natural', 'Pink Salt'],
        rating: 4.5,
        review: 25,
        inStock: true,
        mainDec:
            'Pink salt is a natural mineral-rich salt used for seasoning and enhancing the flavor of various dishes.',
        brand: 'Himalayan Pure',


        images: [
            {
                main: 'https://organicindia.com/cdn/shop/products/Pinksalt_Benefit_500x550_crop_center.jpg?v=1672736574',
                thumbnails: [
                    'https://organicindia.com/cdn/shop/products/Pinksalt_back_500x550_crop_center.jpg?v=1672736574',
                    'https://organicindia.com/cdn/shop/products/Pinksalt_front_500x550_crop_center.jpg?v=1672736574',
                    'https://organicindia.com/cdn/shop/products/Pinksalt_back_500x550_crop_center.jpg?v=1672736574',
                    'https://organicindia.com/cdn/shop/products/Pinksalt_Benefit_500x550_crop_center.jpg?v=1672736574'
                ]
            }
        ],

        description: {
            dec1: 'Pink salt is rich in essential minerals and trace elements.',
            dec2: 'It helps regulate hydration and balance pH levels in the body.',
            dec3: [
                'Promotes healthy digestion.',
                'Supports respiratory function.',
                'Contains natural detoxifying properties.'
            ],
            dec4: 'Perfect for seasoning, gourmet cooking, or using in salt lamps and spa treatments.'
        },

        additionalInformation: {
            weight: '500g',
            color: 'Light pink',
            type: 'Himalayan',
            category: 'Cooking',
            stockStatus: 'Available',
            stockQuantity: 1000
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Fresh and sweet!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'A bit too crunchy for my taste.',
                rating: 4
            }
        ],
        promotions: {
            discount: '60% Discount',
            organic: '100% Natural'
        }
    },

    {
        id: 'c3',
        name: 'Wheat Dalia',
        sku: 'CD00003',
        price: {
            original: 30,
            discounted: 18,
            discountPercentage: 40
        },

        category: 'Cooking',
        tags: ['Cooking', 'Healthy', 'Organic', 'Wheat Dalia'],
        rating: 4.6,
        review: 20,
        inStock: true,
        mainDec:
            'Wheat dalia is a nutritious and versatile grain perfect for a range of healthy meals and snacks.',
        brand: 'Pure Harvest',


        images: [
            {
                main: 'https://organicindia.com/cdn/shop/products/492579984_Image2_500x550_crop_center.jpg?v=1667894580',
                thumbnails: [
                    'https://organicindia.com/cdn/shop/products/492579984_Image2_500x550_crop_center.jpg?v=1667894580',
                    'https://organicindia.com/cdn/shop/products/492579984_Image2_500x550_crop_center.jpg?v=1667894580',
                    'https://organicindia.com/cdn/shop/products/492579984_Image2_500x550_crop_center.jpg?v=1667894580',
                    'https://organicindia.com/cdn/shop/products/492579984_Image2_500x550_crop_center.jpg?v=1667894580'
                ]
            }
        ],

        description: {
            dec1: 'Wheat dalia is high in fiber and essential nutrients.',
            dec2: 'It supports digestive health and provides sustained energy.',
            dec3: [
                'Rich in protein.',
                'Ideal for breakfast and savory dishes.',
                'Contains essential vitamins and minerals.'
            ],
            dec4: 'Perfect for making porridge, upma, or as a base for various recipes.'
        },

        additionalInformation: {
            weight: '500g',
            color: 'Light brown',
            type: 'Cracked wheat',
            category: 'Grains',
            stockStatus: 'Available',
            stockQuantity: 600
        },

        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Fresh and sweet!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'A bit too crunchy for my taste.',
                rating: 4
            }
        ],

        promotions: {
            discount: '40% Discount',
            organic: '100% Organic'
        }
    },

    {
        id: 'c4',
        name: 'Urad Whole',
        sku: 'UW00005',
        price: {
            original: 50,
            discounted: 30,
            discountPercentage: 40
        },

        category: 'Pulses',
        tags: ['Cooking', 'Healthy', 'Organic', 'Urad Whole'],
        rating: 4.8,
        review: 45,
        inStock: true,
        mainDec:
            'Urad Whole is a nutritious black lentil, rich in protein and perfect for various savory dishes.',
        brand: 'Natural Harvest',


        images: [
            {
                main: 'https://organicindia.com/cdn/shop/files/Uradwhole.jpg?v=1713869820',
                thumbnails: [
                    'https://organicindia.com/cdn/shop/files/urad-whole-wip.jpg?v=1713869836',
                    'https://organicindia.com/cdn/shop/files/Uradwhole.jpg?v=1713869820',
                    'https://organicindia.com/cdn/shop/files/urad-whole-back_500x550_crop_center.jpg?v=1713869836',
                    'https://organicindia.com/cdn/shop/files/urad-whole-back_500x550_crop_center.jpg?v=1713869836'
                ]
            }
        ],

        description: {
            dec1: 'Urad Whole is a rich source of protein and dietary fiber.',
            dec2: 'It helps support muscle growth and digestive health.',
            dec3: [
                'Excellent for heart health.',
                'High in iron and magnesium.',
                'Versatile for making dals, curries, and dosa batter.'
            ],
            dec4: 'Ideal for making traditional Indian dishes like dal makhani, idli, and dosa.'
        },

        additionalInformation: {
            weight: '1 kg',
            color: 'Black',
            type: 'Whole Lentil',
            category: 'Pulses',
            stockStatus: 'Available',
            stockQuantity: 1000
        },

        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Fresh and sweet!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'A bit too crunchy for my taste.',
                rating: 4
            }
        ],

        promotions: {
            discount: '40% Discount',
            organic: '100% Organic'
        }
    },

    {
        id: 'c5',
        name: 'Brown Channa',
        sku: 'CD00005',
        price: {
            original: 40,
            discounted: 24,
            discountPercentage: 40
        },

        category: 'Cooking',
        tags: ['Cooking', 'Healthy', 'Organic', 'Brown Channa'],
        rating: 4.7,
        review: 30,
        inStock: true,
        mainDec:
            'Brown Channa is a nutritious legume known for its high fiber and protein content, ideal for various savory dishes.',
        brand: "Earth's Bounty",


        images: [
            {
                main: 'https://organicindia.com/cdn/shop/files/brown-chana-wip_500x550_crop_center.jpg?v=1713870611',
                thumbnails: [
                    'https://organicindia.com/cdn/shop/files/brown-chana-mood_500x550_crop_center.jpg?v=1713870611',
                    'https://organicindia.com/cdn/shop/files/Brownchana_500x550_crop_center.jpg?v=1713870611',
                    'https://organicindia.com/cdn/shop/files/brown-chana-back_500x550_crop_center.jpg?v=1713870611',
                    'https://organicindia.com/cdn/shop/files/brown-chana-wip_500x550_crop_center.jpg?v=1713870611'
                ]
            }
        ],

        description: {
            dec1: 'Brown Channa is high in protein, fiber, and essential nutrients.',
            dec2: 'It aids in digestion and helps maintain healthy blood sugar levels.',
            dec3: [
                'Rich in iron and magnesium.',
                'Supports heart health.',
                'Versatile for curries, salads, and soups.'
            ],
            dec4: 'Perfect for making channa masala, salads, or adding to stews and soups.'
        },

        additionalInformation: {
            weight: '500g',
            color: 'Brown',
            type: 'Whole Legume',
            category: 'Pulses',
            stockStatus: 'Available',
            stockQuantity: 800
        },

        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Fresh and sweet!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'A bit too crunchy for my taste.',
                rating: 4
            }
        ],
        promotions: {
            discount: '40% Discount',
            organic: '100% Organic'
        }
    },

    {
        id: 'c6',
        name: 'Turmeric Powder',
        sku: 'CD00006',
        price: {
            original: 35,
            discounted: 21,
            discountPercentage: 40
        },

        category: 'Cooking',
        tags: ['Cooking', 'Healthy', 'Organic', 'Turmeric'],
        rating: 4.9,
        review: 50,
        inStock: true,
        mainDec:
            'Turmeric Powder is a vibrant yellow spice known for its anti-inflammatory properties and distinct flavor, perfect for enhancing a variety of dishes.',
        brand: 'Spice World',


        images: [
            {
                main: 'https://organicindia.com/cdn/shop/products/492579990_Image1_500x550_crop_center.jpg?v=1667894141',
                thumbnails: [
                    'https://organicindia.com/cdn/shop/products/492579990_Image4_500x550_crop_center.jpg?v=1667894142',
                    'https://organicindia.com/cdn/shop/products/492579990_Image5_500x550_crop_center.jpg?v=1667894141',
                    'https://organicindia.com/cdn/shop/products/492579990_Image3_500x550_crop_center.jpg?v=1667894144',
                    'https://organicindia.com/cdn/shop/products/492579990_Image1_200x220_crop_center.jpg?v=1667894141'
                ]
            }
        ],

        description: {
            dec1: 'Turmeric Powder is rich in curcumin, known for its potent anti-inflammatory and antioxidant properties.',
            dec2: 'It supports joint health and boosts the immune system.',
            dec3: [
                'Promotes healthy digestion.',
                'Enhances flavor and color in dishes.',
                'Can be used in cooking, baking, and as a natural dye.'
            ],
            dec4: 'Ideal for curries, soups, and as a natural remedy in health drinks.'
        },

        additionalInformation: {
            weight: '100g',
            color: 'Bright yellow',
            type: 'Ground spice',
            category: 'Spices',
            stockStatus: 'Available',
            stockQuantity: 1200
        },

        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Fresh and sweet!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'A bit too crunchy for my taste.',
                rating: 4
            }
        ],

        promotions: {
            discount: '40% Discount',
            organic: '100% Organic'
        }
    },

    // snacks data below

    {
        id: 's1',
        name: 'Tomato Ketchup',
        sku: '2SJ1123',
        price: {
            original: 30.0,
            discounted: 17.28,
            discountPercentage: 54
        },
        category: 'Snacks',
        tags: ['Snacks', 'Healthy', 'Vegetarian', 'Kid foods', 'Tiffin'],
        rating: 2.5,
        reviews: 6,
        inStock: true,
        mainDec:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: "kissan",
            

        socialLink: [
            'https://www.facebook.com/',
            'https://twitter.com/?lang=en',
            'https://in.pinterest.com/',
            'https://www.instagram.com/'
        ],
        images: [
            {
                main: 'https://www.on9deals.com/images/deals01/kissan-fresh-tomato-ketchup.jpg',
                thumbnails: [
                    'https://indiakaaoffer.com/wp-content/uploads/2017/02/kissan-ketchup.jpg',
                    'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/6435c2127563551.61443f21cc79b.jpg',
                    'https://4.imimg.com/data4/PM/JT/MY-8511449/kissan-tomato-ketchup-1000x1000.png',
                    'https://www.jiomart.com/images/product/600x600/490006845/kissan-fresh-tomato-ketchup-200-g-product-images-o490006845-p590087140-3-202203150528.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: [
                '100 g of fresh leaves provides.',
                'Aliquam ac est at augue volutpat elementum.',
                'Quisque nec enim eget sapien molestie.',
                'Proin convallis odio volutpat finibus posuere.'
            ],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. '
        },
        additionalInformation: {
            weight: '1kg',
            color: 'Red',
            type: 'Organic',
            category: 'Snacks',
            stockStatus: 'Available',
            stockQuantity: 8412
            // tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: reviewimg1,
                feedback: 'The product is really fresh and organic. I love it!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 4
            }
        ],
        promotions: {
            discount: '64% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 's2',
        name: 'Maggi Noodles',
        sku: '2SJ1723',
        price: {
            original: 10.0,
            discounted: 6.28,
            discountPercentage: 78
        },
        category: 'Snacks',
        tags: ['Snacks', 'Healthy', 'Vegetarian', 'Kid foods', 'Tiffin'],
        rating: 2.3,
        reviews: 10,
        inStock: true,
        mainDec:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: "Maggi",

        socialLink: [
            'https://www.facebook.com/',
            'https://twitter.com/?lang=en',
            'https://in.pinterest.com/',
            'https://www.instagram.com/'
        ],
        images: [
            {
                main: 'https://5.imimg.com/data5/SELLER/Default/2022/7/MU/PJ/SD/5742893/maggi-noodles.jpg',
                thumbnails: [
                    'https://i.pinimg.com/736x/fd/f6/ab/fdf6ab5a30b921bc4b8b68ccf5db040e.jpg',
                    'https://images-cdn.ubuy.co.in/65f34c183bf0de2fbe358cb9-maggi-noodles-2-minutes-masala-noodles.jpg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/326567588/OI/QT/EG/183700103/maggi-noodles.jpeg',
                    'https://www.honeywhatscooking.com/wp-content/uploads/2022/02/Pav-Bhaji-Maggi-Noodles4-e1672251408882.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: [
                '100 g of fresh leaves provides.',
                'Aliquam ac est at augue volutpat elementum.',
                'Quisque nec enim eget sapien molestie.',
                'Proin convallis odio volutpat finibus posuere.'
            ],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. '
        },
        additionalInformation: {
            weight: '70g',
            color: 'yellow',
            type: '-',
            category: 'Snacks',
            stockStatus: 'Available',
            stockQuantity: 9012
            // tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: reviewimg1,
                feedback: 'The product is really fresh and organic. I love it!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 4
            }
        ],
        promotions: {
            discount: '64% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 's3',
        name: 'Choco Chips',
        sku: '2SJ1223',
        price: {
            original: 15.0,
            discounted: 9.28,
            discountPercentage: 64
        },
        category: 'Snacks',
        tags: ['Snacks', 'Healthy', 'Kid foods', 'Tiffin'],
        rating: 3.5,
        reviews: 9,
        inStock: true,
        mainDec:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand:
            'Cadbury',

        socialLink: [
            'https://www.facebook.com/',
            'https://twitter.com/?lang=en',
            'https://in.pinterest.com/',
            'https://www.instagram.com/'
        ],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/61d8ZCFHrVL._SX679_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/71sYQUU77OL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71zAMuzmhSL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/61Cwflh9eZL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/61F+nnZ59tL._SX679_.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: [
                '100 g of fresh leaves provides.',
                'Aliquam ac est at augue volutpat elementum.',
                'Quisque nec enim eget sapien molestie.',
                'Proin convallis odio volutpat finibus posuere.'
            ],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. '
        },
        additionalInformation: {
            weight: '200g',
            color: 'brown',
            type: '-',
            category: 'Snacks',
            stockStatus: 'Available',
            stockQuantity: 1012
            // tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: reviewimg1,
                feedback: 'The product is really fresh and organic. I love it!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 4
            }
        ],
        promotions: {
            discount: '64% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 's4',
        name: 'Bingo Potato Chips',
        sku: '2SJ5643',
        price: {
            original: 8.0,
            discounted: 6.28,
            discountPercentage: 79
        },
        category: 'Snacks',
        tags: ['Snacks', 'Kid foods', 'Tiffin'],
        rating: 1.2,
        reviews: 12,
        inStock: true,
        mainDec:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand:
            'Bingo',
        socialLink: [
            'https://www.facebook.com/',
            'https://twitter.com/?lang=en',
            'https://in.pinterest.com/',
            'https://www.instagram.com/'
        ],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/81oQOYKZHxL._SX679_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/71XLL1TsOTL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71uhLAEF6OL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/6105Uf5JwzL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/81HR1VFz14L._SX679_.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: [
                '100 g of fresh leaves provides.',
                'Aliquam ac est at augue volutpat elementum.',
                'Quisque nec enim eget sapien molestie.',
                'Proin convallis odio volutpat finibus posuere.'
            ],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. '
        },
        additionalInformation: {
            weight: '50g',
            color: '-',
            type: '-',
            category: 'Snacks',
            stockStatus: 'Available',
            stockQuantity: 6012
            // tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: reviewimg1,
                feedback: 'The product is really fresh and organic. I love it!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 4
            }
        ],
        promotions: {
            discount: '64% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 's5',
        name: 'Banana Chips',
        sku: '2SJ4243',
        price: {
            original: 21.0,
            discounted: 17.28,
            discountPercentage: 64
        },
        category: 'Snacks',
        tags: ['Snacks', 'Kid foods', 'Tiffin'],
        rating: 4.3,
        reviews: 15,
        inStock: false,
        mainDec:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand:"Chedda's",
            
        socialLink: [
            'https://www.facebook.com/',
            'https://twitter.com/?lang=en',
            'https://in.pinterest.com/',
            'https://www.instagram.com/'
        ],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                    'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
                ]
            }
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: [
                '100 g of fresh leaves provides.',
                'Aliquam ac est at augue volutpat elementum.',
                'Quisque nec enim eget sapien molestie.',
                'Proin convallis odio volutpat finibus posuere.'
            ],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. '
        },
        additionalInformation: {
            weight: '300g',
            color: '-',
            type: '-',
            category: 'Snacks',
            stockStatus: 'Not Available',
            stockQuantity: 0
            // tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: reviewimg1,
                feedback: 'The product is really fresh and organic. I love it!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 4
            }
        ],
        promotions: {
            discount: '64% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 's6',
        name: 'Gujarati Khakra',
        sku: '2SJ42753',
        price: {
            original: 60.0,
            discounted: 54.28,
            discountPercentage: 82
        },
        category: 'Snacks',
        tags: ['Snacks', 'Kid foods', 'Vegetarian', 'Tiffin', 'Breakfast'],
        rating: 2.8,
        reviews: 15,
        inStock: false,
        mainDec:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand:
            'KMA',
        socialLink: [
            'https://www.facebook.com/',
            'https://twitter.com/?lang=en',
            'https://in.pinterest.com/',
            'https://www.instagram.com/'
        ],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/81cU2tl-3EL._SX679_PIbundle-5,TopRight,0,0_AA679SH20_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/81d9ZbSP--L._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/81jJcc+mzwL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/81c9xsS5AwL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/81lj9NP5JxL._SX679_.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: [
                '100 g of fresh leaves provides.',
                'Aliquam ac est at augue volutpat elementum.',
                'Quisque nec enim eget sapien molestie.',
                'Proin convallis odio volutpat finibus posuere.'
            ],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. '
        },
        additionalInformation: {
            weight: '800gm',
            color: '-',
            type: '-',
            category: 'Snacks',
            stockStatus: 'Not Available',
            stockQuantity: 0
            // tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: reviewimg1,
                feedback: 'The product is really fresh and organic. I love it!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 4
            }
        ],
        promotions: {
            discount: '64% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 's7',
        name: 'Organic Chakli',
        sku: '2SJ42456',
        price: {
            original: 40.0,
            discounted: 32.28,
            discountPercentage: 32
        },
        category: 'Snacks',
        tags: ['Snacks', 'Kid foods', 'Tiffin'],
        rating: 3.2,
        reviews: 25,
        inStock: true,
        mainDec:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand:
            "Pure & Sure",
        socialLink: [
            'https://www.facebook.com/',
            'https://twitter.com/?lang=en',
            'https://in.pinterest.com/',
            'https://www.instagram.com/'
        ],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/51DqtmXiomL._SX679_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/51SXARVMl0L._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/714-31OgGZL._SX679_.jpg',
                    'https://recipes.timesofindia.com/photo/58067399.cms?imgsize=432080',
                    'http://4.bp.blogspot.com/-fpKbX40AEA0/TxhIT1rtfCI/AAAAAAAADOM/56YPW2oK2CM/s1600/chakli.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: [
                '100 g of fresh leaves provides.',
                'Aliquam ac est at augue volutpat elementum.',
                'Quisque nec enim eget sapien molestie.',
                'Proin convallis odio volutpat finibus posuere.'
            ],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. '
        },
        additionalInformation: {
            weight: '200gm',
            color: 'brown',
            type: '-',
            category: 'Snacks',
            stockStatus: 'Available',
            stockQuantity: 1230
            // tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: reviewimg1,
                feedback: 'The product is really fresh and organic. I love it!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 4
            }
        ],
        promotions: {
            discount: '64% Discount',
            organic: '100% Organic'
        }
    },

    // beverages data below

    {
        id: 'b1',
        name: 'Nescafe Intenso Coffe',
        sku: '2SJ424789',
        price: {
            original: 40.0,
            discounted: 31.28,
            discountPercentage: 26
        },
        category: 'Beverages',
        tags: ['drink'],
        rating: 2.5,
        reviews: 16,
        inStock: true,
        mainDec:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: "Nescafe",
        socialLink: [
            'https://www.facebook.com/',
            'https://twitter.com/?lang=en',
            'https://in.pinterest.com/',
            'https://www.instagram.com/'
        ],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/61IEkgsJ7ZL._SL1500_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/71jp2xa0d9L._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/61lJjn6lEoS._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71TStoVV7nS._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/61ui61dQ7bS._SL1500_.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: [
                '100 g of fresh leaves provides.',
                'Aliquam ac est at augue volutpat elementum.',
                'Quisque nec enim eget sapien molestie.',
                'Proin convallis odio volutpat finibus posuere.'
            ],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. '
        },
        additionalInformation: {
            weight: '100gm',
            color: 'brown',
            type: '-',
            category: 'Beverages',
            stockStatus: 'Available',
            stockQuantity: 230
            // tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: reviewimg1,
                feedback: 'The product is really fresh and organic. I love it!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 3
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 4
            }
        ],
        promotions: {
            discount: '64% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 'b2',
        name: 'Maaza Mango Drink',
        sku: '2SJ424466',
        price: {
            original: 34.0,
            discounted: 28.28,
            discountPercentage: 32
        },
        category: 'Beverages',
        tags: ['beverage', 'drink', 'juice'],
        rating: 1.5,
        reviews: 21,
        inStock: true,
        mainDec:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: "Maaza",

        socialLink: [
            'https://www.facebook.com/',
            'https://twitter.com/?lang=en',
            'https://in.pinterest.com/',
            'https://www.instagram.com/'
        ],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: [
                '100 g of fresh leaves provides.',
                'Aliquam ac est at augue volutpat elementum.',
                'Quisque nec enim eget sapien molestie.',
                'Proin convallis odio volutpat finibus posuere.'
            ],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. '
        },
        additionalInformation: {
            weight: '600ml',
            color: 'orange',
            type: 'drink',
            category: 'Beverages',
            stockStatus: 'Available',
            stockQuantity: 4530
            // tags: ["beverage" , "drink" , "juice"],
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: reviewimg1,
                feedback: 'The product is really fresh and organic. I love it!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 3
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 4
            }
        ],
        promotions: {
            discount: '64% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 'b3',
        name: 'Pepsi',
        sku: '2SJ424251',
        price: {
            original: 15.0,
            discounted: 14.28,
            discountPercentage: 10
        },
        category: 'Beverages',
        tags: ['beverage', 'drink', 'juice'],
        rating: 2.1,
        reviews: 16,
        inStock: true,
        mainDec:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: "Pepsi",
        socialLink: [
            'https://www.facebook.com/',
            'https://twitter.com/?lang=en',
            'https://in.pinterest.com/',
            'https://www.instagram.com/'
        ],
        images: [
            {
                main: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRjzMnVuhhRfRIc3IDhIu-jC2LbJ9eFpwocR6s9yQddPEUZL5OPqjdo4nV7f0SKO9vY-_xUbPhCgneMZ3n8ueY28cZTc62jT2PUiHdL7rn8wc9Tefp2Uk2oCg&usqp=CAE',
                thumbnails: [
                    'https://www.google.com/url?q=https://www.jiomart.com/p/groceries/pepsi-2-l/490004176%3Fsource%3Dfbads%26city%3DTirupati%26pin%3D517517&opi=95576897&sa=U&ved=0ahUKEwjf3afV5cuIAxXCXWwGHeaJCmgQrzwIqAM&usg=AOvVaw2vqoGZ_re4fLknKrfP6LrG',
                    'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRwyCeUD2gzKHw_ShlHuWYn1X6RL8uvx7tORip0TmzmXl-zUZ8fA0UYTJEQGM7i0YGhKLxnwKY_B-mfIcHzRBgID1JrG-ovHA&usqp=CAE',
                    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ_B-grQ_UJoRwNq-rBDv5_eG3NHWDbPaGde0kqlX9aARqTz3N2AKIE_pYcvuNRselM8DLBuvUz-KLIZC7dhgIKgsD-7RMOWA&usqp=CAY',
                    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQG03tvXyhJK1U3lcInLs8ZFFUyOuuethaUB8p5BNKRKZd5WacOf6yV09PXo7o2Z5Ls8KNgYD8SgJik1ToeZR8W-g-ulUM1p7tDuFQjTnIvwKJZW2PCC2qG&usqp=CAE'
                ]
            }
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: [
                '100 g of fresh leaves provides.',
                'Aliquam ac est at augue volutpat elementum.',
                'Quisque nec enim eget sapien molestie.',
                'Proin convallis odio volutpat finibus posuere.'
            ],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. '
        },
        additionalInformation: {
            weight: '2l',
            color: 'black',
            type: 'drink',
            category: 'Beverages',
            stockStatus: 'Available',
            stockQuantity: 1250
            // tags: ["beverage" , "drink" , "juice"],
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: reviewimg1,
                feedback: 'The product is really fresh and organic. I love it!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 3
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 4
            }
        ],
        promotions: {
            discount: '64% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 'b4',
        name: 'Mishti Doi',
        sku: '2SJ424156',
        price: {
            original: 15.0,
            discounted: 13.28,
            discountPercentage: 35
        },
        category: 'Beverages',
        tags: ['beverage', 'yogurt'],
        rating: 3.2,
        reviews: 25,
        inStock: true,
        mainDec:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: "Mother Dairy",
        socialLink: [
            'https://www.facebook.com/',
            'https://twitter.com/?lang=en',
            'https://in.pinterest.com/',
            'https://www.instagram.com/'
        ],
        images: [
            {
                main: 'https://growstar.in/wp-content/uploads/2021/08/294186_3-mother-dairy-mishti-doi.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/71ce+IPSirS.jpg',
                    'https://www.jiomart.com/images/product/original/490800891/mother-dairy-misthi-doi-400-g-cup-product-images-o490800891-p590041372-2-202206141810.jpg?im=Resize=(1000,1000)',
                    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/assets/products/sliding_images/jpeg/3ad09f60-f095-4a92-b591-a8f61d3ede83.jpg?ts=1707564214https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                    'https://cdn.zeptonow.com/production///tr:w-600,ar-869-1025,pr-true,f-auto,q-80/inventory/product/867c532d-78ee-4b54-a623-fb0f86411a53-1eE7vpUmDZDsGeWRm8trczZ2LUTbCy3Km.jpeg'
                ]
            }
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: [
                '100 g of fresh leaves provides.',
                'Aliquam ac est at augue volutpat elementum.',
                'Quisque nec enim eget sapien molestie.',
                'Proin convallis odio volutpat finibus posuere.'
            ],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. '
        },
        additionalInformation: {
            weight: '400gm',
            color: 'white',
            type: 'dairy',
            category: 'Beverages',
            stockStatus: 'Available',
            stockQuantity: 1530
            // tags: ["beverage" , "yogurt"],
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: reviewimg1,
                feedback: 'The product is really fresh and organic. I love it!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 3
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 4
            }
        ],
        promotions: {
            discount: '64% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 'b5',
        name: 'Elaichi Chai',
        sku: '2SJ424621',
        price: {
            original: 40.0,
            discounted: 36.28,
            discountPercentage: 16
        },
        category: 'Beverages',
        tags: ['beverage', 'drink'],
        rating: 3.6,
        reviews: 16,
        inStock: true,
        mainDec:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: "Amazon",

        socialLink: [
            'https://www.facebook.com/',
            'https://twitter.com/?lang=en',
            'https://in.pinterest.com/',
            'https://www.instagram.com/'
        ],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/51QYpZdK6jL._SL1000_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/61aKe-VMb6L._SL1000_.jpg',
                    'https://m.media-amazon.com/images/I/51YFQZ4QVsL._SL1000_.jpg',
                    'https://m.media-amazon.com/images/I/51zA4e9cSnL._SL1000_.jpg',
                    'https://m.media-amazon.com/images/I/41eeJ2zt7UL._SL1000_.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: [
                '100 g of fresh leaves provides.',
                'Aliquam ac est at augue volutpat elementum.',
                'Quisque nec enim eget sapien molestie.',
                'Proin convallis odio volutpat finibus posuere.'
            ],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. '
        },
        additionalInformation: {
            weight: '350gm',
            color: 'brown',
            type: 'drink',
            category: 'Beverages',
            stockStatus: 'Available',
            stockQuantity: 6530
            // tags: ["beverage" , "drink"],
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: reviewimg1,
                feedback: 'The product is really fresh and organic. I love it!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 3
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 4
            }
        ],
        promotions: {
            discount: '64% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 'b6',
        name: 'Paper boat jaljeera',
        sku: '2SJ424561',
        price: {
            original: 13.0,
            discounted: 10.28,
            discountPercentage: 21
        },
        category: 'Beverages',
        tags: ['beverage', 'drink', 'juice'],
        rating: 1.8,
        reviews: 10,
        inStock: false,
        mainDec:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: "Paper boat",
        socialLink: [
            'https://www.facebook.com/',
            'https://twitter.com/?lang=en',
            'https://in.pinterest.com/',
            'https://www.instagram.com/'
        ],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/61-TQBHZHGL._SL1500_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/719P9w84DKL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71IAuUCWTyL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71uFV5nY2gL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71flyxYPYwL._SL1500_.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: [
                '100 g of fresh leaves provides.',
                'Aliquam ac est at augue volutpat elementum.',
                'Quisque nec enim eget sapien molestie.',
                'Proin convallis odio volutpat finibus posuere.'
            ],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. '
        },
        additionalInformation: {
            weight: '100ml',
            color: 'yellow',
            type: 'drink',
            category: 'beverages',
            stockStatus: 'Not Available',
            stockQuantity: 0
            // tags: ["beverage" , "drink" , "juice"],
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: reviewimg1,
                feedback: 'The product is really fresh and organic. I love it!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 3
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 4
            }
        ],
        promotions: {
            discount: '64% Discount',
            organic: '100% Organic'
        }
    },
    {
        id: 'b7',
        name: 'Diet Pepsi',
        sku: '2SJ4245123',
        price: {
            original: 43.0,
            discounted: 41.28,
            discountPercentage: 6
        },
        category: 'Beverages',
        tags: ['beverage', 'drink', 'juice'],
        rating: 4.2,
        reviews: 19,
        inStock: true,
        mainDec:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
        brand: "Pepsi",

        socialLink: [
            'https://www.facebook.com/',
            'https://twitter.com/?lang=en',
            'https://in.pinterest.com/',
            'https://www.instagram.com/'
        ],
        images: [
            {
                main: 'https://m.media-amazon.com/images/I/51JbsTJlqCL.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/417xcP18QQL.jpg',
                    'https://m.media-amazon.com/images/I/71o6haAKTtL.jpg',
                    'https://m.media-amazon.com/images/I/41feW0BCX7L.jpg',
                    'https://m.media-amazon.com/images/I/51CTOHx-lVL.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
            dec2: 'Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ',
            dec3: [
                '100 g of fresh leaves provides.',
                'Aliquam ac est at augue volutpat elementum.',
                'Quisque nec enim eget sapien molestie.',
                'Proin convallis odio volutpat finibus posuere.'
            ],
            dec4: 'Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. '
        },
        additionalInformation: {
            weight: '300ml',
            color: 'white',
            type: 'drink',
            category: 'beverages',
            stockStatus: 'Not Available',
            stockQuantity: 0
            // tags: ["beverage" , "drink" , "juice"],
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: reviewimg1,
                feedback: 'The product is really fresh and organic. I love it!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 3
            },
            {
                name: 'Jane Smith',
                coustomerimg: reviewimg2,
                feedback: 'Great product, fast delivery.',
                rating: 4
            }
        ],
        promotions: {
            discount: '64% Discount',
            organic: '100% Organic'
        }
    },

    // Bread and Bakery data

    {
        id: 'br1',
        name: 'English Oven Bread Whole Wheat',
        sku: 'BB0001',
        price: {
            original: 50,
            discounted: 30,
            discountPercentage: 40
        },

        category: 'Bread & Bakery',
        tags: ['Bread', 'Whole Wheat', 'Healthy', 'Baking'],
        rating: 4.8,
        review: 35,
        inStock: true,
        mainDec:
            'English Oven Bread Whole Wheat is a hearty, nutritious bread made with whole wheat flour, perfect for a healthy diet and satisfying meals.',
        brand: 'English Oven',


        images: [
            {
                main: 'https://m.media-amazon.com/images/I/71YLQwJhqDL._SL1500_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/71My3WgwRsL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/91ML8csk3VL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/91S5dMUXsxL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/91h9mjBiMrL._SL1500_.jpg'
                ]
            }
        ],

        description: {
            dec1: 'Made with 100% whole wheat flour for added fiber and nutrients.',
            dec2: 'Supports heart health and aids in digestion.',
            dec3: [
                'Rich in essential vitamins and minerals.',
                'Low in fat.',
                'Perfect for sandwiches, toast, and as a healthy snack.'
            ],
            dec4: 'Ideal for a wholesome diet and a delicious addition to any meal.'
        },

        additionalInformation: {
            weight: '400g',
            color: 'Brown',
            type: 'Whole wheat bread',
            category: 'Bread & Bakery',
            stockStatus: 'Available',
            stockQuantity: 300
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Fresh and sweet!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'A bit too crunchy for my taste.',
                rating: 4
            }
        ],
        promotions: {
            discount: '40% Discount'
        }
    },

    {
        id: 'br2',
        name: 'English Oven Bread Brown',
        sku: 'BB0002',
        price: {
            original: 60,
            discounted: 36,
            discountPercentage: 40
        },

        category: 'Bread & Bakery',
        tags: ['Bread', 'Brown Bread', 'Healthy', 'Baking'],
        rating: 4.6,
        review: 45,
        inStock: true,
        mainDec:
            'English Oven Bread Brown is a nutritious, fiber-rich bread made with brown flour, perfect for a balanced diet and delicious meals.',
        brand: 'English Oven',


        images: [
            {
                main: 'https://m.media-amazon.com/images/I/71zLJqDIGTL._SL1500_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/71XZwci+lmL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/810A+xJ-tPL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71i-MqHg3CL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71pzAY6K+4L._SL1500_.jpg'
                ]
            }
        ],

        description: {
            dec1: 'Made with high-quality brown flour, rich in fiber and nutrients.',
            dec2: 'Promotes heart health and aids digestion with every slice.',
            dec3: [
                'Packed with essential vitamins and minerals.',
                'Low in fat and calories.',
                'Great for sandwiches, toasts, and healthy snacks.'
            ],
            dec4: 'An ideal choice for those who want a healthier bread option without sacrificing taste.'
        },

        additionalInformation: {
            weight: '400g',
            color: 'Brown',
            type: 'Brown bread',
            category: 'Bread & Bakery',
            stockStatus: 'Available',
            stockQuantity: 250
        },

        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Fresh and sweet!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'A bit too crunchy for my taste.',
                rating: 4
            }
        ],

        promotions: {
            discount: '40% Discount'
        }
    },

    {
        id: 'br3',
        name: 'English Oven Fruit Bun',
        sku: 'BB0003',
        price: {
            original: 70,
            discounted: 42,
            discountPercentage: 40
        },

        category: 'Bread & Bakery',
        tags: ['Bun', 'Fruit Bun', 'Sweet', 'Baking'],
        rating: 4.7,
        review: 50,
        inStock: true,
        mainDec:
            'English Oven Fruit Bun is a delicious and sweet bun filled with dried fruits, perfect for a quick snack or a delightful treat.',
        brand: 'English Oven',


        images: [
            {
                main: 'https://m.media-amazon.com/images/I/717z6-vfg5L._SX679_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/71HzoZzUXrL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71VZ7CelLVL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71VhIvQdQZL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71h6+Sc+urL._SX679_.jpg'
                ]
            }
        ],

        description: {
            dec1: 'Filled with high-quality dried fruits for a naturally sweet flavor.',
            dec2: 'Perfect as a snack or a breakfast item with tea or coffee.',
            dec3: [
                'Rich in fiber and essential vitamins.',
                'Soft and fluffy texture.',
                'Great for a quick snack or a light meal.'
            ],
            dec4: 'An ideal choice for those who enjoy a touch of sweetness with their bread products.'
        },

        additionalInformation: {
            weight: '300g',
            color: 'Golden Brown',
            type: 'Fruit Bun',
            category: 'Bread & Bakery',
            stockStatus: 'Available',
            stockQuantity: 150
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Fresh and sweet!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'A bit too crunchy for my taste.',
                rating: 4
            }
        ],
        promotions: {
            discount: '40% Discount'
        }
    },

    {
        id: 'br4',
        name: 'Pintola Rice Cake',
        sku: 'RC0001',
        price: {
            original: 40,
            discounted: 24,
            discountPercentage: 40
        },

        category: 'Bread & Bakery',
        tags: ['Rice Cake', 'Healthy', 'Low Calorie', 'Snack'],
        rating: 4.5,
        review: 60,
        inStock: true,
        mainDec:
            'Pintola Rice Cake is a light and crispy snack made from high-quality rice, perfect for a healthy and satisfying snack any time of the day.',
        brand: 'Pintola',


        images: [
            {
                main: 'https://m.media-amazon.com/images/I/61KxNptywWL._SX679_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/716R7dx30wL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71HM43sbQgL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71JTFcWI8fL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71ZI01vMXaL._SX679_.jpg'
                ]
            }
        ],

        description: {
            dec1: 'Crispy and light rice cakes made from high-quality rice.',
            dec2: 'Low in calories, perfect for a healthy diet.',
            dec3: [
                'Rich in whole grains.',
                'Great for snacking or as a base for toppings.',
                'Ideal for a quick, satisfying snack.'
            ],
            dec4: 'A tasty and healthy option for those who are health-conscious and enjoy a light snack.'
        },

        additionalInformation: {
            weight: '200g',
            color: 'White',
            type: 'Rice Cake',
            category: 'Snacks',
            stockStatus: 'Available',
            stockQuantity: 200
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Fresh and sweet!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'A bit too crunchy for my taste.',
                rating: 4
            }
        ],
        promotions: {
            discount: '40% Discount'
        }
    },
    {
        id: 'br5',
        name: 'Lotte Choco Pie',
        sku: 'CP0001',
        price: {
            original: 80,
            discounted: 48,
            discountPercentage: 40
        },

        category: 'Bread & Bakery',
        tags: ['Choco Pie', 'Chocolate', 'Sweet', 'Dessert'],
        rating: 4.9,
        review: 120,
        inStock: true,
        mainDec:
            'Lotte Choco Pie is a delicious treat featuring soft, fluffy cake layers filled with a rich, creamy marshmallow center and covered in smooth chocolate.',
        brand: 'Lotte',


        images: [
            {
                main: 'https://m.media-amazon.com/images/I/817dgnh61GL._SX679_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/81oqdp7QC+L._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/6182lJ0PxeL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/71FKa7256JL._SX679_.jpg',
                    'https://m.media-amazon.com/images/I/61hTLrPmPHL._SX679_.jpg'
                ]
            }
        ],

        description: {
            dec1: 'Soft, fluffy cake layers with a creamy marshmallow filling.',
            dec2: 'Coated in smooth, high-quality chocolate.',
            dec3: [
                'Rich chocolate flavor.',
                'Perfect for satisfying your sweet tooth.',
                'Great for desserts, snacks, or sharing with friends.'
            ],
            dec4: 'A popular treat loved by people of all ages, ideal for any time of the day.'
        },

        additionalInformation: {
            weight: '320g',
            color: 'Chocolate Brown',
            type: 'Choco Pie',
            category: 'Snacks',
            stockStatus: 'Available',
            stockQuantity: 150
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Fresh and sweet!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'A bit too crunchy for my taste.',
                rating: 4
            }
        ],
        promotions: {
            discount: '40% Discount'
        }
    },
    {
        id: 'br6',
        name: 'Britannia Gobble',
        sku: 'GB0001',
        price: {
            original: 60,
            discounted: 36,
            discountPercentage: 40
        },

        category: 'Bread & Bakery',
        tags: ['Gobble', 'Biscuits', 'Crunchy', 'Snack'],
        rating: 4.4,
        review: 80,
        inStock: true,
        mainDec:
            'Britannia Gobble is a crunchy, flavorful biscuit that offers a delightful combination of taste and texture, perfect for snacking anytime.',
        brand: 'Britannia',


        images: [
            {
                main: 'https://m.media-amazon.com/images/I/61n0fnxZhUL._SX679_.jpg',
                thumbnails: [
                    'https://m.media-amazon.com/images/I/61G021d-NJL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/51nzBnYWVhL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/61+Y-1PrKcL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/61BvaxvA8TL._SL1500_.jpg'
                ]
            }
        ],

        description: {
            dec1: 'Crunchy biscuits with a satisfying, savory flavor.',
            dec2: 'Perfect for pairing with tea or as a standalone snack.',
            dec3: [
                'Rich in taste and texture.',
                'Convenient for on-the-go snacking.',
                'Ideal for all ages.'
            ],
            dec4: 'A great choice for a quick and enjoyable snack break.'
        },

        additionalInformation: {
            weight: '250g',
            color: 'Golden Brown',
            type: 'Biscuit',
            category: 'Snacks',
            stockStatus: 'Available',
            stockQuantity: 180
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg:
                    'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: 'Fresh and sweet!',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg:
                    'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: 'A bit too crunchy for my taste.',
                rating: 4
            }
        ],
        promotions: {
            discount: '40% Discount'
        }
    },
    {
        id: 'bp1',
        name: 'Detoxifying Clay Mask',
        sku: 'BP12564',
        price: { original: 30.0, discounted: 25.0, discountPercentage: 5 },
        category: 'Beauty',
        tags: ['Beauty', 'Groom', 'Skin', 'Fair'],
        rating: 4.5,
        reviews: 8,
        inStock: true,
        mainDec:
            'These masks can enhance skin brightness and smoothness, promoting a clearer complexion.',
        brand: 'Ponds',

        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/40250460_1-spantra-detoxifying-clay-mask-with-activated-charcoal-removes-toxins-impurities-for-clear-skin.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/40250460_1-spantra-detoxifying-clay-mask-with-activated-charcoal-removes-toxins-impurities-for-clear-skin.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Decongests and minimises pores.',
            dec2: 'Detoxifies skin without drying it out.',
            dec3: [
                'Decongests and minimises pores.',
                'Soothes and calms inflamed skin.',
                'Antibacterial and reduces excess oil production.'
            ],
            dec4: 'helping manage dry skin, and preventing acne.'
        },
        additionalInformation: {
            weight: '0.1 kg',
            color: 'Black',
            type: 'Chemical',
            category: 'Beauty',
            stockStatus: 'Available',
            stockQuantity: 900
        },
        customerFeedback: [
            { name: 'John Doe', reviewImg: 'img1.png', feedback: 'Nice', rating: 5 },
            {
                name: 'Jane Smith',
                reviewImg: 'img2.png',
                feedback: 'Suitable',
                rating: 4
            }
        ],
        promotions: { discount: '5% Discount', organic: '30% Organic' }
    },
    {
        id: 'bp2',
        name: 'Maybelline New York Lifter Gloss - Petal',
        sku: 'BP18975',
        price: { original: 18.0, discounted: 10.0, discountPercentage: 9 },
        category: 'Beauty',
        tags: ['Beauty', 'Petal', 'Lips', 'Look'],
        rating: 4.5,
        reviews: 8,
        inStock: true,
        mainDec:
            'The next generation of lip balm from Maybelline New York is here. It is a serious clinical care for Baby soft lips. It is not just caring, It is repaired. It provides an instant 12 hours moisture and hydration. It comes in a handy retractable stick which is easy to use and carry.',
        brand: 'Ponds',

        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/40270243_1-maybelline-new-york-lifter-gloss-moisturizing-tinted-lip-gloss-with-hyaluronic-acid-non-sticky-formula.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/40270243_1-maybelline-new-york-lifter-gloss-moisturizing-tinted-lip-gloss-with-hyaluronic-acid-non-sticky-formula.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Lipstick is a cosmetic product used to apply coloration and texture to lips',
            dec2: 'Different pigments are used to produce color, and minerals such as silica may be used to provide texture.',
            dec3: [
                'Lipstick has been prominent in several womens fashion trends',
                'Soothes and calms inflamed skin.',
                'Antibacterial and reduces sweet'
            ],
            dec4: 'Matte lipsticks contain more filling agents like silica but do not have many emollients'
        },
        additionalInformation: {
            weight: '0.1 kg',
            color: 'Black',
            type: 'Chemical',
            category: 'Beauty',
            stockStatus: 'Available',
            stockQuantity: 900
        },
        customerFeedback: [
            {
                name: 'John Doe',
                reviewImg: 'img1.png',
                feedback: 'Nice lipstic',
                rating: 5
            },
            {
                name: 'Jane Smith',
                reviewImg: 'img2.png',
                feedback: 'Very good',
                rating: 4
            }
        ],
        promotions: { discount: '10% Discount', organic: '10% Organic' }
    },
    {
        id: 'bp3',
        name: 'Revitalizing Night Cream',
        sku: 'BP24781',
        price: { original: 50.0, discounted: 40.0, discountPercentage: 10 },
        category: 'Beauty',
        tags: ['Beauty', 'Night Cream', 'Revitalize', 'Skin Care'],
        rating: 4.7,
        reviews: 15,
        inStock: true,
        mainDec:
            'This night cream revitalizes your skin overnight, providing deep hydration and nourishment.',
        brand: 'Olay',

        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/40018876_4-himalaya-revitalising-night-cream.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/40018876_4-himalaya-revitalising-night-cream.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Reduces wrinkles and fine lines while you sleep.',
            dec2: 'Deeply moisturizes without leaving the skin greasy.',
            dec3: [
                'Enriched with vitamins and antioxidants.',
                'Suitable for all skin types.',
                'Dermatologist tested and approved.'
            ],
            dec4: 'Improves skin texture and tone over time.'
        },
        additionalInformation: {
            weight: '0.2 kg',
            color: 'White',
            type: 'Cream',
            category: 'Beauty',
            stockStatus: 'Available',
            stockQuantity: 500
        },
        customerFeedback: [
            {
                name: 'Alice Brown',
                reviewImg: 'img3.png',
                feedback: 'Very effective',
                rating: 5
            },
            {
                name: 'Sam Wilson',
                reviewImg: 'img4.png',
                feedback: 'Good results',
                rating: 4
            }
        ],
        promotions: { discount: '20% Discount', organic: '50% Organic' }
    },
    {
        id: 'bp4',
        name: 'Hydrating Facial Cleanser',
        sku: 'BP37582',
        price: { original: 20.0, discounted: 18.0, discountPercentage: 5 },
        category: 'Beauty',
        tags: ['Beauty', 'Cleanser', 'Hydrate', 'Skin Care'],
        rating: 4.3,
        reviews: 10,
        inStock: true,
        mainDec:
            'A gentle facial cleanser that removes impurities while keeping your skin hydrated and fresh.',
        brand: 'Neutrogena',

        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/40294497_1-stives-stives-hydrating-daily-facial-cleanser-watermelon-100-natural-extracts-200ml.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/40294497_1-stives-stives-hydrating-daily-facial-cleanser-watermelon-100-natural-extracts-200ml.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Gently cleanses without stripping skin of its natural oils.',
            dec2: 'Infused with hyaluronic acid to lock in moisture.',
            dec3: [
                'Suitable for sensitive skin.',
                'Soap-free and non-comedogenic.',
                'Dermatologist recommended.'
            ],
            dec4: 'Perfect for daily use for a clear and hydrated complexion.'
        },
        additionalInformation: {
            weight: '0.3 kg',
            color: 'Blue',
            type: 'Liquid',
            category: 'Beauty',
            stockStatus: 'Available',
            stockQuantity: 700
        },
        customerFeedback: [
            {
                name: 'Emma Davis',
                reviewImg: 'img5.png',
                feedback: 'Leaves skin soft',
                rating: 5
            },
            {
                name: 'Mark Lee',
                reviewImg: 'img6.png',
                feedback: 'Gentle on skin',
                rating: 4
            }
        ],
        promotions: { discount: '15% Discount', organic: '40% Organic' }
    },
    {
        id: 'bp5',
        name: 'Anti-Aging Serum',
        sku: 'BP48291',
        price: { original: 60.0, discounted: 55.0, discountPercentage: 8 },
        category: 'Beauty',
        tags: ['Beauty', 'Serum', 'Anti-Aging', 'Youthful'],
        rating: 4.8,
        reviews: 20,
        inStock: true,
        mainDec:
            'This powerful anti-aging serum targets wrinkles and fine lines to give you youthful-looking skin.',
        brand: 'Garnier',

        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/40308576_3-garnier-bright-complete-30-x-vitamin-c-booster-serum.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/40308576_3-garnier-bright-complete-30-x-vitamin-c-booster-serum.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Reduces signs of aging with regular use.',
            dec2: 'Formulated with retinol and vitamin C for maximum effectiveness.',
            dec3: [
                'Visibly reduces fine lines.',
                'Boosts collagen production.',
                'Provides a radiant glow.'
            ],
            dec4: 'Suitable for all skin types, including sensitive skin.'
        },
        additionalInformation: {
            weight: '0.1 kg',
            color: 'Clear',
            type: 'Serum',
            category: 'Beauty',
            stockStatus: 'Available',
            stockQuantity: 300
        },
        customerFeedback: [
            {
                name: 'Sophia Johnson',
                reviewImg: 'img7.png',
                feedback: 'Amazing results',
                rating: 5
            },
            {
                name: 'David Brown',
                reviewImg: 'img8.png',
                feedback: 'Skin feels great',
                rating: 4
            }
        ],
        promotions: { discount: '8% Discount', organic: '20% Organic' }
    },
    {
        id: 'bp6',
        name: 'Soothing Aloe Gel',
        sku: 'BP59613',
        price: { original: 15.0, discounted: 12.0, discountPercentage: 6 },
        category: 'Beauty',
        tags: ['Beauty', 'Aloe', 'Soothing', 'Moisturizing'],
        rating: 4.6,
        reviews: 12,
        inStock: true,
        mainDec:
            'A soothing aloe gel that calms and moisturizes your skin, leaving it feeling refreshed and hydrated.',
        brand: 'Boroplus',

        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/1223942_1-boroplus-aloe-vera-gel-antiseptic-herbs-with-vitamin-e-soothing-moisturising-nourishing.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/1223942_1-boroplus-aloe-vera-gel-antiseptic-herbs-with-vitamin-e-soothing-moisturising-nourishing.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Provides instant relief for sunburn and dry skin.',
            dec2: 'Made with 99% pure aloe vera for natural skin care.',
            dec3: [
                'Non-greasy and absorbs quickly.',
                'Helps reduce redness and irritation.',
                'Perfect for daily use.'
            ],
            dec4: 'Can be used on face and body for maximum hydration.'
        },
        additionalInformation: {
            weight: '0.25 kg',
            color: 'Green',
            type: 'Gel',
            category: 'Beauty',
            stockStatus: 'Available',
            stockQuantity: 600
        },
        customerFeedback: [
            {
                name: 'Lily Green',
                reviewImg: 'img9.png',
                feedback: 'Very soothing',
                rating: 5
            },
            {
                name: 'James White',
                reviewImg: 'img10.png',
                feedback: 'Great product',
                rating: 4
            }
        ],
        promotions: { discount: '6% Discount', organic: '95% Organic' }
    },
    {
        id: 'bp7',
        name: 'Vitamin C Brightening Serum',
        sku: 'BP72654',
        price: { original: 45.0, discounted: 38.0, discountPercentage: 7 },
        category: 'Beauty',
        tags: ['Beauty', 'Brightening', 'Serum', 'Vitamin C'],
        rating: 4.9,
        reviews: 22,
        inStock: true,
        mainDec:
            'A powerful Vitamin C serum that brightens skin, reduces dark spots, and boosts collagen production.',
        brand: 'The Ordinary',

        images: [
            {
                main: 'https://www.bigbasket.com/media/uploads/p/l/40238541_1-be-soulfull-brightening-serum-with-vitamin-c-niacinamide-licorice-root-extract-for-even-tone-skin.jpg',
                thumbnails: [
                    'https://www.bigbasket.com/media/uploads/p/l/40238541_1-be-soulfull-brightening-serum-with-vitamin-c-niacinamide-licorice-root-extract-for-even-tone-skin.jpg'
                ]
            }
        ],
        description: {
            dec1: 'Reduces hyperpigmentation and evens out skin tone.',
            dec2: 'Boosts skin’s radiance and smoothness.',
            dec3: [
                'Rich in antioxidants to fight free radicals.',
                'Helps diminish the appearance of fine lines.',
                'Lightweight formula absorbs quickly.'
            ],
            dec4: 'Can be used in the morning or evening for best results.'
        },
        additionalInformation: {
            weight: '0.1 kg',
            color: 'Clear',
            type: 'Serum',
            category: 'Beauty',
            stockStatus: 'Available',
            stockQuantity: 400
        },
        customerFeedback: [
            {
                name: 'Olivia Brown',
                reviewImg: 'img11.png',
                feedback: 'Brightens skin visibly',
                rating: 5
            },
            {
                name: 'Noah Wilson',
                reviewImg: 'img12.png',
                feedback: 'Feels great on skin',
                rating: 4
            }
        ],
        promotions: { discount: '7% Discount', organic: '30% Organic' }
    },
    
]
export default allproductData;
