// import React from "react";
// import {
//   FaArrowRight,
//   FaImage,
//   FaCalendarAlt,
//   FaSchool,
//   FaSmile,
// } from "react-icons/fa";
// import "../component/css/galleryfirst.css";
// import photo from "../assets/images/photo.jpg"
// import steam from "../assets/images/steam.jpg"
// import workshop from "../assets/images/work.png"
// import robot from "../assets/images/robot.png"
// import innovative from "../assets/images/innovative.png"
// import Competition from "../assets/images/competitation.avif"
// import schoolpar from "../assets/images/schoolpar.png"
// import teachertra from "../assets/images/teachertra.png"
// function Galleryfirst() {
//   const filters = [
//   {
//     name: "All Photos",
//     image:  photo,
//   },
//   {
//     name: "STEAM Classes",
//     image: steam,
//   },
//   {
//     name: "Workshops",
//     image:workshop,
//   },
//   {
//     name: "Robotics",
//     image:robot,
//   },
//   {
//     name: "Innovations",
//     image: innovative,
//   },
//   {
//     name: "Events",
//     image: "/images/events.png",
//   },
//   {
//     name: "Competitions",
//     image:Competition
//   },
//   {
//     name: "School Partners",
//     image:schoolpar,
//   },
//   {
//     name: "Teacher Training",
//     image:teachertra,
//   },
//    {
//     name: "Teacher Training",
//     image:teachertra,
//   },
// ];


//   const cards = [
//     {
//       title: "STEAM Classes",
//       photos: "125 Photos",
//       image:
//         "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
//     },
//     {
//       title: "Robotics Lab",
//       photos: "98 Photos",
//       image:
//         "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200",
//     },
//     {
//       title: "Innovation Projects",
//       photos: "80 Photos",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
//     },
//     {
//       title: "Workshops",
//       photos: "76 Photos",
//       image:
//         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
//     },
//     {
//       title: "Competitions",
//       photos: "88 Photos",
//       image:
//         "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
//     },
//     {
//       title: "Events",
//       photos: "66 Photos",
//       image:
//         "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200",
//     },
//     {
//       title: "School Partnerships",
//       photos: "55 Photos",
//       image:
//         "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
//     },
//     {
//       title: "Teacher Training",
//       photos: "47 Photos",
//       image:
//         "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200",
//     },
//   ];

//   const stats = [
//     {
//       icon: <FaImage />,
//       number: "1,200+",
//       text: "Photos",
//     },
//     {
//       icon: <FaCalendarAlt />,
//       number: "150+",
//       text: "Events Captured",
//     },
//     {
//       icon: <FaSchool />,
//       number: "50+",
//       text: "Partner Schools",
//     },
//     {
//       icon: <FaSmile />,
//       number: "10,000+",
//       text: "Smiles Shared",
//     },
//   ];

//   return (
//     <div className="full">
//     <div className="gallery-page">
//       {/* HERO SECTION */}
//       <div className="herogallery">
//         <div className="herogallery-left">
//           <h1>
//             Moments of <span>Learning,</span>
//             <br />
//             <span className="orange">Creativity</span> & Innovation
//           </h1>

//           <p>
//             Explore highlights from our STEAM classes,
//             workshops, innovation labs, competitions, and
//             school partnerships across Nepal.
//           </p>
//         </div>

//         <div className="herogallery-right">
//           <img
//             src="https://images.unsplash.com/photo-1588072432904-843af37f03ed?q=80&w=1200"
//             alt=""
//             className="img1"
// loading="lazy" decoding="async" />

//           <img
//             src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
//             alt=""
//             className="img2"
// loading="lazy" decoding="async" />

//           <img
//             src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200"
//             alt=""
//             className="img3"
// loading="lazy" decoding="async" />
//         </div>
//       </div>

//     <div className="filter-bar">
//   {filters.map((item, index) => (
//     <button
//       key={index}
//       className={index === 0 ? "active" : ""}
//     >
//       <img src={item.image} alt='' loading="lazy" decoding="async" />
//       <span>{item.name}</span>
//     </button>
//   ))}
// </div>

//       <div className="programgallery-grid">
//         {cards.map((card, index) => (
//           <div className="programgallery-card" key={index}>
//             <img src={card.image} alt="" loading="lazy" decoding="async" />

//             <div className="overlaygallery">
//               <div>
//                 <h3>{card.title}</h3>
//                 <p>{card.photos}</p>
//               </div>

//               <button>
//                 <FaArrowRight />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

     
//       <div className="statsgallery">
//         {stats.map((item, index) => (
//           <div className="statgallery-card" key={index}>
//             <div className="icongallery">{item.icon}</div>

//             <div>
//               <h2>{item.number}</h2>
//               <p>{item.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
   
//       <div className="join-section">
//         <div className="join-left">
//           <div className="camera">📸</div>

//           <div>
//             <h2>Be Part of Our Journey</h2>

