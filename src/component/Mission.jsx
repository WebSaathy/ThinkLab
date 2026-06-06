import "../component/css/mission.css";
import Mission1 from "../assets/images/Mission1.png"
import mission2 from "../assets/images/mission2.jpg"
import mission3 from "../assets/images/mission3.png"
import img from "../assets/images/trophy.png"
function MissionVision() {
  return (
    <section className="mission-page">
      <div className="cardmiss">
        <div className="imagemiss">
        <img src={Mission1} alt="" />
        </div>
        <div className="contentmiss">
        <h2>Our <span> Mission</span></h2>
        <p>
          To empower students with practical STEAM education, innovative thinking, and digital skills to solve real-world problems and shape a better tommorrow.
        </p>
        </div>
      </div>
  <div className="cardmiss">
        <div className="imagemiss">
        <img src={mission2} alt="" />
        </div>
        <div className="contentmiss">
        <h2>Our <span>Vision</span></h2>
        <p>
          To be a leafing platform that inspires and equips the next generation of innovators, creators and leaders.
        </p>
        </div>
      </div>
  <div className="cardmiss">
        <div className="imagemiss">
        <img src={mission3} alt="" />
        </div>
        <div className="contentmiss">
        <h2>Our <span>Values</span></h2>
        <p>
          <li>Curiosity drives learning</li>
          <li>Creativity fuels innovation</li>
          <li>collaboration builds stronger communities </li>
          <li>Integrity in everything we do</li>
          <li>Impact for a better future</li>
        </p>
        </div>
      </div>

    
    </section>
  );
}

export default MissionVision;