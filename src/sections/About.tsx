import React from "react";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            {/* Replace with your image */}
            <div className="placeholder-image">Your Photo</div>
          </div>
          <div className="about-text">
            <p>
              Hello! I'm a passionate web developer with a strong foundation in
              creating responsive and user-friendly websites. I enjoy solving
              complex problems and turning ideas into reality through elegant
              code.
            </p>
            <p>
              My journey in web development started several years ago, and I've
              been constantly learning and improving my skills. I believe in
              writing clean, maintainable code and creating applications that
              provide great user experiences.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Your Name</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">your.email@example.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Your City, Country</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Availability:</span>
                <span className="detail-value">Available for freelance</span>
              </div>
            </div>
            <a href="#contact" className="btn primary-btn">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
