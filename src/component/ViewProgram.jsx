import React from "react";
import "../component/css/viewprogram.css";
import {
  FaSearch,
  FaArrowRight,
  FaBell,
  FaCalendarAlt,
  FaBookmark,
  FaStar,
} from "react-icons/fa";
import anita from "../assets/images/anita.jpeg"

function ViewProgram() {
  return (
    <div className="blog-page">

      {/* HERO SECTION */}
      <section className="blog-hero">

        <div className="blog-left">


          <h1>
            Nexu <span>ThinkLab Blog</span>
          </h1>

          <h3>
            Ideas, insights, and inspiration for a future of innovation.
          </h3>

          <p className="hero-desc">
            Explore articles, tips, and stories on STEAM education,
            robotics, innovation, and digital skills to empower
            young minds and educators.
          </p>

          <div className="hero-buttons">
            <button className="explore-btn">
              Explore Articles <FaArrowRight />
            </button>

            <button className="subscribe-btn">
              Subscribe <FaBell />
            </button>
          </div>

        </div>

        <div className="blog-right">

          <div className="main-image">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800"
              alt=""
            />
          </div>

          <div className="side-images">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=600"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600"
              alt=""
            />
          </div>

        </div>

      </section>


      <section className="filter-section">

        <div className="search-box">
          <input type="text" placeholder="Search articles..." />
          <FaSearch />
        </div>

        <select>
          <option>All Categories</option>
        </select>

        <select>
          <option>All Topics</option>
        </select>

        <select>
          <option>Latest</option>
        </select>

      </section>

 

      <section className="content-wrapper">

        <div className="left-content">


          <h2 className="section-title">
           <FaStar />  Featured Post
          </h2>

          <div className="featured-card">

            <img
              src="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=800"
              alt=""
            />

            <div className="featured-info">

              <span className="tagss">
                Robotics  .   <span>  May 20,2024</span>
              </span>

              <h3>
                Getting Started with Robotics:
                A Beginner's Guide
              </h3>

              <p>
                Everything you need to know to build
                your first robot and begin your
                robotics journey.
              </p>
<div className="by">
  <div className="im">
    <img src={anita} alt="" />
  </div>
  <div className="bycon">
    <h5>By Anita Karki</h5>
    <p>Program Lead</p>
  </div>
</div>
              <div className="meta">
                <span>5 min read</span>
                <span>1.2k views</span>
              </div>

              <a href="/">
                Read More →
              </a>

            </div>

          </div>

          {/* ARTICLES */}

          <div className="latest-header">
            <h2>Latest Articles</h2>
            <a href="/">View All Articles →</a>
          </div>

          {[1, 2, 3, 4].map((item) => (
            <div className="article-card" key={item}>

              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=700"
                alt=""
              />

              <div className="article-info">

                <span className="category">
                  STEAM Education
                </span>

                <h3>
                  Why STEAM Education is Essential
                  for the Future
                </h3>

                <p>
                  Discover how STEAM learning builds
                  critical thinking, creativity and
                  problem-solving skills.
                </p>

                <div className="article-meta">
                  <span>4 min read</span>
                  <span>892 views</span>
                </div>

              </div>

              <FaBookmark className="bookmark" />

            </div>
          ))}

          {/* PAGINATION */}

          <div className="pagination">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>10</button>
          </div>

        </div>

        {/* SIDEBAR */}

        <div className="sidebar">

          <div className="sidebar-card">

            <h3>Popular Topics</h3>

            <ul>
              <li>Robotics</li>
              <li>AI & Future Tech</li>
              <li>STEAM Education</li>
              <li>Digital Skills</li>
              <li>Innovation</li>
            </ul>

          </div>

          <div className="newsletter">

            <h3>Stay Inspired</h3>

            <p>
              Subscribe to our newsletter and get
              the latest articles delivered to
              your inbox.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>

          </div>

          <div className="sidebar-card">

            <h3>Popular Articles</h3>

            <div className="popular-item">
              <img
                src="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=400"
                alt=""
              />
              <span>
                Top 5 Robotics Kits for Young Innovators
              </span>
            </div>

            <div className="popular-item">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400"
                alt=""
              />
              <span>
                Coding for Kids: Where to Start?
              </span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ViewProgram;