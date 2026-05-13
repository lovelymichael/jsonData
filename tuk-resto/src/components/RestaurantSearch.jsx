import React, { useState } from "react";

const RestaurantSearch = () => {
  const [restaurants, setRestaurants] = useState([]);

  const search = async (key) => {
    if (key === "") {
      setRestaurants([]);
      return;
    }

    const [byName, byAddress] = await Promise.all([
console.log(key);
      
      fetch(`http://localhost:3000/restaurants?name=${key}`).then(r => r.json()),
      fetch(`http://localhost:3000/restaurants?address=${key}`).then(r => r.json()),
    ]);

    const merged = [...byName, ...byAddress];
    const result = merged.filter(
      (item, index, self) => self.findIndex(r => r.id === item.id) === index
    );
    setRestaurants(result);
  };

  return (
    <>
      <h1>RestaurantSearch</h1>
      <input
        type="text"
        placeholder="Search by name or address..."
        onChange={(e) => search(e.target.value)}
      />
      <br /><br />
      <ul>
        {restaurants.map((item) => (
          <li key={item.id}>{item.name} | {item.address}</li>
        ))}
      </ul>
    </>
  );
};

export default RestaurantSearch;