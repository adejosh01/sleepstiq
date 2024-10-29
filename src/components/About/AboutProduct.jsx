import group3 from "../../assets/Group3.png";

const AboutProduct = () => {
  return (
    <div>
      <div className="mx-4 md:mx-36 ">
        <div className="flex flex-col md:flex-row gap-4 md:gap-24 items-center">
          <div>
            <img src={group3} className=" mt-24 hidden md:block" alt="" />
          </div>
          <div className="flex flex-col md:items-center  gap-6 lg:items-start   text-[#12305B]">
            <p className="font-bold text-3xl text-[#12305B] ">About Product</p>
            <p className="font-medium text-[#12305B] text-lg md:w-[500px]">
              Our Personal Diffuser is an aromatherapy device that contains a
              blend of melatonin, lavender, and chamomile. A few breaths of our
              plant-based essential oil mist will mellow you out, quiet the
              mind, and lull you to bed.
            </p>

            <div>
              <p>😊 Promotes calm and relaxation.</p>
              <p> 💤 Inhalation allows for a rapid effect.</p>
              <p>  ✅ 100% drug-free, plant-based ingredients.</p>
              <p>   ‍⚕️ 3rd-party lab tested.</p>
             
            </div>

            <div className="grid grid-cols-2 gap-4">
              <p className="text-lg font-semibold">Price</p>
              <p className="text-lg font-semibold">Unit</p>

              <p className="text-lg font-semibold">USD 50</p>
              <input type="number" className="p-2 w-24 outline-none border border-gray-600 rounded-md" />

          
            </div>
            <div className="space-x-4">
                <button className="px-2 py-4 w-60 bg-red-500  text-white  text-lg rounded-md  ">
                  Buy
                </button>
              </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
