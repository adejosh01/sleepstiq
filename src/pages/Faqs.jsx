import Faq from "../components/Faqs/Faqs"
import Header from "../components/Faqs/Header"
import Navbar from "../components/Navbar"


const Faqs = () => {
  return (
    <div>
       <div
        className=" bg-cover bg-center w-full h-[50vh] md:h-[80vh] bg-[#FBF9F2]">
        <Navbar />
        <Header />
      
      </div>
      <Faq />
    </div>
  )
}

export default Faqs