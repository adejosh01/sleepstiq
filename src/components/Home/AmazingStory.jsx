import { useEffect, useState } from "react";
import ceo from "../../assets/ceo.png";

const AmazingStory = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 400); // Trigger animation on mount
  }, []);

  return (
    <div>
      <div className="mx-4 md:mx-36 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:mx-36">
          <div
            className={`flex flex-col items-center gap-10 lg:items-start lg:text-left lg:w-[900px] text-[#12305B] transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="font-semibold text-[#12305B] text-lg transition-all duration-700 delay-200">
              Our Amazing Story
            </p>
            <p className="font-bold text-3xl text-[#12305B] transition-all duration-700 delay-400">
              10k+ Happy Customers
            </p>
            <p className="font-medium text-[#12305B] text-lg md:w-[500px] transition-all duration-700 delay-600">
              There’s no secret sauce, no wizard behind the curtain. What makes
              Aerolab tick is an interdisciplinary team with a framework that
              fosters candid collaboration.
            </p>
            <p className="text-md font-bold underline text-[#12305B] transition-all duration-700 delay-800">
               More know About us
            </p>
          </div>
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <img src={ceo} className="w-full mt-10" alt="CEO" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingStory;
