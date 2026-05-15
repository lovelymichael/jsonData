import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBarManu from './NavBarManu';

const RestaurantUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [address, setAddress] = useState('');

  // CHECK LOGIN
  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) {
      navigate('/login');
    } else {
      getRestaurantDetails();
    }
  }, [navigate]);

  // GET SINGLE RESTAURANT
  const getRestaurantDetails = async () => {
    try {
      const result = await fetch(`http://localhost:3000/restaurants/${id}`);

      const data = await result.json();

      setName(data.name);
      setEmail(data.email);
      setRating(data.rating);
      setAddress(data.address);
    } catch (error) {
      console.log('Fetch Error:', error);
    }
  };

  // UPDATE RESTAURANT
  const update = async () => {
    const data = { name, email, rating, address };

    try {
      const result = await fetch(`http://localhost:3000/restaurants/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const res = await result.json();

      console.log(res);

      alert('Restaurant Updated Successfully');

      navigate('/list');
    } catch (error) {
      console.log('Update Error:', error);
    }
  };

  return (
    <div>
      <NavBarManu />

      <h1>Restaurant Update</h1>

      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Restaurant Name" />

      <br />
      <br />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Restaurant Email"
      />

      <br />
      <br />

      <input
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Restaurant Rating"
      />

      <br />
      <br />

      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Restaurant Address"
      />

      <br />
      <br />

      <button onClick={update}>Update Restaurant</button>
    </div>
  );
};

export default RestaurantUpdate;
