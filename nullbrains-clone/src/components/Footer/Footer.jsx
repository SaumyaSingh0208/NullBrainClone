import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaDribbble, FaBug } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Row 1: Navigation Links */}
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#team">Team</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a href="#terms">Terms</a>
        </div>

        {/* Row 2: Social Icons */}
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#"><FaBug /></a> {/* Butterfly replacement */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="#"><FaDribbble /></a> {/* Ball-like icon */}
        </div>

        {/* Row 3: Copyright */}
        <div className="footer-bottom">
          <p>© 2021 SomeCompany, Inc. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
