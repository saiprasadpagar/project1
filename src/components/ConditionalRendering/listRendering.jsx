import React, { useState } from "react";


const ListRendering = () => {
  const [arr, setArr] = useState(["Pune", "Mumbai", "Nashik", "Thane", "Pune"]);
  const [users] = useState([
    { id: 1, Name: "Sai", City: "pune" },
    { id: 2, Name: "Rahul", City: "Mumbai" },
    { id: 3, Name: "Rohan", City: "Nashik" },
  ]);
  return (
    <>
      <h1>List rendering</h1>
      <ul>
        {arr.map((elem, i) => {
          return <li key={i}>{elem}</li>;
        })}
      </ul>
      <h3>Array of Object Using map Method</h3>
      <section style={{ display: "flex" }}>
        {users.map((user, i) => {
          return (
            <div
              key={user.id}
              style={{border: "2px solid black",backgroundColor: "aqua",width: 200,}}
            >
              <li>ID:{user.id}</li>
              <h3>Name:{user.Name}</h3>
              <h3>City:{user.City}</h3>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ListRendering;
