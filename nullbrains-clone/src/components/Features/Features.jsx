import React from 'react';
import './Features.css';
import {FaTools } from 'react-icons/fa';
import { PiCertificateLight } from 'react-icons/pi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { BiPackage } from 'react-icons/bi';
import { HiCube } from 'react-icons/hi';
import { FiTag } from 'react-icons/fi';

const features = [
  { title: 'Certifications', desc: 'Earn recognized credentials and stand out professionally.', icon: <PiCertificateLight /> },
  { title: 'Notifications', desc: 'Stay updated with instant alerts and messages.', icon: <IoNotificationsOutline /> },
  { title: 'Bundles', desc: 'Get curated bundles for your learning needs.', icon: <BiPackage /> },
  { title: 'Developer Tools', desc: 'Access a suite of tools for efficient development.', icon: <FaTools /> },
  { title: 'Building Blocks', desc: 'Reusable components to speed up your projects.', icon: <HiCube /> },
  { title: 'Coupons', desc: 'Exclusive discounts and coupon codes for members.', icon: <FiTag /> }
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Our Powerful Features</h2>
        <p>Everything you need to boost productivity and streamline operations.</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
