import {NavLink} from "react-router-dom";
const Header =()=>{
    return (<>


<nav className= "main-header">
<h1 className="header2">Welcome to React Routing</h1>

<ul>
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="about">About</NavLink></li>
<li><NavLink to="contacts">Contacts</NavLink></li>
<li><NavLink to="product">Product</NavLink></li>
<li><NavLink to="services">Services</NavLink></li>
<li><NavLink to="useparams">RouteParam</NavLink></li>
</ul>
</nav>

    </>
    );
};

export default Header;