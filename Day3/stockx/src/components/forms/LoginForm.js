import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css'
export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate=useNavigate();

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (!email || !password || !userType) {
      setShowAlert(true);
      return;
    }

    console.log({ email });
    console.log({ password });
    console.log({ userType });
    navigate('/signin')
    setShowAlert(false);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <img src="/logo.png" alt="Logo" className="mb-4" width="164" height="64" />

      <form onSubmit={SubmitHandler}>
        <div className="mb-4">
          <div className="form-check form-check-inline">
            <input
              type="radio"
              id="owner"
              className="form-check-input"
              value="Owner"
              checked={userType === 'Owner'}
              onChange={(e) => setUserType('Owner')}
            required/>
            <label className="form-check-label" htmlFor="owner">
              Owner
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              id="employee"
              className="form-check-input"
              value="Employee"
              checked={userType === 'Employee'}
              onChange={(e) => setUserType('Employee')}
            />
            <label className="form-check-label" htmlFor="employee">
              Employee
            </label>
          </div>
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="form-control col-xs-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ minWidth: '15rem' }}
          required/>
        </div>
        <div className="mb-6 col-xs-4">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {showAlert && (
          <div className="alert alert-danger" role="alert">
            Please fill in all fields.
          </div>
        )}

        <div className="mb-6 text-center">
          <button type="submit" className="btn btn-primary m-4">
            Submit
          </button>
        </div>
      </form>
      <div className="">
        <Link className="link" to={'/signup'} > New User? Register Now</Link>
      </div>
    </div>
  );
}
