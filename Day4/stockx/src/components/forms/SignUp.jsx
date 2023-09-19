import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import Paper from '@mui/material/Paper';


function SignUp() {
  const [formData, setFormData] = useState({
    confirm_password: '',
    email: '',
    password: '',
    organizationName: '',
    mobileNumber: '',
    country: '',
  });
  const [passwordError, setPasswordError] = useState('');
  const [matchError, setMatchError] = useState('');
  const navigate=useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  
    if (name === 'password') {
      validatePassword(value);
      if (value === formData.confirm_password) {
        setMatchError('');
      }
    } else if (name === 'confirm_password') {
      if (formData.password !== value) {
        setMatchError('Passwords do not match');
      } else {
        setMatchError('');
      }
    }
  };
  

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = regex.test(password);
    
    if (!isValid) {
      setPasswordError('weak password');
    }
     else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isPasswordValid = validatePassword(formData.password);
      
        console.log(formData);
        navigate('/');
      
    
     
  };
  
  

  return (
    <div className='background'>
    <div className="container  content-centre d-flex flex-column align-items-center justify-content-center vh-100">
      <span className="p-3 content-centre d-flex flex-column align-items-center justify-content-center" id='formbox'>
      <img src="/logo.png" alt="Logo" className="mb-4" width="164" height="64" />
      <h2 className="mb-2">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <p className="text-danger">{passwordError}</p>
        </div>
        <div className="mb-2">
          <input
            type="password"
            className="form-control"
            id="confirm_password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
          <p className="text-danger">{matchError}</p>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            placeholder="Organization Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            required
          />
          <center>
            <button type="submit" className="mt-3 btn btn-primary justify-content-center">
              Sign Up
            </button>
          </center>
        </div>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/">Log in</Link>
      </p>
      </span>
     
    </div>
    </div>
  );
}

export default SignUp;
