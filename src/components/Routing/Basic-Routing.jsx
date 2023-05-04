
import RouteHeader from "./route-header";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Product from "./Product";
import Services from "./Services";
import Error404 from "./Error404";
import RouteParameter from "../RouterUseParams/RouteParameter";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";


const BasicRouting =()=>{

    return(<>

<Router>
<RouteHeader/>
<Routes>
<Route path = "/" element={<Home/>} />
<Route path = "about" element={<About/>} />
<Route path = "contacts" element={<Contacts/>} />
<Route path = "product" element={<Product/>} />
<Route path = "services" element={<Services/>} />
<Route path = "services/:name" element={<Services/>} />
<Route path = "useparams/*" element={<RouteParameter/>}/>
<Route path = "*" element={<Error404/>} />
</Routes>
</Router>


    </>
    
    );
    };

    export default BasicRouting;
