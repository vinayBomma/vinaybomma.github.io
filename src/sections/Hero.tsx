import React from "react";
import "../styles/Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Hello, I'm <span className="highlight">Your Name</span>
          </h1>
          <h2>Web Developer & Designer</h2>
          <p>
            I create responsive websites and applications with modern
            technologies.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn primary-btn">
              Contact Me
            </a>
            <a href="#projects" className="btn secondary-btn">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
