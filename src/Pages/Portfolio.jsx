import { Link } from "react-router-dom";
import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const portfolioItems = [
    {
      id: 1,
      image: "assets/images/resources/project1.jpg",
      title: "Modern Living Room",
      category: "interior",
      projects: "59 projects",
      description: "Contemporary living space with minimalist design",
    },
    {
      id: 2,
      image: "assets/images/resources/project2.jpg",
      title: "Luxury Kitchen",
      category: "commercial",
      projects: "75 projects",
      description: "High-end kitchen with premium finishes",
    },
    {
      id: 3,
      image: "assets/images/resources/project3.jpg",
      title: "Office Space",
      category: "architecture",
      projects: "49 projects",
      description: "Professional workspace design",
    },
    {
      id: 4,
      image: "assets/images/resources/project1.jpg",
      title: "Elegant Bedroom",
      category: "interior",
      projects: "32 projects",
      description: "Serene bedroom with luxury touches",
    },
    {
      id: 5,
      image: "assets/images/resources/project3.jpg",
      title: "Restaurant Design",
      category: "commercial",
      projects: "28 projects",
      description: "Sophisticated dining experience",
    },
    {
      id: 6,
      image: "assets/images/resources/project2.jpg",
      title: "Residential Complex",
      category: "architecture",
      projects: "15 projects",
      description: "Modern residential architecture",
    },
  ];

  const filterItems = (category) => {
    setActiveFilter(category);
  };

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="interior-portfolio">
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
      <section className="portfolio-hero">
        <div className="hero-background-portfolio"></div>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <div className="hero-content-portfolio">
                <nav aria-label="breadcrumb" className="breadcrumb-luxury">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/" className="breadcrumb-link">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Portfolio
                    </li>
                  </ol>
                </nav>
                <h1 className="portfolio-hero-title">Portfolio</h1>
                <p className="portfolio-hero-subtitle">Our work cases</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="portfolio-hero-image">
                <img
                  src="assets/images/resources/about3.jpg"
                  alt="Portfolio"
                  className="hero-img-portfolio"
                />
                <div className="portfolio-stats-overlay">
                  <div className="stats-grid-portfolio">
                    <div className="stat-item-portfolio">
                      <h3 className="stat-number-portfolio">500+</h3>
                      <span className="stat-label-portfolio">Projects</span>
                    </div>
                    <div className="stat-item-portfolio">
                      <h3 className="stat-number-portfolio">15+</h3>
                      <span className="stat-label-portfolio">Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-luxury portfolio-main-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Work</span>
            <h2 className="section-title">
              See our best <br /> projects
            </h2>
            <p className="section-description">
              Since our humble beginnings in 2006, We has significantly expanded
              its our collection of exclusive designs. Today we are proud to
              present you our best interior design solutions.
            </p>
          </div>

          {/* Filter Navigation */}
          <div className="portfolio-filters">
            <ul className="filter-nav">
              <li>
                <button
                  className={`filter-btn ${
                    activeFilter === "*" ? "active" : ""
                  }`}
                  onClick={() => filterItems("*")}
                >
                  All Projects
                </button>
              </li>
              <li>
                <button
                  className={`filter-btn ${
                    activeFilter === "interior" ? "active" : ""
                  }`}
                  onClick={() => filterItems("interior")}
                >
                  Interior Design
                </button>
              </li>
              <li>
                <button
                  className={`filter-btn ${
                    activeFilter === "architecture" ? "active" : ""
                  }`}
                  onClick={() => filterItems("architecture")}
                >
                  Architecture
                </button>
              </li>
              <li>
                <button
                  className={`filter-btn ${
                    activeFilter === "commercial" ? "active" : ""
                  }`}
                  onClick={() => filterItems("commercial")}
                >
                  Commercial
                </button>
              </li>
            </ul>
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-grid-luxury">
            <div className="row g-4">
              {filteredItems.map((item, index) => (
                <div key={item.id} className="col-lg-4 col-md-6">
                  <div
                    className="portfolio-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="portfolio-image-container">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="portfolio-image"
                      />
                      <div className="portfolio-overlay">
                        <div className="portfolio-content">
                          <span className="portfolio-category">
                            {item.category}
                          </span>
                          <h4 className="portfolio-title">{item.title}</h4>
                          <p className="portfolio-description">
                            {item.description}
                          </p>
                          <div className="portfolio-meta">
                            <span className="portfolio-count">
                              {item.projects}
                            </span>
                            <Link
                              to="/portfolio-details"
                              className="portfolio-link"
                            >
                              <i className="fas fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-hover-effect"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="portfolio-pagination">
            <nav aria-label="Portfolio pagination">
              <ul className="pagination-luxury">
                <li className="page-item-luxury">
                  <a href="#" className="page-link-luxury prev-link">
                    <i className="fas fa-chevron-left"></i>
                    Previous
                  </a>
                </li>
                <li className="page-item-luxury">
                  <a href="#" className="page-link-luxury active">
                    1
                  </a>
                </li>
                <li className="page-item-luxury">
                  <a href="#" className="page-link-luxury">
                    2
                  </a>
                </li>
                <li className="page-item-luxury">
                  <a href="#" className="page-link-luxury">
                    3
                  </a>
                </li>
                <li className="page-item-luxury">
                  <a href="#" className="page-link-luxury next-link">
                    Next
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-portfolio">
        <div className="container">
          <div className="cta-content-portfolio">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="cta-title-portfolio">
                  Ready to Start Your Project?
                </h2>
                <p className="cta-description-portfolio">
                  Let's create something beautiful together. Contact us for a
                  free consultation.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                <Link to="/contact" className="btn btn-cta-portfolio">
                  Start Your Project
                  <i className="fas fa-arrow-right ms-2"></i>
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

export default Portfolio;
