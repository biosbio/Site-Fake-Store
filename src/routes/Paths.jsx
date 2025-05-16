import Home from "../pages/Home";
import Teste from "../pages/Teste";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Paths = () => {
      return ( 
            <>
                  <BrowserRouter>
                        <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/teste" element={<Teste />} />
                        </Routes>
                  </BrowserRouter>
            </>
       );
}
 
export default Paths;