// import React, { useRef } from "react";
// import "./Footer";
// import {
//   FaArrowRight,
//   FaChevronLeft,
//   FaChevronRight,
//   FaStar,
//   FaRegHeart,
//   FaShieldAlt,
//   FaTruck,
//   FaBookOpen,
//   FaHeadset,
// } from "react-icons/fa";

// import {
//   GiRobotGrab,
//   GiProcessor,
//   GiArtificialHive,
//   GiTeacher,
//   GiToolbox,
//   GiBookshelf,
//   GiClothes,
// } from "react-icons/gi";

// import "../component/css/storespage.css";
// import Footer from "./Footer";
// import Storesec from "./Storesec";

// function Storespage() {
//   const categoryRef = useRef(null);
//   const bestSellerRef = useRef(null);

//   // COMMON SCROLL FUNCTION (REUSABLE)
//   const scroll = (ref, direction) => {
//     if (!ref.current) return;

//     const distance = 300;

//     ref.current.scrollBy({
//       left: direction === "left" ? -distance : distance,
//       behavior: "smooth",
//     });
//   };

//   const storeCategories = [
//     { icon: <GiRobotGrab />, title: "Robotics Kits" },
//     { icon: <GiProcessor />, title: "Electronics & IoT" },
//     { icon: <GiArtificialHive />, title: "STEAM Explorer Kits" },
//     { icon: <GiTeacher />, title: "Learning Materials" },
//     { icon: <GiToolbox />, title: "Tools & Components" },
//     { icon: <GiBookshelf />, title: "Books & Guides" },
//     { icon: <GiClothes />, title: "Merchandise" },
//     { icon: <GiClothes />, title: "Merchandise" },
//   ];

//   const featuredProducts = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=800&auto=format&fit=crop",
//       title: "Robotics Starter Kit",
//       desc: "Build, code and innovate with hands-on robotics projects.",
//       price: "24,000",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
//       title: "IoT Learning Kit",
//       desc: "Explore the world of IoT and smart devices.",
//       price: "18,500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
//       title: "MicroBit Kit",
//       desc: "Learn coding, electronics and engineering.",
//       price: "12,800",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop",
//       title: "STEM Explorer Box",
//       desc: "Multi-project kits for young innovators.",
//       price: "22,300",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=800&auto=format&fit=crop",
//       title: "Smart Home Kit",
//       desc: "Understand home automation and IoT.",
//       price: "19,500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
//       title: "Renewable Energy Kit",
//       desc: "Learn solar, wind and renewable systems.",
//       price: "28,500",
//     },
//   ];

//   const storeFeatures = [
//     {
//       icon: <FaShieldAlt />,
//       title: "Quality Assured",
//       text: "Tested & certified components",
//     },
//     {
//       icon: <FaBookOpen />,
//       title: "Curriculum Aligned",
//       text: "Designed for Nepal STEAM curriculum",
//     },
//     {
//       icon: <FaTruck />,
//       title: "Fast Delivery",
//       text: "Across Nepal with secure packaging",
//     },
//     {
//       icon: <FaShieldAlt />,
//       title: "Secure Payment",
//       text: "Multiple safe payment options",
//     },
//     {
//       icon: <FaHeadset />,
//       title: "Support & Warranty",
//       text: "Dedicated support for all products",
//     },
//   ];

//   const bestSellerProducts = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=800&auto=format&fit=crop",
//       title: "Line Following Robot Kit",
//       price: "15,400",
//       rating: "4.9",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1555617981-dac3880eac6e?q=80&w=800&auto=format&fit=crop",
//       title: "Arduino Starter Kit",
//       price: "13,500",
//       rating: "4.7",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
//       title: "Electronic Components Mega Pack",
//       price: "18,200",
//       rating: "4.8",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1581093458791-9d15482442f6?q=80&w=800&auto=format&fit=crop",
//       title: "Science Experiment Kit",
//       price: "20,200",
//       rating: "4.9",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800&auto=format&fit=crop",
//       title: "Drone Building Kit",
//       price: "35,500",
//       rating: "4.9",
//     },
//   ];

//   return (
//     <>
//       <div className="storespage-container">
//         {/* HERO */}
//         <Storesec />

//         {/* CATEGORY */}
//         <section className="storespage-category-section">
//           <h3>Shop by Category</h3>

//           <div className="storespage-category-wrapper">
//             <button
//               className="storespage-arrow-btn left"
//               onClick={() => scroll(categoryRef, "left")}
//             >
//               <FaChevronLeft />
//             </button>

//             <div
//               className="storespage-category-grid scroll-x"
//               ref={categoryRef}
//             >
//               {storeCategories.map((item, index) => (
//                 <div className="storespage-category-card" key={index}>
//                   <div className="storespage-category-icon">
//                     {item.icon}
//                   </div>
//                   <p>{item.title}</p>
//                 </div>
//               ))}
//             </div>

