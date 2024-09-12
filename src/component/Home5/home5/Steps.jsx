import React from 'react';
import bookoff from '../../../assets/home5/steps/bookoff.svg';
import Vector from '../../../assets/home5/steps/Vector.svg';
import group1 from '../../../assets/home5/steps/group1.svg';
import group2 from '../../../assets/home5/steps/group2.svg';
import BG from '../../../assets/home5/steps/BG.svg';
import mango from '../../../assets/home5/steps/mango.svg';
import food from '../../../assets/home5/steps/food.svg';
import '../../../styles/steps.css'

const Steps = () => {
  return (
    <div className="flex items-center justify-center space-x-14 p-4">
      <div className="image-container">
        <img src={Vector} alt="Steps" className="w-16 cursor-pointer" />
      </div>
      <span className="h-4 w-[2px] bg-gray-400"></span>
      <div className="image-container">
        <img src={mango} alt="Mango" className="w-16 cursor-pointer" />
      </div>
      <span className="h-4 w-[2px] bg-gray-400"></span>
      <div className="image-container">
        <img src={group1} alt="Group 1" className="w-16 cursor-pointer" />
      </div>
      <span className="h-4 w-[2px] bg-gray-400"></span>
      <div className="image-container">
        <img src={food} alt="Food" className="w-16 cursor-pointer" />
      </div>
      <span className="h-4 w-[2px] bg-gray-400"></span>
      <div className="image-container">
        <img src={bookoff} alt="Bookoff" className="w-16 cursor-pointer" />
      </div>
      <span className="h-4 w-[2px] bg-gray-400"></span>
      <div className="image-container">
        <img src={group2} alt="Group 2" className="w-16 cursor-pointer" />
      </div>
    </div>
  );
};

export default Steps;
