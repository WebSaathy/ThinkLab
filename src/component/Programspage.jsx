
import "../component/css/aboutprogram.css"
import cover from "../assets/images/cover.jpeg"
import book from "../assets/images/book.jpg";
import bulb from "../assets/images/bulb.avif";
import innovate from "../assets/images/innovate.avif"
import ProgramSection from "./ProgramSection";
import Choose from "./Choose";
import Footer from "./Footer"
import Cards from "./Cards";
export default function Programspage() {
  const filters = [
  {
    name: "All Photos",
    image:  "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
  },
  {
    name: "Robotics",
    image: "/images/steam.png",
  },
  {
    name: "Coding",
    image: "/images/workshop.png",
  },
  {
    name: "Electronics & IOT",
    image: "/images/robotics.png",
  },
  {
    name: "AI & Future Tech",
    image: "/images/innovation.png",
  },
  {
    name: "Design & Innovation ",
    image: "/images/events.png",
  },
  {
    name: "Digital Skills",
    image: "/images/competition.png",
  },
  
 
];

  return (
    <>
    <section className="programhero">
      <div className="programhero-text">
        <h1>Our <br /> <span>Program</span></h1>
        <p>
          Empowering students with hands-on learning, creativity, and technology skills.
          Empowering students with hands-on learning, creativity, and technology skills.

        </p>
        <div className="programbuttons">
       <a href="/ViewProgram"><button>Explore Programs → </button></a> 
       <a href="/schools" className="btn2">For Schools →</a>

</div>
      </div>

      <div className="programhero-img">
        <img src={cover} alt="students robotics" />
      </div>
    </section>
    <div className="filter-bar">
  {filters.map((item, index) => (
    <button
      key={index}
      className={index === 0 ? "active" : ""}
    >
      <img src={item.image} alt='' />
      <span>{item.name}</span>
    </button>
  ))}
</div>

    <ProgramSection />
    <Choose />
    <Cards />
    <Footer/>
</>
  );
}
