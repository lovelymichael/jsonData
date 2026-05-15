import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Logout from "./components/Logout";
import Login from "./components/Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faHome, faList, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <Router>
   
     

        <Routes>
          <Route path="/list" element={<RestaurantList />} />
          <Route path="/create" element={<RestaurantCreate />} />
          <Route path="/search" element={<RestaurantSearch />} />
          <Route path="/detail" element={<RestaurantDetail />} />
          <Route path="/update/:id" element={<RestaurantUpdate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
