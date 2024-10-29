const Cta = () => {
  return (
    <div>
      <div className="mx-4 md:mx-36 mt-20 ">
        <div className="flex flex-col items-center  gap-4  text-[#12305B]">
          <p className="font-bold text-3xl text-[#12305B] ">Visit our Shop</p>
          <p className="font-medium text-gray-600 text-lg md:w-[1200px] text-center ">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>

          <div className="space-x-4">
            <button className="px-2 py-4 w-60 bg-red-500  text-white  text-md rounded-md  ">
              Visit Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
