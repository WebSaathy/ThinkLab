import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaSchool,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";
import Footer from "./Footer"
import "../component/css/register.css";

function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
    team: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Registration Submitted Successfully!");
  };

  return (
    <>
    <section className="register-container">
      {/* LEFT SIDE */}
      <div className="register-event-section">
        <div className="register-event-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="register-event-image"
          />
        </div>

        <div className="register-event-content">
          <span className="register-event-tag">Featured Event</span>

          <h2 className="register-event-title">
            National Robotics Championship 2025
          </h2>

          <p className="register-event-description">
            The biggest robotics competition bringing together
            students from across Nepal to compete and innovate.
          </p>

          <div className="register-event-details">
            <span>
              <FaCalendarAlt />
              August 16-17, 2025
            </span>

            <span>
              <FaMapMarkerAlt />
              Kathmandu
            </span>

            <span>
              <FaUsers />
              500+ Participants
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="register-form-wrapper">
        <h2 className="register-form-title">
          Event Registration
        </h2>

        <form
          className="register-form"
          onSubmit={handleSubmit}
        >
          <div className="register-input-group">
            <FaUser />

            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-input-group">
            <FaEnvelope />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-input-group">
            <FaPhone />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-input-group">
            <FaSchool />

            <input
              type="text"
              name="school"
              placeholder="School / College Name"
              value={formData.school}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-input-group">
            <input
              type="text"
              name="grade"
              placeholder="Grade / Level"
              value={formData.grade}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-input-group">
            <input
              type="text"
              name="team"
              placeholder="Team Name (Optional)"
              value={formData.team}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="register-submit-btn"
          >
            Register Now
          </button>
        </form>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default Register;