import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import LatestProject from "../LatestProject/LatestProject";
import Team from "../Team/Team";
import Process from "../Process/Process";
import Testimonial from "../Testimonial/Testimonial";
import Cta from "../Cta/Cta";
import Footer from "../Footer/Footer";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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

  const bannerImages = [
    "/assets/images/resources/banner1.jpg",
    "/assets/images/resources/banner2.jpg",
    "/assets/images/resources/banner3.jpg",
  ];
  return (
    <div>
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />

      <Hero
        bannerImages={bannerImages}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />

      <About />

      <Services />

      <LatestProject
        projects={projects}
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
      />

      <Team />

      <Process />

      <Testimonial />

      <Cta />

      <Footer />
    </div>
  );
};

export default Home;
