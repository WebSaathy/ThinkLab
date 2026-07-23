// import React, { useState, useEffect } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import logo from "../assets/images/logo3.png";
// import "../component/css/navbar.css";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   // CLOSE MENU ON PAGE CHANGE
//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location]);

//   return (
//     <header className="navbar">
//       <div className="logo">
//         <img src={logo} alt="Nexu Logo" />
//       </div>

//       <nav className={menuOpen ? "nav-links active" : "nav-links"}>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/aboutus">About Us</NavLink>
//         <NavLink to="/program">Programs</NavLink>
//         <NavLink to="/events">Events</NavLink>
//         <NavLink to="/schools">Schools</NavLink>
//         <NavLink to="/gallery">Gallery</NavLink>
//         <NavLink to="/stores">Store</NavLink>

//         <button className="contact-btn mobile-btn">
//           Contact
//         </button>
//       </nav>

//       <div className="nav-actions">
//         {/* <input type="text" placeholder="Search 🔍" /> */}
//         <div className="search-box">
//   <i className="fas fa-search search-icon"></i>

//   <input
//     type="text"
//     placeholder="Search anything..."
//   />
// </div>

//         <NavLink to="/contactus">
//           <button className="contact-btn desktop-btn">
//             Contact
//           </button>
//         </NavLink>

//         <div
//           className={menuOpen ? "menu-toggle open" : "menu-toggle"}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </header>
//   );
// }


import React, { useState, useEffect, useMemo } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/images/logo3.png";
import "../component/css/navbar.css";

const BASE_URL = "https://api.nexuthinklab.com.np";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchText, setSearchText] = useState("");

  const [allItems, setAllItems] = useState([]);

  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {

    async function loadSearchData() {

      try {

        setLoading(true);

        const [

          programCategories,

          programs,

          storeCategories,

          stores,

          bestSeller

        ] = await Promise.all([

          axios.get(`${BASE_URL}/api/programs/program-categories/`),

          axios.get(`${BASE_URL}/api/programs/programs/`),

          axios.get(`${BASE_URL}/api/stores/store-categories/`),

          axios.get(`${BASE_URL}/api/stores/stores/`),

          axios.get(`${BASE_URL}/api/stores/best-sellers/`)

        ]);

        const data = [];

        // PROGRAM CATEGORY
        programCategories.data.forEach(item => {
          data.push({
            id: item.id,
            title: item.name,
            subtitle: item.defination,
            image: item.img,
            type: "Program Category",
            url: "/program"
          });
        });

        // PROGRAMS
        programs.data.forEach(item => {
          data.push({
            id: item.id,
            title: item.title,
            subtitle: item.category_name,
            image: item.image,
            type: "Program",
            url: "/program"
          });
        });

        // STORE CATEGORY
        storeCategories.data.forEach(item => {
          data.push({
            id: item.id,
            title: item.name,
            image: item.image,
            type: "Store Category",
            url: "/stores"
          });
        });

        // STORES
        stores.data.forEach(item => {
          data.push({
            id: item.id,
            title: item.name,
            subtitle: item.category_name,
            image: item.image,
            type: "Store",
            url: "/stores"
          });
        });

        // BEST SELLER
        bestSeller.data.forEach(item => {
          data.push({
            id: item.id,
            title: item.name,
            subtitle: item.category_name,
            image: item.image,
            type: "Best Seller",
            url: "/stores"
          });
        });

        setAllItems(data);

      } catch (err) {
        console.log(err);
      }

      setLoading(false);

    }

    loadSearchData();

  }, []);

  const filtered = useMemo(() => {

    if (!searchText.trim()) return [];

    return allItems.filter(item =>

      item.title.toLowerCase().includes(searchText.toLowerCase()) ||

      item.type.toLowerCase().includes(searchText.toLowerCase()) ||

      (item.subtitle &&
        item.subtitle.toLowerCase().includes(searchText.toLowerCase()))

    );

  }, [searchText, allItems]);

  return (
    <header className="navbar">

      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/program">Programs</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/schools">Schools</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/stores">Store</NavLink>

        <button className="contact-btn mobile-btn">
          Contact
        </button>
      </nav>

      <div className="nav-actions">

        <div className="search-box">

          <i className="fas fa-search search-icon"></i>

          <input

            value={searchText}

            onChange={(e) => setSearchText(e.target.value)}

            placeholder="Search anything..."

          />

          {searchText && (

            <div className="search-dropdown">

              {loading && (
                <div className="search-loading">
                  Loading...
                </div>
              )}

              {!loading && filtered.length === 0 && (
                <div className="search-loading">
                  No Results Found
                </div>
              )}

              {!loading &&
                filtered.map(item => (

                  <div

                    key={item.type + item.id}

                    className="search-item"

                    onClick={() => {

                      navigate(item.url);

                      setSearchText("");

                    }}

                  >

                    <img
                      src={item.image}
                      alt=""
                    />

                    <div>

                      <h4>{item.title}</h4>

                      <small>{item.type}</small>

                      {item.subtitle &&

                        <p>{item.subtitle}</p>

                      }

                    </div>

                  </div>

                ))}

            </div>

          )}

        </div>

        <NavLink to="/contactus">
          <button className="contact-btn desktop-btn">
            Contact
          </button>
        </NavLink>

        <div
          className={menuOpen ? "menu-toggle open" : "menu-toggle"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </header>
  );
}