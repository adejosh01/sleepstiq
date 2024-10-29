import { useEffect, useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Trigger animation on mount
  }, []);
  return (
    <div>
      <div className="mx-4 md:mx-36">
        <div className="grid grid-cols-1 items-center gap-12 md:mt-16  md:mx-36">
          <div
            className={`flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:w-[900px] mt-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="font-medium text-[#12305B] text-lg">
              We re here to help you
            </p>
            <p className="font-bold text-3xl md:text-7xl text-[#12305B] ">
              How can we assist?
            </p>

            <div>
              <div className="flex  text-lg text-blue-950 w-full px-4 md:px-0">
                <div className="flex  gap-5 items-center px-6 py-4 bg-white rounded-xl shadow-md md:gap-7  md:w-[800px] md:px-10 lg:px-14">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ab13ca75f7bc21fcf140c6e44fa2af77f9f5d8322889299bc30454de4b19c4f?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7"
                    className="object-contain w-6 h-6 md:w-8 md:h-8"
                    alt="Search icon"
                  />
                  <input
                    type="text"
                    placeholder="Search FAQs here"
                    className="flex-auto w-full bg-transparent text-blue-950 placeholder:text-blue-950 focus:outline-none"
                    aria-label="Search FAQs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Header;
