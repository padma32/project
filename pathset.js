import react from  "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

import Login from "./login";
    import Signup from "./signu";
    import Onetime from "./onetime";
    import Roundtrip from "./fe1";
    import Or from "./or";
    import Conup from "./conup"
    import Delc from "./delc"
    import Delb from "./delb";
    import View from "./view";
    import Viewb from "./viewboo";
    import Delbo from "./dob";
import Vibo from "./vbo";

    
import ButtonAppBar from "./homep";

const Path=()=>
{
    return(
        <BrowserRouter>
        <Routes>
<Route path="/" element={<ButtonAppBar/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
             <Route path="/signup" element={<Signup/>}></Route> 
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Conup" element={<Conup/>}></Route> 
            <Route path="/Delc" element={<Delc/>}></Route>
            <Route path='/View' element={<View/>}></Route>
            <Route path="/Or" element={<Or/>}></Route>
            <Route path="/Onetime" element={<Onetime/>}></Route>
            <Route path="/Delb" element={<Delb/>}></Route>
            <Route path="/roundtrip" element={<Roundtrip/>}></Route>
            <Route path="/Viewb" element={<Viewb/>}></Route>
            <Route path="/Vibo" element={<Vibo/>}></Route>
            <Route path="Delbo" element={<Delbo/>}></Route>
           
           
        </Routes>
        </BrowserRouter>
    )
}
export default Path;