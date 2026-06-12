import React from "react";
import "../component/css/viewprogram.css";
import Footer from "./Footer"

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
  const topics = [
  {
    title: "Robotics",
    articles: "24 Articles",
    image: anita,
  },
  {
    title: "AI & Future Tech",
    articles: "18 Articles",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200",
  },
  {
    title: "STEAM Education",
    articles: "15 Articles",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200",
  },
  {
    title: "Digital Skills",
    articles: "20 Articles",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200",
  },
  {
    title: "Innovation",
    articles: "12 Articles",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200",
  },
];
const articles = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=700",
    category: "STEAM Education",
    title: "Why STEAM Education is Essential for the Future",
    description:
      "Discover how STEAM learning builds critical thinking, creativity and problem-solving skills.",
    readTime: "4 min read",
    views: "892 views",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700",
    category: "Digital Skills",
    title: "Digital Skills Every Student Should Learn",
    description:
      "Explore the most important digital skills that prepare students for tomorrow's careers.",
    readTime: "5 min read",
    views: "1.2k views",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700",
    category: "Robotics",
    title: "The Rise of Robotics in Education",
    description:
      "Learn how robotics programs are transforming classrooms and student engagement.",
    readTime: "6 min read",
    views: "756 views",
  },
];
  return (
    <>
   
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
          <option>hello</option>
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
               Robotics  <span className="dot"> . </span>  <span className="s">  May 20,2024</span>
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
              
              <div className="li">

              <a href="">
                Read More →
              </a>
              </div>
              </div>

            </div>

          </div>

         

          <div className="latest-header">
            <h2>Latest Articles</h2>
            <a href="/">View All Articles →</a>
          </div>

         {articles.map((article) => (
  <div className="article-card" key={article.id}>
    <img
      src={article.image}
      alt={article.title}
      className="article-image"
    />

    <div className="article-info">
      <span className="category">{article.category}</span>

      <h3>{article.title}</h3>

      <p>{article.description}</p>

      <div className="by">
        <div className="ima">
          <img src={anita} alt="Anita Karki" />
        </div>

        <div className="bycon">
          <h5>By Anita Karki</h5>
          <p>Program Lead</p>
        </div>
      </div>

      <div className="article-meta">
        <span>{article.readTime}</span>
        <span>{article.views}</span>
      </div>
    </div>

    <FaBookmark className="bookmark" />
  </div>
))}

        

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

         <div className="popular-topics">
  <h3>Popular Topics</h3>

  <div className="topics-list">
    {topics.map((topic, index) => (
      <div className="topic-card" key={index}>
        <img src={topic.image} alt={topic.title} />

        <div className="topic-content">
          <h4>{topic.title}</h4>
          <p>{topic.articles}</p>
        </div>
      </div>
    ))}
  <a className="l" href="">View All Topics →</a>
  </div>
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
            <div className="popular-item">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400"
                alt=""
              />
              <span>
                Coding for Kids: Where to Start?
              </span>
            </div><div className="popular-item">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400"
                alt=""
              />
              <span>
                Coding for Kids: Where to Start?
              </span>
            </div><div className="popular-item">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400"
                alt=""
              />
              <span>
                Coding for Kids: Where to Start?
              </span>
            </div><div className="popular-item">
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
  <Footer />
     </>
  );
}

export default ViewProgram;