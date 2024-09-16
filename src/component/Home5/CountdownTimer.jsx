import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import fruits from "../../assets/home5/countdown/fruits.svg"; // Update paths accordingly
import vegetables from "../../assets/home5/countdown/vegetables.svg"; // Update paths accordingly

const BannerData = [
  {
    id: 1,
    image: vegetables,
    heading1: "100% ORGANIC",
    heading2: "Fruit & Vegetable",
    isTimer: false,
    heading3_1: "Starting at :",
    heading3_2: "$11.99",
  },
  {
    id: 2,
    image: fruits,
    heading1: "SALE OF THE WEEK",
    heading2: "Sale of the Year",
    isTimer: true,
  },
];

function CountdownTimer() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const deadline = "September 25, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, "0"));
    setHours(
      String(Math.floor((time / (1000 * 60 * 60)) % 24)).padStart(2, "0")
    );
    setMinutes(String(Math.floor((time / 1000 / 60) % 60)).padStart(2, "0"));
    setSeconds(String(Math.floor((time / 1000) % 60)).padStart(2, "0"));
  };

  useEffect(() => {
    getTime(); // Initial call
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="w-10/12 pt-5 pb-10 mx-auto bg-white">
        <ul className="flex flex-row flex-wrap items-center justify-center gap-6 p-4">
          {BannerData.map((item) => (
            <li
              key={item.id}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                width: "100%", // Adjust width to be full-width on small screens
                maxWidth: "600px", // Max width on larger screens
                height: "300px",
              }}
              className="p-6  bg-no-repeat flex flex-col md:flex-row items-center rounded-md"
            >
              {/* Content section */}
              <div className="flex my-auto flex-col items-start w-full md:w-2/3 ">
                <h3
                  className={`${
                    item.id !== 3
                      ? "text-gray-100 font-medium"
                      : "text-black-900 font-semibold"
                  } text-left text-base`}
                >
                  {item.heading1}
                </h3>
                <h3
                  className={`${
                    item.id !== 3 ? "text-gray-100" : "text-black-900"
                  } text-left text-2xl font-bold`}
                >
                  {item.heading2}
                </h3>

                {item.id === 3 && (
                  <h3 className="text-base font-medium text-left text-gray-100 mt-4">
                    {item.heading3_1}
                    <span className="ml-1 font-semibold text-warning">
                      {item.heading3_2}
                    </span>
                  </h3>
                )}

                {item.id === 1 && (
                  <h3 className="text-base font-semibold text-left text-white-700 mt-4 bg-">
                    {item.heading3_1}
                    <span className="p-2 ml-1 font-semibold rounded-md text-white-300 bg-yellow-50">
                      {item.heading3_2}
                    </span>
                  </h3>
                )}
                {/* Countdown timer section */}
                {item.isTimer && (
                  <div className=" mt-2 text-gray-100">
                    <div className="flex gap-2 text-2xl">
                      <div className="flex flex-col items-center">
                        <span>{days}</span>
                        <span className="text-xs">DAYS</span>
                      </div>
                      <span>:</span>
                      <div className="flex flex-col items-center">
                        <span>{hours}</span>
                        <span className="text-xs">HOURS</span>
                      </div>
                      <span>:</span>
                      <div className="flex flex-col items-center">
                        <span>{minutes}</span>
                        <span className="text-xs">MINUTES</span>
                      </div>
                      <span>:</span>
                      <div className="flex flex-col items-center">
                        <span>{seconds}</span>
                        <span className="text-xs">SECONDS</span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-start mt-6">
                  <button className="flex gap-x-2 items-center font-semibold bg-white-200 rounded-full text-sm p-2 text-primary transition-all duration-200 hover:text-white-200 hover:bg-primary  ">
                    Shop Now
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CountdownTimer;
