import React from "react";
import { useParams } from "react-router-dom";
const UserDetails =()=>{
    const {parametera}=useParams()
    return(<>
<div style={{background:"orange" , width:"400px" }}>
<h2>Product Name:{parametera}</h2>
</div>

    </>
    );
};
export default UserDetails;