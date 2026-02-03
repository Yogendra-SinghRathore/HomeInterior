import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/images/mainLogo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNav = (id) => {
    closeNavbar();

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const closeNavbar = () => {
    if (window.innerWidth >= 992) return; // desktop: do nothing

    const navbar = document.getElementById("navbarScroll");
    if (!navbar) return;

    const bsCollapse =
      window.bootstrap.Collapse.getInstance(navbar) ||
      new window.bootstrap.Collapse(navbar, { toggle: false });

    bsCollapse.hide();
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white navbar-light mb-3">
      <div className="container bg-white navbarBorder">
        {/* Logo */}
        <NavLink
          className="navbar-brand fw-bold"
          to="/"
          onClick={() => handleSectionNav("hero")}
        >
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
          <ul className="navbar-nav mx-auto my-2 my-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                onClick={() => handleSectionNav("hero")}
                className="nav-link"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/"
                onClick={() => handleSectionNav("about")}
                className="nav-link"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/"
                onClick={() => handleSectionNav("service")}
                className="nav-link"
              >
                Service
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/"
                onClick={() => handleSectionNav("project")}
                className="nav-link"
              >
                Project
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                onClick={closeNavbar}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right CTA */}
          <div>
            <NavLink
              to="/contact"
              onClick={closeNavbar}
              className="primary-button navbarBtn"
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
