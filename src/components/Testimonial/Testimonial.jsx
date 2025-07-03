import React from "react";

const Testimonial = () => {
  const testimonials = [
    { name: "Sarah Johnson", role: "Homeowner", image: "testi1.jpg" },
    { name: "Michael Chen", role: "Business Owner", image: "testi2.jpg" },
    { name: "Emily Davis", role: "Interior Enthusiast", image: "testi3.jpg" },
  ];

  return (
    <section className="section-luxury testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4">
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="testimonial-text">
                  "The team transformed our space beyond our expectations. Their
                  attention to detail and creative vision made our dream home a
                  reality."
                </p>
                <div className="testimonial-author">
                  <img
                    src={`assets/images/resources/${testimonial.image}`}
                    alt={testimonial.name}
                    className="author-image"
                  />
                  <div className="author-info">
                    <h6 className="author-name">{testimonial.name}</h6>
                    <small className="author-role">{testimonial.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
