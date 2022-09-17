
import Home from "./Components/Home/Home";
import Product from './Components/pages/Product/Product'
import About from './Components/pages/About/About'
import Contact from './Components/pages/contact/Contact'
import {Routes, Route} from 'react-router-dom'
import Accessoire from "./Components/pages/accessoire/Accessoire";
import Women from "./Components/pages/women/Women";
import Men from "./Components/pages/men/Men";
import Children from "./Components/pages/Children/Children";
import Cosmetics from "./Components/pages/cosmetics/Cosmetics"
import Signin from "./Components/signin/Signin";
import Signup from "./Components/signup/Signup";
import Admin from "./Components/signin/admin/Admin";



function App() {
 
  return (
    <div className="App">
      
       <Routes>
       
          <Route path="/" element={<Home/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Women" element={<Women/>}/>
          <Route path="/Men" element={<Men/>}/>
          <Route path="/Children" element={<Children/>}/>
          <Route path="/Accessoire" element={<Accessoire/>}/>
          <Route path="/Cosmetics" element={<Cosmetics/>}/>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Admin" element={<Admin/>}/> 
          
       </Routes>
      
   
  
              
    </div>
  );
}

export default App;
