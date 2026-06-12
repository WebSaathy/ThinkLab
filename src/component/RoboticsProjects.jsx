import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../component/css/robotics.css";

function RoboticsProjects() {
  const projectRef = useRef(null);

  const scrollLeft = () => {
    projectRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    projectRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="section">
      <div className="section-header">
        <h2>3. Beginner Robotics Projects</h2>
      </div>

      <div className="projects-wrapper">

        <button className="navbtn left-btn" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="projects-grid" ref={projectRef}>
          <div className="project-card">
            <img src="/project1.jpg" alt="" />
            <h4>Line Following Robot</h4>
            <p>A simple robot that follows a line.</p>
          </div>

          <div className="project-card">
            <img src="/project2.jpg" alt="" />
            <h4>Obstacle Avoiding Robot</h4>
            <p>Detects and avoids obstacles.</p>
          </div>

          <div className="project-card">
            <img src="/project3.jpg" alt="" />
            <h4>Bluetooth Controlled Robot</h4>
            <p>Controlled using smartphone.</p>
          </div>

          <div className="project-card">
            <img src="/project4.jpg" alt="" />
            <h4>Smart Car Robot</h4>
            <p>Autonomous navigation project.</p>
          </div>

          <div className="project-card">
            <img src="/project5.jpg" alt="" />
            <h4>Arduino Robot</h4>
            <p>Built using Arduino Uno.</p>
          </div>

          <div className="project-card">
            <img src="/project5.jpg" alt="" />
            <h4>Arduino Robot</h4>
            <p>Built using Arduino Uno.</p>
          </div>
        </div>

        <button className="navbtn right-btn" onClick={scrollRight}>
          <FaChevronRight />
        </button>

      </div>
    </section>
  );
}

export default RoboticsProjects;