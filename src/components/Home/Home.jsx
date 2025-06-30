// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./Home.css"; // Import the Home-specific styles

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [currentProject, setCurrentProject] = useState(0);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const bannerImages = [
//     "assets/images/resources/banner1.jpg",
//     "assets/images/resources/banner2.jpg",
//     "assets/images/resources/banner3.jpg",
//   ];

//   const projects = [
//     {
//       image: "assets/images/resources/project1.jpg",
//       title: "Living room",
//       count: "59 projects",
//       category: "Residential",
//     },
//     {
//       image: "assets/images/resources/project2.jpg",
//       title: "Kitchen",
//       count: "75 projects",
//       category: "Modern",
//     },
//     {
//       image: "assets/images/resources/project3.jpg",
//       title: "Commercial",
//       count: "49 projects",
//       category: "Office",
//     },
//   ];

//   // Auto-slide for banner
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [bannerImages.length]);

//   // Auto-slide for projects
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentProject((prev) => (prev + 1) % projects.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [projects.length]);

//   // Toggle mobile menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Close mobile menu when clicking on a link
//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <div className="interior-home">
//       {/* Elegant Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-elegant sticky-top">
//         <div className="container">
//           <Link className="navbar-brand brand-elegant" to="/">
//             <img
//               src="assets/images/logo.png"
//               alt="Logo"
//               height="45"
//               className="me-3 logo-bounce"
//             />
//           </Link>

