import "../component/css/impact.css";
import cover from "../assets/images/cover.jpeg";
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
export default function Impact() {
  return (
    <section className="impacts">

      <h1>Our <span className="s4">Impact</span> </h1>
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
     
    </section>
  );
}