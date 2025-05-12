import React from 'react';
import './ProductivityAutomationSection.css';
import astronaut from '../../assets/images/astronaut.svg';
import robot from '../../assets/images/robot.svg';
import { FaCheck } from 'react-icons/fa';

const ListItem = ({ text }) => (
  <div className="list-item">
    <span className="icon-circle">
      <FaCheck className="check-icon" />
    </span>
    <span>{text}</span>
  </div>
);

const ProductivityAutomationSection = () => {
  return (
    <div className="section-container">
      
      {/* Astronaut Left, Text Right */}
      <div className="section astronaut-layout">
        <div className="image-wrapper">
          <div className="yellow-blob" />
          <img src={astronaut} alt="Astronaut" className="illustration" />
        </div>
        <div className="text">
          <h2>Boost Productivity</h2>
          <p>
            Build an atmosphere that creates productivity in your organization and your company culture.
          </p>
          <div className="list">
            <ListItem text="Maximize productivity and growth" />
            <ListItem text="Speed past your competition" />
            <ListItem text="Learn the top techniques" />
          </div>
        </div>
      </div>

      {/* Content Left, Robot Right */}
      <div className="section robot-layout">
        <div className="text">
          <h2>Automated Tasks</h2>
          <p>
            Save time and money with our revolutionary services. We are the leaders in the industry.
          </p>
          <div className="list">
            <ListItem text="Automated task management workflow" />
            <ListItem text="Detailed analytics for your data" />
            <ListItem text="Some awesome integrations" />
          </div>
        </div>
        <div className="image-wrapper">
          <div className="yellow-blob" />
          <img src={robot} alt="Robot" className="illustration" />
        </div>
      </div>

    </div>
  );
};

export default ProductivityAutomationSection;
