import blog1 from '../../assets/blog/blog1.png';
import agro1 from '../../assets/blog/agro1.jpg';
import agro2 from '../../assets/blog/agro2.jpg';
import blog4 from '../../assets/blog/blog4.png';

export const navData = [
  {
    id: 1,
    title: ' All Categories ',
    dropdown: [
      { id: 11, title: `Fresh Fruite` },
      { id: 12, title: `Vegetables` },
      { id: 13, title: 'River fish' },
      { id: 14, title: 'Chicken and meat', path: '' },
      { id: 15, title: 'Drink & Water', path: '' },
      { id: 16, title: 'Yogurt & Ice-Cream' },
      { id: 17, title: 'Cake & Bread' },
      { id: 18, title: 'Butter & Cream' },
      { id: 19, title: 'Cooking' },
      { id: 20, title: 'View All category' }
    ]
  },
  {
    id: 2,
    title: 'Home',
    dropdown: [
      { id: 21, title: 'Home1', path: '' },
      { id: 22, title: 'Home2', path: '' },
      { id: 23, title: 'Home3', path: '' },
      { id: 24, title: 'Home4', path: '' }
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
