import React, { useEffect, useState } from "react";

const Validation = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  console.log(error);
  console.log(user);

  const HandleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  //--------------------------------------------

  useEffect(() => {
    
    const errors = {};
    if (!user.username) {
      errors.name = "Name is required";
    
    } else if (user.username.length < 3) {
      errors.name = "Name contain at lest 3 character";
    
    } else if (user.username.length > 15) {
      errors.name = "username should be within 15 Character";
    };

    //Mobile
    if (!user.mobile) {
      errors.mobile = "Mobile is required";
    } else if (user.mobile.length <= 10 ) {
      errors.mobile = "Mobile should be 1o digit Number";
   };
//Email
    if (!user.email) {
  errors.email = "Email is required";

} else if (!/\S+@\S+\.\S+/.test(user.email)) {
  errors.email = "Email is invalid";
};

 

//password
if (!user.password) {
  errors.password = "invalid";

}else if( ( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(user.password)) {
  errors.password = "password is invalid";
};

    
  setError({ ...errors });
    console.log(error);
  }, [user]);

  const HandleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2>Form Validation:</h2>

      <form onSubmit={HandleOnSubmit}>
        <lable>UserName</lable>
        <input type="text" name="username" onChange={HandleOnChange} required />
        <span style={{ color: "red" }}>{error.name}</span>

        <br />

        <lable>Mobile No</lable>
        <input type="number" name="mobile" onChange={HandleOnChange} required />
        <span style={{ color: "red" }}>{error.mobile}</span>
        <br />

        <lable>Email Id. </lable>
        <input type="text" name="email" onChange={HandleOnChange} required />
        <span style={{ color: "red" }}>{error.email}</span>
        <br />

        <lable>Password</lable>
        <input type="password" name="password" onChange={HandleOnChange}/>
        <span style={{ color: "red" }}>{error.password}</span>
        
        <br />

        <input type="submit" value="Register" onChange={HandleOnChange} />
      </form>
    </>
  );
};

export default Validation;
