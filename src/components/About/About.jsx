import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section-luxury about-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="about-image-container">
              <img
                src="assets/images/resources/abt1.jpg"
                alt="About Us"
                className="about-main-image"
              />
              <div className="experience-badge">
                <div className="experience-content">
                  <h4 className="experience-number">15+</h4>
                  <small className="experience-text">Years</small>
                </div>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content">
              <span className="section-badge">About Us</span>
              <h2 className="section-title">
                Creating Beautiful Spaces Since 2006
              </h2>
              <p className="section-description">
                We are passionate about transforming ordinary spaces into
                extraordinary experiences. Our team of expert designers brings
                creativity, functionality, and style to every project.
              </p>
              <div className="stats-container">
                <div className="stat-item">
                  <h3 className="stat-number">500+</h3>
                  <small className="stat-label">Projects Completed</small>
                </div>
                <div className="stat-item">
                  <h3 className="stat-number">98%</h3>
                  <small className="stat-label">Client Satisfaction</small>
                </div>
              </div>
              <Link to="/about" className="btn btn-luxury-primary">
                Learn More
                <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
