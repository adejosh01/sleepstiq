
import google from "../../assets/google.png";
import forbes from "../../assets/forbes.png";
import bloomberg from "../../assets/bloomberg.png";
import sleepreview from "../../assets/sleepreview.png";
import influencive from "../../assets/influencive.png";
const Brand = () => {
  return (
    <div>
        <div className="md:ml-64">
        <div className="flex items-center justify-around gap-10 bg-white shadow-2xl py-8 px-10 -mt-10 rounded overflow-auto">
          <img className="w-40" src={google} alt="hiiii" />
          <img className="w-40" src={forbes} alt="hiiii" />
          <img className="w-40" src={bloomberg} alt="hiiii" />
          <img className="w-40" src={sleepreview} alt="hiiii" />
          <img className="w-40" src={influencive} alt="hiiii" />
        </div>
      </div>
    </div>
  )
}

export default Brand