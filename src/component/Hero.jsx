
import "../component/css/hero.css";
import cover from "../assets/images/hero.jpg"
import book from "../assets/images/book.png";
import bulb from "../assets/images/bulb.png";
import innovate from "../assets/images/innovative.png"
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Building <br /> <span>Future Innovators </span>Through STEAM</h1>
        <p>
          Empowering students with hands-on learning, creativity, and technology skills.
          Empowering students with hands-on learning, creativity, and technology skills.
          Empowering students with hands-on learning, creativity, and technology skills.

        </p>
        <div className="buttons">
       <a href="/program"><button>Explore Programs </button></a> 
       <a href="/aboutus" className="btn2">About Us <span className="arrow2">→</span></a>

</div>
<div className="link">
<a href="">
<img src={book} alt="" />
Learn
</a>
<a href="">
<img src={bulb}  alt="" />
Create
</a>
<a href="">
<img src={innovate}  alt="" />
<<<<<<< HEAD
innnovate
=======
innovate
>>>>>>> a1e8361ce0f0778228bc156e4cbcc3ef3beedb3b
</a>
</div>
      </div>

      <div className="hero-img">
        <img src={cover} alt="students robotics" />
      </div>
    </section>
  );
}