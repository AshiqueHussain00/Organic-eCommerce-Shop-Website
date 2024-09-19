import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons
import reviewimg1 from '../../assets/common/product/reviewimg1.svg'
import reviewimg2 from '../../assets/common/product/reviewimg2.svg'
import brand from '../../assets/common/product/brand.svg'

// export const beautyData = [
//     {
//       "id": bp1,
//       "name": "Hydrating Face Moisturizer",
//       "sku": "BP8564",
//       "category": "Skincare",
//       "description": "A lightweight, hydrating moisturizer that provides long-lasting moisture.",
//       "price": 24.99,
//       "ingredients": ["Hyaluronic Acid", "Vitamin E", "Aloe Vera"],
//       "skinType": ["All Skin Types"],
//       "imageUrl": "https://example.com/images/hydrating-face-moisturizer.png",
//       "ratings": 4.7,
//       "reviews": [
//         {
//           "username": "beautylover21",
//           "comment": "Keeps my skin hydrated all day without feeling greasy!"
//         },
//         {
//           "username": "skincarefanatic",
//           "comment": "Perfect for my sensitive skin, no irritation at all."
//         }
//       ],
//       "size": "50ml",
//       "application": "Apply a small amount to clean, dry skin morning and night.",
//       "tags": ["vegan", "cruelty-free", "paraben-free"],
//       "stockStatus": "In Stock"
//     },
//     {
//       "id": bp2,
//       "productName": "Matte Liquid Lipstick",
//       "brand": "LipLux",
//       "category": "Makeup",
//       "description": "A long-lasting, highly pigmented matte liquid lipstick.",
//       "price": 15.00,
//       "ingredients": ["Beeswax", "Vitamin C", "Jojoba Oil"],
//       "shade": "Rose Red",
//       "imageUrl": "https://example.com/images/matte-liquid-lipstick.png",
//       "ratings": 4.5,
//       "reviews": [
//         {
//           "username": "makeupqueen",
//           "comment": "Love the color and it lasts all day!"
//         },
//         {
//           "username": "beautybabe",
//           "comment": "Feels comfortable on the lips, not drying at all."
//         }
//       ],
//       "size": "5ml",
//       "application": "Apply directly to lips using the applicator for a bold finish.",
//       "tags": ["long-lasting", "smudge-proof"],
//       "stockStatus": "Out of Stock"
//     },
//     {
//       "id": bp3,
//       "productName": "Revitalizing Night Cream",
//       "brand": "PureGlow",
//       "category": "Skincare",
//       "description": "An anti-aging night cream that reduces fine lines and rejuvenates skin overnight.",
//       "price": 39.99,
//       "ingredients": ["Retinol", "Peptides", "Green Tea Extract"],
//       "skinType": ["Mature", "Dry"],
//       "imageUrl": "https://example.com/images/revitalizing-night-cream.png",
//       "ratings": 4.8,
//       "reviews": [
//         {
//           "username": "antiagingfan",
//           "comment": "Woke up with smoother, firmer skin after just one use."
//         }
//       ],
//       "size": "50g",
//       "application": "Apply evenly to face and neck after cleansing at night.",
//       "tags": ["anti-aging", "paraben-free"],
//       "stockStatus": "In Stock"
//     },
//     {
//       "id": bp4,
//       "productName": "Volumizing Mascara",
//       "brand": "LashBoost",
//       "category": "Makeup",
//       "description": "A volumizing mascara that lifts and lengthens lashes for a dramatic look.",
//       "price": 12.50,
//       "ingredients": ["Beeswax", "Panthenol", "Rice Bran Wax"],
//       "shade": "Black",
//       "imageUrl": "https://example.com/images/volumizing-mascara.png",
//       "ratings": 4.6,
//       "reviews": [
//         {
//           "username": "lashqueen",
//           "comment": "Gives my lashes so much volume without clumping."
//         }
//       ],
//       "size": "8ml",
//       "application": "Apply from root to tip for full, voluminous lashes.",
//       "tags": ["waterproof", "smudge-proof"],
//       "stockStatus": "In Stock"
//     },
//     {
//       "id": bp5,
//       "productName": "Nourishing Hair Oil",
//       "brand": "SilkyLocks",
//       "category": "Haircare",
//       "description": "A nourishing hair oil that repairs damaged hair and adds shine.",
//       "price": 18.99,
//       "ingredients": ["Argan Oil", "Coconut Oil", "Vitamin E"],
//       "imageUrl": "https://example.com/images/nourishing-hair-oil.png",
//       "ratings": 4.7,
//       "reviews": [
//         {
//           "username": "hairenthusiast",
//           "comment": "Leaves my hair feeling soft and looking shiny."
//         }
//       ],
//       "size": "100ml",
//       "application": "Apply a few drops to damp hair, focusing on the ends.",
//       "tags": ["sulfate-free", "silicone-free"],
//       "stockStatus": "In Stock"
//     },
//     {
//       "id": bp6,
//       "productName": "Brightening Vitamin C Serum",
//       "brand": "RadiantGlow",
//       "category": "Skincare",
//       "description": "A brightening serum that evens skin tone and reduces dark spots.",
//       "price": 29.99,
//       "ingredients": ["Vitamin C", "Hyaluronic Acid", "Ferulic Acid"],
//       "skinType": ["All Skin Types"],
//       "imageUrl": "https://example.com/images/brightening-vitamin-c-serum.png",
//       "ratings": 4.9,
//       "reviews": [
//         {
//           "username": "glowgetter",
//           "comment": "My skin looks brighter and more even after a week!"
//         }
//       ],
//       "size": "30ml",
//       "application": "Apply a few drops to face and neck in the morning.",
//       "tags": ["brightening", "anti-aging", "paraben-free"],
//       "stockStatus": "In Stock"
//     },
//     {
//       "id": bp7,
//       "productName": "Smoothing Hair Serum",
//       "brand": "FrizzEase",
//       "category": "Haircare",
//       "description": "A smoothing serum that tames frizz and adds shine to all hair types.",
//       "price": 14.50,
//       "ingredients": ["Silicone", "Argan Oil", "Jojoba Oil"],
//       "imageUrl": "https://example.com/images/smoothing-hair-serum.png",
//       "ratings": 4.4,
//       "reviews": [
//         {
//           "username": "frizzfighter",
//           "comment": "Keeps my hair smooth and frizz-free all day."
//         }
//       ],
//       "size": "50ml",
//       "application": "Apply a small amount to damp or dry hair, focusing on ends.",
//       "tags": ["frizz-control", "shine-enhancing"],
//       "stockStatus": "In Stock"
//     },
//     {
//       "id": 8,
//       "productName": "Mineral Sunscreen SPF 50",
//       "brand": "SunGuard",
//       "category": "Skincare",
//       "description": "A lightweight, non-greasy mineral sunscreen that offers broad-spectrum protection.",
//       "price": 22.00,
//       "ingredients": ["Zinc Oxide", "Titanium Dioxide", "Green Tea Extract"],
//       "skinType": ["Sensitive", "Oily"],
//       "imageUrl": "https://example.com/images/mineral-sunscreen-spf50.png",
//       "ratings": 4.6,
//       "reviews": [
//         {
//           "username": "sunlover",
//           "comment": "Great protection without leaving a white cast."
//         }
//       ],
//       "size": "100ml",
//       "application": "Apply generously 15 minutes before sun exposure.",
//       "tags": ["broad-spectrum", "reef-safe", "paraben-free"],
//       "stockStatus": "In Stock"
//     },
//     {
//       "id": 9,
//       "productName": "Detoxifying Clay Mask",
//       "brand": "PurePores",
//       "category": "Skincare",
//       "description": "A detoxifying clay mask that draws out impurities and minimizes pores.",
//       "price": 19.50,
//       "ingredients": ["Kaolin Clay", "Charcoal", "Salicylic Acid"],
//       "skinType": ["Oily", "Combination"],
//       "imageUrl": "https://example.com/images/detoxifying-clay-mask.png",
//       "ratings": 4.8,
//       "reviews": [
//         {
//           "username": "maskfanatic",
//           "comment": "Left my skin feeling so clean and fresh!"
//         }
//       ],
//       "size": "75ml",
//       "application": "Apply an even layer to clean skin, leave on for 10 minutes, then rinse.",
//       "tags": ["detoxifying", "pore-minimizing"],
//       "stockStatus": "In Stock"
//     }
//   ]
  

