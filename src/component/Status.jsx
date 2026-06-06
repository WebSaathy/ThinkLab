import "../component/css/status.css";
import stat1 from "../assets/images/temple-removebg-preview.png"
import stat2 from "../assets/images/stat2.png"
function Status() {
  return (
    <section className="stats">
      <div className="stat-box">
        <div className="image1">
        <img src={stat1} alt="" />
        </div>
        <div className="contents1">
        <h1>50+</h1>
        <p>Partner Schools</p>
        </div>
      </div>

      <div className="stat-box">
        <div className="image1">
        <img src={stat2} alt="" />
        </div>
         <div className="contents1">
        <h1>10,000+</h1>
        <p>Students Reached</p>
        </div>
      </div>

      <div className="stat-box">
         <div className="image1">
        <img src={stat1} alt="" />
        </div>
         <div className="contents1">
        <h1>200+</h1>
        <p>Workshops</p>
        </div>
      </div>

      <div className="stat-box">
         <div className="image1">
        <img src={stat1} alt="" />
        </div>
         <div className="contents1">
        <h1>25+</h1>
        <p>Competitions</p>
        </div>
      </div>
        <div className="stat-box">
         <div className="image1">
        <img src={stat1} alt="" />
        </div>
         <div className="contents1">
        <h1>25+</h1>
        <p>Competitions</p>
        </div>
      </div>
    </section>
  );
}

export default Status;