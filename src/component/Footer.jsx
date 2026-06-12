import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

import "../component/css/footer.css";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
          <a href="/">
            <img
              src={logo}
              alt="Nexu ThinkLab Logo"
            
            />
          </a>
</div>
          <div className="brand-text">
            <p>
              Empowering young minds through STEM education, innovation, and
              digital skills.
            </p>

            <div className="socials-icons">
              <a href="#" className="icons-box">
                <FaFacebookF />
              </a>

              <a href="#" className="icons-box">
                <FaInstagram />
              </a>

              <a href="#" className="icons-box">
                <FaYoutube />
              </a>

              <a href="#" className="icons-box">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <p className="footerp">
            © 2026 Nexu ThinkLab. All Rights Reserved.
          </p>
        </div>

        <div className="divider"></div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/aboutus">About Us</a>
          <a href="/program">Programs</a>
          <a href="/events">Events</a>
          <a href="/schools">Schools</a>
          <a href="/gallery">Gallery</a>
          <a href="/stores">Store</a>
          <a href="/contactus">Contact Us</a>
        </div>

        <div className="divider"></div>

        {/* Programs */}
        <div className="footer-col">
          <h4>Programs</h4>
          <a href="#">Robotics</a>
          <a href="#">Coding</a>
          <a href="#">Electronics & IoT</a>
          <a href="#">AI & Future Tech</a>
          <a href="#">Design & Innovation</a>
          <a href="#">Digital Skills</a>
        </div>

        <div className="divider"></div>

        {/* Store */}
        <div className="footer-col">
          <h4>Store</h4>
          <a href="#">All Products</a>
          <a href="#">STEM Kits</a>
          <a href="#">Robotics</a>
          <a href="#">Electronics</a>
          <a href="#">Accessories</a>
        </div>

        <div className="divider"></div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>

          <p>
            <FaPhone /> +977-9812345678
          </p>

          <p>
            <FaEnvelope /> info@nexuthinklab.com
          </p>

          <p>
            <FaGlobe /> www.nexuthinklab.org
          </p>

          <p>
            <FaMapMarkerAlt /> Kathmandu, Nepal
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;