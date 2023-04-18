import React from "react";
import { NavLink } from "react-router-dom";
const About =()=>{
    return(<>
<div style = {{ backgroundColor : "lightgreen" , height:"200px"}}>
<h2>About Component:</h2>
<NavLink to="contacts">Contactss</NavLink>
</div>
    </>
    
    );
};

export default About;