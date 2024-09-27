import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";

function Saleofmonth({ image, heading1, heading2, isTimer, deadline, discount, textColor = 'text-white' }) {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

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
    if (isTimer) {
      getTime(); // Initial call
      const interval = setInterval(getTime, 1000);
      return () => clearInterval(interval);
    }
  }, [isTimer, deadline]);

  return (
    <section>
      <div className="w-full mx-auto my-auto p-4 bg-white relative">
        <ul className="flex flex-row flex-wrap items-center justify-center">
          <li
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
              width: "100%", // Adjust width to be full-width on small screens
              maxWidth: "1400px", // Max width on larger screens
              height: "300px",
            }}
            className="p-6 bg-no-repeat flex flex-col md:flex-row items-center rounded-md relative"
          >
            {/* Discount Badge */}
            <div
              className="
                absolute transform bg-[#FF8A00] text-white-100 w-16 h-16 flex flex-col items-center justify-center rounded-full font-poppins
                bottom-1 right-1
                xs:bottom-1 xs:right-1
                sm:bottom-4 sm:right-4
                md:bottom-8 md:right-8
                lg:top-1/2 lg:right-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2
              "
            >
              <span className="font-bold text-white"> {discount}</span>
              <span className="text-gray-300 text-sm">OFF</span>
            </div>

            {/* Content section */}
            <div className={`flex my-auto flex-col items-start w-full md:w-2/3 ${textColor}`}>
              <h3 className="font-medium text-left text-base">
                {heading1}
              </h3>
              <h3 className="text-left text-2xl font-bold">
                {heading2}
              </h3>

              {/* Countdown timer section */}
              {isTimer && (
                <div>
                  <div className="flex gap-2 text-2xl">
                    <div className="flex flex-col items-center">
                      <span className="text-[rgb(51,230,66)]">{days}</span>
                      <span className="text-xs text-gray-400">DAYS</span>
                    </div>
                    <span>:</span>
                    <div className="flex flex-col items-center">
                      <span className="text-[rgb(51,230,66)]">{hours}</span>
                      <span className="text-xs text-gray-400">HOURS</span>
                    </div>
                    <span>:</span>
                    <div className="flex flex-col items-center">
                      <span className="text-[rgb(51,230,66)]">{minutes}</span>
                      <span className="text-xs text-gray-400">MINUTES</span>
                    </div>
                    <span>:</span>
                    <div className="flex flex-col items-center">
                      <span className="text-[rgb(51,230,66)]">{seconds}</span>
                      <span className="text-xs text-gray-400">SECONDS</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-start mt-6">
                <button className="flex gap-x-2 items-center font-semibold bg-white-200 rounded-full text-sm p-2 text-primary transition-all duration-200 hover:text-white-200 hover:bg-primary">
                  Shop Now
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Saleofmonth;
