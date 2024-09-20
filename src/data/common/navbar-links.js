import agro1 from '../../assets/common/navbar/blog/agro1.jpg';
import agro2 from '../../assets/common/navbar/blog/agro2.jpg';
import agro3 from '../../assets/common/navbar/blog/agro3.jpg';
import agro5 from '../../assets/common/navbar/blog/agro5.jpg';

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
    id: 1,
    title: 'Home',
    path: '',
    dropdown: [
      { id: 21, title: 'Home 1', path: '/' },
      { id: 22, title: 'Home 2', path: './home2' },
      { id: 23, title: 'Home 3', path: '/home3' },
      { id: 24, title: 'Home 4', path: '/home4' },
      { id: 25, title: 'Home 5', path: '/home5' },

    ]
  },
  {
    id: 2,
    title: 'Shop',
    dropdown: [
      {
        id: 31,
        title: 'Shop 1',
        path: '/shop1',
        dropdown: [
          { id: 26, title: 'Fresh Fruite', path: '' },
          { id: 27, title: 'Vegetables', path: '' }
        ]
      },
      {
        id: 32,
        title: 'Shop 2',
        path: '/shop2',
        dropdown: [
          { id: 28, title: 'All Vegetables', path: '' },
          { id: 29, title: 'All Fruits', path: '' }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Pages',
    dropdown: [
      { id: 41, title: 'Pages1', path: '' },
      { id: 42, title: 'Pages2', path: '' }
    ]
  },
  {
    id: 4,
    title: 'Blog',
    path:'/Blog'
    // dropdown: [
    //   {
    //     id: 51,
    //     path: '',
    //     image: agro1 // Use the imported image variable
    //   },
    //   {
    //     id: 52,
    //    path: '',
    //     image: agro2 // Use the imported image variable
    //   },
    //   {
    //     id: 53,
    //    path: '',
    //     image: agro3 // Use the imported image variable
    //   },
    //   {
    //     id: 54,
    //    path: '',
    //     image: agro5 // Use the imported image variable
    //   }
    // ]
  },
  {
    id: 5,
    title: 'About Us',
    path: '/about-us'
  },
  {
    id: 6,
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