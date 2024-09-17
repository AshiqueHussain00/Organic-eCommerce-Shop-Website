import brand from '../../assets/common/product/brand.svg'
import image1 from '../../assets/common/product/Image1.svg'
import pic1 from '../../assets/common/product/pic1.svg'
import pic2 from '../..//assets/common/product/pic2.svg'
import pic3 from '../../assets/common/product/pic3.svg'
import pic4 from '../../assets/common/product/pic4.svg'
import reviewimg1 from '../../assets/common/product/reviewimg1.svg'
import reviewimg2 from '../../assets/common/product/reviewimg2.svg'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons

export const product = [
    {
        id: 1,
        name: "Chinese Cabbage",
        sku: "2SJ1594",
        price: {
            original: 48.0,
            discounted: 17.28,
            discountPercentage: 64,
        },
        category: "Vegetables",
        tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
        rating: 4.5,
        reviews: 4,
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
                main: image1,
                thumbnails: [
                    pic1,
                    pic2,
                    pic3,
                    pic4,
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
            weight: "03",
            color: "Green",
            type: "Organic",
            category: "Vegetables",
            stockStatus: "Available",
            stockQuantity: 5413,
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
    }
]
