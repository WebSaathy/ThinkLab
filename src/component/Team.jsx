// import "../component/css/Team.css";
// import { useRef } from "react";
// import { FaChevronLeft, FaChevronRight, FaLinkedin ,FaFacebook} from "react-icons/fa";

// function Team() {
//   const members = [
//     {
//       name: "Ramesh Sharma",
//       role: "Founder",
//       image: "https://randomuser.me/api/portraits/men/1.jpg",
//       linkedin: "https://linkedin.com",
//       email:"lalitamahar23@gmail.com"
//     },
//     {
//       name: "Anita Karki",
//       role: "Program Lead",
//       image: "https://randomuser.me/api/portraits/women/2.jpg",
//       linkedin: "https://linkedin.com",
//       email:"lalitamahar23@gmail.com"
//     },
//     {
//       name: "Sanjay Adhikari",
//       role: "Robotics Expert",
//       image: "https://randomuser.me/api/portraits/men/3.jpg",
//       linkedin: "https://linkedin.com",
//       email:"lalitamahar23@gmail.com"
//     },
//     {
//       name: "Bikash Thapa",
//       role: "UI Designer",
//       image: "https://randomuser.me/api/portraits/men/4.jpg",
//       linkedin: "https://linkedin.com",
//       email:"lalitamahar23@gmail.com"
//     },
//     {
//       name: "Bikash Thapa",
//       role: "UI Designer",
//       image: "https://randomuser.me/api/portraits/men/4.jpg",
//       linkedin: "https://linkedin.com",
//       email:"lalitamahar23@gmail.com"
//     },
//     {
//       name: "Bikash Thapa",
//       role: "UI Designer",
//       image: "https://randomuser.me/api/portraits/men/4.jpg",
//       linkedin: "https://linkedin.com",
//       email:"lalitamahar23@gmail.com"
//     },{
//       name: "Bikash Thapa",
//       role: "UI Designer",
//       image: "https://randomuser.me/api/portraits/men/4.jpg",
//       linkedin: "https://linkedin.com",
//       email:"lalitamahar23@gmail.com"
//     },{
//       name: "Bikash Thapa",
//       role: "UI Designer",
//       image: "https://randomuser.me/api/portraits/men/4.jpg",
//       linkedin: "https://linkedin.com",
//       email:"lalitamahar23@gmail.com"
//     },{
//       name: "Bikash Thapa",
//       role: "UI Designer",
//       image: "https://randomuser.me/api/portraits/men/4.jpg",
//       linkedin: "https://linkedin.com",
//       email:"lalitamahar23@gmail.com"
//     },
//   ];

//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({
//       left: -600,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({
//       left: 300,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="team">
//       <h1>Our Team</h1>
//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dolorum ea illo similique! Natus, molestias quidem. Molestias!</p>
//       <div className="team-wrapper">
//         <button className="navs-btn left-btns" onClick={scrollLeft}>
//           <FaChevronLeft />
//         </button>

//         <div className="team-container" ref={scrollRef}>
//           {members.map((member, index) => (
//             <div className="team-card" key={index}>
//               <img src={member.image} alt={member.name} />

//               <h3>{member.name}</h3>
//               <p>{member.role}</p>
//                <h6>{member.email}</h6>
//               <a
//                 href={member.facebook}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="facebook-btn"
//               >
              
//                 <FaFacebook />
//               </a>
//             </div>
//           ))}
//         </div>

//         <button className="navs-btn right-btns" onClick={scrollRight}>
//           <FaChevronRight />
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Team;



import "../component/css/Team.css";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaFacebook } from "react-icons/fa";
import BaseUrl from "../config";

function Team() {
  
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch(`${BaseUrl}/api/about/our-team/`);
        if (!response.ok) {
          throw new Error("Failed to fetch team data");
        }
        const data = await response.json();
        setMembers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -600,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  if (loading) {
    return <p>Loading team members...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="team">
      <h1>Our Team</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dolorum ea
        illo similique! Natus, molestias quidem. Molestias!
      </p>

      <div className="team-wrapper">
        <button className="navs-btn left-btns" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="team-container" ref={scrollRef}>
          {members.map((member) => (
            <div className="team-card" key={member.id}>
              <img src={member.photo} alt={member.name} onClick={()=>{console.log(member.photo)}} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <h6>{member.email}</h6>

              {member.facebook_link && (
                <a
                  href={member.facebook_link}
                  target="_blank"
                  rel="noreferrer"
                  className="facebook-btn"
                >
                  <FaFacebook />
                </a>
              )}
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