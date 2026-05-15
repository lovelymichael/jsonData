import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import NavBarManu from './NavBarManu';

const RestaurantSearch = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [query, setQuery] = useState('');
  const [noData, setNoData] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  // SEARCH FUNCTION
  const searchRestaurant = async (key) => {
    setQuery(key);

    if (key.trim() === '') {
      setRestaurants([]);
      setNoData(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/restaurants');

      const result = await response.json();

      const filteredData = result.filter((item) => {
        return (
          item.name.toLowerCase().includes(key.toLowerCase()) ||
          item.address.toLowerCase().includes(key.toLowerCase())
        );
      });

      if (filteredData.length > 0) {
        setRestaurants(filteredData);
        setNoData(false);
      } else {
        setRestaurants([]);
        setNoData(true);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  // DELETE FUNCTION
  const deleteRestaurant = async (id) => {
    try {
      await fetch(`http://localhost:3000/restaurants/${id}`, {
        method: 'DELETE',
      });

      alert('Restaurant has been deleted');

      searchRestaurant(query);
    } catch (error) {
      console.log('Delete Error:', error);
    }
  };

  return (
    <div>
      <NavBarManu />
      <h1>Restaurant Search</h1>

      <Form.Control
        type="text"
        placeholder="Search by name or address"
        value={query}
        onChange={(event) => searchRestaurant(event.target.value)}
      />

      <br />

      {restaurants.length > 0 && (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Operation</th>
            </tr>
          </thead>

          <tbody>
            {restaurants.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>

                <td>{item.name}</td>

                <td>{item.address}</td>

                <td>
                  <Link to={'/update/' + item.id}>
                    <FontAwesomeIcon icon={faEdit} color="orange" />
                  </Link>
                  &nbsp;&nbsp;
                  <span onClick={() => deleteRestaurant(item.id)} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faTrash} color="red" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {noData && <h3>No Data Found</h3>}
    </div>
  );
};

export default RestaurantSearch;
