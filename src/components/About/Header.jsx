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
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
              <p className="font-medium text-white md:text-[#12305B] text-lg">
                We re here to help you
              </p>
              <p className="font-bold text-7xl text-white md:text-[#12305B] ">Relax & Rest</p>
              
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header