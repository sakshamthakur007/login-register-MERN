import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './register.css'
const Register = () => {
  const [registerData, setRegisterData] = useState({ username: "", password: "" });

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const SubmitRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/register', registerData);
      const {success, message } = response.data;
      if (success) {
        console.log("Registered successfully");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error('Register Error', error);
    }

    setRegisterData({
      username: "",
      password: ""
    });
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={SubmitRegistration}>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={registerData.username}
          required
          onChange={handleRegisterChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={registerData.password}
          required
          onChange={handleRegisterChange}
        />
        <button type="submit">Submit</button>
        <p>Already registered?
          <Link to="/login">login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