//             <p>
//               Join hands with us to inspire the next
//               generation of innovators and problem solvers.
//             </p>
//           </div>
//         </div>

//         <div className="join-buttons">
//           <button className="yellow">
//             Partner With Us
//           </button>

//           <button className="white">
//             Download Proposal
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Galleryfirst;
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaArrowRight,
  FaImage,
  FaCalendarAlt,
  FaSchool,
  FaSmile,
} from "react-icons/fa";
import "../component/css/galleryfirst.css";
import BASE_URL from "../config";

function Galleryfirst() {
  const navigate = useNavigate();

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [categories, setCategories] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const getImageUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `${BASE_URL}${url}`;
  };

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);

        const [categoryRes, galleryRes] = await Promise.all([
          axios.get(`${BASE_URL}/api/gallery/gallery-categories/`),
          axios.get(`${BASE_URL}/api/gallery/galleries/`),
        ]);

        setCategories(categoryRes.data || []);
        setGalleries(galleryRes.data || []);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const filteredCards = useMemo(() => {
    if (selectedCategory === "all") return galleries;
    return galleries.filter(
      (item) => String(item.category) === String(selectedCategory)
    );
  }, [galleries, selectedCategory]);

  const heroImages = filteredCards.length > 0 ? filteredCards.slice(0, 3) : galleries.slice(0, 3);

  const stats = [
    {
      icon: <FaImage />,
      end: galleries.length,
      suffix: "+",
      text: "Photos",
    },
    {
      icon: <FaCalendarAlt />,
      end: 150,
      suffix: "+",
      text: "Events Captured",
    },
    {
      icon: <FaSchool />,
      end: categories.length,
      suffix: "+",
      text: "Categories",
    },
    {
      icon: <FaSmile />,
      end: 10000,
      suffix: "+",
      separator: ",",
      text: "Smiles Shared",
    },
  ];

  return (
    <div className="full">
      <div className="gallery-page">
        {/* HERO SECTION */}
        <div className="herogallery">
          <div className="herogallery-left">
            <h1>
              Moments of <span>Learning,</span>
              <br />
              <span className="orange">Creativity</span> & Innovation
            </h1>

            <p>
              Explore highlights from our STEAM classes, workshops, innovation labs, competitions,
              and school partnerships across Nepal.
            </p>
          </div>

          <div className="herogallery-right">
            <img
              src={
                getImageUrl(heroImages[0]?.image) ||
                "https://images.unsplash.com/photo-1588072432904-843af37f03ed?q=80&w=1200"
              }
              alt=""
              className="img1" loading="lazy" decoding="async" />

            <img
              src={
                getImageUrl(heroImages[1]?.image) ||
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
              }
              alt=""
              className="img2" loading="lazy" decoding="async" />

            <img
              src={
                getImageUrl(heroImages[2]?.image) ||
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200"
              }
              alt=""
              className="img3" loading="lazy" decoding="async" />
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="filter-bar">
          <button
            className={selectedCategory === "all" ? "active" : ""}
            onClick={() => setSelectedCategory("all")}
          >
            <span>All Photos</span>
          </button>

          {categories.map((item) => (
            <button
              key={item.id}
              className={String(selectedCategory) === String(item.id) ? "active" : ""}
              onClick={() => setSelectedCategory(item.id)}
            >
              <img src={getImageUrl(item.image)} alt={item.name} loading="lazy" decoding="async" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* GALLERY GRID */}
        {loading ? (
          <p style={{ textAlign: "center", marginTop: "30px" }}>Loading gallery...</p>
        ) : (
          <div className="programgallery-grid">
            {filteredCards.map((card) => (
              <div
                className="programgallery-card"
                key={card.id}
                onClick={() => navigate(`/gallery/${card.id}`)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={getImageUrl(card.image)}
                  alt={card.title} loading="lazy" decoding="async" />

                <div className="overlaygallery">
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.images?.length || 0} Photos</p>
                  </div>

                  <button>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* STATS */}
        <div className="statsgallery" ref={statsRef}>
          {stats.map((item, index) => (
            <div className="statgallery-card" key={index}>
              <div className="icongallery">{item.icon}</div>

              <div>
                <h2>
                  {statsInView ? (
                    <CountUp
                      end={item.end}
                      duration={2.5}
                      separator={item.separator || ""}
                    />
                  ) : (
                    0
                  )}
                  {item.suffix}
                </h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JOIN SECTION */}
      <div className="join-section">
        <div className="join-left">
          <div className="camera">📸</div>

          <div>
            <h2>Be Part of Our Journey</h2>

            <p>
              Join hands with us to inspire the next generation of innovators and problem solvers.
            </p>
          </div>
        </div>

        <div className="join-buttons">
          <button className="yellow">Partner With Us</button>
          <button className="white">Download Proposal</button>
        </div>
      </div>
    </div>
  );
}

export default Galleryfirst;