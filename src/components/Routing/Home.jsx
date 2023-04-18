
import { NavLink } from "react-router-dom";

const Home =()=>{
    return(<>

<main style = {{ backgroundColor : "lightgreen" , height:"200px"}}>
<h2>Home Component</h2>
<br/>
<p>Single page Website using React Router Use Below (Link Tag insted of Ancher tag)</p>
<nav>
<NavLink to="/">Home</NavLink>
<NavLink to="about">About</NavLink>
<NavLink to="contacts">Contactss</NavLink>
<NavLink to="product">Product</NavLink>
<NavLink to="services">Services</NavLink>
</nav>

</main>


    </>
    );
};
export default Home;