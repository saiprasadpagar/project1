import React from "react";
import { NavLink } from "react-router-dom";


const UserList = () =>{
    return(<>


<nav style={{ backgroundColor: "rgb(0, 255, 238)",width:"150px"}}>
<NavLink to="mobile">Mobile</NavLink><br/>
<NavLink to="laptop">Laptop</NavLink><br/>
<NavLink to="car">Car</NavLink><br/>

</nav>
    </>
    );
};

export default UserList;