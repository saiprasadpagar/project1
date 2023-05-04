import "./components/App.css"
// import { Suspense,lazy } from "react";]
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header"
import JSSHook from "./components/Jss/Jssdemo";
import Material from "./components/MaterialUI/Material";
import MaterialLayout from "./components/MaterialUI/MaterialLayout";
import Rendering from "./components/ConditionalRendering/Rendering";
import ListRendering from "./components/ConditionalRendering/listRendering";
import FormDemo from "./components/Form/form";
import Validation from "./components/Form/FormValidation";
import BasicRouting from "./components/Routing/Basic-Routing"
// const Footer = lazy(()=>import('./components/Footer/footer'));
const App = () => {

  
  return (
    <div>

<Header/>
<JSSHook/>
<Material/>
<MaterialLayout/>
{/* <Suspense fallback={<div>Loading...</div>}> */}

<Rendering/>
<ListRendering/>
<FormDemo/>
<Validation/>
<BasicRouting/>
 <Footer/> 

{/*</Suspense>*/}
    </div>
  );
}

export default App;