//             <button
//               className="storespage-arrow-btn right"
//               onClick={() => scroll(categoryRef, "right")}
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         </section>

//         {/* FEATURED PRODUCTS */}
//         <section className="storespage-products-section">
//           <div className="storespage-title-row">
//             <h2>Featured Products</h2>
//             <a href="/">
//               View All Products <FaArrowRight />
//             </a>
//           </div>

//           <div className="storespage-product-grid">
//             {featuredProducts.map((item, index) => (
//               <div className="storespage-product-card" key={index}>
//                 <div className="storespage-product-image">
//                   <img src={item.image} alt="" />
//                 </div>

//                 <div className="storespage-product-content">
//                   <h4>{item.title}</h4>
//                   <p>{item.desc}</p>

//                   <div className="storespage-product-bottom">
//                     <h5>NPR {item.price}</h5>
//                     <FaRegHeart className="storespage-heart-icon" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* FEATURES */}
//         <section className="storespage-features-section">
//           {storeFeatures.map((item, index) => (
//             <div className="storespage-feature-box" key={index}>
//               <div className="storespage-feature-icon">{item.icon}</div>
//               <div>
//                 <h4>{item.title}</h4>
//                 <p>{item.text}</p>
//               </div>
//             </div>
//           ))}
//         </section>

//         {/* BEST SELLERS */}
//         <section className="storespage-bestseller-section">
//           <div className="storespage-title-row">
//             <h2>Best Sellers</h2>
//             <a href="/">View All</a>
//           </div>

//           <div className="storespage-bestseller-wrapper">
//             <button
//               className="storespage-arrow-btn"
//               onClick={() => scroll(bestSellerRef, "left")}
//             >
//               <FaChevronLeft />
//             </button>

//             <div
//               className="storespage-bestseller-grid scroll-x"
//               ref={bestSellerRef}
//             >
//               {bestSellerProducts.map((item, index) => (
//                 <div className="storespage-bestseller-card" key={index}>
//                   <img src={item.image} alt="" />

//                   <div className="storespage-bestseller-content">
//                     <h4>{item.title}</h4>
//                     <h5>NPR {item.price}</h5>

//                     <div className="storespage-rating">
//                       <FaStar />
//                       <span>{item.rating}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button
//               className="storespage-arrow-btn"
//               onClick={() => scroll(bestSellerRef, "right")}
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="storespage-cta-section">
//           <div className="storespage-cta-left">
//             <div className="storespage-bag-icon">
//               <GiBookshelf />
//             </div>

//             <div>
//               <h2>Bring Innovation to Your Classroom</h2>
//               <p>
//                 Equip your school or team with high-quality STEAM kits and
//                 learning resources.
//               </p>
//             </div>
//           </div>

//           <div className="storespage-cta-buttons">
//             <button className="storespage-yellow-btn">
//               Ask for Solution
//             </button>

//             <button className="storespage-white-btn">
//               Contact for Custom Solutions
//             </button>
//           </div>
//         </section>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Storespage;


import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaRegHeart,
  FaShieldAlt,
  FaTruck,
  FaBookOpen,
  FaHeadset,
} from "react-icons/fa";

import {
  GiRobotGrab,
  GiProcessor,
  GiArtificialHive,
  GiTeacher,
  GiToolbox,
  GiBookshelf,
  GiClothes,
} from "react-icons/gi";

import "../component/css/storespage.css";
import Footer from "./Footer";
import Storesec from "./Storesec";
import BASE_URL from "../config";

