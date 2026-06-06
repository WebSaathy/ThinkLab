import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClipboardList,
} from "react-icons/fa";
import Footer from "./Footer";
import "../component/css/hostanevent.css";

function Hostanevent() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    organization: "",
    location: "",
    eventdate: "",
    eventtype: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your event hosting request has been submitted!");
  };

  return (
    <>
    <section className="hostanevent-container">
      {/* LEFT CONTENT */}
      <div className="hostanevent-left">
        <span className="hostanevent-tag">
          Host With Us
        </span>

        <h1 className="hostanevent-title">
          Organize Your Next Innovation Event
        </h1>

        <p className="hostanevent-description">
          Partner with us to host robotics competitions,
          coding bootcamps, STEM workshops, innovation
          expos, and technology events for students and
          educators across Nepal.
        </p>

        <div className="hostanevent-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
            alt="Host Event"
            className="hostanevent-image"
          />
        </div>

        <div className="hostanevent-benefits">
          <div className="hostanevent-benefit-card">
            <h3>Professional Management</h3>

            <p>
              End-to-end support for planning,
              organizing, and managing events.
            </p>
          </div>

          <div className="hostanevent-benefit-card">
            <h3>National Reach</h3>

            <p>
              Connect with students, schools,
              innovators, and tech communities.
            </p>
          </div>

          <div className="hostanevent-benefit-card">
            <h3>Hands-on Learning</h3>

            <p>
              Create engaging learning experiences
              through STEM and innovation activities.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="hostanevent-form-wrapper">
        <h2 className="hostanevent-form-title">
          Host an Event
        </h2>

        <form
          className="hostanevent-form"
          onSubmit={handleSubmit}
        >
          {/* NAME */}
          <div className="hostanevent-input-group">
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

          {/* EMAIL */}
          <div className="hostanevent-input-group">
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

          {/* PHONE */}
          <div className="hostanevent-input-group">
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

          {/* ORGANIZATION */}
          <div className="hostanevent-input-group">
            <FaBuilding />

            <input
              type="text"
              name="organization"
              placeholder="School / Organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </div>

          {/* LOCATION */}
          <div className="hostanevent-input-group">
            <FaMapMarkerAlt />

            <input
              type="text"
              name="location"
              placeholder="Event Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* DATE */}
          <div className="hostanevent-input-group">
            <FaCalendarAlt />

            <input
              type="date"
              name="eventdate"
              value={formData.eventdate}
              onChange={handleChange}
              required
            />
          </div>

          {/* EVENT TYPE */}
          <div className="hostanevent-input-group">
            <FaClipboardList />

            <select
              name="eventtype"
              value={formData.eventtype}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Event Type
              </option>

              <option value="Robotics">
                Robotics Competition
              </option>

              <option value="Coding">
                Coding Bootcamp
              </option>

              <option value="Workshop">
                STEM Workshop
              </option>

              <option value="Expo">
                Innovation Expo
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Tell us about your event..."
            value={formData.message}
            onChange={handleChange}
            className="hostanevent-textarea"
            rows="5"
          ></textarea>

          {/* BUTTON */}
          <button
            type="submit"
            className="hostanevent-submit-btn"
          >
            Submit Request
          </button>
        </form>
      </div>
      
    </section>
    <Footer />
    </>
  );
}

export default Hostanevent;