import { useEffect, useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Trigger animation on mount
  }, []);

  return (
    <div>
      <div className="mx-4 md:mx-36">
        <div className="grid grid-cols-1 items-center gap-12 md:mt-16 md:mx-36">
          <div
            className={`flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:w-[900px] mt-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="font-medium text-[#12305B] text-lg transition-all duration-700 delay-200">
              We’re here to help you
            </p>
            <p className="font-bold text-7xl text-[#12305B] transition-all duration-700 delay-400">
              Relax & Rest
            </p>
            <p className="font-medium text-[#12305B] text-lg md:w-[600px] transition-all duration-700 delay-600">
              With the aid of our Melatonin Sleepstiq, we can assure you that
              you can get quality sleep.
            </p>
            <div className="space-x-4 transition-all duration-700 delay-800">
              <button className="px-2 py-4 w-60 bg-red-500 text-white text-md rounded-md">
                Visit Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
