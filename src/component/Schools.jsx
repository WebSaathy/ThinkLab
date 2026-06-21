// import React from "react";
// import Footer from "./Footer"
// import "../component/css/school.css";
// import banner from "../assets/images/banner.png"
// import {
//   FaSearch,
//   FaMapMarkerAlt,
//   FaChevronDown,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";

// function Schools() {
//   const schools = [
//     {
//       name: "Kathmandu Model College",
//       location: "Bagbazar, Kathmandu",
//       logo: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
//     },
//     {
//       name: "St. Xavier's School Godavari",
//       location: "Godavari, Lalitpur",
//       logo: "https://cdn-icons-png.flaticon.com/512/4207/4207247.png",
//     },
//     {
//       name: "Uniglobe SS/College",
//       location: "Kamaladi, Kathmandu",
//       logo: "https://cdn-icons-png.flaticon.com/512/3976/3976626.png",
//     },
//     {
//       name: "The Budhanilkantha School",
//       location: "Budhanilkantha, Kathmandu",
//       logo: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
//     },
//     {
//       name: "Green Valley School",
//       location: "Baneshwor, Kathmandu",
//       logo: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
//     },
//     {
//       name: "Presidential Graduate School",
//       location: "Baneshwor, Kathmandu",
//       logo: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
//     },
//     {
//       name: "SOS Hermann Gmeiner School",
//       location: "Sanepa, Lalitpur",
//       logo: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
//     },
//     {
//       name: "Mount Annapurna Secondary School",
//       location: "Pokhara, Kaski",
//       logo: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
//     },
//     {
//       name: "Little Angels' School",
//       location: "Kupondole, Lalitpur",
//       logo: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//     },
//     {
//       name: "Southwestern State College",
//       location: "Dillibazar, Kathmandu",
//       logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     },
//     {
//       name: "Kantipur Engineering College",
//       location: "Dhapakhel, Lalitpur",
//       logo: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
//     },
//     {
//       name: "Oxford College of Engineering",
//       location: "Balkumari, Lalitpur",
//       logo: "https://cdn-icons-png.flaticon.com/512/3976/3976626.png",
//     },
//     {
//       name: "Vidhya Sanskar School",
//       location: "Maharajgunj, Kathmandu",
//       logo: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
//     },
//     {
//       name: "Swostishree Gurukul IB World School",
//       location: "Sanothimi, Bhaktapur",
//       logo: "https://cdn-icons-png.flaticon.com/512/2991/2991112.png",
//     },
//     {
//       name: "Gramya Secondary School",
//       location: "Bharatpur, Chitwan",
//       logo: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
//     },
//     {
//       name: "St. Mary's School",
//       location: "Jawalakhel, Lalitpur",
//       logo: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
//     },
//     {
//       name: "Navjyoti Secondary School",
//       location: "Sano Thimi, Bhaktapur",
//       logo: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
//     },
//     {
//       name: "Reliance International Academy",
//       location: "Kalanki, Kathmandu",
//       logo: "https://cdn-icons-png.flaticon.com/512/3976/3976626.png",
//     },
//     {
//       name: "Universal College",
//       location: "Baneshwor, Kathmandu",
//       logo: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
//     },
//     {
//       name: "Janapriya Multiple Campus",
//       location: "New Baneshwor, Kathmandu",
//       logo: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
//     },
//   ];

//   return (
//     <>
//     <div className="schools-page">
//       {/* Header */}
//       <div className="top-section">
//         <h1>
//           Schools Partnered With <span>Nexu ThinkLab</span>
//         </h1>

//         <p>
//           Our partners are driving change by bringing hands-on learning,
//           creativity, and innovation into classrooms across Nepal.
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="filters">
//         <div className="search-box">
//           <input
//             type="text"
//             placeholder="Search schools by name or location..."
//           />
//           <FaSearch className="search-icon" />
//         </div>

//      <div className="dropdown">
//   <select>
//     <option>All Provinces</option>
//     <option>Koshi</option>
//     <option>Madhesh</option>
//     <option>Bagmati</option>
//     <option>Gandaki</option>
//     <option>Lumbini</option>
//     <option>Karnali</option>
//     <option>Sudurpashchim</option>
//   </select>
// </div>

