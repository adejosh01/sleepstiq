import group3 from "../../assets/Group3.png";

const ShopNow = () => {
  return (
    <div>
        <div className="mx-4 md:mx-36 ">
        <div className="flex flex-col md:flex-row gap-4 md:gap-24 items-center">
          <div>
            <img src={group3} className=" mt-24 hidden md:block" alt="" />
          </div>
          <div className="flex flex-col md:items-center  gap-10 lg:items-start   text-[#12305B]">
            <p className="font-bold text-3xl text-[#12305B] ">Shop Now</p>
            <p className="font-medium text-[#12305B] text-lg md:w-[500px]">
              TOur Personal Diffuser is an aromatherapy device that contains a
              blend of melatonin, lavender, and chamomile. A few breaths of our
              plant-based essential oil mist will mellow you out, quiet the
              mind, and lull you to bed.
            </p>

            <div className="space-x-4">
              <button className="px-2 py-4 w-60 bg-red-500  text-white  text-md rounded-md  ">
                Visit Shop
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ShopNow