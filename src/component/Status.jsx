import "../component/css/status.css";
import school from "../assets/images/School .png"
import students from "../assets/images/Students .png"

import competitions from "../assets/images/Competitions .png"
import events from "../assets/images/Events .png"
function Status() {
  return (
    <section className="stats">
      <div className="stat-box">
        <div className="image1">
        <img src={school} alt="" />
        </div>
        <div className="contents1">
        <h1>50+</h1>
        <p>Partner Schools</p>
        </div>
      </div>

      <div className="stat-box">
        <div className="image1">
        <img src={students} alt="" />
        </div>
         <div className="contents1">
        <h1>10,000+</h1>
        <p>Students Reached</p>
        </div>
      </div>

      <div className="stat-box">
         <div className="image1">
        <img src={events} alt="" />
        </div>
         <div className="contents1">
        <h1>200+</h1>
        <p>Workshops</p>
        </div>
      </div>

      <div className="stat-box">
         <div className="image1">
        <img src={competitions} alt="" />
        </div>
         <div className="contents1">
        <h1>25+</h1>
        <p>Competitions</p>
        </div>
      </div>
        {/* <div className="stat-box">
         <div className="image1">
        <img src={competitions} alt="" />
        </div>
         <div className="contents1">
        <h1>25+</h1>
        <p>Competitions</p>
        </div>
      </div> */}
    </section>
  );
}

export default Status;