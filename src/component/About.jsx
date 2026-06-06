
import "../component/css/about.css"
import brain from "../assets/images/brain.png"
export default function About() {
  return (
    <section className="about-page">
      <div className="content-page">
      <h2>About <span className="s1"> Nexu</span> <span className="s2">ThinkLab</span></h2>
      <p>
        We bridge the gap between theory and real-world application through STEAM learning.
        We bridge the gap between theory and real-world application through STEAM learning.
        We bridge the gap between theory and real-world application through STEAM learning.



      </p>
      <a href="/aboutus"><button className="btn">Read More About Us <span className="arr">→</span> </button></a>
      </div>
      <img className="brainimage" src={brain} alt="" />
    </section>
  );
}