import React from 'react';
import BG from '../../../assets/home5/newsletter/BG.svg';
import map from '../../../assets/home5/newsletter/map.svg';
import call from '../../../assets/home5/newsletter/call.svg';
import mail from '../../../assets/home5/newsletter/mail.svg';

const Newsletter = () => {
  return (
    <div className="flex justify-evenly items-center space-x-4">
      {/* Location Section */}
      <div className="relative flex flex-col items-left space-y-2">
        {/* Icon with Background */}
        <div className="relative">
          <img src={BG} alt="Background" className="w-12 h-12 opacity-50" />
          <img src={map} alt="Location Icon" className="absolute top-2 left-3 w-6 h-6" />
        </div>

        {/* Location Text */}
        <div className="text-sm font-medium">OUR LOCATION</div>

        {/* Address */}
        <div className="text-xs text-left">
          1901 Thornridge Cir. Shiloh, <br />
          Washington DC 20020, United States
        </div>
      </div>

      {/* Call Section */}
      <div className="relative flex flex-col items-left space-y-2">
        {/* Icon with Background */}
        <div className="relative">
          <img src={BG} alt="Background" className="w-12 h-12 opacity-50" />
          <img src={call} alt="Call Icon" className="absolute top-2 left-3 w-6 h-6" />
        </div>

        {/* Call Text */}
        <div className="text-sm font-medium">CALL US 24/7</div>

        {/* Phone Number */}
        <div className="text-xs text-blue-500">(303) 555-0105</div>
      </div>

      {/* Newsletter Subscribe Section */}
      <div className="relative flex flex-col items-left space-y-2">
        {/* Icon with Background */}
        <div className="relative">
          <img src={BG} alt="Background" className="w-12 h-12 opacity-50" />
          <img src={mail} alt="Mail Icon" className="absolute top-2 left-3 w-6 h-6" />
        </div>

        {/* Subscribe Text */}
        <div className="text-sm  font-medium">SUBSCRIBE NEWSLETTER</div>

        {/* Email Input */}
<div className="relative flex items-center">
  <input
    type="email"
    className="border rounded-full p-2 pr-20 w-full"
    placeholder="Your email address"
  />
  <button className="absolute right-0 bg-[#00B207] text-white-200 rounded-full p-2">
    Subscribe
  </button>
</div>


      </div>
    </div>
  );
};

export default Newsletter;
