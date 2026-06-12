import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

import "../component/css/exploreevents.css";
import Footer from "./Footer";

function Explorerevents() {
  const events = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      title: "National Robotics Championship",
      date: "August 16-17, 2025",
      location: "Kathmandu",
      participants: "500+ Participants",
      description:
        "Compete with top young innovators from across Nepal in robotics and AI challenges.",
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      title: "Coding Bootcamp 2025",
      date: "September 10, 2025",
      location: "Pokhara",
      participants: "300+ Students",
      description:
        "Learn web development, app creation, and programming with industry experts.",
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      title: "AI & Future Tech Summit",
      date: "October 5, 2025",
      location: "Butwal",
      participants: "700+ Innovators",
      description:
        "Explore the future of Artificial Intelligence, robotics, and smart technology.",
    },

    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
      title: "Innovation Expo",
      date: "November 12, 2025",
      location: "Dhangadhi",
      participants: "400+ Visitors",
      description:
        "Showcase creative ideas, projects, and startup innovations from students.",
    },
  ];

  return (
    <>
    <section className="exploreevents-section">
      {/* HEADER */}
      <div className="exploreevents-header">

        <h2 className="exploreevents-title">
          Explore Our Events
        </h2>

        <p className="exploreevents-description">
          Join exciting competitions, workshops, bootcamps,
          and innovation programs designed for future creators.
        </p>
      </div>

      {/* CARDS */}
      <div className="exploreevents-grid">
        {events.map((event) => (
          <div
            className="exploreevents-card"
            key={event.id}
          >
            {/* IMAGE */}
            <div className="exploreevents-image-wrapper">
              <img
                src={event.image}
                alt={event.title}
                className="exploreevents-image"
              />
            </div>

            {/* CONTENT */}
            <div className="exploreevents-content">
              <h3 className="exploreevents-card-title">
                {event.title}
              </h3>

              <p className="exploreevents-card-description">
                {event.description}
              </p>

              {/* DETAILS */}
              <div className="exploreevents-details">
                <span>
                  <FaCalendarAlt />
                  {event.date}
                </span>

                <span>
                  <FaMapMarkerAlt />
                  {event.location}
                </span>

                <span>
                  <FaUsers />
                  {event.participants}
                </span>
              </div>

              
            
            </div>
          </div>
        ))}
      </div>
    </section>
      <Footer />
      </>
  );
}

export default Explorerevents;