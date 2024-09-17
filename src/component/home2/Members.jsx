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
const Card = ({ title, image }) => {
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
    <section className='w-full'>
       <div className='w-11/12 xmd:w-10/12 mt-8 mx-auto xs:max-h-[500px]'>
    <div className="text-center tracking-wider mb-6 mt-12 text-primary">
      <p>TEAM</p>
      
        <h2 className="text-3xl text-black-900 mb-2 font-semibold">Our Profesionals Members</h2> {/* Display title */}
     
    <div className="max-w-6xl mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
     
      {membersData.map((card) => (
        <Card
          key={card.id}
         
          image={card.image}
        />
      ))}
    </div>
    </div>
    </div>
     </section>
  );
};

export default Members;
