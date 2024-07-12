import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaPinterest /></a>
      </div>
      <span>Art.Design Blog Page</span>
    </footer>
  );
}

export default Footer;
