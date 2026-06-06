import "../component/css/journey.css";
import {
  FaSeedling,
  FaUsers,
  FaBuilding,
  FaTrophy,
  FaRocket,
} from "react-icons/fa";

function Journey() {
  const journeyData = [
    {
      year: "2019",
      title: "The Beginning",
      desc: "Started with small workshops in local schools.",
      icon: <FaSeedling />,
      color: "#0f9d58",
    },
    {
      year: "2020",
      title: "Growing Together",
      desc: "Expanded programs and reached more students.",
      icon: <FaUsers />,
      color: "#ff6d00",
    },
    {
      year: "2021",
      title: "New Partnerships",
      desc: "Collaborated with schools and organizations nationwide.",
      icon: <FaBuilding />,
      color: "#f4b400",
    },
    {
      year: "2022",
      title: "Bigger Impact",
      desc: "Launched competitions and advanced learning programs.",
      icon: <FaTrophy />,
      color: "#6a1b9a",
    },
    {
      year: "2023+",
      title: "Future Forward",
      desc: "Continuing our mission to inspire innovators of tomorrow.",
      icon: <FaRocket />,
      color: "#1565c0",
    },
  ];

  return (
    <section className="journey">
      <h1>Our Journey</h1>

      <div className="timeline">
        {journeyData.map((item, index) => (
          <div className="timeline-box" key={index}>
            <div
              className="timeline-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <h2>{item.year}</h2>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;