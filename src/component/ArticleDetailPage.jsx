import React from "react";
import icon from "../assets/images/bulb.png"
import logo from "../assets/images/logo.png"
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

import "../component/css/ArticleDetailPage.css";

function ArticleDetailPage() {
  return (
    <div className="articleDetailPage">

      {/* Quote Banner */}
      <div className="articleDetailQuoteBanner">
        <FaQuoteLeft className="articleDetailQuoteIcon" />
        <div className="articleDetailQuoteContent">
          <h3>
            The best way to predict the future is to invent it.
          </h3>
          <p>— Alan Kay</p>
        </div>
      </div>

      {/* STEAM Section */}
      <div className="articleDetailSteamSection">

        <div className="articleDetailSteamContent">
          <h2>4. STEAM + Robotics = Limitless Possibilities</h2>

          <ul>
            <li><strong>Science:</strong> Explore how things work.</li>
            <li><strong>Technology:</strong> Use tools and tech to build.</li>
            <li><strong>Engineering:</strong> Design and improve solutions.</li>
            <li><strong>Arts:</strong> Add creativity to your projects.</li>
            <li><strong>Math:</strong> Apply logic and calculations.</li>
          </ul>
        </div>

        <div className="articleDetailSteamImage">
          <img
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200"
            alt=""
          />
        </div>

      </div>

    
    

      {/* Comment Form */}
      {/* <div className="articleDetailCommentSection">

        <h3>Leave a Comment</h3>

        <form className="articleDetailCommentForm">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <textarea
            placeholder="Your Comment"
          />

          <button type="submit">
            Post Comment
            <FaPaperPlane />
          </button>

        </form>

      </div> */}

    </div>
  );
}

export default ArticleDetailPage;