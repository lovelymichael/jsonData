import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import tukLogo from "../assets/images/mobile_tuk_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEdit,
  faTrash,
  faHome,
  faList,
  faPlus,
  faSearch,
  faUser, faSignOut 
} from "@fortawesome/free-solid-svg-icons";

const NavBarManu = () => {
  return (
    <div>
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
{
  localStorage.getItem('user') ?
  <Nav.Link as={Link} to="/logout">
    <FontAwesomeIcon icon={faSignOut}/> Logout
  </Nav.Link>
  :
  <Nav.Link as={Link} to="/login">
    <FontAwesomeIcon icon={faUser}/> Login
  </Nav.Link>
}

           
            <Nav.Link as={Link} to="/update/1">Update</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavBarManu;