import React, { useState } from "react";

const AddMobile = () => {
  const [data, setdata] = useState(["", ""]);
  const [showInput, setShowInput] = useState(false);
  console.log(data);

  //==========================================

  const Handle1 = (e) => {
    const { name, value } = e.target;

    // arr.push(value)
    if (name === "FirstName") {
      data[0] = value;
    }

    if (name === "LastName") {
      data[1] = value;
    }
    console.log(data);

    setdata(data);
  };

  // ===============================

  return (
    <>
      <input onChange={Handle1} name="FirstName" />

      <button
        onClick={() => {
          setShowInput(true);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setShowInput(false);
        }}
      >
        -
      </button>

      {showInput && <input onChange={Handle1} name="LastName" />}
    </>
  );
};
export default AddMobile;
