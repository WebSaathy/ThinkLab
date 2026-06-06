import React from "react";
import Footer from "./Footer"
import "../component/css/school.css";
import banner from "../assets/images/banner.png"
import {
  FaSearch,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Schools() {
  const schools = [
    {
      name: "Kathmandu Model College",
      location: "Bagbazar, Kathmandu",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
    },
    {
      name: "St. Xavier's School Godavari",
      location: "Godavari, Lalitpur",
      logo: "https://cdn-icons-png.flaticon.com/512/4207/4207247.png",
    },
    {
      name: "Uniglobe SS/College",
      location: "Kamaladi, Kathmandu",
      logo: "https://cdn-icons-png.flaticon.com/512/3976/3976626.png",
    },
    {
      name: "The Budhanilkantha School",
      location: "Budhanilkantha, Kathmandu",
      logo: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    },
    {
      name: "Green Valley School",
      location: "Baneshwor, Kathmandu",
      logo: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
    {
      name: "Presidential Graduate School",
      location: "Baneshwor, Kathmandu",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
    },
    {
      name: "SOS Hermann Gmeiner School",
      location: "Sanepa, Lalitpur",
      logo: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    },
    {
      name: "Mount Annapurna Secondary School",
      location: "Pokhara, Kaski",
      logo: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    },
    {
      name: "Little Angels' School",
      location: "Kupondole, Lalitpur",
      logo: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    },
    {
      name: "Southwestern State College",
      location: "Dillibazar, Kathmandu",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "Kantipur Engineering College",
      location: "Dhapakhel, Lalitpur",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      name: "Oxford College of Engineering",
      location: "Balkumari, Lalitpur",
      logo: "https://cdn-icons-png.flaticon.com/512/3976/3976626.png",
    },
    {
      name: "Vidhya Sanskar School",
      location: "Maharajgunj, Kathmandu",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
    },
    {
      name: "Swostishree Gurukul IB World School",
      location: "Sanothimi, Bhaktapur",
      logo: "https://cdn-icons-png.flaticon.com/512/2991/2991112.png",
    },
    {
      name: "Gramya Secondary School",
      location: "Bharatpur, Chitwan",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
    },
    {
      name: "St. Mary's School",
      location: "Jawalakhel, Lalitpur",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
    },
    {
      name: "Navjyoti Secondary School",
      location: "Sano Thimi, Bhaktapur",
      logo: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    },
    {
      name: "Reliance International Academy",
      location: "Kalanki, Kathmandu",
      logo: "https://cdn-icons-png.flaticon.com/512/3976/3976626.png",
    },
    {
      name: "Universal College",
      location: "Baneshwor, Kathmandu",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
    },
    {
      name: "Janapriya Multiple Campus",
      location: "New Baneshwor, Kathmandu",
      logo: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
  ];

  return (
    <>
    <div className="schools-page">
      {/* Header */}
      <div className="top-section">
        <h1>
          Schools Partnered With <span>Nexu ThinkLab</span>
        </h1>

        <p>
          Our partners are driving change by bringing hands-on learning,
          creativity, and innovation into classrooms across Nepal.
        </p>
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search schools by name or location..."
          />
          <FaSearch className="search-icon" />
        </div>

     <div className="dropdown">
  <select>
    <option>All Provinces</option>
    <option>Koshi</option>
    <option>Madhesh</option>
    <option>Bagmati</option>
    <option>Gandaki</option>
    <option>Lumbini</option>
    <option>Karnali</option>
    <option>Sudurpashchim</option>
  </select>
</div>

<div className="dropdown">
  <select>
    <option>All Districts</option>
    <option>Kathmandu</option>
    <option>Lalitpur</option>
    <option>Bhaktapur</option>
    <option>Kailali</option>
    <option>Banke</option>
    <option>Dang</option>
  </select>
</div>

<div className="dropdown">
  <select>
    <option>All Levels</option>
    <option>Beginner</option>
    <option>Intermediate</option>
    <option>Advanced</option>
  </select>
</div>
      </div>

      {/* School Cards */}
      <div className="schools-grid">
        {schools.map((school, index) => (
          <div className="school-card" key={index}>
            <div className="logo-wrapper">
              <img src={school.logo} alt={school.name} />
            </div>

            <h3>{school.name}</h3>

            <p>
              <FaMapMarkerAlt className="location-icon" />
              {school.location}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button>
          <FaChevronLeft />
        </button>

        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <span>...</span>
        <button>6</button>

        <button>
          <FaChevronRight />
        </button>
      </div>

    
    </div>
  {/* Bottom CTA */}
      <div className="partner-banner">
        <div className="banner-left">
          <div className="b"><img src={banner} alt="" /></div>

          <div>
            <h2>
              Partner With Us <br />
              <span>Shape the Future,</span> Together.
            </h2>

            <p>
              Bring STEAM education, innovation labs,
              <br />
              and hands-on learning to your school community.
            </p>
          </div>
        </div>

        <div className="banner-buttons">
          <button className="partner-btn">Partner With Us →</button>

          <button className="proposal-btn">
            Download Proposal ↓
          </button>
        </div>
      </div>
      <Footer />
      </>
  );
}

export default Schools;