//           <button
//             className="navbar-toggler border-0"
//             type="button"
//             onClick={toggleMobileMenu}
//             aria-controls="navbarNav"
//             aria-expanded={isMobileMenuOpen}
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div
//             className={`collapse navbar-collapse ${
//               isMobileMenuOpen ? "show" : ""
//             }`}
//             id="navbarNav"
//           >
//             <ul className="navbar-nav mx-auto nav-elegant">
//               <li className="nav-item nav-item-elegant">
//                 <Link
//                   className="nav-link nav-link-elegant"
//                   to="/"
//                   onClick={closeMobileMenu}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item nav-item-elegant">
//                 <Link
//                   className="nav-link nav-link-elegant"
//                   to="/about"
//                   onClick={closeMobileMenu}
//                 >
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item nav-item-elegant">
//                 <Link
//                   className="nav-link nav-link-elegant"
//                   to="/services"
//                   onClick={closeMobileMenu}
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li className="nav-item nav-item-elegant">
//                 <Link
//                   className="nav-link nav-link-elegant"
//                   to="/portfolio"
//                   onClick={closeMobileMenu}
//                 >
//                   Portfolio
//                 </Link>
//               </li>
//               <li className="nav-item nav-item-elegant">
//                 <Link
//                   className="nav-link nav-link-elegant"
//                   to="/blog"
//                   onClick={closeMobileMenu}
//                 >
//                   Blog
//                 </Link>
//               </li>
//               <li className="nav-item nav-item-elegant">
//                 <Link
//                   className="nav-link nav-link-elegant"
//                   to="/contact"
//                   onClick={closeMobileMenu}
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//             <div className="d-flex">
//               <Link
//                 to="/contact"
//                 className="btn btn-luxury rounded-pill px-4 py-2"
//                 onClick={closeMobileMenu}
//               >
//                 Get Quote
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero-luxury">
//         <div className="hero-background"></div>
//         <div className="container">
//           <div className="row align-items-center min-vh-100">
//             <div className="col-lg-6 mb-5 mb-lg-0">
//               <div className="hero-content">
//                 <h1 className="hero-title">
//                   Transform Your
//                   <span className="text-luxury"> Dream Space</span>
//                   <br />
//                   Into Reality
//                 </h1>
//                 <p className="hero-subtitle">
//                   We create stunning interior designs that reflect your
//                   personality and lifestyle. From concept to completion, we
//                   handle every detail with precision and creativity.
//                 </p>
//                 <div className="hero-buttons">
//                   <Link to="/portfolio" className="btn btn-luxury-primary me-3">
//                     View Our Work
//                     <i className="fas fa-arrow-right ms-2"></i>
//                   </Link>
//                   <Link to="/contact" className="btn btn-luxury-outline">
//                     Free Consultation
//                   </Link>
//                 </div>
//                 <div className="row g-4 mt-4">
//                   <div className="col-sm-6">
//                     <div className="feature-card">
//                       <div className="feature-icon">
//                         <i className="fas fa-award"></i>
//                       </div>
//                       <div className="feature-content">
//                         <h6 className="feature-title">Award Winning</h6>
//                         <small className="feature-desc">
//                           10+ Design Awards
//                         </small>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="feature-card">
//                       <div className="feature-icon">
//                         <i className="fas fa-users"></i>
//                       </div>
//                       <div className="feature-content">
//                         <h6 className="feature-title">Expert Team</h6>
//                         <small className="feature-desc">
//                           Professional Designers
//                         </small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="hero-carousel">
//                 <div
//                   id="heroCarousel"
//                   className="carousel slide carousel-luxury"
//                   data-bs-ride="carousel"
//                 >
//                   <div className="carousel-indicators indicators-luxury">
//                     {bannerImages.map((_, index) => (
//                       <button
//                         key={index}
//                         type="button"
//                         data-bs-target="#heroCarousel"
//                         data-bs-slide-to={index}
//                         className={index === 0 ? "active" : ""}
//                         aria-current={index === 0 ? "true" : "false"}
//                         aria-label={`Slide ${index + 1}`}
//                       ></button>
//                     ))}
//                   </div>
//                   <div className="carousel-inner carousel-inner-luxury">
//                     {bannerImages.map((image, index) => (
//                       <div
//                         key={index}
//                         className={`carousel-item ${
//                           index === 0 ? "active" : ""
//                         }`}
//                       >
//                         <div className="image-container">
//                           <img
//                             src={image || "/placeholder.svg"}
//                             className="d-block w-100 carousel-image"
//                             alt={`Interior Design ${index + 1}`}
//                           />
//                           <div className="image-overlay"></div>
//                         </div>
//                         <div className="carousel-caption carousel-caption-luxury">
//                           <h5 className="carousel-title">
//                             Beautiful Interior Design
//                           </h5>
//                           <p className="carousel-desc">
//                             Creating spaces that inspire and delight
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <button
//                     className="carousel-control-prev control-luxury"
//                     type="button"
//                     data-bs-target="#heroCarousel"
//                     data-bs-slide="prev"
//                   >
//                     <span
//                       className="carousel-control-prev-icon"
//                       aria-hidden="true"
//                     ></span>
//                     <span className="visually-hidden">Previous</span>
//                   </button>
//                   <button
//                     className="carousel-control-next control-luxury"
//                     type="button"
//                     data-bs-target="#heroCarousel"
//                     data-bs-slide="next"
//                   >
//                     <span
//                       className="carousel-control-next-icon"
//                       aria-hidden="true"
//                     ></span>
//                     <span className="visually-hidden">Next</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="section-luxury about-section">
//         <div className="container">
//           <div className="row align-items-center g-5">
//             <div className="col-lg-6">
//               <div className="about-image-container">
//                 <img
//                   src="assets/images/resources/abt1.jpg"
//                   alt="About Us"
//                   className="about-main-image"
//                 />
//                 <div className="experience-badge">
//                   <div className="experience-content">
//                     <h4 className="experience-number">15+</h4>
//                     <small className="experience-text">Years</small>
//                   </div>
//                 </div>
//                 <div className="floating-elements">
//                   <div className="floating-element element-1"></div>
//                   <div className="floating-element element-2"></div>
//                   <div className="floating-element element-3"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="about-content">
//                 <span className="section-badge">About Us</span>
//                 <h2 className="section-title">
//                   Creating Beautiful Spaces Since 2006
//                 </h2>
//                 <p className="section-description">
//                   We are passionate about transforming ordinary spaces into
//                   extraordinary experiences. Our team of expert designers brings
//                   creativity, functionality, and style to every project.
//                 </p>
//                 <div className="stats-container">
//                   <div className="stat-item">
//                     <h3 className="stat-number">500+</h3>
//                     <small className="stat-label">Projects Completed</small>
//                   </div>
//                   <div className="stat-item">
//                     <h3 className="stat-number">98%</h3>
//                     <small className="stat-label">Client Satisfaction</small>
//                   </div>
//                 </div>
//                 <Link to="/about" className="btn btn-luxury-primary">
//                   Learn More
//                   <i className="fas fa-arrow-right ms-2"></i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="section-luxury services-section">
//         <div className="container">
//           <div className="section-header">
//             <span className="section-badge">Our Services</span>
//             <h2 className="section-title">What We Offer</h2>
//             <p className="section-description">
//               Comprehensive interior design solutions for every space
//             </p>
//           </div>
//           <div className="row g-4">
//             {[
//               {
//                 icon: "fas fa-home",
//                 title: "Residential Design",
//                 desc: "Complete home interior solutions",
//               },
//               {
//                 icon: "fas fa-building",
//                 title: "Commercial Design",
//                 desc: "Office and retail space design",
//               },
//               {
//                 icon: "fas fa-couch",
//                 title: "Furniture Selection",
//                 desc: "Custom furniture and decor",
//               },
//               {
//                 icon: "fas fa-palette",
//                 title: "Color Consultation",
//                 desc: "Professional color schemes",
//               },
//               {
//                 icon: "fas fa-lightbulb",
//                 title: "Lighting Design",
//                 desc: "Ambient and task lighting",
//               },
//               {
//                 icon: "fas fa-drafting-compass",
//                 title: "Space Planning",
//                 desc: "Optimal space utilization",
//               },
//             ].map((service, index) => (
//               <div key={index} className="col-lg-4 col-md-6">
//                 <div className="service-card">
//                   <div className="service-icon">
//                     <i className={service.icon}></i>
//                   </div>
//                   <div className="service-content">
//                     <h5 className="service-title">{service.title}</h5>
//                     <p className="service-description">{service.desc}</p>
//                     <Link to="/services" className="service-link">
//                       Learn More
//                       <i className="fas fa-arrow-right ms-2"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Section */}
//       {/* <section className="section-luxury portfolio-section">
//         <div className="container">
//           <div className="row align-items-center g-5">
//             <div className="col-lg-5">
//               <div className="portfolio-content">
//                 <span className="section-badge section-badge-light">
//                   Our Portfolio
//                 </span>
//                 <h2 className="section-title text-white">Latest Projects</h2>
//                 <p className="section-description text-white-50">
//                   Discover our most recent interior design projects that
//                   showcase our creativity and attention to detail.
//                 </p>
//                 <Link to="/portfolio" className="btn btn-luxury-light">
//                   View All Projects
//                   <i className="fas fa-arrow-right ms-2"></i>
//                 </Link>
//               </div>
//             </div>
//             <div className="col-lg-7">
//               <div className="portfolio-carousel">
//                 <div
//                   id="portfolioCarousel"
//                   className="carousel slide carousel-luxury"
//                   data-bs-ride="carousel"
//                 >
//                   <div className="carousel-inner">
//                     {projects.map((project, index) => (
//                       <div
//                         key={index}
//                         className={`carousel-item ${
//                           index === 0 ? "active" : ""
//                         }`}
//                       >
//                         <div className="portfolio-item">
//                           <img
//                             src={project.image || "/placeholder.svg"}
//                             className="portfolio-image"
//                             alt={project.title}
//                           />
//                           <div className="portfolio-overlay">
//                             <div className="portfolio-info">
//                               <span className="portfolio-category">
//                                 {project.category}
//                               </span>
//                               <h4 className="portfolio-title">
//                                 {project.title}
//                               </h4>
//                               <p className="portfolio-count">{project.count}</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <button
//                     className="carousel-control-prev control-luxury"
//                     type="button"
//                     data-bs-target="#portfolioCarousel"
//                     data-bs-slide="prev"
//                   >
//                     <span
//                       className="carousel-control-prev-icon"
//                       aria-hidden="true"
//                     ></span>
//                     <span className="visually-hidden">Previous</span>
//                   </button>
//                   <button
//                     className="carousel-control-next control-luxury"
//                     type="button"
//                     data-bs-target="#portfolioCarousel"
//                     data-bs-slide="next"
//                   >
//                     <span
//                       className="carousel-control-next-icon"
//                       aria-hidden="true"
//                     ></span>
//                     <span className="visually-hidden">Next</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       <section className="section-luxury latest-projects-section">
//         <div className="fixed-bg bg1"></div>
//         <div className="container">
//           <div className="row align-items-center g-5">
//             <div className="col-lg-5">
//               <div className="project-text">
//                 <span className="section-badge section-badge-light">
//                   Our Portfolio
//                 </span>
//                 <h3 className="section-title text-white">
//                   Our Latest Projects
//                 </h3>
//                 <p className="section-description text-white-50">
//                   This is why we are proud to offer a wide selection of our
//                   designer ceiling, wall, floor and table lamps. You will also
//                   find products ranging from modern styles, modern
//                   interpretations of classic design. Our collection is updated
//                   every day with beautiful solutions and we are glad that you,
//                   our customers
//                 </p>
//                 <Link to="/portfolio" className="btn btn-luxury-light">
//                   View More Projects
//                   <i className="fas fa-arrow-right ms-2"></i>
//                 </Link>
//               </div>
//             </div>
//             <div className="col-lg-7">
//               <div className="project-carousel">
//                 <div className="project-carousel-container">
//                   {projects.map((item, index) => (
//                     <div
//                       key={index}
//                       className={`project-item ${
//                         index === currentProject ? "active" : ""
//                       }`}
//                       style={{
//                         transform: `translateX(${
//                           (index - currentProject) * 100
//                         }%)`,
//                         opacity: index === currentProject ? 1 : 0.7,
//                       }}
//                     >
//                       <div className="project-image-container">
//                         <img
//                           src={item.img || "/placeholder.svg"}
//                           alt={item.title}
//                           className="project-image"
//                         />
//                         <div className="project-overlay">
//                           <div className="project-info">
//                             <span className="project-category">
//                               {item.category}
//                             </span>
//                             <h3 className="project-title">
//                               <Link to="/portfolio-details" title="">
//                                 {item.title}
//                               </Link>
//                             </h3>
//                             <span className="project-count">{item.count}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="project-controls">
//                   <button
//                     className="project-control-btn prev"
//                     onClick={() =>
//                       setCurrentProject(
//                         (prev) => (prev - 1 + projects.length) % projects.length
//                       )
//                     }
//                   >
//                     <i className="fas fa-chevron-left"></i>
//                   </button>
//                   <button
//                     className="project-control-btn next"
//                     onClick={() =>
//                       setCurrentProject((prev) => (prev + 1) % projects.length)
//                     }
//                   >
//                     <i className="fas fa-chevron-right"></i>
//                   </button>
//                 </div>
//                 <div className="project-indicators">
//                   {projects.map((_, index) => (
//                     <button
//                       key={index}
//                       className={`project-indicator ${
//                         index === currentProject ? "active" : ""
//                       }`}
//                       onClick={() => setCurrentProject(index)}
//                     ></button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="section-luxury team-section">
//         <div className="container">
//           <div className="section-header">
//             <span className="section-badge">Our Team</span>
//             <h2 className="section-title">Meet Our Designers</h2>
//             <p className="section-description">
//               Professional designers united by shared values
//             </p>
//           </div>
//           <div className="row g-4">
//             {[1, 2, 3, 4, 5, 6].map((num) => (
//               <div key={num} className="col-lg-4 col-md-6">
//                 <div className="team-card">
//                   <div className="team-image-container">
//                     <img
//                       src={`assets/images/resources/team${num}.jpg`}
//                       className="team-image"
//                       alt="Team Member"
//                     />
//                     <div className="team-overlay">
//                       <div className="team-social">
//                         <a href="#" className="social-link">
//                           <i className="fab fa-facebook-f"></i>
//                         </a>
//                         <a href="#" className="social-link">
//                           <i className="fab fa-instagram"></i>
//                         </a>
//                         <a href="#" className="social-link">
//                           <i className="fab fa-linkedin-in"></i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="team-content">
//                     <h5 className="team-name">Daniel Nikolson</h5>
//                     <p className="team-role">Senior Designer</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="section-luxury team-section">
//         <div className="container">
//           <div className="section-header">
//             <span className="section-badge">Our Team</span>
//             <h2 className="section-title">Meet Our Designers</h2>
//             <p className="section-description">
//               Professional designers united by shared values
//             </p>
//           </div>
//           <div className="row g-4">
//             {[1, 2, 3, 4, 5, 6].map((num) => (
//               <div key={num} className="col-lg-4 col-md-6">
//                 <div className="team-card">
//                   <div className="team-image-container">
//                     <img
//                       src={`assets/images/resources/team${num}.jpg`}
//                       className="team-image"
//                       alt="Team Member"
//                     />
//                     <div className="team-overlay">
//                       <div className="team-social">
//                         <a href="#" className="social-link">
//                           <i className="fab fa-facebook-f"></i>
//                         </a>
//                         <a href="#" className="social-link">
//                           <i className="fab fa-instagram"></i>
//                         </a>
//                         <a href="#" className="social-link">
//                           <i className="fab fa-linkedin-in"></i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="team-content">
//                     <h5 className="team-name">Daniel Nikolson</h5>
//                     <p className="team-role">Senior Designer</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="section-luxury process-section">
//         <div className="container">
//           <div className="section-header">
//             <span className="section-badge">Our Process</span>
//             <h2 className="section-title">How We Work</h2>
//             <p className="section-description">
//               Our proven process to make your dream come true
//             </p>
//           </div>
//           <div className="row g-4">
//             {[
//               {
//                 step: "01",
//                 title: "Concept",
//                 desc: "Understanding your vision and requirements",
//               },
//               {
//                 step: "02",
//                 title: "Plan",
//                 desc: "Creating detailed plans and layouts",
//               },
//               {
//                 step: "03",
//                 title: "Design",
//                 desc: "Developing creative design solutions",
//               },
//               {
//                 step: "04",
//                 title: "Build",
//                 desc: "Implementing the design with precision",
//               },
//               {
//                 step: "05",
//                 title: "Launch",
//                 desc: "Final touches and project completion",
//               },
//             ].map((process, index) => (
//               <div key={index} className="col-lg-2 col-md-4 col-sm-6">
//                 <div className="process-item">
//                   <div className="process-number">
//                     <span>{process.step}</span>
//                   </div>
//                   <h5 className="process-title">{process.title}</h5>
//                   <p className="process-description">{process.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="section-luxury testimonials-section">
//         <div className="container">
//           <div className="section-header">
//             <span className="section-badge">Testimonials</span>
//             <h2 className="section-title">What Our Clients Say</h2>
//           </div>
//           <div className="row g-4">
//             {[
//               { name: "Sarah Johnson", role: "Homeowner", image: "testi1.jpg" },
//               {
//                 name: "Michael Chen",
//                 role: "Business Owner",
//                 image: "testi2.jpg",
//               },
//               {
//                 name: "Emily Davis",
//                 role: "Interior Enthusiast",
//                 image: "testi3.jpg",
//               },
//             ].map((testimonial, index) => (
//               <div key={index} className="col-lg-4">
//                 <div className="testimonial-card">
//                   <div className="testimonial-stars">
//                     {[...Array(5)].map((_, i) => (
//                       <i key={i} className="fas fa-star"></i>
//                     ))}
//                   </div>
//                   <p className="testimonial-text">
//                     "The team transformed our space beyond our expectations.
//                     Their attention to detail and creative vision made our dream
//                     home a reality."
//                   </p>
//                   <div className="testimonial-author">
//                     <img
//                       src={`assets/images/resources/${testimonial.image}`}
//                       alt={testimonial.name}
//                       className="author-image"
//                     />
//                     <div className="author-info">
//                       <h6 className="author-name">{testimonial.name}</h6>
//                       <small className="author-role">{testimonial.role}</small>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <div className="container">
//           <div className="cta-content">
//             <div className="row align-items-center">
//               <div className="col-lg-8">
//                 <h2 className="cta-title">Ready to Transform Your Space?</h2>
//                 <p className="cta-description">
//                   Get a free consultation and bring your vision to life with our
//                   expert team.
//                 </p>
//               </div>
//               <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
//                 <Link to="/contact" className="btn btn-cta">
//                   Start Your Project
//                   <i className="fas fa-arrow-right ms-2"></i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Blog Section */}
//       <section className="section-luxury blog-section">
//         <div className="container">
//           <div className="section-header">
//             <span className="section-badge">Latest Blog</span>
//             <h2 className="section-title">Design Tips & Trends</h2>
//           </div>
//           <div className="row g-4">
//             {[
//               {
//                 title: "Modern Living Room Ideas",
//                 image: "blog1.jpg",
//                 date: "Dec 15, 2024",
//               },
//               {
//                 title: "Kitchen Design Trends",
//                 image: "blog2.jpg",
//                 date: "Dec 10, 2024",
//               },
//               {
//                 title: "Small Space Solutions",
//                 image: "blog3.jpg",
//                 date: "Dec 5, 2024",
//               },
//             ].map((blog, index) => (
//               <div key={index} className="col-lg-4">
//                 <div className="blog-card">
//                   <div className="blog-image-container">
//                     <img
//                       src={`assets/images/resources/${blog.image}`}
//                       className="blog-image"
//                       alt={blog.title}
//                     />
//                     <span className="blog-category">Interior Design</span>
//                   </div>
//                   <div className="blog-content">
//                     <small className="blog-date">{blog.date}</small>
//                     <h5 className="blog-title">{blog.title}</h5>
//                     <p className="blog-excerpt">
//                       Discover the latest trends and tips for creating beautiful
//                       interior spaces...
//                     </p>
//                     <Link to="/blog-single" className="blog-link">
//                       Read More
//                       <i className="fas fa-arrow-right ms-2"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer-luxury">
//         <div className="container">
//           <div className="row g-4">
//             <div className="col-lg-4">
//               <div className="footer-brand">
//                 <h5 className="footer-title">InteriorPro</h5>
//                 <p className="footer-description">
//                   Creating beautiful and functional spaces that inspire and
//                   delight. Your dream interior is our passion.
//                 </p>
//                 <div className="footer-social">
//                   {["facebook-f", "instagram", "linkedin-in", "twitter"].map(
//                     (social) => (
//                       <a key={social} href="#" className="social-link-footer">
//                         <i className={`fab fa-${social}`}></i>
//                       </a>
//                     )
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-2">
//               <div className="footer-links">
//                 <h6 className="footer-links-title">Services</h6>
//                 <ul className="footer-links-list">
//                   {[
//                     "Interior Design",
//                     "Space Planning",
//                     "Furniture Design",
//                     "Lighting Design",
//                   ].map((service) => (
//                     <li key={service}>
//                       <Link to="/services" className="footer-link">
//                         {service}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="col-lg-2">
//               <div className="footer-links">
//                 <h6 className="footer-links-title">Company</h6>
//                 <ul className="footer-links-list">
//                   {[
//                     { name: "About Us", link: "/about" },
//                     { name: "Portfolio", link: "/portfolio" },
//                     { name: "Blog", link: "/blog" },
//                     { name: "Contact", link: "/contact" },
//                   ].map((item) => (
//                     <li key={item.name}>
//                       <Link to={item.link} className="footer-link">
//                         {item.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="footer-newsletter">
//                 <h6 className="footer-links-title">Newsletter</h6>
//                 <p className="newsletter-description">
//                   Subscribe to get the latest design trends and tips.
//                 </p>
//                 <div className="newsletter-form">
//                   <input
//                     type="email"
//                     className="newsletter-input"
//                     placeholder="Your email address"
//                   />
//                   <button className="newsletter-button" type="button">
//                     <i className="fas fa-paper-plane"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <hr className="footer-divider" />
//           <div className="footer-bottom">
//             <div className="row align-items-center">
//               <div className="col-md-6">
//                 <p className="footer-copyright">
//                   &copy; 2024 InteriorPro. All rights reserved.
//                 </p>
//               </div>
//               <div className="col-md-6 text-md-end">
//                 <Link to="/privacy" className="footer-link me-3">
//                   Privacy Policy
//                 </Link>
//                 <Link to="/terms" className="footer-link">
//                   Terms of Service
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