export const beautyData = [
  {
    id: 'bp1',
    name: "Detoxifying Clay Mask",
    sku: "BP12564",
    price: { original: 30.0, discounted: 25.00, discountPercentage: 5 },
    category: "Beauty",
    tags: ["Beauty", "Groom", "Skin", "Fair"],
    rating: 4.5,
    reviews: 8,
    inStock: true,
    mainDec: 'These masks can enhance skin brightness and smoothness, promoting a clearer complexion.',
    brand: 'Ponds',
    socialMedia: [{ facebook: FaFacebookF }, { instagram: FaInstagram }, { pinterest: FaPinterestP }, { twitter: FaTwitter }],
    actions: [{ like: FaHeart }, { views: FaEye }],
    socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
    images: [{ main: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwyE6XiK9mDlr3q2F9RTjPDzZpLkBxSOoENv5DqC3DTIarMNmwHyQ2M9aGP2spQNiN_VZiI68L5bwdRa9-yV7ENtqD_gsPulGtT9o4MTzPnuDxXC-Bn7Gjhg', thumbnails: ['https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTjWUIZLaZKceaRyFYGsRcgWM1bC-k4kKxEFaON_7HdJ5vyiYTc-Rov2JGvbxe6I98YBN6YMvqePifZ3tSGkg0Wlf1QOKj3XC9nPK1qaVju476u75NqMgQ','https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRyANMZzifB_fQsZ30PNUInbudmnJyoW2B1GR8AD3U3HEwkVJmY8ojpHc4U1qQM9N6J6LkoIYmuXEviN_RK_9P63kJp5GYwEFSig-uBrkLJxOmROgJ0ayTo','https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTkBAYIesF3nvm2L3QNsVyAcADwLE9w6Scu7xv6Pqzqq_i2s55_MBr3Y8Wh1pnqFlTBBe8ZhOAionje2gWP2Dy4qXo6Uwt9q79Fy932fBLm','https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRvsJA5rkAC3eCk58cQqYjEbHPniXl-xVwKhrvz7DIk6QNGen-QTvdA6vB0Eye2e0Gv-o136wfXd5oUeDO8KFnUCiWoHekKUBDiJMXKTpVo5VSr-VkogFfNnQ'] }],
    description: { dec1: 'Decongests and minimises pores.', dec2: 'Detoxifies skin without drying it out.', dec3: ['Decongests and minimises pores.','Soothes and calms inflamed skin.','Antibacterial and reduces excess oil production.'], dec4: 'helping manage dry skin, and preventing acne.' },
    additionalInformation: { weight: "0.1 kg", color: "Black", type: "Chemical", category: "Beauty", stockStatus: "Available", stockQuantity: 900 },
    customerFeedback: [
        { name: "John Doe", reviewImg: 'img1.png', feedback: "Fresh and sweet!", rating: 5 },
        { name: "Jane Smith", reviewImg: 'img2.png', feedback: "A bit too crunchy.", rating: 4 },
    ],
    promotions: { discount: "5% Discount", organic: "30% Organic" },
},
{
  id: 'bp2',
  name: "DMaybelline New York Lifter Gloss - Petal",
  sku: "BP18975",
  price: { original: 18.0, discounted: 10.00, discountPercentage: 9 },
  category: "Beauty",
  tags: ["Beauty", "Petal", "Lips", "Look"],
  rating: 4.5,
  reviews: 8,
  inStock: true,
  mainDec: 'The next generation of lip balm from Maybelline New York is here. It is a serious clinical care for Baby soft lips. It is not just caring, It is repaired. It provides an instant 12 hours moisture and hydration. It comes in a handy retractable stick which is easy to use and carry.',
  brand: 'Ponds',
  socialMedia: [{ facebook: FaFacebookF }, { instagram: FaInstagram }, { pinterest: FaPinterestP }, { twitter: FaTwitter }],
  actions: [{ like: FaHeart }, { views: FaEye }],
  socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
  images: [{ main: 'https://www.bigbasket.com/media/uploads/p/l/40021468_3-maybelline-new-york-baby-lips.jpg', thumbnails: ['https://www.bigbasket.com/media/uploads/p/l/40021468-5_1-maybelline-new-york-baby-lips.jpg','https://www.bigbasket.com/media/uploads/p/l/40021468-3_2-maybelline-new-york-baby-lips.jpg','https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTkBAYIesF3nvm2L3QNsVyAcADwLE9w6Scu7xv6Pqzqq_i2s55_MBr3Y8Wh1pnqFlTBBe8ZhOAionje2gWP2Dy4qXo6Uwt9q79Fy932fBLm','https://www.bigbasket.com/media/uploads/p/l/40021468-2_2-maybelline-new-york-baby-lips.jpg'] }],
  description: { dec1: 'Lipstick is a cosmetic product used to apply coloration and texture to lips', dec2: 'Different pigments are used to produce color, and minerals such as silica may be used to provide texture.', dec3: ['Lipstick has been prominent in several womens fashion trends','Soothes and calms inflamed skin.','Antibacterial and reduces sweet'], dec4: 'Matte lipsticks contain more filling agents like silica but do not have many emollients' },
  additionalInformation: { weight: "0.1 kg", color: "Black", type: "Chemical", category: "Beauty", stockStatus: "Available", stockQuantity: 900 },
  customerFeedback: [
      { name: "John Doe", reviewImg: 'img1.png', feedback: "Fresh and sweet!", rating: 5 },
      { name: "Jane Smith", reviewImg: 'img2.png', feedback: "A bit too crunchy.", rating: 4 },
  ],
  promotions: { discount: "10% Discount", organic: "10% Organic" },
},
]