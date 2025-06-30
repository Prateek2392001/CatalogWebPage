import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Home from "./components/Home/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

function App() {
  useEffect(() => {
    const scripts = [
      "/assets/js/jquery.min.js",
      "/assets/js/popper.js",
      "/assets/js/bootstrap.min.js",
      "/assets/js/plugin/slick.min.js",
      "/assets/js/plugin/html5lightbox.js",
      "/assets/js/placeholdem.min.js",
      "/assets/js/wow.min.js",
      "/assets/js/script.js",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    });

    return () => {
      scripts.forEach((src) => {
        const loadedScripts = document.querySelectorAll(`script[src="${src}"]`);
        loadedScripts.forEach((script) => script.remove());
      });
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
