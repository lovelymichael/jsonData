import React, { useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";

const RestaurantUpdate = () => {
   
  const {id} = useParams();
  const navigate = useNavigate();

    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[rating, setRating]=useState("");
    const[address, setAddress]=useState("");

   const update = () =>{
    const data = {name, email, rating, address}

    fetch(`http://localhost:3000/restaurants/${id}`,{
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    })
    .then((result) => result.json())
    .then(()=>{
      alert("Restaurant Updated Successfuly");
      console.log(res);
      navigate("/list")
    });
  }

  return (
    

      <div>
      <h1>RestaurantUpdate</h1>
      <input onChange={(e)=>setName(e.target.value)} placeholder="Restaurant Name"/>
      
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
      <button onClick={update}>Add Update</button>
    </div>
   
  );
};

export default RestaurantUpdate;