// // import { Link } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import "./Home.css";

// // const Home = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [currentProject, setCurrentProject] = useState(0);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const bannerImages = [
// //     "assets/images/resources/banner1.jpg",
// //     "assets/images/resources/banner2.jpg",
// //     "assets/images/resources/banner3.jpg",
// //   ];

// //   const projects = [
// //     {
// //       img: "/assets/images/resources/project1.jpg",
// //       title: "Living room",
// //       count: "59 projects",
// //       category: "Residential",
// //     },
// //     {
// //       img: "/assets/images/resources/project2.jpg",
// //       title: "Kitchen",
// //       count: "75 projects",
// //       category: "Modern",
// //     },
// //     {
// //       img: "/assets/images/resources/project3.jpg",
// //       title: "Commercial",
// //       count: "49 projects",
// //       category: "Office",
// //     },
// //     {
// //       img: "/assets/images/resources/project1.jpg",
// //       title: "Living room",
// //       count: "59 projects",
// //       category: "Residential",
// //     },
// //   ];

// //   // Auto-slide for banner
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, [bannerImages.length]);

// //   // Auto-slide for projects
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentProject((prev) => (prev + 1) % projects.length);
// //     }, 4000);
// //     return () => clearInterval(interval);
// //   }, [projects.length]);

// //   // Toggle mobile menu
// //   const toggleMobileMenu = () => {
// //     setIsMobileMenuOpen(!isMobileMenuOpen);
// //   };

