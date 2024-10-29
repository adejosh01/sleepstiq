import rectangle from "../../assets/Rectangle.png";

const ProductReviews = () => {
  return (
    <div className=" mx-4 md:mx-36 md:mt-16 ">
        <h1 className="md:mx-36 font-semibold text-3xl text-[#12305B] mb-8">
          Product Reviews
        </h1>
        <div className="flex flex-col gap-5 justify-center md:justify-start md:mx-32 mb-24">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-col text-base rounded-md shadow-lg w-full  md:max-w-[350px] text-stone-600"
              >
                <img
                  src={rectangle}
                  className="object-cover w-full rounded-t-md aspect-[1.46]"
                  alt="Testimonial"
                />
                <div className="flex flex-col items-start p-6 w-full">
                  <p className="leading-7">
                    It really helps me fall right to sleep compared to melatonin
                    pills.
                  </p>
                  <div className="mt-4 font-bold">Javier Mendez</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c7cdfd51d2d7521072d6b44a70fdd6f2ffb4c870a4ed3c07162ceed83cd5679?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7"
                    className="object-contain mt-2 w-24"
                    alt="Signature"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
  )
}

export default ProductReviews