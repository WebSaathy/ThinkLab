import "../component/css/program.css";

import roboticsImg from "../assets/images/roboticsImgs.webp";
import codingImg from "../assets/images/codings.jpg";
import iotImg from "../assets/images/electronic.png";
import aiImg from "../assets/images/Ai.jpg";
import designImg from "../assets/images/designs.jpg";
import digitalImg from "../assets/images/digital-innovation.jpg";

const programs = [
  {
    title: "Robotics",
    img: roboticsImg,
    desc: "Build, code and innovate with hands-on robotics projects.",
    titleBg: "#039D6F",
    bordercolor:"#039D6F",
  },
  {
    title: "Coding",
    img: codingImg,
    desc: "Learning prgramming fundamentals and build real applications.",
    titleBg: "#FC6303",
    bordercolor:"#FC6303",
  },
  {
    title: "Electronics & IoT",
    img: iotImg,
    desc: "Explore electronics, sensors, and IOT through practical tasks.",
    titleBg: "#FFA726",
    bordercolor:"#FFA726",
  },
  {
    title: "AI & Future Tech",
    img: aiImg,
    desc: "Discover AI basics and emerging technologies of the future.",
    bordercolor:"#4F1B76",
    titleBg: "#4F1B76",
  },
  {
    title: "Design & Innovation",
    img: designImg,
    desc: "Use design thinking and creativity to solve real-world problems.",
    titleBg: "#0068C5",
    bordercolor:"#0068C5",
  },
   {
    title: "Digital Skills",
    img: designImg,
    desc: "Enhance digital literacy, creativity and productivity skills",
    bordercolor:"#02986B",
    titleBg: "#02986B",
  },
];

export default function Programs() {
  return (
    <section className="programs">
      <h2>Our <span className="s3"> Programs</span></h2>

      <div className="grid">
        {programs.map((p, i) => (
          <div style={{ border: `1px solid ${p.bordercolor}` }} key={i} className="program-card">
            <h3 style={{ backgroundColor: p.titleBg }} className="program-title">
              {p.title}
            </h3>

            <img src={p.img} alt={p.title} />

            <div className="program-content">
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
<<<<<<< HEAD
      <a href="/program"><button className="viewbtn">view all programs →</button></a>
=======
      <a href="/ViewProgram"><button className="viewbtn">view all programs →</button></a>
>>>>>>> a1e8361ce0f0778228bc156e4cbcc3ef3beedb3b
    </section>
  );
}