import image1 from '../../assets/home3/BestDeals.svg'
import image3 from '../../assets/home3/SummerSales.svg'
import image2 from '../../assets/home3/FatFree.svg'

export const BannerData = [
    {
        id:1,
        image:image1,
        heading1 : 'BEST DEALS',
        heading2 : 'Sale of the Month',
        isTimer: true,
        
    },

    {
        id:2,
        image: image2,
        heading1 : '85% FAT FREE',
        heading2 : 'Low-Fat  Meat',
        isTimer: false,
        heading3_1: 'Started at',
        heading3_2: '$79.99',
        
    },

    {
        id:3,
        image: image3,
        heading1 : 'SUMMMER SALE',
        heading2 : '100% Fresh Fruit',
        isTimer: false,
        heading3_1: 'Up to',
        heading3_2: '64% OFF',
        
    },


];