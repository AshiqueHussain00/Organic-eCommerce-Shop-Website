import React from 'react';
import Team from '../../assets/home2/member1.svg';
import Team1 from '../../assets/home2/member2.svg';
import Team2 from '../../assets/home2/member3.svg';
import Team3 from '../../assets/home2/member4.svg';
// Import social media icons from react-icons
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';

// Define the card data array
const membersData = [
  {
    id: 1,
    image: Team,
    title: 'Jenny Wilson', // Name
    description: 'Ceo & Founder' // Description
  },
  {
    id: 2,
    image: Team1,
    title: 'Jane Cooper', // Name
    description: 'Worker' // Description
  },
  {
    id: 3,
    image: Team2,
    title: 'Cody Fisher', // Name
    description: 'Security Guard' // Description
  },
  {
    id: 4,
    image: Team3,
    title: 'Robert Fox', // Name
    description: 'Senior Farmer Manager' // Description
  }
];

// Define the Card component
const Card = ({ title, image, description }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md bg-white-100 group">
      {/* Image */}
      <img src={image} alt={title} className="object-cover w-full h-auto" />
      
      {/* Overlay for icons (hidden initially, shown on hover) */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
        {/* Social Media Icons */}
        <a href="#" className="relative p-2 text-xl transition-colors duration-300 rounded-full text-white-100 hover:bg-primary">
          <FaFacebookF />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-6 h-6 transition-opacity duration-300 bg-white rounded-full opacity-0 group-hover:opacity-100"></span>
          </span>
        </a>
        <a href="#" className="relative p-2 text-xl transition-colors duration-300 rounded-full text-white-100 hover:bg-primary">
          <FaTwitter />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-6 h-6 transition-opacity duration-300 bg-white rounded-full opacity-0 group-hover:opacity-100"></span>
          </span>
        </a>
        <a href="#" className="relative p-2 text-xl transition-colors duration-300 rounded-full text-white-100 hover:bg-primary">
          <FaPinterestP />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-6 h-6 transition-opacity duration-300 bg-white rounded-full opacity-0 group-hover:opacity-100"></span>
          </span>
        </a>
        <a href="#" className="relative p-2 text-xl transition-colors duration-300 rounded-full text-white-100 hover:bg-primary">
          <FaInstagram />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-6 h-6 transition-opacity duration-300 bg-white rounded-full opacity-0 group-hover:opacity-100"></span>
          </span>
        </a>
      </div>

      {/* Content (Title and Description) */}
      <div className="p-4">
        <h2 className="mb-1 text-sm font-semibold">{title}</h2> {/* Title */}
        <p className="mb-4 text-xs text-gray-600">{description}</p> {/* Description */}
      </div>
    </div>
  );
};

// Define the Members component that renders multiple Card components
const Members = () => {
  return (
    <section className="flex items-center justify-center w-full">
      <div className="w-11/12 xmd:w-10/12 mt-8 mx-auto xs:max-h-[500px]">
        <div className="mt-12 mb-6 tracking-wider text-center text-primary">
          <p>TEAM</p>
          <h2 className="mb-2 text-3xl font-semibold text-black-900">
            Our Professional Members
          </h2> {/* Display title */}
        </div>

        <div className="grid max-w-6xl grid-cols-2 gap-8 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {membersData.map((card) => (
            <Card
              key={card.id}
              title={card.title} // Pass title
              image={card.image} // Pass image
              description={card.description} // Pass description
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
