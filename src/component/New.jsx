import React from "react";
import logo from "../assets/images/logo.png"
import "../component/css/new.css";
import {
  FaQuoteLeft,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPaperPlane,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";
function New() {
  const tags = [
    "#Robotics",
    "#STEAM",
    "#Arduino",
    "#Coding",
    "#Innovation",
    "#KidsLearning",
  ];

  const articles = [
    {
      title: "Introduction to Arduino for Beginners",
      category: "Robotics",
      date: "May 25, 2026",
      read: "5 min read",
      image: "https://via.placeholder.com/140x90",
    },
    {
      title: "AI for Kids: Understanding Tomorrow, Today",
      category: "AI & Future Tech",
      date: "May 18, 2026",
      read: "6 min read",
      image: "https://via.placeholder.com/140x90",
    },
    {
      title: "The Importance of Hands-on Learning",
      category: "STEAM Education",
      date: "May 10, 2026",
      read: "4 min read",
      image: "https://via.placeholder.com/140x90",
    },
  ];

  return (
    <div className="page-container">
      {/* Download Section */}
      <div className="download-section">
        <div className="download-left">
          <h2>Download Resources</h2>
          <p>
            Access helpful resources to start your robotics journey.
          </p>
        </div>

        <div className="download-cards">
          <div className="download-card">
            <span>📄</span>
            <div>
              <h4>Activity Sheet</h4>
              <p>PDF Document</p>
            </div>
          </div>

          <div className="download-card">
            <span>📊</span>
            <div>
              <h4>Presentation</h4>
              <p>PPT Document</p>
            </div>
          </div>

          <div className="download-card">
            <span>📑</span>
            <div>
              <h4>Lesson Plan</h4>
              <p>PDF Document</p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-grid">
        <div className="info-card">
          <div className="team-box">
            <div className="team-logo"><img src={logo} alt="" /></div>

            <div>
              <h3>Nexu ThinkLab Team ✓</h3>
              <p>
                Passionate educators and innovators working to inspire
                the next generation through STEAM education,
                innovation and digital skills.
              </p>
            </div>
          </div>
        </div>

        <div className="info-card">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <span><FaFacebookF /></span>
            <span><FaInstagram /></span>
            <span><FaYoutube /></span>
            <span><FaLinkedinIn /></span>
          </div>
        </div>

        <div className="info-card">
          <h3>Tags:</h3>

          <div className="tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="article-section">
        <div className="article-header">
          <h3>You May Also Like</h3>
          <button>View All Articles →</button>
        </div>

        <div className="article-list">
          {articles.map((item, index) => (
            <div className="article-card" key={index}>
              <img src={item.image} alt="" />

              <div>
                <small>{item.category}</small>
                <h4>{item.title}</h4>
                <p>
                  {item.date} • {item.read}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comment Section */}
      <div className="comment-section">
        <h3>Leave a Comment</h3>

        <div className="comment-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Your Comment" />
          <button>Post Comment  <FaPaperPlane /></button>
        </div>
      </div>
    </div>
  );
}

export default New;