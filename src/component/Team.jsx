import "../component/css/Team.css";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaLinkedin ,FaFacebook} from "react-icons/fa";

function Team() {
  const members = [
    {
      name: "Ramesh Sharma",
      role: "Founder",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      linkedin: "https://linkedin.com",
      email:"lalitamahar23@gmail.com"
    },
    {
      name: "Anita Karki",
      role: "Program Lead",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      linkedin: "https://linkedin.com",
      email:"lalitamahar23@gmail.com"
    },
    {
      name: "Sanjay Adhikari",
      role: "Robotics Expert",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      linkedin: "https://linkedin.com",
      email:"lalitamahar23@gmail.com"
    },
    {
      name: "Bikash Thapa",
      role: "UI Designer",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      linkedin: "https://linkedin.com",
      email:"lalitamahar23@gmail.com"
    },
    {
      name: "Bikash Thapa",
      role: "UI Designer",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      linkedin: "https://linkedin.com",
      email:"lalitamahar23@gmail.com"
    },
    {
      name: "Bikash Thapa",
      role: "UI Designer",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      linkedin: "https://linkedin.com",
      email:"lalitamahar23@gmail.com"
    },{
      name: "Bikash Thapa",
      role: "UI Designer",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      linkedin: "https://linkedin.com",
      email:"lalitamahar23@gmail.com"
    },{
      name: "Bikash Thapa",
      role: "UI Designer",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      linkedin: "https://linkedin.com",
      email:"lalitamahar23@gmail.com"
    },{
      name: "Bikash Thapa",
      role: "UI Designer",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      linkedin: "https://linkedin.com",
      email:"lalitamahar23@gmail.com"
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -600,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="team">
      <h1>Our Team</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dolorum ea illo similique! Natus, molestias quidem. Molestias!</p>
      <div className="team-wrapper">
        <button className="navs-btn left-btns" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="team-container" ref={scrollRef}>
          {members.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} />

              <h3>{member.name}</h3>
              <p>{member.role}</p>
               <h6>{member.email}</h6>
              <a
                href={member.facebook}
                target="_blank"
                rel="noreferrer"
                className="facebook-btn"
              >
              
                <FaFacebook />
              </a>
            </div>
          ))}
        </div>

        <button className="navs-btn right-btns" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Team;