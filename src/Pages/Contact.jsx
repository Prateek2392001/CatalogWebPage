import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "Los Angeles",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        city: "Los Angeles",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus(""), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "assets/images/ci1.png",
      title: "Address",
      content: "1556 Broadway, suite 416 New York, NY 10120 USA",
    },
    {
      icon: "assets/images/ci2.png",
      title: "Working Hours",
      content: "Mon-Sat: 9 am til 6 pm | Sunday: Closed",
    },
    {
      icon: "assets/images/ci3.png",
      title: "Email",
      content: "in.design@gmail.com",
    },
    {
      icon: "assets/images/ci4.png",
      title: "Phone",
      content: "+44 20 7722 0088",
    },
  ];

  const cities = [
    "Los Angeles",
    "New York",
    "Chicago",
    "Miami",
    "San Francisco",
    "Boston",
    "Seattle",
    "Denver",
  ];

  return (
    <div className="interior-contact">
      {/* Elegant Navbar */}
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
      <section className="contact-hero">
        <div className="hero-background-contact"></div>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <div className="hero-content-contact">
                <nav aria-label="breadcrumb" className="breadcrumb-luxury">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/" className="breadcrumb-link">
                        Home
                      </Link>
                    </li>
                    <span className="separator">/</span>
                    <li
                      className="breadcrumb-item active text-white"
                      aria-current="page"
                    >
                      Contact
                    </li>
                  </ol>
                </nav>
                <h1 className="contact-hero-title">Get In Touch</h1>
                <p className="contact-hero-subtitle">How to contact us</p>
                <div className="hero-description">
                  <p>
                    Any questions or suggestions? Write us a message and we will
                    contact you! We're here to help bring your interior design
                    dreams to life.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-hero-image">
                <img
                  src="assets/images/resources/about3.jpg"
                  alt="Contact"
                  className="hero-img-contact"
                />
                <div className="contact-stats-overlay">
                  <div className="stats-grid-contact">
                    <div className="stat-item-contact">
                      <h3 className="stat-number-contact">24/7</h3>
                      <span className="stat-label-contact">Support</span>
                    </div>
                    <div className="stat-item-contact">
                      <h3 className="stat-number-contact">1K+</h3>
                      <span className="stat-label-contact">Happy Clients</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-luxury contact-main-section">
        <div className="container">
          <div className="row g-5">
            {/* Contact Information */}
            <div className="col-lg-4">
              <div className="contact-info-card">
                <div className="contact-info-header">
                  <h3 className="contact-info-title">Contact Information</h3>
                  <p className="contact-info-subtitle">
                    Get in touch with our design experts
                  </p>
                </div>
                <div className="contact-info-list">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="contact-info-item"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="contact-icon">
                        <img
                          src={info.icon || "/placeholder.svg"}
                          alt={info.title}
                        />
                      </div>
                      <div className="contact-details">
                        <h5 className="contact-item-title">{info.title}</h5>
                        <p className="contact-item-content">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="contact-social-section">
                  <h5 className="social-title">Follow Us</h5>
                  <div className="contact-social-links">
                    <a href="#" className="social-link-contact">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#" className="social-link-contact">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-link-contact">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-link-contact">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="contact-form-card">
                <div className="form-header">
                  <h3 className="form-title">Send us a Message</h3>
                  <p className="form-subtitle">
                    We'd love to hear from you. Send us a message and we'll
                    respond as soon as possible.
                  </p>
                </div>

                {submitStatus === "success" && (
                  <div className="alert alert-success alert-luxury">
                    <i className="fas fa-check-circle me-2"></i>
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form-luxury">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-group-luxury">
                        <label className="form-label-luxury">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-control-luxury"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group-luxury">
                        <label className="form-label-luxury">City</label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="form-control-luxury form-select-luxury"
                        >
                          {cities.map((city, index) => (
                            <option key={index} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group-luxury">
                        <label className="form-label-luxury">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-control-luxury"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group-luxury">
                        <label className="form-label-luxury">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-control-luxury"
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group-luxury">
                        <label className="form-label-luxury">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="form-control-luxury textarea-luxury"
                          rows="6"
                          placeholder="Tell us about your project or ask any questions..."
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className={`btn-submit-luxury ${
                          isSubmitting ? "submitting" : ""
                        }`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <i className="fas fa-paper-plane ms-2"></i>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container-fluid p-0">
          <div className="map-container">
            <div className="map-overlay">
              <div className="map-info">
                <h4>Visit Our Studio</h4>
                <p>
                  1556 Broadway, suite 416
                  <br />
                  New York, NY 10120 USA
                </p>
                <a href="#" className="btn btn-map">
                  Get Directions
                  <i className="fas fa-map-marker-alt ms-2"></i>
                </a>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635959542132!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-contact">
        <div className="container">
          <div className="cta-content-contact">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="cta-title-contact">
                  Ready to Start Your Dream Project?
                </h2>
                <p className="cta-description-contact">
                  Let's create something beautiful together. Schedule a free
                  consultation with our design experts.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                <Link to="/services" className="btn btn-cta-contact">
                  Schedule Consultation
                  <i className="fas fa-calendar-alt ms-2"></i>
                </Link>
              </div>
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
                    <h4 className="footer-links-title">Services</h4>
                    <ul className="footer-links-list">
                      <li>
                        <Link to="/services" className="footer-link">
                          Interior Design
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="footer-link">
                          Architecture
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="footer-link">
                          Commercial Design
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="footer-link">
                          Consultation
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
                        <Link to="/portfolio" className="footer-link">
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" className="footer-link">
                          Blog
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

export default Contact;
