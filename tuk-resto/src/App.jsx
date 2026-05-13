import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import tukLogo from '../src/assets/images/mobile_tuk_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faHome, faList, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img src={tukLogo} alt="TUK Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faHome}/> Home</Nav.Link>
            <Nav.Link as={Link} to="/list"><FontAwesomeIcon icon={faList}/> List</Nav.Link>
            <Nav.Link as={Link} to="/create"><FontAwesomeIcon icon={faPlus}/> Create</Nav.Link>
            <Nav.Link as={Link} to="/search"><FontAwesomeIcon icon={faSearch}/> Search</Nav.Link>
            <Nav.Link as={Link} to="/update/1">Update</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
     

        <Routes>
          <Route path="/list" element={<RestaurantList />} />
          <Route path="/create" element={<RestaurantCreate />} />
          <Route path="/search" element={<RestaurantSearch />} />
          <Route path="/detail" element={<RestaurantDetail />} />
          <Route path="/update/:id" element={<RestaurantUpdate />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