function Storespage() {
  const categoryRef = useRef(null);
  const bestSellerRef = useRef(null);

  const [storeCategories, setStoreCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bestSellerProducts, setBestSellerProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getImageUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `${BASE_URL}${url}`;
  };

  const scroll = (ref, direction) => {
    if (!ref.current) return;

    const distance = 300;
    ref.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        setLoading(true);
        setError("");

        const [categoryRes, storeRes, bestSellerRes] = await Promise.all([
          axios.get(`${BASE_URL}/api/stores/store-categories/`),
          axios.get(`${BASE_URL}/api/stores/stores/`),
          axios.get(`${BASE_URL}/api/stores/best-sellers/`),
        ]);

        setStoreCategories(categoryRes.data || []);
        setFeaturedProducts(storeRes.data || []);
        setBestSellerProducts(bestSellerRes.data || []);
      } catch (err) {
        console.error("Error fetching store data:", err);
        setError("Failed to load store data.");
      } finally {
        setLoading(false);
      }
    };

    fetchStoreData();
  }, []);

  const icons = [
    <GiRobotGrab key="1" />,
    <GiProcessor key="2" />,
    <GiArtificialHive key="3" />,
    <GiTeacher key="4" />,
    <GiToolbox key="5" />,
    <GiBookshelf key="6" />,
    <GiClothes key="7" />,
  ];

  const storeFeatures = [
    {
      icon: <FaShieldAlt />,
      title: "Quality Assured",
      text: "Tested & certified components",
    },
    {
      icon: <FaBookOpen />,
      title: "Curriculum Aligned",
      text: "Designed for Nepal STEAM curriculum",
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      text: "Across Nepal with secure packaging",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Payment",
      text: "Multiple safe payment options",
    },
    {
      icon: <FaHeadset />,
      title: "Support & Warranty",
      text: "Dedicated support for all products",
    },
  ];

  const heroProduct = featuredProducts[0] || bestSellerProducts[0] || null;

  if (loading) {
    return (
      <>
        <div className="storespage-container">
          <Storesec heroProduct={heroProduct} />
          <p style={{ textAlign: "center", padding: "30px 0" }}>Loading store data...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="storespage-container">
          <Storesec heroProduct={heroProduct} />
          <p style={{ textAlign: "center", padding: "30px 0", color: "red" }}>
            {error}
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="storespage-container">
        {/* HERO */}
        <Storesec heroProduct={heroProduct} />

        {/* CATEGORY */}
        <section className="storespage-category-section">
          <h3>Shop by Category</h3>

          <div className="storespage-category-wrapper">
            <button
              className="storespage-arrow-btn left"
              onClick={() => scroll(categoryRef, "left")}
            >
              <FaChevronLeft />
            </button>

            <div className="storespage-category-grid scroll-x" ref={categoryRef}>
              {storeCategories.map((item, index) => (
                <div className="storespage-category-card" key={item.id || index}>
                  <div className="storespage-category-icon">
                    {item.image ? (
                      <img
                        src={getImageUrl(item.image)}
                        alt={item.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                      />
                    ) : (
                      icons[index % icons.length]
                    )}
                  </div>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>

            <button
              className="storespage-arrow-btn right"
              onClick={() => scroll(categoryRef, "right")}
            >
              <FaChevronRight />
            </button>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="storespage-products-section">
          <div className="storespage-title-row">
            <h2>Featured Products</h2>
            <a href="/stores">
              View All Products <FaArrowRight />
            </a>
          </div>

          <div className="storespage-product-grid">
            {featuredProducts.map((item, index) => (
              <div className="storespage-product-card" key={item.id || index}>
                <div className="storespage-product-image">
                  <img src={getImageUrl(item.image)} alt={item.name} />
                </div>

                <div className="storespage-product-content">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>

                  <div className="storespage-product-bottom">
                    <h5>NPR {item.price}</h5>
                    <FaRegHeart className="storespage-heart-icon" />
                  </div>

                  {item.Link && (
                    <a
                      href={item.Link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "inline-block", marginTop: "10px" }}
                    >
                      Open Link
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="storespage-features-section">
          {storeFeatures.map((item, index) => (
            <div className="storespage-feature-box" key={index}>
              <div className="storespage-feature-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </section>

        {/* BEST SELLERS */}
        <section className="storespage-bestseller-section">
          <div className="storespage-title-row">
            <h2>Best Sellers</h2>
            <a href="/stores">View All</a>
          </div>

          <div className="storespage-bestseller-wrapper">
            <button
              className="storespage-arrow-btn"
              onClick={() => scroll(bestSellerRef, "left")}
            >
              <FaChevronLeft />
            </button>

            <div className="storespage-bestseller-grid scroll-x" ref={bestSellerRef}>
              {bestSellerProducts.map((item, index) => (
                <div className="storespage-bestseller-card" key={item.id || index}>
                  <img src={getImageUrl(item.image)} alt={item.name} />

                  <div className="storespage-bestseller-content">
                    <h4>{item.name}</h4>
                    <h5>NPR {item.price}</h5>

                    <p style={{ margin: "6px 0 0", fontSize: "14px" }}>
                      {item.description}
                    </p>

                    <div className="storespage-rating">
                      <FaStar />
                      <span>Popular</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="storespage-arrow-btn"
              onClick={() => scroll(bestSellerRef, "right")}
            >
              <FaChevronRight />
            </button>
          </div>
        </section>

        {/* CTA */}
        <section className="storespage-cta-section">
          <div className="storespage-cta-left">
            <div className="storespage-bag-icon">
              <GiBookshelf />
            </div>

            <div>
              <h2>Bring Innovation to Your Classroom</h2>
              <p>
                Equip your school or team with high-quality STEAM kits and learning resources.
              </p>
            </div>
          </div>

          <div className="storespage-cta-buttons">
            <button className="storespage-yellow-btn">Ask for Solution</button>

            <button className="storespage-white-btn">
              Contact for Custom Solutions
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Storespage;