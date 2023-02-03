import Intro from "./Components/Intro";
import NavbarWeb from "./Components/Navbar";
import Navbar from "./Components/Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AboutUs from "./Components/AboutUs";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import Newsletter from "./Components/Newsletter";
import Shop from "./Components/Shop";
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <>
    
    <NavbarWeb></NavbarWeb>
    <Routes>
    <Route path="/" element={
    <> 
    <Intro></Intro>
    <AboutUs></AboutUs>
    <Product></Product>
    <Contact></Contact>
    <Newsletter></Newsletter>
    </>
    }>
    </Route>
    
    <Route path="/shop" element={ <Shop></Shop>}></Route>
    <Route path="/about" element={ <AboutUs></AboutUs>}></Route>
    <Route path="/contact" element={ <Contact></Contact>}></Route>
    <Route path="/shop" element={ <Shop></Shop>}></Route>
   
    </Routes>
    </>
  );
}

export default App;
