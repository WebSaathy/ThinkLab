import React from "react";
import "../component/css/contactbtn.css";
import hero from "../assets/images/hero.jpg";
import Footer from "./Footer"
import cta from "../assets/images/cta.png"
import temple from "../assets/images/temple-removebg-preview.png"
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaHeadset,
  FaUsers,
  FaShieldAlt,
  FaRobot,
  FaArrowRight,
  // LuPanelsTopLeft ,
} from "react-icons/fa";
import { LuPanelsTopLeft } from "react-icons/lu";

function Contactbtn() {
  return (
    <>
      <div className="contact-page">
        <section className="contact-hero">

          <div className="hero-left">

            <h1>
              Let’s Connect & <br />
              <span>Create Impact</span> Together
            </h1>

            <h4>
              Have a question, idea, or partnership opportunity?
              We'd love to hear from you! Reach out to our team
              and let's inspire the next generation together.
            </h4>

            <div className="hero-features">

              <div className="feature">
                <FaHeadset />
                <div>
                  <h4>Quick Response</h4>
                  <span>We reply within 24-48 hours</span>
                </div>
              </div>

              <div className="feature">
                <FaUsers />
                <div>
                  <h4>Expert Support</h4>
                  <span>Friendly team support</span>
                </div>
              </div>

              <div className="feature">
                <FaShieldAlt />
                <div>
                  <h4>Trusted Partner</h4>
                  <span>Committed to success</span>
                </div>
              </div>

            </div>
          </div>

          <div className="hero-right">
            <img src={hero} alt="" />
          </div>

        </section>

        {/* Form + Contact */}
        <section className="contact-grid">

          <div className="contact-form">

            <h2><span>Send</span> Us a Message</h2>

            <p>
              Fill out the form and our team will get back to you shortly.
            </p>

            <form>

              <div className="row">

                <div className="field">
                  <label>Full Name *</label>
                  <input type="text" />
                </div>

                <div className="field">
                  <label>Email Address *</label>
                  <input type="email" />
                </div>

              </div>

              <div className="row">

                <div className="field">
                  <label>Phone Number</label>
                  <input type="text" />
                </div>

                <div className="field">
                  <label>Subject</label>
                  <input type="text" />
                </div>

              </div>

              <div className="field">
                <label>How can we help you?</label>

                <select>
                  <option>Select an option</option>
                  <option>option</option>

                </select>
              </div>

              <div className="field">
                <label>Your Message *</label>
                <textarea />
              </div>

              <button>
                Send Message <FaPaperPlane />
              </button>

            </form>
          </div>

          <div className="contact-info">

            <h2>Get in Touch</h2>

            <div className="info-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Our Location</h4>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="info-item">
              <FaPhoneAlt />
              <div>
                <h4>Call Us</h4>
                <p>+977 9812345678</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope />
              <div>
                <h4>Email Us</h4>
                <p>info@nexuthinklab.org</p>
              </div>
            </div>

            <div className="info-item">
              <FaGlobe />
              <div>
                <h4>Website</h4>
                <p>www.nexuthinklab.org</p>
              </div>
            </div>
            <div className="info-item">
              < LuPanelsTopLeft />
              <div>
                <h4>Follow Us</h4>
                <p>
                  <div className="socials">

                    <span><FaFacebookF /></span>
                    <span><FaInstagram /></span>
                    <span><FaYoutube /></span>
                    <span><FaLinkedinIn /></span>

                  </div>
                </p>
              </div>
            </div>


          </div>

        </section>

        {/* Map */}

        <section className="map-section">

          <div className="map-card">

            <FaMapMarkerAlt />

            <div>
              <h4>Visit Us</h4>
              <p>Kathmandu, Nepal</p>

              <button>
                Get Directions
              </button>
            </div>

          </div>

          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>

        </section>

        {/* CTA */}

        <section className="cta-banner">
          <div className="cta">
          <img src={cta} alt="" />
          </div>
          <div>
            <h2>Interested in Partnership or Collaboration?</h2>

            <p>
              Let’s work together to empower young minds through
              STEAM education.
            </p>
          </div>

          <a href=""><button className="with">
            Partner With Us →
          </button>
</a>
        </section>

        {/* Bottom Cards */}

        <section className="support-grid">

          <div className="support-card">
            <div className="imagecon">
            <img src={temple} alt="" />
         <h4 style={{ color: "purple" }}>For Schools</h4>

            </div>
            <div className="contentcon">
            <p>Partner with us to bring hands-on learning to your students.</p>
            <a href=""><h5>Contact Schools Team →</h5></a>
            </div>
          </div>

          <div className="support-card">
             <div className="imagecon">
            <img src={temple} alt="" />

            <h4  style={{ color: "orange" }}>For Parents</h4>
            </div>
            <div className="contentcon">

            <p>Have questions about programs or enrollments? We're here to help.</p>
            <a href=""><h5>Contact Support  →</h5></a>

          </div>
</div>
          <div className="support-card">
             <div className="imagecon">
            <img src={temple} alt="" />

            <h4  style={{ color: "green" }}>For Corporate</h4>
            </div>
            <div className="contentcon">

            <p>Explore collaboration, CSR, & partnership opportunities.</p>
            <a href=""><h5>Contact Schools Team →</h5></a>

            </div>
          </div>

          <div className="support-card">
             <div className="imagecon">
            <img src={temple} alt="" />

            <h4  style={{ color: "blue" }}>For Store Inquiries</h4>
            </div>
            <div className="contentcon">

            <p>Questions about orders.</p>
            <a href=""><h5>Contact Schools Team →</h5></a>
</div>
          </div>

          <div className="support-card">
             <div className="imagecon">
            <img src={temple} alt="" />

            <h4  style={{ color: "purple" }}>For Media</h4>
            </div>
            <div className="contentcon">

            <p>Press and media inquiries.</p>
            <a href=""><h5>Contact Schools Team →</h5></a>
</div>
          </div>

        </section>

      </div>
      <Footer />
    </>
  );
}

export default Contactbtn;