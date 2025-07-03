import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-elegant sticky-top">
      <div className="container">
        <Link className="navbar-brand brand-elegant" to="/">
          <img
            src="assets/images/logo.png"
            alt="Logo"
            height="45"
            className="me-3 logo-bounce"
          />
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMobileMenu}
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            isMobileMenuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto nav-elegant">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Portfolio", path: "/portfolio" },
              { label: "Blog", path: "/blog" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <li className="nav-item nav-item-elegant" key={item.path}>
                <Link
                  className="nav-link nav-link-elegant"
                  to={item.path}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex">
            <Link
              to="/contact"
              className="btn btn-luxury rounded-pill px-4 py-2"
              onClick={closeMobileMenu}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
