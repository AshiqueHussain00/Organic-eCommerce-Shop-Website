import React from "react";
import BG from "../../assets/home5/newsletter/BG.svg";
import map from "../../assets/home5/newsletter/map.svg";
import call from "../../assets/home5/newsletter/call.svg";
import mail from "../../assets/home5/newsletter/mail.svg";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-stretch w-10/12 py-4 mx-auto space-y-4 md:flex-row justify-evenly md:space-y-0 md:space-x-4" >
      {/* Location Section */}
      <div data-aos="fade-right" className="relative flex  flex-col items-start space-y-2 border-2 border-[rgb(220,239,222)] rounded p-4 flex-1">
        {/* Icon with Background */}
        <div className="relative">
          <img src={BG} alt="Background" className="w-12 h-12 opacity-30" />
          <img
            src={map}
            alt="Location Icon"
            className="absolute w-6 h-6 top-2 left-3"
          />
        </div>

        {/* Location Text */}
        <div className="text-sm font-medium font-poppins">OUR LOCATION</div>

        {/* Address */}
        <div className="text-xs font-normal font-poppins text-[#666666] text-left">
          1901 Thornridge Cir. Shiloh, <br />
          Washington DC 20020, United States
        </div>
      </div>

      {/* Call Section */}
      <div data-aos="fade-right" className="relative flex  flex-col items-start space-y-2 border-2 border-[rgb(220,239,222)] rounded p-4 flex-1">
        {/* Icon with Background */}
        <div className="relative">
          <img src={BG} alt="Background" className="w-12 h-12 opacity-30" />
          <img
            src={call}
            alt="Call Icon"
            className="absolute w-6 h-6 top-2 left-3"
          />
        </div>

        {/* Call Text */}
        <div className="text-sm font-medium">CALL US 24/7</div>

        {/* Phone Number (clickable) */}
        <a
          href="tel:+13035550105"
          className="text-xl text-[#00B207] hover:underline"
        >
          (303) 555-0105
        </a>
      </div>

      {/* Newsletter Subscribe Section */}
      <div data-aos="fade-left" className="relative flex basis-1/3 flex-col items-start space-y-2 border-2 border-[rgb(220,239,222)] rounded p-4 flex-1">
        {/* Icon with Background */}
        <div className="relative">
          <img src={BG} alt="Background" className="w-12 h-12 opacity-30" />
          <img
            src={mail}
            alt="Mail Icon"
            className="absolute w-6 h-6 top-2 left-3"
          />
        </div>

        {/* Subscribe Text */}
        <div className="text-sm font-medium">SUBSCRIBE NEWSLETTER</div>

        {/* Email Input */}
        <div className="relative flex items-center w-full">
          <input
            type="email"
            className="w-full p-2 pr-20 border rounded-full"
            placeholder="Your email address"
          />
          <button className="absolute right-0 bg-[#00B207] text-white rounded-full p-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