// <div className="dropdown">
//   <select>
//     <option>All Districts</option>
//     <option>Kathmandu</option>
//     <option>Lalitpur</option>
//     <option>Bhaktapur</option>
//     <option>Kailali</option>
//     <option>Banke</option>
//     <option>Dang</option>
//   </select>
// </div>

// <div className="dropdown">
//   <select>
//     <option>All Levels</option>
//     <option>Beginner</option>
//     <option>Intermediate</option>
//     <option>Advanced</option>
//   </select>
// </div>
//       </div>

//       {/* School Cards */}
//       <div className="schools-grid">
//         {schools.map((school, index) => (
//           <div className="school-card" key={index}>
//             <div className="logo-wrapper">
//               <img src={school.logo} alt={school.name} />
//             </div>

//             <h3>{school.name}</h3>

//             <p>
//               <FaMapMarkerAlt className="location-icon" />
//               {school.location}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="pagination">
//         <button>
//           <FaChevronLeft />
//         </button>

//         <button className="active">1</button>
//         <button>2</button>
//         <button>3</button>
//         <button>4</button>
//         <span>...</span>
//         <button>6</button>

//         <button>
//           <FaChevronRight />
//         </button>
//       </div>

    
//     </div>
//   {/* Bottom CTA */}
//       <div className="partner-banner">
//         <div className="banner-left">
//           <div className="b"><img src={banner} alt="" /></div>

//           <div>
//             <h2>
//               Partner With Us <br />
//               <span>Shape the Future,</span> Together.
//             </h2>

//             <p>
//               Bring STEAM education, innovation labs,
//               <br />
//               and hands-on learning to your school community.
//             </p>
//           </div>
//         </div>

//         <div className="banner-buttons">
//           <button className="partner-btn">Partner With Us →</button>

//           <button className="proposal-btn">
//             Download Proposal ↓
//           </button>
//         </div>
//       </div>
//       <Footer />
//       </>
//   );
// }

