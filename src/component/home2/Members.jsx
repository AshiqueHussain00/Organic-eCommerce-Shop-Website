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
    <div className="relative bg-white-100 rounded-lg shadow-md overflow-hidden group">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-auto object-cover" />
      
      {/* Overlay for icons (hidden initially, shown on hover) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Social Media Icons */}
        <a href="#" className="relative text-white-100 text-xl hover:bg-primary rounded-full p-2 transition-colors duration-300">
          <FaFacebookF />
          <span className="absolute inset-0 flex justify-center items-center">
            <span className="w-6 h-6 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </a>
        <a href="#" className="relative text-white-100 text-xl hover:bg-primary rounded-full p-2 transition-colors duration-300">
          <FaTwitter />
          <span className="absolute inset-0 flex justify-center items-center">
            <span className="w-6 h-6 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </a>
        <a href="#" className="relative text-white-100 text-xl hover:bg-primary rounded-full p-2  transition-colors duration-300">
          <FaPinterestP />
          <span className="absolute inset-0 flex justify-center items-center">
            <span className="w-6 h-6 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </a>
        <a href="#" className="relative text-white-100 text-xl hover:bg-primary rounded-full p-2  transition-colors duration-300">
          <FaInstagram />
          <span className="absolute inset-0 flex justify-center items-center">
            <span className="w-6 h-6 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </a>
      </div>

      {/* Content (Title and Description) */}
      <div className="p-4">
        <h2 className="text-sm font-semibold mb-1">{title}</h2> {/* Title */}
        <p className="text-xs text-gray-600 mb-4">{description}</p> {/* Description */}
      </div>
    </div>
  );
};

// Define the Members component that renders multiple Card components
const Members = () => {
  return (
    <section className='w-full'>
      <div className='w-11/12 xmd:w-10/12 mt-8 mx-auto xs:max-h-[500px]'>
        <div className="text-center tracking-wider mb-6 mt-12 text-primary">
          <p>TEAM</p>
          <h2 className="text-3xl text-black-900 mb-2 font-semibold">
            Our Professional Members
          </h2> {/* Display title */}
        </div>

        <div className="max-w-6xl mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
