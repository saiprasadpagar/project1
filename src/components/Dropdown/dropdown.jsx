import React from "react"

const Dropdown=()=>{
   
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
   
   
   
   return(<>
<div className="dropdown">
  <button onClick={myFunction} className="dropbtn">Dropdown</button>
  <div id="myDropdown" className="dropdown-content">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#Contacts">Contacts</a>
  </div>
</div>

   </>) 
}
export default Dropdown;