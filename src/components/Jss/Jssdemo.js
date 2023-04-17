import React,{useState} from "react"
// import {createUseStyles} from "react-jss"

// const style =  createUseStyles ({
//     header:{
//     color:"sky",
//     border:"2px solid black",
//     backgroundColor:"aqua"},
    
//     colors:{
//         color:"green",
//         border:"2px solid black"
//     }

// })
const JSSHook =()=>{
   const [colors , setcolors] = useState("red")
   

    return(<div>
<h3 style ={{color:colors}}>Change My Color</h3>
<input type="color" onChange={(event)=>setcolors(event.target.value)}></input>
</div>)
}
export default JSSHook;