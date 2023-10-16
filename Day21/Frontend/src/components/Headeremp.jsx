import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Import your logo image

const Navbar = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  return (
    <>
      {/* Topbar */}
      <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ backgroundColor: "rgba(0,0,0,0.6)", maxHeight: "70px" }}>
        <div className="container">
          {logo}
          <a className="navbar-brand" href="#" onClick={() => navigate("/home")}>
            <img src={logo} alt="Logo" width="50" height="50" style={{ display: "block", margin: "0 auto" }} />
          </a>
          <button
            className={`navbar-toggler btn btn-light ${isSidenavOpen ? 'open' : ''}`}
            type="button"
            onClick={toggleSidenav}
          >
            <span className="navbar-toggler-icon btn btn-light" style={{ borderRadius: "3px" }}></span>
          </button>
          <div className={`collapse navbar-collapse ${isSidenavOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item px-3">
                <a href="#" onClick={() => navigate("/home")} className='nav-link text-white'>Home</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-light" href="#" onClick={() => navigate("/about")}>About</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-light" href="#" onClick={() => navigate("/service")}>Services</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-light" href="#" onClick={() => navigate("/contact")}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidenavbar */}
      <div className={`sidenavbar ${isSidenavOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#" className='text-white' onClick={() => { navigate("/add") }}>Add Stocks</a>
          </li>
          <li>
            <a href="#" className='text-white' onClick={() => { navigate("/add") }}>List All stocks</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
