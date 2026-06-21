import React from "react";
// import icon from "../assets/images/bulb.png"
// import logo from "../assets/images/logo.png"
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

function ArticleDetailPage({ data }) {
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
          <h2>4. {data.Fourth_Section_Title}</h2>

          <ul>
            <li><strong>Science:</strong> {data.Fourth_Section_Point_1}</li>
            <li><strong>Technology:</strong> {data.Fourth_Section_Point_2}</li>
            <li><strong>Engineering:</strong> {data.Fourth_Section_Point_3}</li>
            <li><strong>Arts:</strong> {data.Fourth_Section_Point_4}</li>
            <li><strong>Math:</strong> {data.Fourth_Section_Point_5}</li>
          </ul>
        </div>

        <div className="articleDetailSteamImage">
          <img
            src={data.Fourth_Section_Image}
            alt={data.Fourth_Section_Title}
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