// export default Schools;
import React, { useEffect, useMemo, useState } from "react";
import Footer from "./Footer";
import "../component/css/school.css";
import banner from "../assets/images/banner.png";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import BASE_URL from "../config";
function Schools() {
  const [schools, setSchools] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [levels, setLevels] = useState([]);

  const [search, setSearch] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const schoolsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const [schoolsRes, provincesRes, districtsRes, levelsRes] =
          await Promise.all([
            fetch(`${BASE_URL}/api/schools/schools/`),
            fetch(`${BASE_URL}/api/schools/provinces/`),
            fetch(`${BASE_URL}/api/schools/districts/`),
            fetch(`${BASE_URL}/api/schools/levels/`),
          ]);

        if (
          !schoolsRes.ok ||
          !provincesRes.ok ||
          !districtsRes.ok ||
          !levelsRes.ok
        ) {
          throw new Error("Failed to fetch data from API");
        }

        const [schoolsData, provincesData, districtsData, levelsData] =
          await Promise.all([
            schoolsRes.json(),
            provincesRes.json(),
            districtsRes.json(),
            levelsRes.json(),
          ]);

        setSchools(Array.isArray(schoolsData) ? schoolsData : []);
        setProvinces(Array.isArray(provincesData) ? provincesData : []);
        setDistricts(Array.isArray(districtsData) ? districtsData : []);
        setLevels(Array.isArray(levelsData) ? levelsData : []);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredSchools = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return schools.filter((school) => {
      const schoolName = String(school.name || "").toLowerCase();
      const address = String(school.address || school.location || "").toLowerCase();
      const provinceName = String(
        school.province_name ||
          school.province?.name ||
          school.province?.title ||
          ""
      ).toLowerCase();
      const districtName = String(
        school.district_name ||
          school.district?.name ||
          school.district?.title ||
          ""
      ).toLowerCase();
      const levelName = String(
        school.level_name ||
          school.level?.name ||
          school.level?.title ||
          ""
      ).toLowerCase();

      const matchesSearch =
        !searchValue ||
        schoolName.includes(searchValue) ||
        address.includes(searchValue) ||
        provinceName.includes(searchValue) ||
        districtName.includes(searchValue) ||
        levelName.includes(searchValue);

      const matchesProvince = selectedProvince
        ? String(
            school.province_id ??
              school.province?.id ??
              school.province ??
              ""
          ) === selectedProvince
        : true;

      const matchesDistrict = selectedDistrict
        ? String(
            school.district_id ??
              school.district?.id ??
              school.district ??
              ""
          ) === selectedDistrict
        : true;

      const matchesLevel = selectedLevel
        ? String(
            school.level_id ??
              school.level?.id ??
              school.level ??
              ""
          ) === selectedLevel
        : true;

      return matchesSearch && matchesProvince && matchesDistrict && matchesLevel;
    });
  }, [schools, search, selectedProvince, selectedDistrict, selectedLevel]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedProvince, selectedDistrict, selectedLevel]);

  const totalPages = Math.max(1, Math.ceil(filteredSchools.length / schoolsPerPage));
  const indexOfLastSchool = currentPage * schoolsPerPage;
  const indexOfFirstSchool = indexOfLastSchool - schoolsPerPage;
  const currentSchools = filteredSchools.slice(indexOfFirstSchool, indexOfLastSchool);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div className="schools-page">
        <div className="top-section">
          <h1>
            Schools Partnered With <span>Nexu ThinkLab</span>
          </h1>

          <p>
            Our partners are driving change by bringing hands-on learning,
            creativity, and innovation into classrooms across Nepal.
          </p>
        </div>

        <div className="filters">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search schools by name, location, province, district..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="search-icon" />
          </div>

          <div className="dropdown">
            <select
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
            >
              <option value="">All Provinces</option>
              {provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>

          <div className="dropdown">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">All Districts</option>
              {districts.map((district) => (
                <option key={district.id} value={district.id}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>

          <div className="dropdown">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="">All Levels</option>
              {levels.map((level) => (
                <option key={level.id} value={level.id}>
                  {level.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading && <p style={{ padding: "20px" }}>Loading schools...</p>}
        {error && <p style={{ padding: "20px", color: "red" }}>{error}</p>}

        {!loading && !error && (
          <>
            <div className="schools-grid">
              {currentSchools.length > 0 ? (
                currentSchools.map((school) => (
                  <div className="school-card" key={school.id}>
                    <div className="logo-wrapper">
                      <img
                        src={school.image || "https://via.placeholder.com/150"}
                        alt={school.name}
                      />
                    </div>

                    <h3>{school.name}</h3>

                    <p>
                      <FaMapMarkerAlt className="location-icon" />
                      {school.address || school.location || "No address available"}
                    </p>

                    <p>
                      <strong>Province:</strong>{" "}
                      {school.province_name ||
                        school.province?.name ||
                        "N/A"}
                    </p>
                    <p>
                      <strong>District:</strong>{" "}
                      {school.district_name ||
                        school.district?.name ||
                        "N/A"}
                    </p>
                    <p>
                      <strong>Level:</strong>{" "}
                      {school.level_name || school.level?.name || "N/A"}
                    </p>

                    {school.Link && (
                      <a
                        href={school.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "inline-block", marginTop: "10px" }}
                      >
                        Visit School
                      </a>
                    )}
                  </div>
                ))
              ) : (
                <p style={{ padding: "20px" }}>No schools found.</p>
              )}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <FaChevronLeft />
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    className={currentPage === index + 1 ? "active" : ""}
                    onClick={() => goToPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <div className="partner-banner">
        <div className="banner-left">
          <div className="b">
            <img src={banner} alt="Partner Banner" />
          </div>

          <div>
            <h2>
              Partner With Us <br />
              <span>Shape the Future,</span> Together.
            </h2>

            <p>
              Bring STEAM education, innovation labs,
              <br />
              and hands-on learning to your school community.
            </p>
          </div>
        </div>

        <div className="banner-buttons">
          <button className="partner-btn">Partner With Us →</button>
          <button className="proposal-btn">Download Proposal ↓</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Schools;