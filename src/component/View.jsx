import React from "react";
import "../component/css/view.css";
import Footer from "./Footer"
import robotCar from "../assets/images/robotCar.jpg"
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import RoboticsProjects from "./RoboticsProjects";
import ArticleDetailPage from "./ArticleDetailPage";
import New from "./New";
const View = () => {
  return (
    <>

      <div className="wholepage">
        <div className="robotics-page">


          <section className="heroview">
            <div className="hero-content">

              <span className="category-tag">Robotics</span>

              <h1>
                Getting Started with Robotics:
                <span> A Beginner's Guide for Young Innovators</span>
              </h1>

              <div className="meta">
                <span>📅 June 2, 2026 .</span>
                <span>👨‍🏫 By Nexu ThinkLab Team </span>
                <span>. ⏱ 6 Min Read</span>
              </div>

              <div className="share">
                <span>Share this article:</span>
                <button> <FaFacebook /></button>
                <button><FaTwitter /></button>
                <button><FaInstagram /></button>
                <button><FaWhatsapp /></button>
              </div>
            </div>

            <div className="hero-image">
              <img
                src={robotCar}
                alt="robot"
              />
            </div>
          </section>

          <div className="intro-box">
            <div className="robot-icon">🤖</div>

            <p>
              Robotics is one of the fastest-growing fields in the world.
              From self-driving cars to smart home devices, robots are
              becoming part of our everyday lives. The best part ? You can start learning robotics today, even if you're a complete begginner!
            </p>
          </div>

          <section className="section">
            <h2>1. What is Robotics?</h2>

            <div className="two-col">
              <p>
                Robotics is the combination of science, technology,
                engineering, and creativity that allows us to design,
                build, and program robots to perform tasks. It involves 
                hardware components like motors and sensors, and software 
                like coding and algorithms.

              </p>

              <img
                src={robotCar}
                alt=""
              />
            </div>
          </section>

          {/* Benefits */}
          <section className="section">
            <h2>2. Why Should Students Learn Robotics?</h2>

            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="whyim">
                  <img src="https://media.licdn.com/dms/image/v2/D4D0BAQFX9pn2cEGYKg/company-logo_200_200/B4DZsIZ909LYAI-/0/1765372583826/blu_blu_studios_logo?e=2147483647&v=beta&t=3O3eka5276iDkn7smXFhWg7hYVWrjUXXbrkblP6EZ5A" alt="" />
                </div>
                <div className="whycon">
                  <h4>Problem Solving</h4>
                  <p className="c">Robotics helps students think critically and solve real-world problems.</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="whyim">
                  <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjJExt0pUyaKfeIZ8Hbm01DzMmoxrZcEnS9Y5g3bhAU95xwHHv" alt="" />
                </div>
                <div className="whycon">
                  <h4>Creativity </h4>
                  <p>Design, build and innovate your own unique projects.</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="whyim">
                  <img src="https://play-lh.googleusercontent.com/IlszrhZnbv-ku2M4NvspWC4HcxzheRez9I5rATCiNOOukajfloIfIIrnQbZdFroLr3k" alt="" />
                </div>
                <div className="whycon">
                  <h4>Coding Skills</h4>
                  <p>Learn programming concepts in a fun and practical way..</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="whyim">
                  <img src="https://www.shutterstock.com/image-illustration/flat-green-briefcase-icon-circle-260nw-362660282.jpg" alt="" />
                </div>
                <div className="whycon">
                  <h4>Future Careers</h4>
                  <p>Robotics skills pen pathways to exciting career opportunities.</p>
                </div>
              </div>
            </div>
          </section>

          <RoboticsProjects />
          <ArticleDetailPage />
          <New />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default View;