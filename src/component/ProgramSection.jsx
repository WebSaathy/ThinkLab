import "../component/css/programsection.css";
import book from "../assets/images/book.jpg";
import not from "../assets/images/Notpic.png"
function ProgramCard({ title, image, desc, age, duration, level }) {
  return (
    <div className="programs-card">
      
      {/* Top section */}
      <div className="cards-top">
        <h3 className="titles" >{title}</h3>
        <span className="age">Age: {age}</span>
      </div>

      {/* Image */}
      <img src={image} alt={title} className="programs-img" />

      {/* Bottom content */}
      <p className="desc">{desc}</p>

      <div className="card-bottom">
        <span className="meta">⏱ {duration}</span>
        <span className="meta">📊 {level}</span>
      </div>

<<<<<<< HEAD
      <a href="/view_more"><button className="learn-btn">Learn More →</button></a>
=======
      <button className="learn-btn">Learn More →</button>
>>>>>>> a1e8361ce0f0778228bc156e4cbcc3ef3beedb3b
    </div>
  );
}

function ProgramSection() {
  const programs = [
    {
      title: "Robotics",
      color:"red",
      age: "10-15",
      image: book,
      desc: "Build and code robots.",
      duration: "3 Months",
      level: "Beginner",
    },
    {
      title: "Coding",
      color:"",

      age: "12-18",
      image: book,
      desc: "Learn programming fundamentals.",
      duration: "4 Months",
      level: "Beginner",
    },
    {
      title: "AI & Future Tech",
      color:"",

      age: "14-20",
      image: book,
      desc: "Discover Artificial Intelligence.",
      duration: "5 Months",
      level: "Advanced",
    },
     {
      title: "Digital Skills",
      color:"",

      age: "10-18",
      image: book,
      desc: "Creative and digital learning.",
      duration: "2 Months",
      level: "Beginner",
    }, {
      title: "Digital Skills",
      color:"",

      age: "10-18",
      image: book,
      desc: "Creative and digital learning.",
      duration: "2 Months",
      level: "Beginner",
    },
    {
      title: "Digital Skills",
      color:"",

      age: "10-18",
      image: book,
      desc: "Creative and digital learning.",
      duration: "2 Months",
      level: "Beginner",
    },
  ];

  return (
    <section className="programsec">
      <h1>Explore Our <span> Programs </span></h1>
      <p>Choose from our hands-on program designed for different age groups and skill levels.</p>

      <div className="program-grid">
        {programs.map((item, index) => (
          <ProgramCard
            key={index}
            {...item}
          />
        ))}
      </div>

      <div className="Notsure">
        <div className="whole">
      <div className="notimg">
        <img className="programs-img" src={not} alt="" />
      </div>
      <div className="notcontent">
        <h2>Not sure which program is right for you?</h2>
        <p>Talk to our team and we'll help you find the perfect fit.</p>
      </div>
      </div>

        <a href="/contactus"><button className="notbtn">Contact us <span className="arr">→</span> </button></a>
      

      </div>
    </section>
  );
}

export default ProgramSection;