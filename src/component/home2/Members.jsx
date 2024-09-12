import React from 'react';
import Team from '../../assets/home2/Team.svg'
import Team1 from '../../assets/home2/Team1.svg'
import Team2 from '../../assets/home2/Team2.svg'
import Team3 from '../../assets/home2/Team3.svg'
// Define the card data array
const membersData = [
  {
    id: 1,
    image: Team,
  },
  {
    id: 2,
    
    image: Team1,
  },
  {
    id: 3,
   
    image:Team2,
  },
  {
    id: 4,
    
    image: Team3,
  },
];

// Define the Card component
const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-auto object-cover" />
      {/* <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
       
      </div> */}
    </div>
  );
};

// Define the Members component that renders multiple Card components
const Members = () => {
  return (
    <div className="text-center mb-6">
      <p>Team</p>
        <h2 className="text-2xl font-semibold mb-2">Our Profesionals Members</h2> {/* Display title */}
     
    <div className="w-11/12 mx-auto max-w-7xl mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
     
      {membersData.map((card) => (
        <Card
          key={card.id}
         
          image={card.image}
        />
      ))}
    </div>
    </div>
  );
};

export default Members;
