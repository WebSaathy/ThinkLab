import "../component/css/impact.css";
import cover from "../assets/images/cover.jpeg";
<<<<<<< HEAD
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
=======

>>>>>>> a1e8361ce0f0778228bc156e4cbcc3ef3beedb3b
export default function Impact() {
  return (
    <section className="impacts">

      <h1>Our <span className="s4">Impact</span> </h1>
<<<<<<< HEAD
      <section className="eventspage-stats">
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
             </section>
     
=======
      <div className="impact">

        <div className="cards">
          <img src={cover} alt="cover" />

          <div className="text">
            <h2>50+</h2>
            <p>Partner Schools </p>
          </div>
        </div>

        <div className="cards">
          <img src={cover} alt="cover" />

          <div className="text">
            <h2>200+</h2>
            <p>Workshops & Events</p>
          </div>
        </div>
        <div className="cards">
          <img src={cover} alt="cover" />

          <div className="text">
            <h2>25+</h2>
            <p>Competitions Organized</p>
          </div>
        </div>

        <div className="cards">
          <img src={cover} alt="cover" />

          <div className="text">
            <h2>100+</h2>
            <p>Projects Built</p>
          </div>
        </div>
        <div className="cards">
          <img src={cover} alt="cover" />

          <div className="text">
            <h2>10,000+</h2>
            <p>Students Reached</p>
          </div>
        </div>

      </div>
>>>>>>> a1e8361ce0f0778228bc156e4cbcc3ef3beedb3b
    </section>
  );
}