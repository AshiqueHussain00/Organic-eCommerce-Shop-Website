import React from 'react';
import customer1 from '../../assets/common/Testimonial/customer1.svg';

const testimonialsData = [
  {
    name: 'John Doe',
    img: customer1,
    compliment: 'Excellent service, highly recommend!',
    rating: 4.5,
  },
  {
    name: 'Jane Smith',
    img: customer1,
    compliment: 'Very satisfied with the product quality.',
    rating: 4.7,
  },
  // Add more testimonials as needed
];

const TestimonialCard = ({ name, img, compliment, rating }) => {
  return (
    <div className="testimonial-card bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      <img src={img} alt={name} className="w-20 h-20 rounded-full mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 mt-2">{compliment}</p>
      <div className="rating mt-2 text-yellow-500">{`Rating: ${rating}⭐`}</div>
    </div>
  );
};

const Testimonial = ({ testimonials = [] }) => {
  if (testimonials.length <1) {
    return <p>No testimonials available.</p>;
  }

  return (
    <div className="testimonial-container grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          name={testimonial.name}
          img={testimonial.img}
          compliment={testimonial.compliment}
          rating={testimonial.rating}
        />
      ))}
    </div>
  );
};

export default Testimonial;
