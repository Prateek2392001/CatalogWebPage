import { Link } from "react-router-dom";
import { useState } from "react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const services = [
    {
      id: 1,
      title: "Architectural Development",
      image: "assets/images/resources/svs-img1.jpg",
      description:
        "Complete architectural planning and development services for residential and commercial projects.",
      features: [
        "Planning Decision",
        "Style Direction Development",
        "Technical Documentation",
        "3D Visualization",
      ],
      icon: "fas fa-drafting-compass",
    },
    {
      id: 2,
      title: "Interior Design",
      image: "assets/images/resources/svs-img2.jpg",
      description:
        "Transform your space with our expert interior design services tailored to your lifestyle.",
      features: [
        "Space Planning",
        "Material Selection",
        "Furniture Design",
        "Color Consultation",
      ],
      icon: "fas fa-palette",
    },
    {
      id: 3,
      title: "Commercial Interior Design",
      image: "assets/images/resources/svs-img3.jpg",
      description:
        "Professional commercial interior solutions for offices, retail spaces, and hospitality venues.",
      features: [
        "Brand Integration",
        "Functional Layout",
        "Lighting Design",
        "Project Management",
      ],
      icon: "fas fa-building",
    },
  ];

  const teamMembers = [
    {
      name: "Daniel Nikolson",
      role: "Senior Designer",
      image: "team1.jpg",
      experience: "8 years",
    },
    {
      name: "Sarah Mitchell",
      role: "Interior Architect",
      image: "team2.jpg",
      experience: "6 years",
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      image: "team3.jpg",
      experience: "10 years",
    },
    {
      name: "Emily Davis",
      role: "Design Consultant",
      image: "team4.jpg",
      experience: "5 years",
    },
    {
      name: "James Wilson",
      role: "3D Visualizer",
      image: "team5.jpg",
      experience: "7 years",
    },
    {
      name: "Lisa Anderson",
      role: "Color Specialist",
      image: "team6.jpg",
      experience: "4 years",
    },
  ];

  const processSteps = [
    {
      title: "Architectural Development",
      number: "01",
      steps: [
        {
          title: "Development of the object concept",
          details: [
            "Planning decision",
            "Style direction development",
            "Technical justification",
          ],
        },
        {
          title: "Architectural design",
          details: [
            "Spatial planning solutions",
            "Architectural design concepts",
          ],
        },
        {
          title: "Technical documentation",
          details: [
            "General site plan",
            "Foundation design",
            "Structural plans",
            "Engineering networks",
          ],
        },
      ],
    },
    {
      title: "Interior Design",
      number: "02",
      steps: [
        {
          title: "Planning solution development",
          details: ["Measurements", "Draft design concept", "Object budgeting"],
        },
        {
          title: "Design development",
          details: ["Planning decision", "3D-visualization"],
        },
        {
          title: "Implementation",
          details: [
            "Working documentation",
            "Material selection",
            "Architectural supervision",
          ],
        },
      ],
    },
    {
      title: "Commercial Interior Design",
      number: "03",
      steps: [
        {
          title: "Project immersion",
          details: [
            "Meeting and discussion",
            "Measurements",
            "Concept development",
            "Budgeting",
          ],
        },
        {
          title: "Design phase",
          details: ["Planning decision", "3D visualization"],
        },
        {
          title: "Implementation",
          details: [
            "Working documentation",
            "Material selection",
            "Supervision",
          ],
        },
        {
          title: "Opening",
          details: ["Final inspection", "Project completion"],
        },
      ],
    },
  ];

  return (
    <div className="interior-services">
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
      <section className="services-hero">
        <div className="hero-background-services"></div>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <div className="hero-content-services">
                <nav aria-label="breadcrumb" className="breadcrumb-luxury">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/" className="breadcrumb-link">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Services
                    </li>
                  </ol>
                </nav>
                <h1 className="services-hero-title">Services</h1>
                <p className="services-hero-subtitle">
                  Please review our services
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-hero-image">
                <img
                  src="assets/images/resources/about3.jpg"
                  alt="Services"
                  className="hero-img-services"
                />
                <div className="services-stats-overlay">
                  <div className="stats-grid-services">
                    <div className="stat-item-services">
                      <h3 className="stat-number-services">15+</h3>
                      <span className="stat-label-services">Services</span>
                    </div>
                    <div className="stat-item-services">
                      <h3 className="stat-number-services">6</h3>
                      <span className="stat-label-services">Experts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-luxury team-services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Team</span>
            <h2 className="section-title">A team United by shared values</h2>
            <p className="section-description">
              We are fans of our business, we work for your emotions. We are
              happy to see the family enjoying something new in their life and
              we are happy with them, because interior design is something more.
            </p>
          </div>
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="team-intro">
                <div className="team-number">
                  <h2 className="team-count">6</h2>
                  <h3 className="team-description">
                    Professional designers in our team
                  </h3>
                </div>
                <div className="team-features">
                  <div className="feature-item-team">
                    <div className="feature-icon-team">
                      <i className="fas fa-award"></i>
                    </div>
                    <div className="feature-content-team">
                      <h5>Award Winning</h5>
                      <p>Multiple design awards</p>
                    </div>
                  </div>
                  <div className="feature-item-team">
                    <div className="feature-icon-team">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="feature-content-team">
                      <h5>Expert Team</h5>
                      <p>Highly skilled professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="team-grid">
                <div className="row g-4">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div
                        className="team-card-services"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="team-image-container">
                          <img
                            src={`assets/images/resources/${member.image}`}
                            alt={member.name}
                            className="team-image-services"
                          />
                          <div className="team-overlay-services">
                            <div className="team-social-services">
                              <a href="#" className="social-link-team">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                              <a href="#" className="social-link-team">
                                <i className="fab fa-behance"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="team-info-services">
                          <h5 className="team-name-services">{member.name}</h5>
                          <span className="team-role-services">
                            {member.role}
                          </span>
                          <small className="team-experience">
                            {member.experience} experience
                          </small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-luxury main-services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">What We Offer</span>
            <h2 className="section-title">
              We are ready to offer you the following services
            </h2>
            <p className="section-description">
              Phasellus vel augue lacus. Nunc porttitor mattis elementum. Ut
              cursus risus quis sem consectetur, fermentum leo him. Pellentesque
              eget cursus nisi, ornare nisi.
            </p>
          </div>
          <div className="services-showcase">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="service-showcase-item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="row align-items-center g-5">
                  <div
                    className={`col-lg-6 ${
                      index % 2 === 1 ? "order-lg-2" : ""
                    }`}
                  >
                    <div className="service-image-container">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="service-image"
                      />
                      <div className="service-icon-overlay">
                        <i className={service.icon}></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`col-lg-6 ${
                      index % 2 === 1 ? "order-lg-1" : ""
                    }`}
                  >
                    <div className="service-content">
                      <span className="service-number">0{index + 1}</span>
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">
                        {service.description}
                      </p>
                      <ul className="service-features">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="service-feature">
                            <i className="fas fa-check"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact" className="service-link">
                        Learn More
                        <i className="fas fa-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-luxury process-services-section">
        <div className="process-background"></div>
        <div className="container">
          <div className="section-header">
            <span className="section-badge section-badge-light">
              Our Process
            </span>
            <h2 className="section-title text-white">
              Our work process make your dream true
            </h2>
          </div>
          <div className="process-grid">
            <div className="row g-4">
              {processSteps.map((process, index) => (
                <div key={index} className="col-lg-4">
                  <div
                    className="process-card"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="process-header">
                      <h3 className="process-title">
                        {process.title}
                        <span className="process-number">{process.number}</span>
                      </h3>
                    </div>
                    <div className="process-steps">
                      {process.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="process-step">
                          <div className="step-header">
                            <h4 className="step-title">{step.title}</h4>
                            <div className="step-dot"></div>
                          </div>
                          <ul className="step-details">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="consultation-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="consultation-content">
                <h2 className="consultation-title">Get a free consultation</h2>
                <p className="consultation-subtitle">
                  Just leave a request below and we'll get back to you
                </p>
                <form className="consultation-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control-luxury"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control-luxury"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control-luxury"
                      placeholder="Your Phone"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-consultation">
                    Request Callback
                    <i className="fas fa-arrow-right ms-2"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="consultation-image">
                <img
                  src="assets/images/resources/cl-img1.jpg"
                  alt="Consultation"
                  className="consultation-img"
                />
                <div className="consultation-badge">
                  <div className="badge-content">
                    <i className="fas fa-phone"></i>
                    <span>Free Consultation</span>
                  </div>
                </div>
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

export default Services;
