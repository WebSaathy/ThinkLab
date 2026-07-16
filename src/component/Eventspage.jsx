import React, { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import update from "../assets/images/update-removebg-preview.png"
import "../component/css/eventpage.css";
import {
  FaCalendarAlt,
  FaUsers,
  FaSchool,
  FaTrophy,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,

} from "react-icons/fa";
import Footer from "./Footer"
function Eventspage() {
  const galleryRef = useRef(null);
  const scrollLeft = () => {
    galleryRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };
const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.3,
});
  const scrollRight = () => {
    galleryRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  const events = [
    {
      type: "Workshop",
      title: "Robotics Basics Workshop",
      paragraph: "Hands-on session to build and program your first robot",
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800",
      location: "Nexu Lab, Kathmandu",
      time: "10:00 AM - 1:00 PM",
    },
    {
      type: "Competition",
      title: "Nexu Innovation Challenge",
      paragraph: "Compete, innovate, and present solutions to real-world problems.",
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800",
      location: "Kathmandu Model College",
      time: "9:00 AM - 4:00 PM",
    },
    {
      type: "Innovation Lab",
      title: "AI & IoT Exploration Lab",
      paragraph: "Explore AI and IOT through fun projects and experiments.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      location: "Nexu ThinkLab",
      time: "2:00 PM - 5:00 PM",
    },
    {
      type: "Webinar",
      title: "Future Skills in STEAM",
      paragraph: "Experts talk on building future-ready skills for students.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
      location: "Online (Zoom)",
      time: "11:00 AM - 12:30 PM",
    },
    {
      type: "Webinar",
      title: "Future Skills in STEAM",
      paragraph: "Experts talk on building future-ready skills for students.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
      location: "Online (Zoom)",
      time: "11:00 AM - 12:30 PM",
    }, {
      type: "Webinar",
      title: "Future Skills in STEAM",
      paragraph: "Experts talk on building future-ready skills for students.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
      location: "Online (Zoom)",
      time: "11:00 AM - 12:30 PM",
    },
  ];

  return (
    <>
      <div className="eventspage">
        {/* Hero Section */}
        <section className="eventspage-hero">
          <div className="eventspage-hero-left">
            <h1 className="eventspage-heading">
              Events That Inspire,
              <br />
              <span className="l1">Learning </span> That <span className="l2"> Lasts.</span>
            </h1>

            <p className="eventspage-description">
              Join our exciting range of workshops, competitions,
              innovation labs, and partner events designed to spark
              curiosity, creativity, and real-world problem solving.
            </p>

            <div className="eventspage-btns">
              <button className="eventspage-primary-btn">
                Upcoming Events ➜
              </button>

              <button className="eventspage-secondary-btn">
                Host an Event With Us ➜
              </button>
            </div>
          </div>

          <div className="eventspage-hero-right">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=900"
              alt=""
              className="eventspage-big-img"
            />

            <div className="eventspage-small-images">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        {/* <section className="eventspage-stats">
          <div className="eventspage-stat-card">
            <FaCalendarAlt />
            <div className="car">
            <h3>150+</h3>
            <p>Events Conducted</p>
            </div>
          </div>

          <div className="eventspage-stat-card">
            <FaUsers />
            <div className="car">
            <h3>10,000+</h3>
            <p>Participants Engaged</p>
            </div>
          </div>

          <div className="eventspage-stat-card">
            <FaSchool />
            <div className="car">
            <h3>200+</h3>
            <p>Partner Schools</p>
        </div>
          </div>

          <div className="eventspage-stat-card">
            <FaTrophy />
            <div className="car">
            <h3>25+</h3>
            <p>Competitions Hosted</p>
            </div>
          </div>
        </section> */}
        <section className="eventspage-stats" ref={ref}>

  <div className="eventspage-stat-card">
    <FaCalendarAlt />

    <div className="car">
      <h3>
        {inView ? (
          <CountUp
            end={150}
            duration={2.5}
          />
        ) : (
          0
        )}
        +
      </h3>

      <p>Events Conducted</p>
    </div>
  </div>

  <div className="eventspage-stat-card">
    <FaUsers />

    <div className="car">
      <h3>
        {inView ? (
          <CountUp
            end={10000}
            duration={2.5}
            separator=","
          />
        ) : (
          0
        )}
        +
      </h3>

      <p>Participants Engaged</p>
    </div>
  </div>

  <div className="eventspage-stat-card">
    <FaSchool />

    <div className="car">
      <h3>
        {inView ? (
          <CountUp
            end={200}
            duration={2.5}
          />
        ) : (
          0
        )}
        +
      </h3>

      <p>Partner Schools</p>
    </div>
  </div>

  <div className="eventspage-stat-card">
    <FaTrophy />

    <div className="car">
      <h3>
        {inView ? (
          <CountUp
            end={25}
            duration={2.5}
          />
        ) : (
          0
        )}
        +
      </h3>

      <p>Competitions Hosted</p>
    </div>
  </div>

</section>


        <section className="eventspage-upcoming">

          <div className="viewevent">
            <a href=""><button className="eventbutton">View All Events ➜</button></a>

          </div>
          <h2 className="eventspage-title">
            Upcoming Events
          </h2>

          <div className="eventspage-categories">
            <button className="active">All Events</button>
            <button>Workshops</button>
            <button>Competitions</button>
            <button>Innovation Labs</button>
            <button>Webinars</button>
            <button>Festivals</button>
            <button>School Events</button>
          </div>

          <div className="eventspage-grid">
            {events.map((event, index) => (
              <div className="eventspage-card" key={index}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="eventspage-card-image"
                />

                <div className="eventspage-card-content">
                  <span className="eventspage-card-type">
                    {event.type}
                  </span>

                  <h3 className="eventspage-card-title">
                    {event.title}
                  </h3>
                  <p className="eventpara" >{event.paragraph}</p>
                  <p className="eventspage-card-location">
                    <FaMapMarkerAlt /> {event.location}
                  </p>

                  <p className="eventspage-card-time">
                    <FaClock /> {event.time}
                  </p>

                  <button className="eventspage-card-btn">
                    Register Now ➜
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="eventspage-cta">
          <div className="eventspage-cta-content">
            <h2>Have an Event Idea?</h2>

            <p>
              Partner with us to organize impactful events that
              empower young minds and build future innovators.
            </p>

            <button>
              Host an Event With Us
            </button>
          </div>
        </section>

        <section className="eventspage-gallery">
          <div className="group">
            <h2 className="eventspage-gallery-title">Past Highlights</h2>

            <a href="">
              <button className="galbtn">View  Gallery ➜</button>
            </a>
          </div>

          {/* WRAPPER */}
          <div className="gallery-wrapper">

            {/* LEFT BUTTON */}
            <button className="gallery-btn left" onClick={scrollLeft}>
              <FaChevronLeft />
            </button>

            {/* SCROLL AREA */}
         <div className="eventspage-gallery-grid" ref={galleryRef}>

  <div className="gallery-item">
    <img src="https://diplomatnepal.com/wp-content/uploads/2026/01/616595781_1210702704575540_7375624176852531227_n-1024x683.jpg" alt="" />
    <h6>Nexu Innovation Challenge 2024</h6>
  </div>

  <div className="gallery-item">
    <img src="https://assets.skyfilabs.com/images/blog/top-10-reasons-why-kids-should-learn-robotics.webp " alt="" />
    <h6> Robotics Workshop </h6>
  </div>
 <div className="gallery-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZ824o2D3d-fMrZlncJdOL5XBe3DOLDX-Pw&s" alt="" />
    <h6>AI Exploration Lab</h6>
  </div>
  <div className="gallery-item">
    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" alt="" />
    <h6>STEAM Educators Meet</h6>
  </div>
   <div className="gallery-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQbYWXypOfXYx74K6eYl6JGOKgEiao3GAjQ&s" alt="" />
    <h6>Young Innovators Fair</h6>
  </div>

 

</div>
            {/* RIGHT BUTTON */}
            <button className="gallery-btn right" onClick={scrollRight}>
              <FaChevronRight />
            </button>

          </div>
        </section>
        {/* Subscribe */}
        <section className="eventspage-subscribe">
            <img className="eveimg" src={update} alt="" />
          <div className="groupcontent">
          <h3>Stay Updated</h3>
          <p>Subscribe to get notified about our upcoming events and opportunities.</p>
</div>

<div className="eventsub">
          <div className="eventspage-subscribe-content">
            <input
              type="email"
              placeholder="Enter your email"
              className="eventspage-subscribe-input"
            />

            <button className="eventspage-subscribe-btn">
              Subscribe
            </button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}

export default Eventspage;