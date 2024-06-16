import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.css'
const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', loginData);
      const { success, message } = response.data;
      if (success) {
        console.log("Login successfully");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error('Login Error', error);
    }

    setLoginData({
      username: "",
      password: ""
    });
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={Submit}>
        <input type="text" name="username" placeholder="Enter username" value={loginData.username} required onChange={handleLoginChange} />
        <input type="password" name="password" placeholder="Enter password" value={loginData.password} required onChange={handleLoginChange} />
        <button type="submit">submit</button>
        <p>aNot Registered yet?
          <Link to="/registration">register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
