import { useState } from "react"
import React from 'react'

const Rendering = () => {
 const [login , setlogin] = useState(true)
 let msg=""
if(login){
  msg="Successfuly loged in"
}
else{
  msg ="Please login into Account"
}

  return (
<>
<h3>conditional Rendering</h3>
<h3>Ternary opretor :{login? "Welcome Saiprasad" : "Login into your Account"}</h3>
<h3>If Else Condition: {msg}</h3>
<h3>Logical && opretor: {false && (<ul>
<li>Appple</li>
<li>Banana</li> 

</ul>)}</h3>
<button>Add</button>
</>
  )
}

export default Rendering