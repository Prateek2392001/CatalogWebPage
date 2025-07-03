import React from "react";
import { Link } from "react-router-dom";

const LatestProject = ({ projects, currentProject, setCurrentProject }) => {
  return (
    <section className="section-luxury latest-projects-section">
      <div className="fixed-bg bg1"></div>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="project-text">
              <span className="section-badge section-badge-light">
                Our Portfolio
              </span>
              <h3 className="section-title text-white">Our Latest Projects</h3>
              <p className="section-description text-white-50">
                This is why we are proud to offer a wide selection of our
                designer ceiling, wall, floor and table lamps. You will also
                find products ranging from modern styles, modern interpretations
                of classic design. Our collection is updated every day with
                beautiful solutions and we are glad that you, our customers.
              </p>
              <Link to="/portfolio" className="btn btn-luxury-light">
                View More Projects
                <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="project-carousel">
              <div className="project-carousel-container">
                {projects.map((item, index) => (
                  <div
                    key={index}
                    className={`project-item ${
                      index === currentProject ? "active" : ""
                    }`}
                    style={{
                      transform: `translateX(${
                        (index - currentProject) * 100
                      }%)`,
                      opacity: index === currentProject ? 1 : 0.7,
                    }}
                  >
                    <div className="project-image-container">
                      <img
                        src={item.img || "/placeholder.svg"}
                        alt={item.title}
                        className="project-image"
                      />
                      <div className="project-overlay">
                        <div className="project-info">
                          <span className="project-category">
                            {item.category}
                          </span>
                          <h3 className="project-title">
                            <Link to="/portfolio-details" title="">
                              {item.title}
                            </Link>
                          </h3>
                          <span className="project-count">{item.count}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="project-controls">
                <button
                  className="project-control-btn prev"
                  onClick={() =>
                    setCurrentProject(
                      (prev) => (prev - 1 + projects.length) % projects.length
                    )
                  }
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  className="project-control-btn next"
                  onClick={() =>
                    setCurrentProject((prev) => (prev + 1) % projects.length)
                  }
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>

              <div className="project-indicators">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`project-indicator ${
                      index === currentProject ? "active" : ""
                    }`}
                    onClick={() => setCurrentProject(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
