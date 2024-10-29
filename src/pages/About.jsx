
import bgImage from "../assets/aboutbg.png";
import AboutProduct from "../components/About/AboutProduct";
import Header from "../components/About/Header";
import Testimony from "../components/Home/Testimony";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
       <div
        className=" bg-cover bg-center w-full h-[80vh]  "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Navbar />
        <Header />
      </div>

      <AboutProduct />
      <hr className="mx-32 " />
      <div className="mb-6 mt-10">
         <Testimony />
      </div>
     

    </div>
  )
}

export default About