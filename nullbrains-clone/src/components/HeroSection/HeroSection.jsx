import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        <h1 className="hero-heading">
          Empowering <span>Digital Learning</span> for Everyone
        </h1>

        <p className="hero-subtext">
          Discover cutting-edge resources, expert guidance, and a vibrant community to boost your skills and career.
        </p>

        <div className="hero-button-wrapper">
          <button className="purchase-button">
            Purchase Now
            <span className="price-badge">only $15 / month</span>
          </button>
        </div>

        <div className="learn-more-wrapper">
          <a href="#learn-more" className="learn-more">Learn More</a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
