import React from "react";
import "../component/css/viewprogram.css";
import cover from "../assets/images/cover.jpeg";

import cover1 from "../assets/images/aboutus.jpg";
import Footer from "./Footer";
// import cover2 from "../assets/cover2.jpg";
// import cover3 from "../assets/cover3.jpg";
// import cover4 from "../assets/cover4.jpg";

const articles = [
  {
    image: cover1,
    tag: "STEAM Education",
    title: "Why STEAM Education is Essential for the Future",
    desc: "Discover how STEAM learning builds critical thinking, creativity and problem-solving skills.",
    readTime: "4 min read",
    views: "892 views",
  },
  {
    image: cover,
    tag: "AI & Future Tech",
    title: "AI for Kids: Understanding Tomorrow, Today",
    desc: "Simple ways to introduce artificial intelligence concepts to young learners.",
    readTime: "6 min read",
    views: "1.1k views",
  },
  {
    image: cover,
    tag: "Innovation",
    title: "Building a Sustainable Future Through Innovation",
    desc: "How young innovators are solving real-world problems with creativity and technology.",
    readTime: "5 min read",
    views: "748 views",
  },
  {
    image: cover,
    tag: "School Stories",
    title: "How Schools Are Transforming Learning",
    desc: "A look at how partner schools are creating impactful learning experiences.",
    readTime: "4 min read",
    views: "633 views",
  },
];
function ViewProgram() {
  return (
    <>
      <div className="blog-page">

        <section className="hero-section">
          <div className="hero-left">

            <h1>
              Nexu <span>ThinkLab Blog</span>
            </h1>

            <p className="hero-subtitle">
              Ideas, insights, and inspiration for a future of innovation.
            </p>

            <p className="hero-desc">
              Explore articles, tips, and stories on STEAM education,
              robotics, innovation, and digital skills.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Explore Articles</button>
              <button className="secondary-btn">Subscribe</button>
            </div>
          </div>

          <div className="hero-right">
            <img
              src={cover}
              alt="Hero"
            />
          </div>
        </section>

        {/* Filters */}
        <section className="filter-section">
          <input type="text" placeholder="Search articles..." />

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

        {/* Main Content */}
        <section className="content-section">

          <div className="left-content">

            {/* Featured Post */}
            <div className="featured-post">
              <img src={cover} alt="" />

              <div className="featured-content">
                <span className="category">Robotics</span>

                <h2>
                  Getting Started with Robotics: A Beginner's Guide
                </h2>

                <p>
                  Everything you need to know to build your first robot and begin
                  your robotics journey.
                </p>

                <div className="meta">
                  <span>5 min read</span>
                  <span>1.2k views</span>
                </div>
              </div>
            </div>

            {/* Articles */}
            <h2 className="section-title">Latest Articles</h2>

            {articles.map((article, index) => (
              <div className="article-card" key={index}>
                <img src={article.image} alt={article.title} />

                <div className="article-info">
                  <span className="article-tag">{article.tag}</span>

                  <h3>{article.title}</h3>

                  <p>{article.desc}</p>

                  <div className="meta">
                    <span>{article.readTime}</span>
                    <span>{article.views}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="pagination">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">

            <div className="sidebar-card">
              <h3>Popular Topics</h3>

              <div className="topic-item">
                <img src={cover} alt="Robotics" />

                <div className="topic-content">
                  <h4>Robotics</h4>
                  <p>24 Articles</p>
                </div>
              </div>

              <div className="topic-item">
                <img src={cover} alt="AI" />

                <div className="topic-content">
                  <h4>AI & Future Tech</h4>
                  <p>18 Articles</p>
                </div>
              </div>

              <div className="topic-item">
                <img src={cover} alt="STEAM" />

                <div className="topic-content">
                  <h4>STEAM Education</h4>
                  <p>32 Articles</p>
                </div>
              </div>

              <div className="topic-item">
                <img src={cover} alt="Digital Skills" />

                <div className="topic-content">
                  <h4>Digital Skills</h4>
                  <p>16 Articles</p>
                </div>
              </div>

              <div className="topic-item">
                <img src={cover} alt="Innovation" />

                <div className="topic-content">
                  <h4>Innovation</h4>
                  <p>21 Articles</p>
                </div>
              </div>

              <a href="/" className="view-topics">
                View All Topics →
              </a>
            </div>

            <div className="subscribe-box">
              <h3>Stay Inspired</h3>

              <p>
                Subscribe to our newsletter and get updates delivered to your
                inbox.
              </p>

              <input
                type="email"
                placeholder="Enter your email"
              />

              <button>Subscribe</button>
            </div>

            <div className="sidebar-card">
              <h3>Popular Articles</h3>

              <div className="mini-article">
                <img src={cover} alt="" />
                <span>Top 5 Robotics Kits for Young Innovators</span>
              </div>

              <div className="mini-article">
                <img src={cover} alt="" />
                <span>Coding for Kids: Where to Start?</span>
              </div>
              <div className="mini-article">
                <img src={cover} alt="" />
                <span>Coding for Kids: Where to Start?</span>
              </div>
              <div className="mini-article">
                <img src={cover} alt="" />
                <span>Coding for Kids: Where to Start?</span>
              </div>
              <div className="mini-article">
                <img src={cover} alt="" />
                <span>Coding for Kids: Where to Start?</span>
              </div>
              <div className="mini-article">
                <img src={cover} alt="" />
                <span>Coding for Kids: Where to Start?</span>
              </div>
            </div>

          </div>
        </section>

      </div>
        <Footer />
    </>
  );
}

export default ViewProgram;