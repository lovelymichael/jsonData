import React, { useState } from "react";
import NavBarManu from "./NavBarManu";

const RestaurantCreate = () => {
  const[name, setName]=useState("");
  const[email, setEmail]=useState("");
  const[rating, setRating]=useState("");
  const[address, setAddress]=useState("");

  const data ={
    name, email, rating, address
  }

  const create = () =>{
    fetch("http://localhost:3000/restaurants", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((res)=>{
        alert("Restaurant has been Added");
        console.log(res);
      })
    })
  }
  return (
    <div>
      <NavBarManu/>
      <h1>RestaurantCreate</h1>
      <input onChange={(e)=>setName(e.target.value)}
        placeholder="Reastaurant Name"
      />
      <br/><br/>

      <input
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Reastaurant Email"
      />
      <br/><br/>

      <input
         onChange={(e)=>setRating(e.target.value)}
        placeholder="Reastaurant Rating"
      />
      <br/><br/>

      <input
        onChange={(e)=>setAddress(e.target.value)}
        placeholder="Reastaurant Address"
      />
      <br/><br/>
      <button onClick={create}>Add Restaurant</button>
    </div>
  );
};

export default RestaurantCreate;
