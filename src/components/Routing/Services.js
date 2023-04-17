import { NavLink, useParams } from "react-router-dom";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
const Services =()=>{
const {name} = useParams()
    
    return(<>
<NavLink to="mobile">Mobile</NavLink>

<div style = {{ backgroundColor : "green" , height:"200px"}}>
<h2>Services Component</h2>
<h2>UseParams Value: {name}</h2>
</div> 
    </>
    );
};
export default Services;