import React from "react";

const Process = () => {
  const processSteps = [
    {
      step: "01",
      title: "Concept",
      desc: "Understanding your vision and requirements",
    },
    {
      step: "02",
      title: "Plan",
      desc: "Creating detailed plans and layouts",
    },
    {
      step: "03",
      title: "Design",
      desc: "Developing creative design solutions",
    },
    {
      step: "04",
      title: "Build",
      desc: "Implementing the design with precision",
    },
    {
      step: "05",
      title: "Launch",
      desc: "Final touches and project completion",
    },
  ];

  return (
    <section className="section-luxury process-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Process</span>
          <h2 className="section-title">How We Work</h2>
          <p className="section-description">
            Our proven process to make your dream come true
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {processSteps.map((process, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className="process-item">
                <div className="process-number">
                  <span>{process.step}</span>
                </div>
                <h5 className="process-title">{process.title}</h5>
                <p className="process-description">{process.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
