import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ bannerImages, currentSlide, setCurrentSlide }) => {
  return (
    <section className="hero-luxury">
      <div className="hero-background">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="hero-content">
                <h1 className="hero-title text-dark">
                  Transform Your
                  <span className="text-luxury"> Dream Space</span>
                  <br />
                  Into Reality
                </h1>
                <p className="hero-subtitle text-dark">
                  We create stunning interior designs that reflect your
                  personality and lifestyle. From concept to completion, we
                  handle every detail with precision and creativity.
                </p>
                <div className="hero-buttons">
                  <Link to="/portfolio" className="btn btn-luxury-primary me-3">
                    View Our Work
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                  <Link to="/contact" className="btn btn-luxury-outline">
                    Free Consultation
                  </Link>
                </div>
                <div className="row g-4 mt-4">
                  <div className="col-sm-6">
                    <div className="feature-card">
                      <div className="feature-icon">
                        <i className="fas fa-award"></i>
                      </div>
                      <div className="feature-content">
                        <h6 className="feature-title text-dark">
                          Award Winning
                        </h6>
                        <small className="feature-desc">
                          10+ Design Awards
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-card">
                      <div className="feature-icon">
                        <i className="fas fa-users"></i>
                      </div>
                      <div className="feature-content">
                        <h6 className="feature-title text-dark">Expert Team</h6>
                        <small className="feature-desc">
                          Professional Designers
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-carousel">
                <div className="hero-carousel-container">
                  {bannerImages.map((image, index) => (
                    <div
                      key={index}
                      className={`hero-slide ${
                        index === currentSlide ? "active" : ""
                      }`}
                      style={{
                        transform: `translateX(${
                          (index - currentSlide) * 100
                        }%)`,
                        opacity: index === currentSlide ? 1 : 0,
                      }}
                    >
                      <div className="image-container">
                        <img
                          src={image || "/placeholder.svg"}
                          className="d-block w-100 carousel-image"
                          alt={`Interior Design ${index + 1}`}
                        />
                        <div className="image-overlay"></div>
                      </div>
                      <div className="carousel-caption carousel-caption-luxury">
                        <h5 className="carousel-title">
                          Beautiful Interior Design
                        </h5>
                        <p className="carousel-desc">
                          Creating spaces that inspire and delight
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hero-controls">
                  <button
                    className="hero-control-btn prev"
                    onClick={() =>
                      setCurrentSlide(
                        (prev) =>
                          (prev - 1 + bannerImages.length) % bannerImages.length
                      )
                    }
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    className="hero-control-btn next"
                    onClick={() =>
                      setCurrentSlide(
                        (prev) => (prev + 1) % bannerImages.length
                      )
                    }
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>

                <div className="hero-indicators">
                  {bannerImages.map((_, index) => (
                    <button
                      key={index}
                      className={`hero-indicator ${
                        index === currentSlide ? "active" : ""
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
