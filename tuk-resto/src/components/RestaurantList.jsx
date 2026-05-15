import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import NavBarManu from "./NavBarManu";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  // GET DATA
  const getRestaurants = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/restaurants"
      );

      const data = await response.json();

      setRestaurants(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  // DELETE
  const deleteRestaurant = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/restaurants/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Restaurant Deleted Successfully");

        getRestaurants();
      }
    } catch (error) {
      console.log("Delete Error:", error);
    }
  };

  return (
  
   <div>
        <NavBarManu/>
      <h1 className="my-4">Restaurant List</h1>

      <Table
        striped
        bordered
        hover
        responsive
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Rating</th>
            <th>Email</th>
            <th>Operation</th>
          </tr>
        </thead>

        <tbody>
          {restaurants.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>

              <td>{item.name}</td>

              <td>{item.address}</td>

              <td>{item.rating}</td>

              <td>{item.email}</td>

              <td>
                <Link to={"/update/" + item.id}>
                  <FontAwesomeIcon
                    icon={faEdit}
                    color="orange"
                  />
                </Link>

                &nbsp;&nbsp;

                <span
                  onClick={() =>
                    deleteRestaurant(item.id)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    color="red"
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
   </div>
  );
};

export default RestaurantList;