// //   // Close mobile menu when clicking on a link
// //   const closeMobileMenu = () => {
// //     setIsMobileMenuOpen(false);
// //   };

// //   return (
// //     <div className="interior-home">
// //       {/* Elegant Navbar */}
// //       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-elegant sticky-top">
// //         <div className="container">
// //           <Link className="navbar-brand brand-elegant" to="/">
// //             <img
// //               src="assets/images/logo.png"
// //               alt="Logo"
// //               height="45"
// //               className="me-3 logo-bounce"
// //             />
// //           </Link>

// //           <button
// //             className="navbar-toggler border-0"
// //             type="button"
// //             onClick={toggleMobileMenu}
// //             aria-controls="navbarNav"
// //             aria-expanded={isMobileMenuOpen}
// //             aria-label="Toggle navigation"
// //           >
// //             <span className="navbar-toggler-icon"></span>
// //           </button>

// //           <div
// //             className={`collapse navbar-collapse ${
// //               isMobileMenuOpen ? "show" : ""
// //             }`}
// //             id="navbarNav"
// //           >
// //             <ul className="navbar-nav mx-auto nav-elegant">
// //               <li className="nav-item nav-item-elegant">
// //                 <Link
// //                   className="nav-link active nav-link-elegant"
// //                   to="/"
// //                   onClick={closeMobileMenu}
// //                 >
// //                   Home
// //                 </Link>
// //               </li>
// //               <li className="nav-item nav-item-elegant">
// //                 <Link
// //                   className="nav-link nav-link-elegant"
// //                   to="/about"
// //                   onClick={closeMobileMenu}
// //                 >
// //                   About
// //                 </Link>
// //               </li>
// //               <li className="nav-item nav-item-elegant">
// //                 <Link
// //                   className="nav-link nav-link-elegant"
// //                   to="/services"
// //                   onClick={closeMobileMenu}
// //                 >
// //                   Services
// //                 </Link>
// //               </li>
// //               <li className="nav-item nav-item-elegant">
// //                 <Link
// //                   className="nav-link nav-link-elegant"
// //                   to="/portfolio"
// //                   onClick={closeMobileMenu}
// //                 >
// //                   Portfolio
// //                 </Link>
// //               </li>
// //               <li className="nav-item nav-item-elegant">
// //                 <Link
// //                   className="nav-link nav-link-elegant"
// //                   to="/blog"
// //                   onClick={closeMobileMenu}
// //                 >
// //                   Blog
// //                 </Link>
// //               </li>
// //               <li className="nav-item nav-item-elegant">
// //                 <Link
// //                   className="nav-link nav-link-elegant"
// //                   to="/contact"
// //                   onClick={closeMobileMenu}
// //                 >
// //                   Contact
// //                 </Link>
// //               </li>
// //             </ul>
// //             <div className="d-flex">
// //               <Link
// //                 to="/contact"
// //                 className="btn btn-luxury rounded-pill px-4 py-2"
// //                 onClick={closeMobileMenu}
// //               >
// //                 Get Quote
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <section className="hero-luxury">
// //         <div className="hero-background"></div>
// //         <div className="container">
// //           <div className="row align-items-center min-vh-100">
// //             <div className="col-lg-6 mb-5 mb-lg-0">
// //               <div className="hero-content">
// //                 <span className="badge badge-luxury mb-4">
// //                   <i className="fas fa-crown me-2"></i>
// //                   Premium Interior Design
// //                 </span>
// //                 <h1 className="hero-title">
// //                   Transform Your
// //                   <span className="text-luxury"> Dream Space</span>
// //                   <br />
// //                   Into Reality
// //                 </h1>
// //                 <p className="hero-subtitle">
// //                   We create stunning interior designs that reflect your
// //                   personality and lifestyle. From concept to completion, we
// //                   handle every detail with precision and creativity.
// //                 </p>
// //                 <div className="hero-buttons">
// //                   <Link to="/portfolio" className="btn btn-luxury-primary me-3">
// //                     View Our Work
// //                     <i className="fas fa-arrow-right ms-2"></i>
// //                   </Link>
// //                   <Link to="/contact" className="btn btn-luxury-outline">
// //                     Free Consultation
// //                   </Link>
// //                 </div>
// //                 <div className="row g-4 mt-4">
// //                   <div className="col-sm-6">
// //                     <div className="feature-card">
// //                       <div className="feature-icon">
// //                         <i className="fas fa-award"></i>
// //                       </div>
// //                       <div className="feature-content">
// //                         <h6 className="feature-title">Award Winning</h6>
// //                         <small className="feature-desc">
// //                           10+ Design Awards
// //                         </small>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="col-sm-6">
// //                     <div className="feature-card">
// //                       <div className="feature-icon">
// //                         <i className="fas fa-users"></i>
// //                       </div>
// //                       <div className="feature-content">
// //                         <h6 className="feature-title">Expert Team</h6>
// //                         <small className="feature-desc">
// //                           Professional Designers
// //                         </small>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="col-lg-6">
// //               <div className="hero-carousel">
// //                 <div
// //                   id="heroCarousel"
// //                   className="carousel slide carousel-luxury"
// //                   data-bs-ride="carousel"
// //                 >
// //                   <div className="carousel-indicators indicators-luxury">
// //                     {bannerImages.map((_, index) => (
// //                       <button
// //                         key={index}
// //                         type="button"
// //                         data-bs-target="#heroCarousel"
// //                         data-bs-slide-to={index}
// //                         className={index === 0 ? "active" : ""}
// //                         aria-current={index === 0 ? "true" : "false"}
// //                         aria-label={`Slide ${index + 1}`}
// //                       ></button>
// //                     ))}
// //                   </div>
// //                   <div className="carousel-inner carousel-inner-luxury">
// //                     {bannerImages.map((image, index) => (
// //                       <div
// //                         key={index}
// //                         className={`carousel-item ${
// //                           index === 0 ? "active" : ""
// //                         }`}
// //                       >
// //                         <div className="image-container">
// //                           <img
// //                             src={image || "/placeholder.svg"}
// //                             className="d-block w-100 carousel-image"
// //                             alt={`Interior Design ${index + 1}`}
// //                           />
// //                           <div className="image-overlay"></div>
// //                         </div>
// //                         <div className="carousel-caption carousel-caption-luxury">
// //                           <h5 className="carousel-title">
// //                             Beautiful Interior Design
// //                           </h5>
// //                           <p className="carousel-desc">
// //                             Creating spaces that inspire and delight
// //                           </p>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                   <button
// //                     className="carousel-control-prev control-luxury"
// //                     type="button"
// //                     data-bs-target="#heroCarousel"
// //                     data-bs-slide="prev"
// //                   >
// //                     <span
// //                       className="carousel-control-prev-icon"
// //                       aria-hidden="true"
// //                     ></span>
// //                     <span className="visually-hidden">Previous</span>
// //                   </button>
// //                   <button
// //                     className="carousel-control-next control-luxury"
// //                     type="button"
// //                     data-bs-target="#heroCarousel"
// //                     data-bs-slide="next"
// //                   >
// //                     <span
// //                       className="carousel-control-next-icon"
// //                       aria-hidden="true"
// //                     ></span>
// //                     <span className="visually-hidden">Next</span>
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* About Section */}
// //       <section className="section-luxury about-section">
// //         <div className="container">
// //           <div className="row align-items-center g-5">
// //             <div className="col-lg-6">
// //               <div className="about-image-container">
// //                 <img
// //                   src="assets/images/resources/abt1.jpg"
// //                   alt="About Us"
// //                   className="about-main-image"
// //                 />
// //                 <div className="experience-badge">
// //                   <div className="experience-content">
// //                     <h4 className="experience-number">15+</h4>
// //                     <small className="experience-text">Years</small>
// //                   </div>
// //                 </div>
// //                 <div className="floating-elements">
// //                   <div className="floating-element element-1"></div>
// //                   <div className="floating-element element-2"></div>
// //                   <div className="floating-element element-3"></div>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="col-lg-6">
// //               <div className="about-content">
// //                 <span className="section-badge">About Us</span>
// //                 <h2 className="section-title">
// //                   Creating Beautiful Spaces Since 2006
// //                 </h2>
// //                 <p className="section-description">
// //                   We are passionate about transforming ordinary spaces into
// //                   extraordinary experiences. Our team of expert designers brings
// //                   creativity, functionality, and style to every project.
// //                 </p>
// //                 <div className="stats-container">
// //                   <div className="stat-item">
// //                     <h3 className="stat-number">500+</h3>
// //                     <small className="stat-label">Projects Completed</small>
// //                   </div>
// //                   <div className="stat-item">
// //                     <h3 className="stat-number">98%</h3>
// //                     <small className="stat-label">Client Satisfaction</small>
// //                   </div>
// //                 </div>
// //                 <Link to="/about" className="btn btn-luxury-primary">
// //                   Learn More
// //                   <i className="fas fa-arrow-right ms-2"></i>
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services Section */}
// //       <section className="section-luxury services-section">
// //         <div className="container">
// //           <div className="section-header">
// //             <span className="section-badge">Our Services</span>
// //             <h2 className="section-title">What We Offer</h2>
// //             <p className="section-description">
// //               Comprehensive interior design solutions for every space
// //             </p>
// //           </div>
// //           <div className="row g-4">
// //             {[
// //               {
// //                 icon: "fas fa-home",
// //                 title: "Residential Design",
// //                 desc: "Complete home interior solutions",
// //               },
// //               {
// //                 icon: "fas fa-building",
// //                 title: "Commercial Design",
// //                 desc: "Office and retail space design",
// //               },
// //               {
// //                 icon: "fas fa-couch",
// //                 title: "Furniture Selection",
// //                 desc: "Custom furniture and decor",
// //               },
// //               {
// //                 icon: "fas fa-palette",
// //                 title: "Color Consultation",
// //                 desc: "Professional color schemes",
// //               },
// //               {
// //                 icon: "fas fa-lightbulb",
// //                 title: "Lighting Design",
// //                 desc: "Ambient and task lighting",
// //               },
// //               {
// //                 icon: "fas fa-drafting-compass",
// //                 title: "Space Planning",
// //                 desc: "Optimal space utilization",
// //               },
// //             ].map((service, index) => (
// //               <div key={index} className="col-lg-4 col-md-6">
// //                 <div className="service-card">
// //                   <div className="service-icon">
// //                     <i className={service.icon}></i>
// //                   </div>
// //                   <div className="service-content">
// //                     <h5 className="service-title">{service.title}</h5>
// //                     <p className="service-description">{service.desc}</p>
// //                     <Link to="/services" className="service-link">
// //                       Learn More
// //                       <i className="fas fa-arrow-right ms-2"></i>
// //                     </Link>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Latest Projects Section */}
// //       <section className="section-luxury latest-projects-section">
// //         <div className="fixed-bg bg1"></div>
// //         <div className="container">
// //           <div className="row align-items-center g-5">
// //             <div className="col-lg-5">
// //               <div className="project-text">
// //                 <span className="section-badge section-badge-light">
// //                   Our Portfolio
// //                 </span>
// //                 <h3 className="section-title text-white">
// //                   Our Latest Projects
// //                 </h3>
// //                 <p className="section-description text-white-50">
// //                   This is why we are proud to offer a wide selection of our
// //                   designer ceiling, wall, floor and table lamps. You will also
// //                   find products ranging from modern styles, modern
// //                   interpretations of classic design. Our collection is updated
// //                   every day with beautiful solutions and we are glad that you,
// //                   our customers
// //                 </p>
// //                 <Link to="/portfolio" className="btn btn-luxury-light">
// //                   View More Projects
// //                   <i className="fas fa-arrow-right ms-2"></i>
// //                 </Link>
// //               </div>
// //             </div>
// //             <div className="col-lg-7">
// //               <div className="project-carousel">
// //                 <div className="project-carousel-container">
// //                   {projects.map((item, index) => (
// //                     <div
// //                       key={index}
// //                       className={`project-item ${
// //                         index === currentProject ? "active" : ""
// //                       }`}
// //                       style={{
// //                         transform: `translateX(${
// //                           (index - currentProject) * 100
// //                         }%)`,
// //                         opacity: index === currentProject ? 1 : 0.7,
// //                       }}
// //                     >
// //                       <div className="project-image-container">
// //                         <img
// //                           src={item.img || "/placeholder.svg"}
// //                           alt={item.title}
// //                           className="project-image"
// //                         />
// //                         <div className="project-overlay">
// //                           <div className="project-info">
// //                             <span className="project-category">
// //                               {item.category}
// //                             </span>
// //                             <h3 className="project-title">
// //                               <Link to="/portfolio-details" title="">
// //                                 {item.title}
// //                               </Link>
// //                             </h3>
// //                             <span className="project-count">{item.count}</span>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //                 <div className="project-controls">
// //                   <button
// //                     className="project-control-btn prev"
// //                     onClick={() =>
// //                       setCurrentProject(
// //                         (prev) => (prev - 1 + projects.length) % projects.length
// //                       )
// //                     }
// //                   >
// //                     <i className="fas fa-chevron-left"></i>
// //                   </button>
// //                   <button
// //                     className="project-control-btn next"
// //                     onClick={() =>
// //                       setCurrentProject((prev) => (prev + 1) % projects.length)
// //                     }
// //                   >
// //                     <i className="fas fa-chevron-right"></i>
// //                   </button>
// //                 </div>
// //                 <div className="project-indicators">
// //                   {projects.map((_, index) => (
// //                     <button
// //                       key={index}
// //                       className={`project-indicator ${
// //                         index === currentProject ? "active" : ""
// //                       }`}
// //                       onClick={() => setCurrentProject(index)}
// //                     ></button>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Team Section */}
// //       <section className="section-luxury team-section">
// //         <div className="container">
// //           <div className="section-header">
// //             <span className="section-badge">Our Team</span>
// //             <h2 className="section-title">Meet Our Designers</h2>
// //             <p className="section-description">
// //               Professional designers united by shared values
// //             </p>
// //           </div>
// //           <div className="row g-4">
// //             {[1, 2, 3, 4, 5, 6].map((num) => (
// //               <div key={num} className="col-lg-4 col-md-6">
// //                 <div className="team-card">
// //                   <div className="team-image-container">
// //                     <img
// //                       src={`assets/images/resources/team${num}.jpg`}
// //                       className="team-image"
// //                       alt="Team Member"
// //                     />
// //                     <div className="team-overlay">
// //                       <div className="team-social">
// //                         <a href="#" className="social-link">
// //                           <i className="fab fa-facebook-f"></i>
// //                         </a>
// //                         <a href="#" className="social-link">
// //                           <i className="fab fa-instagram"></i>
// //                         </a>
// //                         <a href="#" className="social-link">
// //                           <i className="fab fa-linkedin-in"></i>
// //                         </a>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="team-content">
// //                     <h5 className="team-name">Daniel Nikolson</h5>
// //                     <p className="team-role">Senior Designer</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Process Section */}
// //       <section className="section-luxury process-section">
// //         <div className="container">
// //           <div className="section-header">
// //             <span className="section-badge">Our Process</span>
// //             <h2 className="section-title">How We Work</h2>
// //             <p className="section-description">
// //               Our proven process to make your dream come true
// //             </p>
// //           </div>
// //           <div className="row g-4">
// //             {[
// //               {
// //                 step: "01",
// //                 title: "Concept",
// //                 desc: "Understanding your vision and requirements",
// //               },
// //               {
// //                 step: "02",
// //                 title: "Plan",
// //                 desc: "Creating detailed plans and layouts",
// //               },
// //               {
// //                 step: "03",
// //                 title: "Design",
// //                 desc: "Developing creative design solutions",
// //               },
// //               {
// //                 step: "04",
// //                 title: "Build",
// //                 desc: "Implementing the design with precision",
// //               },
// //               {
// //                 step: "05",
// //                 title: "Launch",
// //                 desc: "Final touches and project completion",
// //               },
// //             ].map((process, index) => (
// //               <div key={index} className="col-lg-2 col-md-4 col-sm-6">
// //                 <div className="process-item">
// //                   <div className="process-number">
// //                     <span>{process.step}</span>
// //                   </div>
// //                   <h5 className="process-title">{process.title}</h5>
// //                   <p className="process-description">{process.desc}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials Section */}
// //       <section className="section-luxury testimonials-section">
// //         <div className="container">
// //           <div className="section-header">
// //             <span className="section-badge">Testimonials</span>
// //             <h2 className="section-title">What Our Clients Say</h2>
// //           </div>
// //           <div className="row g-4">
// //             {[
// //               { name: "Sarah Johnson", role: "Homeowner", image: "testi1.jpg" },
// //               {
// //                 name: "Michael Chen",
// //                 role: "Business Owner",
// //                 image: "testi2.jpg",
// //               },
// //               {
// //                 name: "Emily Davis",
// //                 role: "Interior Enthusiast",
// //                 image: "testi3.jpg",
// //               },
// //             ].map((testimonial, index) => (
// //               <div key={index} className="col-lg-4">
// //                 <div className="testimonial-card">
// //                   <div className="testimonial-stars">
// //                     {[...Array(5)].map((_, i) => (
// //                       <i key={i} className="fas fa-star"></i>
// //                     ))}
// //                   </div>
// //                   <p className="testimonial-text">
// //                     "The team transformed our space beyond our expectations.
// //                     Their attention to detail and creative vision made our dream
// //                     home a reality."
// //                   </p>
// //                   <div className="testimonial-author">
// //                     <img
// //                       src={`assets/images/resources/${testimonial.image}`}
// //                       alt={testimonial.name}
// //                       className="author-image"
// //                     />
// //                     <div className="author-info">
// //                       <h6 className="author-name">{testimonial.name}</h6>
// //                       <small className="author-role">{testimonial.role}</small>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="cta-section">
// //         <div className="container">
// //           <div className="cta-content">
// //             <div className="row align-items-center">
// //               <div className="col-lg-8">
// //                 <h2 className="cta-title">Ready to Transform Your Space?</h2>
// //                 <p className="cta-description">
// //                   Get a free consultation and bring your vision to life with our
// //                   expert team.
// //                 </p>
// //               </div>
// //               <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
// //                 <Link to="/contact" className="btn btn-cta">
// //                   Start Your Project
// //                   <i className="fas fa-arrow-right ms-2"></i>
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Blog Section */}
// //       <section className="section-luxury blog-section">
// //         <div className="container">
// //           <div className="section-header">
// //             <span className="section-badge">Latest Blog</span>
// //             <h2 className="section-title">Design Tips & Trends</h2>
// //           </div>
// //           <div className="row g-4">
// //             {[
// //               {
// //                 title: "Modern Living Room Ideas",
// //                 image: "blog1.jpg",
// //                 date: "Dec 15, 2024",
// //               },
// //               {
// //                 title: "Kitchen Design Trends",
// //                 image: "blog2.jpg",
// //                 date: "Dec 10, 2024",
// //               },
// //               {
// //                 title: "Small Space Solutions",
// //                 image: "blog3.jpg",
// //                 date: "Dec 5, 2024",
// //               },
// //             ].map((blog, index) => (
// //               <div key={index} className="col-lg-4">
// //                 <div className="blog-card">
// //                   <div className="blog-image-container">
// //                     <img
// //                       src={`assets/images/resources/${blog.image}`}
// //                       className="blog-image"
// //                       alt={blog.title}
// //                     />
// //                     <span className="blog-category">Interior Design</span>
// //                   </div>
// //                   <div className="blog-content">
// //                     <small className="blog-date">{blog.date}</small>
// //                     <h5 className="blog-title">{blog.title}</h5>
// //                     <p className="blog-excerpt">
// //                       Discover the latest trends and tips for creating beautiful
// //                       interior spaces...
// //                     </p>
// //                     <Link to="/blog-single" className="blog-link">
// //                       Read More
// //                       <i className="fas fa-arrow-right ms-2"></i>
// //                     </Link>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="footer-luxury">
// //         <div className="container">
// //           <div className="row g-4">
// //             <div className="col-lg-4">
// //               <div className="footer-brand">
// //                 <h5 className="footer-title">InteriorPro</h5>
// //                 <p className="footer-description">
// //                   Creating beautiful and functional spaces that inspire and
// //                   delight. Your dream interior is our passion.
// //                 </p>
// //                 <div className="footer-social">
// //                   {["facebook-f", "instagram", "linkedin-in", "twitter"].map(
// //                     (social) => (
// //                       <a key={social} href="#" className="social-link-footer">
// //                         <i className={`fab fa-${social}`}></i>
// //                       </a>
// //                     )
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="col-lg-2">
// //               <div className="footer-links">
// //                 <h6 className="footer-links-title">Services</h6>
// //                 <ul className="footer-links-list">
// //                   {[
// //                     "Interior Design",
// //                     "Space Planning",
// //                     "Furniture Design",
// //                     "Lighting Design",
// //                   ].map((service) => (
// //                     <li key={service}>
// //                       <Link to="/services" className="footer-link">
// //                         {service}
// //                       </Link>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>
// //             <div className="col-lg-2">
// //               <div className="footer-links">
// //                 <h6 className="footer-links-title">Company</h6>
// //                 <ul className="footer-links-list">
// //                   {[
// //                     { name: "About Us", link: "/about" },
// //                     { name: "Portfolio", link: "/portfolio" },
// //                     { name: "Blog", link: "/blog" },
// //                     { name: "Contact", link: "/contact" },
// //                   ].map((item) => (
// //                     <li key={item.name}>
// //                       <Link to={item.link} className="footer-link">
// //                         {item.name}
// //                       </Link>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>
// //             <div className="col-lg-4">
// //               <div className="footer-newsletter">
// //                 <h6 className="footer-links-title">Newsletter</h6>
// //                 <p className="newsletter-description">
// //                   Subscribe to get the latest design trends and tips.
// //                 </p>
// //                 <div className="newsletter-form">
// //                   <input
// //                     type="email"
// //                     className="newsletter-input"
// //                     placeholder="Your email address"
// //                   />
// //                   <button className="newsletter-button" type="button">
// //                     <i className="fas fa-paper-plane"></i>
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <hr className="footer-divider" />
// //           <div className="footer-bottom">
// //             <div className="row align-items-center">
// //               <div className="col-md-6">
// //                 <p className="footer-copyright">
// //                   &copy; 2024 InteriorPro. All rights reserved.
// //                 </p>
// //               </div>
// //               <div className="col-md-6 text-md-end">
// //                 <Link to="/privacy" className="footer-link me-3">
// //                   Privacy Policy
// //                 </Link>
// //                 <Link to="/terms" className="footer-link">
// //                   Terms of Service
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Home;

