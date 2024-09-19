import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons
import reviewimg1 from '../../assets/common/product/reviewimg1.svg'
import reviewimg2 from '../../assets/common/product/reviewimg2.svg'
import brand from '../../assets/common/product/brand.svg'

export const beautyData = [
    {
      "id": 1,
      "productName": "Hydrating Face Moisturizer",
      "brand": "GlowSkin",
      "category": "Skincare",
      "description": "A lightweight, hydrating moisturizer that provides long-lasting moisture.",
      "price": 24.99,
      "ingredients": ["Hyaluronic Acid", "Vitamin E", "Aloe Vera"],
      "skinType": ["All Skin Types"],
      "imageUrl": "https://example.com/images/hydrating-face-moisturizer.png",
      "ratings": 4.7,
      "reviews": [
        {
          "username": "beautylover21",
          "comment": "Keeps my skin hydrated all day without feeling greasy!"
        },
        {
          "username": "skincarefanatic",
          "comment": "Perfect for my sensitive skin, no irritation at all."
        }
      ],
      "size": "50ml",
      "application": "Apply a small amount to clean, dry skin morning and night.",
      "tags": ["vegan", "cruelty-free", "paraben-free"],
      "stockStatus": "In Stock"
    },
    {
      "id": 2,
      "productName": "Matte Liquid Lipstick",
      "brand": "LipLux",
      "category": "Makeup",
      "description": "A long-lasting, highly pigmented matte liquid lipstick.",
      "price": 15.00,
      "ingredients": ["Beeswax", "Vitamin C", "Jojoba Oil"],
      "shade": "Rose Red",
      "imageUrl": "https://example.com/images/matte-liquid-lipstick.png",
      "ratings": 4.5,
      "reviews": [
        {
          "username": "makeupqueen",
          "comment": "Love the color and it lasts all day!"
        },
        {
          "username": "beautybabe",
          "comment": "Feels comfortable on the lips, not drying at all."
        }
      ],
      "size": "5ml",
      "application": "Apply directly to lips using the applicator for a bold finish.",
      "tags": ["long-lasting", "smudge-proof"],
      "stockStatus": "Out of Stock"
    },
    {
      "id": 3,
      "productName": "Revitalizing Night Cream",
      "brand": "PureGlow",
      "category": "Skincare",
      "description": "An anti-aging night cream that reduces fine lines and rejuvenates skin overnight.",
      "price": 39.99,
      "ingredients": ["Retinol", "Peptides", "Green Tea Extract"],
      "skinType": ["Mature", "Dry"],
      "imageUrl": "https://example.com/images/revitalizing-night-cream.png",
      "ratings": 4.8,
      "reviews": [
        {
          "username": "antiagingfan",
          "comment": "Woke up with smoother, firmer skin after just one use."
        }
      ],
      "size": "50g",
      "application": "Apply evenly to face and neck after cleansing at night.",
      "tags": ["anti-aging", "paraben-free"],
      "stockStatus": "In Stock"
    },
    {
      "id": 4,
      "productName": "Volumizing Mascara",
      "brand": "LashBoost",
      "category": "Makeup",
      "description": "A volumizing mascara that lifts and lengthens lashes for a dramatic look.",
      "price": 12.50,
      "ingredients": ["Beeswax", "Panthenol", "Rice Bran Wax"],
      "shade": "Black",
      "imageUrl": "https://example.com/images/volumizing-mascara.png",
      "ratings": 4.6,
      "reviews": [
        {
          "username": "lashqueen",
          "comment": "Gives my lashes so much volume without clumping."
        }
      ],
      "size": "8ml",
      "application": "Apply from root to tip for full, voluminous lashes.",
      "tags": ["waterproof", "smudge-proof"],
      "stockStatus": "In Stock"
    },
    {
      "id": 5,
      "productName": "Nourishing Hair Oil",
      "brand": "SilkyLocks",
      "category": "Haircare",
      "description": "A nourishing hair oil that repairs damaged hair and adds shine.",
      "price": 18.99,
      "ingredients": ["Argan Oil", "Coconut Oil", "Vitamin E"],
      "imageUrl": "https://example.com/images/nourishing-hair-oil.png",
      "ratings": 4.7,
      "reviews": [
        {
          "username": "hairenthusiast",
          "comment": "Leaves my hair feeling soft and looking shiny."
        }
      ],
      "size": "100ml",
      "application": "Apply a few drops to damp hair, focusing on the ends.",
      "tags": ["sulfate-free", "silicone-free"],
      "stockStatus": "In Stock"
    },
    {
      "id": 6,
      "productName": "Brightening Vitamin C Serum",
      "brand": "RadiantGlow",
      "category": "Skincare",
      "description": "A brightening serum that evens skin tone and reduces dark spots.",
      "price": 29.99,
      "ingredients": ["Vitamin C", "Hyaluronic Acid", "Ferulic Acid"],
      "skinType": ["All Skin Types"],
      "imageUrl": "https://example.com/images/brightening-vitamin-c-serum.png",
      "ratings": 4.9,
      "reviews": [
        {
          "username": "glowgetter",
          "comment": "My skin looks brighter and more even after a week!"
        }
      ],
      "size": "30ml",
      "application": "Apply a few drops to face and neck in the morning.",
      "tags": ["brightening", "anti-aging", "paraben-free"],
      "stockStatus": "In Stock"
    },
    {
      "id": 7,
      "productName": "Smoothing Hair Serum",
      "brand": "FrizzEase",
      "category": "Haircare",
      "description": "A smoothing serum that tames frizz and adds shine to all hair types.",
      "price": 14.50,
      "ingredients": ["Silicone", "Argan Oil", "Jojoba Oil"],
      "imageUrl": "https://example.com/images/smoothing-hair-serum.png",
      "ratings": 4.4,
      "reviews": [
        {
          "username": "frizzfighter",
          "comment": "Keeps my hair smooth and frizz-free all day."
        }
      ],
      "size": "50ml",
      "application": "Apply a small amount to damp or dry hair, focusing on ends.",
      "tags": ["frizz-control", "shine-enhancing"],
      "stockStatus": "In Stock"
    },
    {
      "id": 8,
      "productName": "Mineral Sunscreen SPF 50",
      "brand": "SunGuard",
      "category": "Skincare",
      "description": "A lightweight, non-greasy mineral sunscreen that offers broad-spectrum protection.",
      "price": 22.00,
      "ingredients": ["Zinc Oxide", "Titanium Dioxide", "Green Tea Extract"],
      "skinType": ["Sensitive", "Oily"],
      "imageUrl": "https://example.com/images/mineral-sunscreen-spf50.png",
      "ratings": 4.6,
      "reviews": [
        {
          "username": "sunlover",
          "comment": "Great protection without leaving a white cast."
        }
      ],
      "size": "100ml",
      "application": "Apply generously 15 minutes before sun exposure.",
      "tags": ["broad-spectrum", "reef-safe", "paraben-free"],
      "stockStatus": "In Stock"
    },
    {
      "id": 9,
      "productName": "Detoxifying Clay Mask",
      "brand": "PurePores",
      "category": "Skincare",
      "description": "A detoxifying clay mask that draws out impurities and minimizes pores.",
      "price": 19.50,
      "ingredients": ["Kaolin Clay", "Charcoal", "Salicylic Acid"],
      "skinType": ["Oily", "Combination"],
      "imageUrl": "https://example.com/images/detoxifying-clay-mask.png",
      "ratings": 4.8,
      "reviews": [
        {
          "username": "maskfanatic",
          "comment": "Left my skin feeling so clean and fresh!"
        }
      ],
      "size": "75ml",
      "application": "Apply an even layer to clean skin, leave on for 10 minutes, then rinse.",
      "tags": ["detoxifying", "pore-minimizing"],
      "stockStatus": "In Stock"
    }
  ]
  