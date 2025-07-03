import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="cta-title">Ready to Transform Your Space?</h2>
              <p className="cta-description">
                Get a free consultation and bring your vision to life with our
                expert team.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/contact" className="btn btn-cta">
                Start Your Project
                <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
