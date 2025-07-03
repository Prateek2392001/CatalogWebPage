import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-luxury">
      <div className="container">
        <div className="row g-4">
          {/* Footer Brand */}
          <div className="col-lg-4">
            <div className="footer-brand">
              <h5 className="footer-title">InteriorPro</h5>
              <p className="footer-description">
                Creating beautiful and functional spaces that inspire and
                delight. Your dream interior is our passion.
              </p>
              <div className="footer-social">
                {["facebook-f", "instagram", "linkedin-in", "twitter"].map(
                  (social) => (
                    <a key={social} href="#" className="social-link-footer">
                      <i className={`fab fa-${social}`}></i>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="col-lg-2">
            <div className="footer-links">
              <h6 className="footer-links-title">Services</h6>
              <ul className="footer-links-list">
                {[
                  "Interior Design",
                  "Space Planning",
                  "Furniture Design",
                  "Lighting Design",
                ].map((service) => (
                  <li key={service}>
                    <Link to="/services" className="footer-link">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-lg-2">
            <div className="footer-links">
              <h6 className="footer-links-title">Company</h6>
              <ul className="footer-links-list">
                {[
                  { name: "About Us", link: "/about" },
                  { name: "Portfolio", link: "/portfolio" },
                  { name: "Blog", link: "/blog" },
                  { name: "Contact", link: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.link} className="footer-link">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4">
            <div className="footer-newsletter">
              <h6 className="footer-links-title">Newsletter</h6>
              <p className="newsletter-description">
                Subscribe to get the latest design trends and tips.
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Your email address"
                />
                <button className="newsletter-button" type="button">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="footer-copyright">
                &copy; 2024 InteriorPro. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <Link to="/privacy" className="footer-link me-3">
                Privacy Policy
              </Link>
              <Link to="/terms" className="footer-link">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
