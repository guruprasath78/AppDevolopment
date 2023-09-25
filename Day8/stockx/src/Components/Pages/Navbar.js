import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../Redux/userSlice';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const email = user.email;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <img src="/logo.png" alt="Logo" className="mb-4" width="100" height="40" />

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              {email ? (
                <div className="user-actions d-flex align-items-center">
                  <p className="nav-link mb-0">{email}</p>
                  <button onClick={handleLogout} className="btn btn-outline-dark ml-2">Logout</button>
                </div>
              ) : (
                <Link to="/login" className="btn btn-outline-dark">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
