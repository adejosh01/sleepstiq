import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

import About from "./pages/About"


import Faqs from "./pages/Faqs"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div className="">  
        <Routes>
          <Route path='/' element={<Home />}/>
        
          <Route path='/about' element={<About />}/>     
          <Route path='/faqs' element={<Faqs />}/>   
        </Routes>
        <Footer />
       
       
    </div>
  )
}

export default App