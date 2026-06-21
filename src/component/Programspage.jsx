
// import "../component/css/aboutprogram.css"
// import cover from "../assets/images/cover.jpeg"
// import book from "../assets/images/book.jpg";
// import bulb from "../assets/images/bulb.avif";
// import innovate from "../assets/images/innovate.avif"
// import ProgramSection from "./ProgramSection";
// import Choose from "./Choose";
// import Footer from "./Footer"
// import Cards from "./Cards";
// export default function Programspage() {
//   const filters = [
//   {
//     name: "All Photos",
//     image: book,
//   },
//   {
//     name: "Robotics",
//     image: bulb,
//   },
//   {
//     name: "Coding",
//     image: book,
//   },
//   {
//     name: "Electronics & IOT",
//     image: innovate,
//   },
//   {
//     name: "AI & Future Tech",
//     image:book,
//   },
//   {
//     name: "Design & Innovation ",
//     image: book,
//   },
//   {
//     name: "Digital Skills",
//     image: book,
//   },
  
 
// ];

//   return (
//     <>
//     <section className="programhero">
//       <div className="programhero-text">
//         <h1>Our <br /> <span>Program</span></h1>
//         <p>
//           Empowering students with hands-on learning, creativity, and technology skills.
//           Empowering students with hands-on learning, creativity, and technology skills.

//         </p>
//         <div className="programbuttons">
//        <a href="/ViewProgram"><button>Explore Programs → </button></a> 
//        <a href="/schools" className="btn2">For Schools →</a>

// </div>
//       </div>

//       <div className="programhero-img">
//         <img src={cover} alt="students robotics" />
//       </div>
//     </section>
//     <div className="filter-bar">
//   {filters.map((item, index) => (
//     <button
//       key={index}
//       className={index === 0 ? "active" : ""}
//     >
//       <img src={item.image} alt='' />
//       <span>{item.name}</span>
//     </button>
//   ))}
// </div>

//     <ProgramSection />
//     <Choose />
//     <Cards />
//     <Footer/>
// </>
//   );
// }


import { useEffect, useMemo, useState } from "react";
import "../component/css/aboutprogram.css";
import cover from "../assets/images/cover.jpeg";
import book from "../assets/images/book.jpg";
import bulb from "../assets/images/bulb.avif";
import innovate from "../assets/images/innovate.avif";
import ProgramSection from "./ProgramSection";
import Choose from "./Choose";
import Footer from "./Footer";
import Cards from "./Cards";
import  BASE_URL  from "../config";

export default function Programspage() {
  const [categories, setCategories] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Photos");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const [catRes, progRes] = await Promise.all([
          fetch(`${BASE_URL}/api/programs/program-categories/`),
          fetch(`${BASE_URL}/api/programs/programs/`),
        ]);

        if (!catRes.ok) throw new Error("Failed to load categories");
        if (!progRes.ok) throw new Error("Failed to load programs");

        const catData = await catRes.json();
        const progData = await progRes.json();

        setCategories(Array.isArray(catData) ? catData : []);
        setPrograms(Array.isArray(progData) ? progData : []);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterItems = useMemo(() => {
    const staticImages = {
      Robotics: bulb,
      Coding: book,
      "Electronics & IOT": innovate,
      "AI & Future Tech": book,
      "Design & Innovation": book,
      "Digital Skills": book,
    };

    return [
      { name: "All Photos", image: book },
      ...categories.map((cat) => ({
        name: cat.title || cat.name || cat.category_name || "Category",
        image: staticImages[cat.title] || book,
      })),
    ];
  }, [categories]);

  return (
    <>
      <section className="programhero">
        <div className="programhero-text">
          <h1>
            Our <br /> <span>Program</span>
          </h1>
          <p>
            Empowering students with hands-on learning, creativity, and technology skills.
            Empowering students with hands-on learning, creativity, and technology skills.
          </p>

          <div className="programbuttons">
            <a href="/ViewProgram">
              <button>Explore Programs →</button>
            </a>
            <a href="/schools" className="btn2">
              For Schools →
            </a>
          </div>
        </div>

        <div className="programhero-img">
          <img src={cover} alt="students robotics" />
        </div>
      </section>

      <div className="filter-bar">
        {filterItems.map((item, index) => (
          <button
            key={index}
            className={activeCategory === item.name ? "active" : ""}
            onClick={() => setActiveCategory(item.name)}
          >
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      {loading && <p style={{ textAlign: "center" }}>Loading programs...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      {!loading && !error && (
        <ProgramSection
          programs={programs}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}

      <Choose />
      <Cards />
      <Footer />
    </>
  );
}