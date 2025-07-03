import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [animateCards, setAnimateCards] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setTimeout(() => setAnimateCards(true), 300);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Modern Living Room Design Trends 2024",
      category: "Interior Design",
      date: "Dec 15, 2023",
      image: "assets/images/resources/blog1.jpg",
      excerpt:
        "Discover the latest trends in modern living room design that will transform your space into a contemporary masterpiece.",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Luxury Kitchen Design Ideas",
      category: "Kitchen Design",
      date: "Dec 12, 2023",
      image: "assets/images/resources/blog2.jpg",
      excerpt:
        "Explore stunning luxury kitchen designs that combine functionality with elegance and sophisticated style.",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Sustainable Interior Design Solutions",
      category: "Sustainability",
      date: "Dec 10, 2023",
      image: "assets/images/resources/blog3.jpg",
      excerpt:
        "Learn how to create beautiful interiors while being environmentally conscious with sustainable design practices.",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Bedroom Sanctuary: Creating Your Perfect Retreat",
      category: "Bedroom Design",
      date: "Dec 8, 2023",
      image: "assets/images/resources/blog2.jpg",
      excerpt:
        "Transform your bedroom into a luxurious sanctuary with these expert design tips and inspiration.",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "Commercial Space Design Excellence",
      category: "Commercial Design",
      date: "Dec 5, 2023",
      image: "assets/images/resources/blog1.jpg",
      excerpt:
        "Discover how to create impressive commercial spaces that enhance productivity and leave lasting impressions.",
      readTime: "8 min read",
    },
    {
      id: 6,
      title: "Color Psychology in Interior Design",
      category: "Design Theory",
      date: "Dec 3, 2023",
      image: "assets/images/resources/blog3.jpg",
      excerpt:
        "Understanding how colors affect mood and behavior to create spaces that truly resonate with inhabitants.",
      readTime: "6 min read",
    },
  ];

  const categories = [
    "All",
    "Interior Design",
    "Kitchen Design",
    "Sustainability",
    "Bedroom Design",
    "Commercial Design",
    "Design Theory",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="wrapper blog-luxury">
      {/* Header */}
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

      {/* Mobile Menu */}
      <div className="responsive-mobile-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/catalog">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="blog-hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="blog-hero-content">
            <div className="breadcrumb-luxury">
              <Link to="/">Home</Link>
              <span className="separator">/</span>
              <span>Blog</span>
            </div>
            <h1 className="hero-title text-white">
              Design Insights & Inspiration
            </h1>
            <p className="hero-subtitle">
              Discover the latest trends, tips, and stories from the world of
              luxury interior design
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Articles</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25K+</span>
                <span className="stat-label">Readers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12</span>
                <span className="stat-label">Categories</span>
              </div>
            </div>
          </div>
          <div className="hero-image-container">
            <img
              src="assets/images/resources/about3.jpg"
              alt="Blog Hero"
              className="hero-image"
            />
            <div className="floating-badge">
              <i className="fas fa-pen-fancy"></i>
              <span>Latest Stories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter-section">
        <div className="container">
          <div className="filter-container">
            <h3 className="filter-title">Explore by Category</h3>
            <div className="category-buttons">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`category-btn ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-posts-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Articles</h2>
            <p className="section-subtitle">
              Stay updated with our latest design insights and industry trends
            </p>
          </div>

          <div className={`blog-grid ${animateCards ? "animate" : ""}`}>
            <div className="row">
              {filteredPosts.map((post, index) => (
                <div key={post.id} className="col-lg-4 col-md-6 col-sm-12">
                  <article
                    className={`blog-card luxury-card card-${index + 1}`}
                  >
                    <div className="card-image-container">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="card-image"
                      />
                      <div className="image-overlay">
                        <span className="category-tag">{post.category}</span>
                        <div className="read-time">
                          <i className="far fa-clock"></i>
                          {post.readTime}
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <Link to={`/blog/${post.id}`} className="read-more-btn">
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="post-meta">
                        <span className="post-date">
                          <i className="far fa-calendar"></i>
                          {post.date}
                        </span>
                      </div>
                      <h3 className="post-title">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="post-excerpt">{post.excerpt}</p>
                      <Link to={`/blog/${post.id}`} className="read-more-link">
                        Read More
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="card-decoration"></div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="luxury-pagination">
            <div className="pagination-container">
              <button className="page-btn prev-btn">
                <i className="fas fa-chevron-left"></i>
                Previous
              </button>
              <div className="page-numbers">
                <button className="page-number active">1</button>
                <button className="page-number">2</button>
                <button className="page-number">3</button>
                <span className="page-dots">...</span>
                <button className="page-number">8</button>
              </div>
              <button className="page-btn next-btn">
                Next
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Stay Inspired</h3>
              <p>
                Subscribe to our newsletter for the latest design trends and
                exclusive content
              </p>
            </div>
            <form className="newsletter-form">
              <div className="input-group">
                <input type="email" placeholder="Enter your email address" />
                <button type="submit">
                  Subscribe
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="luxury-footer">
        <div className="container">
          <div className="top-footer">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="widget widget-info">
                  <h3 className="widget-title">NEWSLETTER</h3>
                  <form className="widget-form">
                    <input type="text" name="email" placeholder="Your e-mail" />
                    <button type="submit">
                      <i className="la la-arrow-right"></i>
                    </button>
                  </form>
                  <span>Sign up to receive special offers!</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="widget widget-contact text-right">
                      <h3 className="widget-title">Contact Us</h3>
                      <ul className="ft-links">
                        <li>1556 Broadway, suite 416 New York, NY 10120 USA</li>
                        <li>+44 20 7722 0088</li>
                        <li>
                          <a href="#">in.design@gmail.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="widget widget-category text-right">
                      <h3 className="widget-title">Categories</h3>
                      <ul className="ft-links">
                        <li>
                          <a href="#">Decor</a>
                        </li>
                        <li>
                          <a href="#">Furniture</a>
                        </li>
                        <li>
                          <a href="#">Lighting</a>
                        </li>
                        <li>
                          <a href="#">Interior design</a>
                        </li>
                        <li>
                          <a href="#">Architecture design</a>
                        </li>
                        <li>
                          <a href="#">Commercial design</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="widget widget-company text-right">
                      <h3 className="widget-title">Company</h3>
                      <ul className="ft-links">
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/services">Services</Link>
                        </li>
                        <li>
                          <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                          <a href="#">Delivery</a>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="ft-logo">
              <img src="assets/images/ft-logo.png" alt="" />
            </div>
            <ul className="btm-links">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
            <div className="clearfix"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
