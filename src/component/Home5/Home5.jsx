import React from 'react';
import TestimonialCard from '../common/TestimonialCard'
import customer1 from '../../assets/common/Testimonial/customer1.svg';
import customer2 from '../../assets/common/Testimonial/customer2.svg';

const Home5 = () => {
  const testimonialsData = [
    {
      name: 'Robert Fox',
      img: customer1,
      role: 'Customer',
      compliment: 'PPellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
      rating: 2,
    },
    {
      name: 'Dianne Russell',
      img: customer2,
      role: 'Customer',
      compliment: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
      rating: 3,
    },
    {
        name: 'Dianne Russell',
        img: customer2,
        role: 'Customer',
        compliment: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        rating: 4,
      },
      {
        name: 'Dianne Russell',
        img: customer2,
        role: 'Customer',
        compliment: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        rating: 5,
      },
      {
        name: 'Dianne Russell',
        img: customer2,
        role: 'Customer',
        compliment: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        rating: 5,
      },
      {
        name: 'Dianne Russell',
        img: customer2,
        role: 'Customer',
        compliment: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        rating: 5,
      },
      {
        name: 'Dianne Russell',
        img: customer2,
        role: 'Customer',
        compliment: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        rating: 5,
      },
      {
        name: 'Dianne Russell',
        img: customer2,
        role: 'Customer',
        compliment: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        rating: 5,
      },
  ];

  return (
    <div>
      <TestimonialCard testimonialsData={testimonialsData} showButtons={true} />
    </div>
  );
};

export default Home5;
