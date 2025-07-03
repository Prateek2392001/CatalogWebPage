import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: "fas fa-home",
      title: "Residential Design",
      desc: "Complete home interior solutions",
    },
    {
      icon: "fas fa-building",
      title: "Commercial Design",
      desc: "Office and retail space design",
    },
    {
      icon: "fas fa-couch",
      title: "Furniture Selection",
      desc: "Custom furniture and decor",
    },
    {
      icon: "fas fa-palette",
      title: "Color Consultation",
      desc: "Professional color schemes",
    },
    {
      icon: "fas fa-lightbulb",
      title: "Lighting Design",
      desc: "Ambient and task lighting",
    },
    {
      icon: "fas fa-drafting-compass",
      title: "Space Planning",
      desc: "Optimal space utilization",
    },
  ];

  return (
    <section className="section-luxury services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Services</span>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-description">
            Comprehensive interior design solutions for every space
          </p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <div className="service-content">
                  <h5 className="service-title">{service.title}</h5>
                  <p className="service-description">{service.desc}</p>
                  <Link to="/services" className="service-link">
                    Learn More
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
