import logo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <div className="flex flex-col text-base bg-blue-950 text-white">
      <div className="text-center flex items-center justify-center">
        <img className="mb-5 w-32 py-4 " src={logo} alt="" />
      </div>

      <div className="md:mx-32 mx-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-sm  my-10  ">
          <div className="flex items-center gap-24">
            <div>
              <p className="text-xl font-medium mb-5">Contact</p>
              <ul className="flex flex-col gap-2 text-md text-gray-600">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Jobs</li>
              </ul>
            </div>

            <div>
              <p className="text-xl font-medium mb-5">COMPANY</p>
              <ul className="flex flex-col gap-2 text-gray-600">
                <li>Phone</li>
                <li className="text-white font-bold">+234 708 507 3128</li>
                <li>Address</li>
                <li className="text-white font-bold">
                  16, Ogindipe Close, Upston Close
                </li>
              </ul>
            </div>
          </div>

          {/**** Center Side */}
          <div>
            <p className="text-xl font-medium mb-5">CONSUMER ADVISORY</p>
            <p className="mb-6">
              These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease. This product should be used only as
              directed on the label. All trademarks and copyrights are property
              of their respective owners and not affiliated with nor do they
              endorse this product. Results may vary. 
              
            </p>
            <span className="py-6">  By using our website or product, you agree to follow our terms of service.</span>
          </div>

          {/**** Right Side */}
          {/* Get in Touch */}
          <div className="flex flex-col w-full md:w-1/4 mb-6">
            <h2 className="font-semibold uppercase text-lg mb-4">Get in Touch</h2>
            <p className="text-neutral-400">Feel free to reach out via email:</p>
            <p className="text-2xl font-bold mt-2">hello@sleepstiq.com</p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b15e0838ce1730fe2d5dff4d970518ff4429e3be99208c805b0e3686d36b00c?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7"
              alt="Certification Logo"
              className="w-32 mx-auto md:mx-0 mt-6"
            />
          </div>
        </div>

         {/* Footer Bottom */}
         <div className="flex justify-center items-center mt-10 text-neutral-400 text-sm">
          © 2020 @sleepstiq. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
