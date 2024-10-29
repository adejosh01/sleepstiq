import Navbar from "../components/Navbar";
import ProductReviews from "../components/Home/ProductReviews";
import Cta from "../components/Home/CTA";

import bgImage from "../assets/homebg.png";

import Mission from "../components/Home/Mission";
import ShopNow from "../components/Home/ShopNow";
import AmazingStory from "../components/Home/AmazingStory";
import Testimony from "../components/Home/Testimony";
import Brand from "../components/Home/Brand";
import Header from "../components/Home/Header";

const Home = () => {
  return (
    <div className="">
      <div
        className=" bg-cover bg-center w-full h-[80vh] "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Navbar />
        <Header />
      </div>

      <Brand />

      <AmazingStory />

      <Testimony />

      <ShopNow />

      <Mission />

      <Cta />

      <hr className="mx-32 mt-16" />

      <ProductReviews />
    </div>
  );
};

export default Home;
