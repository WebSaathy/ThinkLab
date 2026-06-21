// import "../component/css/programsection.css";
// import book from "../assets/images/book.jpg";
// import not from "../assets/images/Notpic.png"
// function ProgramCard({ title, image, desc, age, duration, level }) {
//   return (
//     <div className="programs-card">
      
//       {/* Top section */}
//       <div className="cards-top">
//         <h3 className="titles" >{title}</h3>
//         <span className="age">Age: {age}</span>
//       </div>

//       {/* Image */}
//       <img src={image} alt={title} className="programs-img" />

//       {/* Bottom content */}
//       <p className="desc">{desc}</p>

//       <div className="card-bottom">
//         <span className="meta">⏱ {duration}</span>
//         <span className="meta">📊 {level}</span>
//       </div>

//      <a href="/view"> <button className="learn-btn">Learn More →</button></a>
//     </div>
//   );
// }

// function ProgramSection() {
//   const programs = [
//     {
//       title: "Robotics",
//       color:"red",
//       age: "10-15",
//       image: book,
//       desc: "Build and code robots.",
//       duration: "3 Months",
//       level: "Beginner",
//     },
//     {
//       title: "Coding",
//       color:"",

//       age: "12-18",
//       image: book,
//       desc: "Learn programming fundamentals.",
//       duration: "4 Months",
//       level: "Beginner",
//     },
//     {
//       title: "AI & Future Tech",
//       color:"",

//       age: "14-20",
//       image: book,
//       desc: "Discover Artificial Intelligence.",
//       duration: "5 Months",
//       level: "Advanced",
//     },
//      {
//       title: "Digital Skills",
//       color:"",

//       age: "10-18",
//       image: book,
//       desc: "Creative and digital learning.",
//       duration: "2 Months",
//       level: "Beginner",
//     }, {
//       title: "Digital Skills",
//       color:"",

//       age: "10-18",
//       image: book,
//       desc: "Creative and digital learning.",
//       duration: "2 Months",
//       level: "Beginner",
//     },
//     {
//       title: "Digital Skills",
//       color:"",

//       age: "10-18",
//       image: book,
//       desc: "Creative and digital learning.",
//       duration: "2 Months",
//       level: "Beginner",
//     },
//   ];

//   return (
//     <section className="programsec">
//       <h1>Explore Our <span> Programs </span></h1>
//       <p>Choose from our hands-on program designed for different age groups and skill levels.</p>

//       <div className="program-grid">
//         {programs.map((item, index) => (
//           <ProgramCard
//             key={index}
//             {...item}
//           />
//         ))}
//       </div>

//       <div className="Notsure">
//         <div className="whole">
//       <div className="notimg">
//         <img className="programs-img" src={not} alt="" />
//       </div>
//       <div className="notcontent">
//         <h2>Not sure which program is right for you?</h2>
//         <p>Talk to our team and we'll help you find the perfect fit.</p>
//       </div>
//       </div>

//         <a href="/contactus"><button className="notbtn">Contact us <span className="arr">→</span> </button></a>
      

//       </div>
//     </section>
//   );
// }

// export default ProgramSection;



import { useMemo } from "react";
import { Link } from "react-router-dom";
import "../component/css/programsection.css";
import not from "../assets/images/Notpic.png";
import  BASE_URL  from "../config";

function ProgramCard({
  id,
  title,
  image,
  desc,
  age,
  duration,
  level,
}) {
  return (
    <div className="programs-card">
      <div className="cards-top">
        <h3 className="titles">{title}</h3>
        <span className="age">Age: {age || "N/A"}</span>
      </div>

      <img
        src={image || not}
        alt={title}
        className="programs-img"
      />

      <p className="desc">
        {desc || "No description available."}
      </p>

      <div className="card-bottom">
        <span className="meta">⏱ {duration || "N/A"}</span>
        <span className="meta">📊 {level || "N/A"}</span>
      </div>

      <Link to={`/view/${id}`}>
        <button className="learn-btn">
          Learn More →
        </button>
      </Link>
    </div>
  );
}

function ProgramSection({
  programs = [],
  activeCategory,
}) {
  const filteredPrograms = useMemo(() => {
    if (
      activeCategory === "All Photos" ||
      activeCategory === "All Programs"
    ) {
      return programs;
    }

    return programs.filter((item) => {
      const categoryName = (
        item.category_name || ""
      )
        .toLowerCase()
        .trim();

      return (
        categoryName ===
        activeCategory.toLowerCase().trim()
      );
    });
  }, [programs, activeCategory]);

  return (
    <section className="programsec">
      <h1>
        Explore Our <span>Programs</span>
      </h1>

      <p>
        Choose from our hands-on programs
        designed for different age groups
        and skill levels.
      </p>

      <div className="program-grid">
        {filteredPrograms.map((item) => (
          <ProgramCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={
              item.image?.startsWith("http")
                ? item.image
                : item.image
                ? `${BASE_URL}${item.image}`
                : not
            }
            desc={
              item.description ||
              item.desc ||
              ""
            }
            age={
              item.age_group_name ||
              item.age_group ||
              ""
            }
            duration={
              item.Duration ||
              item.duration ||
              ""
            }
            level={item.level || ""}
          />
        ))}
      </div>

      <div className="Notsure">
        <div className="whole">
          <div className="notimg">
            <img
              className="programs-img"
              src={not}
              alt="Program"
            />
          </div>

          <div className="notcontent">
            <h2>
              Not sure which program is
              right for you?
            </h2>

            <p>
              Talk to our team and we'll
              help you find the perfect fit.
            </p>
          </div>
        </div>

        <Link to="/contactus">
          <button className="notbtn">
            Contact us{" "}
            <span className="arr">→</span>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default ProgramSection;