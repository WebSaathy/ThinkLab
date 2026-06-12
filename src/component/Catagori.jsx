
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../component/css/catogori.css"
function Catagori() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -220,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 220,
      behavior: "smooth",
    });
  };

  return (
    <section className="storespage-category-section">
      <div className="storespage-section-header">
        <button className="storespage-arrow-btn" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <h3>Shop by Category</h3>

        <button className="storespage-arrow-btn" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>

      <div className="storespage-category-scroll" ref={scrollRef}>
        {storeCategories.map((item, index) => (
          <button
            className="storespage-category-card"
            key={index}
          >
            <div className="storespage-category-icon">
              {item.icon}
            </div>
            <p>{item.title}</p>
          </button>
        ))}
      </div>
    </section>
  );
}