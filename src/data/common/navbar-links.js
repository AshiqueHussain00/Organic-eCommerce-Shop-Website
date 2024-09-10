// navData.js

export const navData = [

    {
      id: 1,
      title: ' All Categories ',
      dropdown: [
        { id: 11, title: `Fresh Fruite`},
        { id: 12, title: `vegitables`},
        {
          id: 13,
          title: 'River fish',
         
        },
        {
          id: 14,
          title: 'chicken and meat',
          path: ''
        },
        {
          id: 15,
          title: 'Drink & Water',
          path: ''
        },
        { id: 16, title: 'Yogurt & Ice-Cream'},
        { id: 17, title: 'cake & Bread'},
        { id: 18, title: 'Butter & Cream'},
        { id: 19, title: 'Cooking'},
        { id: 20, title: 'View All category'}
      ]
    },
    {
      id: 2,
      title: 'Home',
      dropdown: [
        {
          id: 21,
          title: 'Home1',
          path: ''
        },
        {
          id: 22,
          title: 'Home2',
          path: ''
        },
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
              { id: 311, title: 'Fresh Fruite', path: '/best-seller/top-selling' },
              { id: 312, title: 'vegitables', path: '/best-seller/new-arrivals' }
            ]
          },
          {
            id: 32,
            title: 'shop2',
            path: '/student-life/sports',
            dropdown: [
              { id: 321, title: 'All vegitables', path: '/all-collection/All vegitables' },
              { id: 322, title: 'All fruits', path: '/all-collection/All Fruits' }
            ]
          }
         
        ]
      },
      
    {
      id: 4,
      title: 'Pages',
      dropdown: [
        { id: 41, title: 'Pages1', path: '/news&calendar/student-handbook' },
        {id: 42,title: 'pages2', path: '/news&calendar/scholars-times'
        }
      ]
    },
    {
        id: 5,
        title: 'Blog',
        dropdown: [
          {
            id: 51,
            title: 'Booklist',
            path: '/mandatory-disclosures/booklist',
            image: '/images/booklist.jpg' // Example image path
          },
          {
            id: 52,
            title: 'Safety Certificates & Affiliations',
            path: '/mandatory-disclosures/safety-certificate&affiliations',
            image: '/images/safety-certificates.jpg' // Example image path
          },
          {
            id: 53,
            title: 'CBSE-OASIS',
            path: 'https://littlescholars-kashipur.com/pdf/oasis.pdf',
            image: '/images/cbse-oasis.jpg' // Example image path
          },
          {
            id: 54,
            title: 'Mandatory Public Disclosures',
            path: 'https://littlescholars-kashipur.com/pdf/Mandatory_Disclosures.pdf',
            image: '/images/mandatory-disclosures.jpg' // Example image path
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
  ]
  