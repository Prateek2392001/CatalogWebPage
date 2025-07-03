import React from "react";

const Team = () => {
  const teamMembers = [1, 2, 3, 4, 5, 6];

  return (
    <section className="section-luxury team-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Team</span>
          <h2 className="section-title">Meet Our Designers</h2>
          <p className="section-description">
            Professional designers united by shared values
          </p>
        </div>
        <div className="row g-4">
          {teamMembers.map((num) => (
            <div key={num} className="col-lg-4 col-md-6">
              <div className="team-card">
                <div className="team-image-container">
                  <img
                    src={`assets/images/resources/team${num}.jpg`}
                    className="team-image"
                    alt="Team Member"
                  />
                  <div className="team-overlay">
                    <div className="team-social">
                      <a href="#" className="social-link">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h5 className="team-name">Daniel Nikolson</h5>
                  <p className="team-role">Senior Designer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
