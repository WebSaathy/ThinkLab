import React, { useState } from "react";
import "../component/css/store.css";
import img from "../assets/images/roboticsImgs.webp";
import store from "../assets/images/store.png"
const products = [
  { name: "Robotics Starter Kit", price: "NPR 4,500", img },
  { name: "IoT Learning Kit", price: "NPR 3,200", img },
  { name: "Microbit Kit", price: "NPR 2,800", img },
  { name: "STEM Explorer Box", price: "NPR 2,200", img },
  { name: "AI Learning Kit", price: "NPR 5,000", img },
  { name: "Electronics Kit", price: "NPR 3,800", img },
  { name: "Coding Kit", price: "NPR 4,000", img },
];

export default function Store() {
  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = 4;

  const next = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="store-section">

      {/* LEFT SIDE */}
      <div className="store-left">
        <div className="store-icon"><img src={store} alt="" /></div>

        <div>
          <h2>
            Nexu ThinkLab Store
          </h2>

          <p>
            Explore our STEM kits, robotics products, and innovation tools.
            
          </p>

         <a href="/stores"> <button className="store-btn">
            Visit Our Store →
          </button>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="store-right">

        {/* ARROWS */}
        <div className="arrows">
          <button onClick={prev}>‹</button>
          <button onClick={next}>›</button>
        </div>

        {/* PRODUCTS (NO SCROLL) */}
        <div className="product-row">

          {visibleProducts.map((p, i) => (
            <div key={i} className="product-card">
              <img src={p.img} alt={p.name} />

              <h4 className="h4">{p.name}</h4>
              <div className="price-row">

                <p>{p.price}</p>
                <span className="cart">🛒</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}