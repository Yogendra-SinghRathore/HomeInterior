import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/mainLogo.svg";

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white navbar-light mb-3">
      <div className="container bg-white navbarBorder">

        {/* Logo */}
        <NavLink className="navbar-brand fw-bold" to="/hero">
          <img src={Logo} alt="brandLogo" />
        </NavLink>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Content */}
        <div className="collapse navbar-collapse" id="navbarScroll">

          {/* Center Nav Links */}
          <ul className="navbar-nav mx-auto my-2 my-lg-0">

            <li className="nav-item">
              <NavLink
                to="/hero"
                onClick={() => scrollToSection("hero")}
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                onClick={() => scrollToSection("about")}
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/service"
                onClick={() => scrollToSection("service")}
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Service
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/project"
                onClick={() => scrollToSection("project")}
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Project
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>

          {/* Right CTA */}
          <div className="">
            <NavLink
              to="/quote"
              className="primary-button navbarBtn"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
            >
              Get A Quote
            </NavLink>
          </div>

        </div>

        
        </div>
    </nav>
  );
};

export default Navbar;
