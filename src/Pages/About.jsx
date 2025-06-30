"use client";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const About = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="interior-about">
      {/* Elegant Navbar */}
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-elegant sticky-top">
        <div className="container">
          <Link className="navbar-brand brand-elegant" to="/">
            <img
              src="assets/images/logo.png"
              alt="Logo"
              height="45"
              className="me-3 logo-bounce"
            />
            <span className="brand-text">InteriorPro</span>
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
      

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto nav-elegant">
              <li className="nav-item nav-item-elegant">
                <Link className="nav-link nav-link-elegant" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item nav-item-elegant">
                <Link className="nav-link active nav-link-elegant" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item nav-item-elegant">
                <Link className="nav-link nav-link-elegant" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item nav-item-elegant">
                <Link className="nav-link nav-link-elegant" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item nav-item-elegant">
                <Link className="nav-link nav-link-elegant" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item nav-item-elegant">
                <Link className="nav-link nav-link-elegant" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <div className="contact-info me-4">
                <h6 className="contact-phone">+44 20 7722 0088</h6>
                <Link to="/contact" className="contact-link">
                  Order a call
                </Link>
              </div>
              <Link
                to="/contact"
                className="btn btn-luxury rounded-pill px-4 py-2"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav> */}

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
              <li className="nav-item nav-item-elegant">
                <Link
                  className="nav-link nav-link-elegant"
                  to="/"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item nav-item-elegant">
                <Link
                  className="nav-link nav-link-elegant"
                  to="/about"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item nav-item-elegant">
                <Link
                  className="nav-link nav-link-elegant"
                  to="/services"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item nav-item-elegant">
                <Link
                  className="nav-link nav-link-elegant"
                  to="/portfolio"
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item nav-item-elegant">
                <Link
                  className="nav-link nav-link-elegant"
                  to="/blog"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item nav-item-elegant">
                <Link
                  className="nav-link nav-link-elegant"
                  to="/contact"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
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

      {/* Hero Banner Section */}
      <section className="about-hero">
        <div className="hero-background-about"></div>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <div className="hero-content-about">
                <nav aria-label="breadcrumb" className="breadcrumb-luxury">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/" className="breadcrumb-link">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About Us
                    </li>
                  </ol>
                </nav>
                <h1 className="about-hero-title">About Us</h1>
                <p className="about-hero-subtitle">Our history</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-hero-images">
                <div className="main-hero-image">
                  <img
                    src="assets/images/resources/about1.jpg"
                    alt="About Us"
                    className="hero-img-main"
                  />
                </div>
                <div className="secondary-hero-image">
                  <img
                    src="assets/images/resources/about2.jpg"
                    alt="Our Work"
                    className="hero-img-secondary"
                  />
                </div>
                <div className="video-overlay">
                  <div className="video-content">
                    <h4 className="video-title">
                      Watch a video about how we work and try for our customers
                    </h4>
                    <span className="video-subtitle">Play video</span>
                    <a
                      href="https://www.youtube.com/watch?v=pNxqh-JCMpw"
                      className="play-button"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-luxury history-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="history-content">
                <h2 className="section-title">History of our creation</h2>
                <p className="section-description">
                  Since our humble beginnings in 2006, We has significantly
                  expanded its our collection of exclusive lamps. Today we are
                  proud to present you our best lighting design solutions. Sit
                  amet just consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-background"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="stats-intro">
                <h2 className="stats-title">
                  Architects <br /> with different approach
                </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="stats-grid">
                <div className="row g-4">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="stat-card">
                      <h2 className="stat-number" data-count="10">
                        10
                      </h2>
                      <h3 className="stat-label">Awards gained</h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="stat-card">
                      <h2 className="stat-number" data-count="315">
                        315
                      </h2>
                      <h3 className="stat-label">Happy customers</h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="stat-card">
                      <h2 className="stat-number" data-count="17">
                        17
                      </h2>
                      <h3 className="stat-label">Years experience</h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="stat-card">
                      <h2 className="stat-number" data-count="95">
                        95
                      </h2>
                      <h3 className="stat-label">Undergo training</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Services Section */}
      <section className="section-luxury team-services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Designer services are no longer a luxury
            </h2>
            <p className="section-description">
              We are sincerely convinced that using the services of architects
              and designers in our time is not a luxury, but a conscious choice.
            </p>
          </div>
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="team-showcase">
                <div className="row g-4">
                  <div className="col-lg-6 col-md-6">
                    <div className="team-member-card">
                      <div className="member-image">
                        <img
                          src="assets/images/resources/team3.jpg"
                          alt="Daniel Nikolson"
                          className="member-photo"
                        />
                      </div>
                      <div className="member-info">
                        <span className="member-role">Founder</span>
                        <h3 className="member-name">Daniel Nikolson</h3>
                        <p className="member-description">
                          Professionally engaged in interior design since 2010.
                          Daniel has won more than 15 awards and several design
                          awards
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="team-member-card">
                      <div className="member-image">
                        <img
                          src="assets/images/resources/team5.jpg"
                          alt="Martin Fletcher"
                          className="member-photo"
                        />
                      </div>
                      <div className="member-info">
                        <span className="member-role">Designer</span>
                        <h3 className="member-name">Martin Fletcher</h3>
                        <p className="member-description">
                          Professionally engaged in interior design since 2010.
                          Martin has won more than 15 awards and several design
                          awards
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="services-list">
                <div className="service-item">
                  <div className="service-icon">
                    <img src="assets/images/ico1.png" alt="Durability" />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Durability</h3>
                    <p className="service-description">
                      Exclusive 10 year warranty
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-icon">
                    <img src="assets/images/ico2.png" alt="Modern interior" />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Modern interior</h3>
                    <p className="service-description">
                      Exclusive 10 year warranty
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-icon">
                    <img src="assets/images/ico3.png" alt="Professional team" />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Professional team</h3>
                    <p className="service-description">
                      Many awards in the interior design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-luxury testimonials-section-about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Thanks for your sweet words to us</h2>
          </div>
          <div className="testimonials-grid">
            <div className="row g-4">
              {[
                {
                  name: "Alana Francheska",
                  company: "Lorem company",
                  image: "testi1.jpg",
                },
                {
                  name: "Donald Pakura",
                  company: "Lorem company",
                  image: "testi2.jpg",
                },
                {
                  name: "Sara Kristian",
                  company: "Lorem company",
                  image: "testi3.jpg",
                },
                {
                  name: "Michael Johnson",
                  company: "Lorem company",
                  image: "testi4.jpg",
                },
                {
                  name: "Emma Wilson",
                  company: "Lorem company",
                  image: "testi5.jpg",
                },
              ].map((testimonial, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="testimonial-card-about">
                    <div className="testimonial-header">
                      <img
                        src={`assets/images/resources/${testimonial.image}`}
                        alt={testimonial.name}
                        className="testimonial-avatar"
                      />
                      <div className="testimonial-user-info">
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <span className="testimonial-company">
                          {testimonial.company}
                        </span>
                      </div>
                    </div>
                    <p className="testimonial-text">
                      Integer vehicula, est vel posuere gravida, eros tellus
                      fermentum magna, sit amet mattis mauris quam a nisl.
                      Mauris vitae commodo elit. In hac habitasse platea.
                    </p>
                    <div className="testimonial-rating">
                      {Array(5)
                        .fill(0)
                        .map((_, idx) => (
                          <i key={idx} className="fas fa-star"></i>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-luxury">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="footer-newsletter">
                <h3 className="footer-title">NEWSLETTER</h3>
                <form className="newsletter-form-footer">
                  <input
                    type="email"
                    className="newsletter-input-footer"
                    placeholder="Your e-mail"
                  />
                  <button className="newsletter-button-footer" type="submit">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </form>
                <span className="newsletter-text">
                  Sign up to receive special offers!
                </span>
                <div className="footer-social">
                  <a href="#" className="social-link-footer">
                    <i className="fab fa-behance"></i>
                  </a>
                  <a href="#" className="social-link-footer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-link-footer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="footer-links">
                    <h4 className="footer-links-title">Contact Us</h4>
                    <ul className="footer-links-list">
                      <li>1556 Broadway, suite 416 New York, NY 10120 USA</li>
                      <li>+44 20 7722 0088</li>
                      <li>
                        <a
                          href="mailto:in.design@gmail.com"
                          className="footer-link"
                        >
                          in.design@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="footer-links">
                    <h4 className="footer-links-title">Categories</h4>
                    <ul className="footer-links-list">
                      <li>
                        <Link to="/catalog" className="footer-link">
                          Decor
                        </Link>
                      </li>
                      <li>
                        <Link to="/catalog" className="footer-link">
                          Furniture
                        </Link>
                      </li>
                      <li>
                        <Link to="/catalog" className="footer-link">
                          Lighting
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="footer-link">
                          Interior design
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="footer-links">
                    <h4 className="footer-links-title">Company</h4>
                    <ul className="footer-links-list">
                      <li>
                        <Link to="/about" className="footer-link">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="footer-link">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/portfolio" className="footer-link">
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" className="footer-link">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="footer-logo">
                  <img src="assets/images/ft-logo.png" alt="Footer Logo" />
                </div>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="footer-bottom-links">
                  <a href="#" className="footer-link me-3">
                    Privacy Policy
                  </a>
                  <a href="#" className="footer-link">
                    Terms and Conditions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
