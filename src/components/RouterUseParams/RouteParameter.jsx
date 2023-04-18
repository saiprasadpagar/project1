import React from "react";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import{BrowserRouter as Router , Routes , Route} from "react-router-dom"

const RouteParameter =()=>{
    return(<>

    <div style ={{display:"flex", height:"500px", border:"2px solid black"}}>
<UserList/>

<UserDetails/>
<Routes>
   <Route path="/:parametera" element={<UserDetails/>}/>
</Routes>
</div>
    </>
    );
};
export default RouteParameter;