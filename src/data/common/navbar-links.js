import blog1 from '../../assets/blog/blog1.png';
import agro1 from '../../assets/blog/agro1.jpg';
import agro2 from '../../assets/blog/agro2.jpg';
import blog4 from '../../assets/blog/blog4.png';

import { LuApple } from "react-icons/lu";
import { PiCarrot } from "react-icons/pi";
import { PiFishSimpleLight } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";
import { PiWineDuotone } from "react-icons/pi";
import { IoIceCreamOutline } from "react-icons/io5";
import { GiCupcake } from "react-icons/gi";
import { PiCheeseLight } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { IoAddOutline } from "react-icons/io5";

export const navData = [
  {
    // id: 1,
    // title: ' All Categories ',
    // dropdown: [
    //   { id: 11, title: `Fresh Fruite` },
    //   { id: 12, title: `Vegetables` },
    //   { id: 13, title: 'River fish' },
    //   { id: 14, title: 'Chicken and meat', path: '' },
    //   { id: 15, title: 'Drink & Water', path: '' },
    //   { id: 16, title: 'Yogurt & Ice-Cream' },
    //   { id: 17, title: 'Cake & Bread' },
    //   { id: 18, title: 'Butter & Cream' },
    //   { id: 19, title: 'Cooking' },
    //   { id: 20, title: 'View All category' }
    // ]
    // const dropdown = [
    //   { id: 11, title: 'Fresh Fruit', icon: <FaAppleAlt /> },
    //   { id: 12, title: 'Vegetables', icon: <FaCarrot /> },
    //   { id: 13, title: 'River fish', icon: <FaFish /> },
    //   { id: 14, title: 'Chicken and meat', icon: <FaDrumstickBite /> },
    //   { id: 15, title: 'Drink & Water', icon: <FaWineBottle /> },
    //   { id: 16, title: 'Yogurt & Ice-Cream', icon: <FaIceCream /> },
    //   { id: 17, title: 'Cake & Bread', icon: <FaBreadSlice /> },
    //   { id: 18, title: 'Butter & Cream', icon: <FaCheese /> },
    //   { id: 19, title: 'Cooking', icon: <FaUtensils /> },
    //   { id: 20, title: 'View All category', icon: <FaList /> }
    // ];
    
  },
  {
    id: 2,
    title: 'Home',
    path: '',
    dropdown: [
      { id: 21, title: 'Home1', path: './compnent/home1' },
      { id: 22, title: 'Home2', path: './component/home2' },
      { id: 23, title: 'Home3', path: './component/home3' },
      { id: 24, title: 'Home4', path: './component/home4' }
    ]
  },
  {
    id: 3,
    title: 'Shop',
    dropdown: [
      {
        id: 31,
        title: 'shop1',
        path: '',
        dropdown: [
          { id: 311, title: 'Fresh Fruite', path: '' },
          { id: 312, title: 'Vegetables', path: '' }
        ]
      },
      {
        id: 32,
        title: 'shop2',
        path: '',
        dropdown: [
          { id: 321, title: 'All Vegetables', path: '' },
          { id: 322, title: 'All Fruits', path: '' }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Pages',
    dropdown: [
      { id: 41, title: 'Pages1', path: '' },
      { id: 42, title: 'Pages2', path: '' }
    ]
  },
  {
    id: 5,
    title: 'Blog',
    dropdown: [
      {
        id: 51,
        path: '',
        image: blog1 // Use the imported image variable
      },
      {
        id: 52,
       path: '',
        image: agro1 // Use the imported image variable
      },
      {
        id: 53,
       path: '',
        image: agro2 // Use the imported image variable
      },
      {
        id: 54,
       path: '',
        image: blog4 // Use the imported image variable
      }
    ]
  },
  {
    id: 6,
    title: 'About Us',
    path: '/about-us'
  },
  {
    id: 7,
    title: 'Contact Us',
    path: '/contact-us'
  }
];

export const allCategoryDropdown = [
  { id: 11,
    title: `Fresh Fruits` ,
    path: "/shop/fruits",
    icon: LuApple,
   },
 { id: 12,
   title: `Vegetables`,
   path: "/shop/vegetables",
   icon: PiCarrot,
   },
 { id: 13,
   title: 'River fish',
   icon: PiFishSimpleLight,
   path:'/shop/fish',
   },
 { id: 14,
   title: 'Chicken and meat',
    path: '/shop/chicken&meat' ,
    icon: TbMeat,
  },
 { id: 15,
   title: 'Drink & Water',
    path: '/shop/drinks&water',
    icon: PiWineDuotone
   },
 { id: 16,
   title: 'Yogurt & Ice-Cream',
   path: '/shop/yogurt&ice-cream',
   icon: IoIceCreamOutline,
   },
 { id: 17,
   title: 'Cake & Bread',
   path: "/shop/cake&bread",
   icon: GiCupcake,
   },
 { id: 18,
   title: 'Butter & Cream',
   path: "/shop/butter&cream",
   icon:  PiCheeseLight,

   },
 { id: 19,
   title: 'Cooking',
   path: "/shop/cooking",
   icon: GiHotMeal,
   },
 { id: 20,
   title: 'View all Category',
   path: "/shop",
   icon : IoAddOutline,
   }
]