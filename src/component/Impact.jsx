import "../component/css/impact.css";
import cover from "../assets/images/cover.jpeg";

export default function Impact() {
  return (
    <section className="impacts">

      <h1>Our <span className="s4">Impact</span> </h1>
      <div className="impact">

        <div className="cards">
          <img src={cover} alt="cover" />

          <div className="text">
            <h2>50+</h2>
            <p>Partner Schools </p>
          </div>
        </div>

        <div className="cards">
          <img src={cover} alt="cover" />

          <div className="text">
            <h2>200+</h2>
            <p>Workshops & Events</p>
          </div>
        </div>
        <div className="cards">
          <img src={cover} alt="cover" />

          <div className="text">
            <h2>25+</h2>
            <p>Competitions Organized</p>
          </div>
        </div>

        <div className="cards">
          <img src={cover} alt="cover" />

          <div className="text">
            <h2>100+</h2>
            <p>Projects Built</p>
          </div>
        </div>
        <div className="cards">
          <img src={cover} alt="cover" />

          <div className="text">
            <h2>10,000+</h2>
            <p>Students Reached</p>
          </div>
        </div>

      </div>
    </section>
  );
}