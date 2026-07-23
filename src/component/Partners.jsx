import { useState } from "react";
import "../component/css/partners.css";
import { FaQuoteLeft } from "react-icons/fa";

export default function Partners() {
  const partners = [
    { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJJrmpaTV7PlG-fl8bIDU-lkZqJtuslavA-NCRkfyaQ&s" },
    { logo: "https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/rotary-logo-color-2019-simplified.svg" },
    { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN47EGRKhKK5IDBpCGYr1rvv81WsOOagVD-A&s" },
    { logo: "https://techpana.prixacdn.net/media/albums/Code-for-nepal-techpana_FzoXBov4pG.jpg" },
    { logo: "https://www.globalentrepreneurshipnetworks.org/images/logo.png" },
    { logo: "https://www.cse.iitb.ac.in/~suyoggatkal/staticfb/FacebookLabel.svg" },
  ];

  const testimonials = [
    {
      text: "Nexu ThinkLab is transforming the way students learn. The hands-on approach and innovative programs have boosted confidence and creativity in our students.",
      name: "Ramesh Sharma",
      role: "Principal, Bright Future School",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "The programs helped our students understand technology in a very practical way. Highly recommended!",
      name: "Sita Karki",
      role: "Teacher, Sunrise School",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "Amazing learning experience. Students are now more confident in coding and robotics.",
      name: "Amit Yadav",
      role: "Coordinator, STEAM Academy",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="partners-section">

      {/* LEFT */}
      <div className="partners">
        <div className="partners-title">
          <h2>Our <span>Partners</span></h2>
        </div>

        <div className="partners-grid">
          {partners.map((item, index) => (
            <div className="partner-card" key={index}>
              <img src={item.logo} alt="partner" />
            </div>
          ))}
          <div className="partnerDiv">

          </div>
         <a href=""> <button className="part-btn">view all partners  →</button></a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="testimonial">
        <div className="testimonial-title">
          <h2>What <span>People Say</span></h2>
        </div>

        <div className="testimonial-card">
          <FaQuoteLeft className="quote-icon" />

          <p>{active.text}</p>

          <div className="profile">
            <img src={active.img} alt="" />
            <div>
              <h4>{active.name}</h4>
              <span>{active.role}</span>
            </div>
          </div>

          <div className="dots">
  {testimonials.map((_, index) => (
    <span
      key={index}
      className={index === activeIndex ? "active" : ""}
      onClick={() => setActiveIndex(index)}
    ></span>
  ))}
</div>
        </div>
      </div>

    </section>
  );
}