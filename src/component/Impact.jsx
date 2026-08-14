import "../component/css/impact.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import school from "../assets/images/School .png";
import students from "../assets/images/Students .png";
import projects from "../assets/images/Projects .png";
import events from "../assets/images/Events .png";

const impactData = [
  { image: school, end: 50, suffix: "+", title: "Partner Schools" },
  { image: events, end: 200, suffix: "+", title: "Workshops & Events" },
  { image: projects, end: 100, suffix: "+", title: "Projects Built" },
  { image: students, end: 10000, suffix: "+", title: "Students Reached" },
];

export default function Impact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="impacts">
      <h1>
        Our <span className="s4">Impact</span>
      </h1>

      <div className="impact" ref={ref}>
        {impactData.map((item, index) => (
          <div className="cards" key={index}>
            <div className="card-icon">
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
            </div>

            <div className="text">
              <h2 className="nbr">
                {inView ? (
                  <CountUp start={0} end={item.end} duration={2.5} separator="," />
                ) : (
                  0
                )}
                {item.suffix}
              </h2>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
