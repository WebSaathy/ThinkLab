import "../component/css/status.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import school from "../assets/images/School .png";
import students from "../assets/images/Students .png";
import competitions from "../assets/images/Competitions .png";
import events from "../assets/images/Events .png";

const statsData = [
  { image: school, end: 50, suffix: "+", title: "Partner Schools" },
  { image: students, end: 10000, suffix: "+", title: "Students Reached" },
  { image: events, end: 200, suffix: "+", title: "Workshops" },
  { image: competitions, end: 25, suffix: "+", title: "Competitions" },
];

function Status() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="stats">
      <div className="stat-grid" ref={ref}>
        {statsData.map((item, index) => (
          <div className="stat-box" key={index}>
            <div className="image1">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="contents1">
              <h1>
                {inView ? (
                  <CountUp start={0} end={item.end} duration={2.5} separator="," />
                ) : (
                  0
                )}
                {item.suffix}
              </h1>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Status;
