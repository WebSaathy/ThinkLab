import "../component/css/features.css";

import star from "../assets/images/stars.png";
import robotics from "../assets/images/robotics.png";
import computer from "../assets/images/computer.jpg";
import trophy from "../assets/images/trophy.jpg";
import handshake from "../assets/images/handshake.png";

const features = [
  {
    title: "STEAM Education",
    desc: "Interactive and project-based learning in Science, Technology, Engineering, Arts & Mathamatics.",
    img: star,
    borderColor: "green",
  },
  {
    title: "Robotics and Innovation",
    desc: "Hands-on robotics, electronics, and innovation training for future-ready minds.",
    img: robotics,
    borderColor: "orange",
  },
  {
    title: "Digital Skills",
    desc: "Building essential digital skills for creativity, productivity and future careers.",
    img: computer,
    borderColor: "purple",
  },
  {
    title: "Competitions and Events",
    desc: "Engaging competitions, workshops and events that build confidence, teamwork & leadership.",
    img: trophy,
    borderColor: "#FFA726",
  },
  {
    title: "School Collaboration",
    desc: "Partner with schools to build STEAM labs, train teachers and inspire young learners.",
    img: handshake,
    borderColor: "blue",
  },
];

export default function Features() {
  return (
    <section className="features-page">
      {features.map((f, i) => (
        <div
          key={i}
          className="card-page"
          style={{ border: `1px solid ${f.borderColor}` }}
        >
          <img src={f.img} alt={f.title} />
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  );
}