
import woman from "../../assets/woman.png";


const Mission = () => {
  return (
    <div>
        <div className="mx-4 md:mx-36 mt-10 md:mt-0">
        <div className="flex flex-col md:flex-row justify-between items-center md:mx-36">
          <div className="flex flex-col md:items-center  gap-10 lg:items-start lg:text-left  text-[#12305B]">
            <p className="font-bold text-3xl text-[#12305B] ">Our Mission</p>
            <p className="font-medium text-gray-600 text-lg md:w-[500px]">
              We started Sleepstiq with 1 simple goal: to be your best friend at
              bedtime. We, just like you, deal with stress, unease, and trouble
              sleeping from a number of silly things like school, work, screens,
              numbers, and people. That s why we created products that aim to -
            </p>

            <div className="text-gray-600 flex md:flex-col  gap-4 font-semibold text-md whitespace-normal">
              <p>✓ Promote Calm </p>
              <p>✓ Support Sleep </p>
              <p>✓ Reduce Stress </p>
              <p>✓ Aid Relaxation</p>
            </div>
          </div>
          <div>
            <img src={woman} className="w- mt-10 hidden md:block" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission