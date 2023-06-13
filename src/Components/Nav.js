import React from "react";
import "../Assets/Nav.css";
import { NavLink } from "react-router-dom";

import log from "../log.png";

export default function Nav() {

  let btn = ()=>{
    document.getElementById("navbarSupportedContent").classList.remove('show');
    document.getElementById("threeline").classList.add('collapsed');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="container-fluid">
          <div className="logo_img">
            <img className="img" src={log} alt="" />
          </div>
          <button
            id="threeline"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link"  onClick={btn}   aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={btn}  to="/Work">
                  Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={btn}  to="/Education">
                  Education
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={btn}   to="/Experience">
                  Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={btn}  to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={btn}  to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
