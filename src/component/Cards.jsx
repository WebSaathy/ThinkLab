import { useState } from "react";
import "../component/css/cards.css"

import { FaQuoteLeft } from "react-icons/fa";

export default function Partners() {


    const testimonials = [
        {
            text: "Nexu ThinkLab is transforming the way students learn. The hands-on approach and innovative programs have boosted confidence and creativity in our students.Nexu ThinkLab is transforming the way students learn. The hands-on approach and innovative programs have boosted confidence and creativity in our students.",
            name: "Ramesh Sharma",
            role: "Principal, Bright Future School",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            text: "The programs helped our students understand technology in a very practical way. Highly recommended!",
            name: "Sita Karki",
            role: "Teacher, Sunrise School",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            text: "Amazing learning experience. Students are now more confident in coding and robotics.",
            name: "Amit Yadav",
            role: "Coordinator, STEM Academy",
            img: "https://randomuser.me/api/portraits/men/65.jpg",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const active = testimonials[activeIndex];

    return (
        <section className="what-section">
            {/* RIGHT */}
            <div className="what-testimonial">
                <div className="what-title">
                    <h2>What <span>People Say</span></h2>
                </div>

                <div className="what-card">
                    <button
                        className="nav-btn left-btn"
                        onClick={() =>
                            setActiveIndex(
                                activeIndex === 0
                                    ? testimonials.length - 1
                                    : activeIndex - 1
                            )
                        }
                    >
                        ❮
                    </button>
                    <FaQuoteLeft className="quote-icon" />

                    <p>{active.text}</p>
                    <div className="wholecontent">
                        <div className="profile">
                            <img src={active.img} alt="" />
                            <div>
                                <h4>{active.name}</h4>
                                <span>{active.role}</span>
                            </div>
                        </div>


                    </div>

                    <button
                        className="nav-btn right-btn"
                        onClick={() =>
                            setActiveIndex(
                                activeIndex === testimonials.length - 1
                                    ? 0
                                    : activeIndex + 1
                            )
                        }
                    >
                        ❯
                    </button>

                </div>
            </div>
            <div className="dots">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={index === activeIndex ? "active" : ""}
                        onClick={() => setActiveIndex(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
}