"use client";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const bannerImages = [
    "assets/images/resources/banner1.jpg",
    "assets/images/resources/banner2.jpg",
    "assets/images/resources/banner3.jpg",
  ];

  const projects = [
    {
      img: "/assets/images/resources/project1.jpg",
      title: "Living room",
      count: "59 projects",
      category: "Residential",
    },
    {
      img: "/assets/images/resources/project2.jpg",
      title: "Kitchen",
      count: "75 projects",
      category: "Modern",
    },
    {
      img: "/assets/images/resources/project3.jpg",
      title: "Commercial",
      count: "49 projects",
      category: "Office",
    },
    {
      img: "/assets/images/resources/project1.jpg",
      title: "Living room",
      count: "59 projects",
      category: "Residential",
    },
  ];

  // Auto-slide for banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Auto-slide for projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projects.length]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="interior-home">
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

      {/* Hero Section */}
      <section className="hero-luxury">
        <div className="hero-background"></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="hero-content">
                <span className="badge badge-luxury mb-4">
                  <i className="fas fa-crown me-2"></i>
                  Premium Interior Design
                </span>
                <h1 className="hero-title">
                  Transform Your
                  <span className="text-luxury"> Dream Space</span>
                  <br />
                  Into Reality
                </h1>
                <p className="hero-subtitle">
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
                        <h6 className="feature-title">Award Winning</h6>
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
                        <h6 className="feature-title">Expert Team</h6>
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
                <div
                  id="heroCarousel"
                  className="carousel slide carousel-luxury"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators indicators-luxury">
                    {bannerImages.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        data-bs-target="#heroCarousel"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                  <div className="carousel-inner carousel-inner-luxury">
                    {bannerImages.map((image, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
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
                  <button
                    className="carousel-control-prev control-luxury"
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next control-luxury"
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Services Section */}
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
            {[
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
            ].map((service, index) => (
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

      {/* Latest Projects Section */}
      <section className="section-luxury latest-projects-section">
        <div className="fixed-bg bg1"></div>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="project-text">
                <span className="section-badge section-badge-light">
                  Our Portfolio
                </span>
                <h3 className="section-title text-white">
                  Our Latest Projects
                </h3>
                <p className="section-description text-white-50">
                  This is why we are proud to offer a wide selection of our
                  designer ceiling, wall, floor and table lamps. You will also
                  find products ranging from modern styles, modern
                  interpretations of classic design. Our collection is updated
                  every day with beautiful solutions and we are glad that you,
                  our customers
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

      {/* Team Section */}
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
            {[1, 2, 3, 4, 5, 6].map((num) => (
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

      {/* Process Section */}
      <section className="section-luxury process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Process</span>
            <h2 className="section-title">How We Work</h2>
            <p className="section-description">
              Our proven process to make your dream come true
            </p>
          </div>
          <div className="row g-4">
            {[
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
            ].map((process, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-sm-6">
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

      {/* Testimonials Section */}
      <section className="section-luxury testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="row g-4">
            {[
              { name: "Sarah Johnson", role: "Homeowner", image: "testi1.jpg" },
              {
                name: "Michael Chen",
                role: "Business Owner",
                image: "testi2.jpg",
              },
              {
                name: "Emily Davis",
                role: "Interior Enthusiast",
                image: "testi3.jpg",
              },
            ].map((testimonial, index) => (
              <div key={index} className="col-lg-4">
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="testimonial-text">
                    "The team transformed our space beyond our expectations.
                    Their attention to detail and creative vision made our dream
                    home a reality."
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

      {/* CTA Section */}
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

      {/* Blog Section */}
      <section className="section-luxury blog-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Latest Blog</span>
            <h2 className="section-title">Design Tips & Trends</h2>
          </div>
          <div className="row g-4">
            {[
              {
                title: "Modern Living Room Ideas",
                image: "blog1.jpg",
                date: "Dec 15, 2024",
              },
              {
                title: "Kitchen Design Trends",
                image: "blog2.jpg",
                date: "Dec 10, 2024",
              },
              {
                title: "Small Space Solutions",
                image: "blog3.jpg",
                date: "Dec 5, 2024",
              },
            ].map((blog, index) => (
              <div key={index} className="col-lg-4">
                <div className="blog-card">
                  <div className="blog-image-container">
                    <img
                      src={`assets/images/resources/${blog.image}`}
                      className="blog-image"
                      alt={blog.title}
                    />
                    <span className="blog-category">Interior Design</span>
                  </div>
                  <div className="blog-content">
                    <small className="blog-date">{blog.date}</small>
                    <h5 className="blog-title">{blog.title}</h5>
                    <p className="blog-excerpt">
                      Discover the latest trends and tips for creating beautiful
                      interior spaces...
                    </p>
                    <Link to="/blog-single" className="blog-link">
                      Read More
                      <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-luxury">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="footer-brand">
                <h5 className="footer-title">InteriorPro</h5>
                <p className="footer-description">
                  Creating beautiful and functional spaces that inspire and
                  delight. Your dream interior is our passion.
                </p>
                <div className="footer-social">
                  {["facebook-f", "instagram", "linkedin-in", "twitter"].map(
                    (social) => (
                      <a key={social} href="#" className="social-link-footer">
                        <i className={`fab fa-${social}`}></i>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-links">
                <h6 className="footer-links-title">Services</h6>
                <ul className="footer-links-list">
                  {[
                    "Interior Design",
                    "Space Planning",
                    "Furniture Design",
                    "Lighting Design",
                  ].map((service) => (
                    <li key={service}>
                      <Link to="/services" className="footer-link">
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-links">
                <h6 className="footer-links-title">Company</h6>
                <ul className="footer-links-list">
                  {[
                    { name: "About Us", link: "/about" },
                    { name: "Portfolio", link: "/portfolio" },
                    { name: "Blog", link: "/blog" },
                    { name: "Contact", link: "/contact" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link to={item.link} className="footer-link">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-newsletter">
                <h6 className="footer-links-title">Newsletter</h6>
                <p className="newsletter-description">
                  Subscribe to get the latest design trends and tips.
                </p>
                <div className="newsletter-form">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Your email address"
                  />
                  <button className="newsletter-button" type="button">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="footer-copyright">
                  &copy; 2024 InteriorPro. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <Link to="/privacy" className="footer-link me-3">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="footer-link">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
