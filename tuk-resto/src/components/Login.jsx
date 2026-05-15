import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarManu from './NavBarManu';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // CHECK LOGIN
  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      navigate('/list');
    }
  }, [navigate]);

  const login = async () => {
    console.log(name, password);

    let result = await fetch(
      `http://localhost:3000/login?name=${name.trim()}&password=${password.trim()}`
    );

    result = await result.json();

    console.log(result);

    if (result.length > 0) {
      localStorage.setItem('user', JSON.stringify(result));

      navigate('/list');
    } else {
      alert('Please enter correct username and password');
    }
  };

  return (
    <div>
      <NavBarManu />

      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
