import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import {  Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants =async () =>{
    try{
      const response = await fetch(
        "http://localhost:3000/restaurants"
      );

      const data = await response.json();

      setRestaurants(data);
    }
    catch (error){
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);


  const deleteRestaurant  = async(id)=>{
   try{
    const response = await fetch(
      `http://localhost:3000/restaurants/${id}`,
      {
        method:"DELETE",
      }
    );
    if(response.ok){
      alert("Restaurant Deleted Successfully");

      //refresh list
      getRestaurants();
    }
   }catch(error){
    console.log("Delete Error:", error)
   }
  };

  return (
    <>
      <h1>Restaurant List</h1>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Rating</th>
            <th>Email</th>
            <th>Operarion</th>
        </tr>
      </thead>
      
      {restaurants.map((item) => (
        <tbody >
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.address}</td>
          <td>{item.rating}</td>
          <td>{item.email}</td>
          <td>
            <Link to={"/update"+item.id}><FontAwesomeIcon icon={faEdit}/></Link>
            <span onClick={()=> deleteRestaurant(item.id)}><FontAwesomeIcon icon={faTrash}/></span>
          </td>
        </tr>
        </tbody>
))}

</Table>
    </>
  );
};

export default RestaurantList;