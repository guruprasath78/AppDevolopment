import React, { useState, useCallback, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../assets/css/SidebarComponent.css";
import { IconContext } from "react-icons";
import logo from "../assets/images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/auth";
import EventBus from "../common/EventBus";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const { user: currentUser } = useSelector((state) => state.auth);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  const showSidebar = () => setSidebar(!sidebar);

  console.log("User Roles:", user.roles);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF", size: "1.5em" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top" style={{ backgroundColor: 'blue' }}>
          <div className="container-fluid my-3" id="call">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{ margin: "0" }}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mx-5" id="navhr">
                <li className="nav-item" id="navr">
                  <Link
                    to="/home"
                    className="nav-link text-light fs-4 px-3"
                    id="navl"
                    aria-current="page"
                    onClick={() => navigate("/home")}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item" id="navr">
                  <Link
                    to="/about"
                    className="nav-link text-light fs-4 px-3"
                    id="navl"
                    onClick={() => navigate("/about")}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item" id="navr">
                  <Link
                    to="/service"
                    className="nav-link text-light fs-4 px-3"
                    id="navl"
                    onClick={() => navigate("/service")}
                  >
                    Service
                  </Link>
                </li>
                <li className="nav-item ">
                  <a href="/" className="nav-link text-light fs-4 px-3" onClick={logOut}>
                    LogOut
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"} style={{ backgroundColor: 'black' }}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="/home" className="menu-bars">
                <AiIcons.AiOutlineClose color="white" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              if (!item.roles) {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span style={{ color: 'white', fontFamily: 'Arial', fontSize: '16px' }}>{item.title}</span>
                    </Link>
                  </li>
                );
              } else if (user && user.roles && item.roles.some((role) => user.roles.includes(role))) {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span style={{ color: 'white', fontFamily: 'Arial', fontSize: '16px' }}>{item.title}</span>
                    </Link>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
