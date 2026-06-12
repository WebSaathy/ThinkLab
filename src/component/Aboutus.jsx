import React from 'react'
import cover from "../assets/images/cover.jpeg"
import "../component/css/aboutus.css"

import Mission from './Mission'
import Aboutstory from './Aboutstory'
import Team from './Team'
import Status from './Status'
import Journey from './Journey'
import Partners from './Partners'
import Footer from './Footer'
function Aboutus() {
  return (
   <>
    <section className="Aboutus">
      <div className="Aboutus-text">
        <h1>About <span>Nexu  </span> <br />ThinkLab</h1>
        <p>
        Empowering young minds through STEAM education , innovation , and digital skills.
</p>
        <p>Nexu Thinklab is an innovation-driven education initiative dedicated to preparing students for the future through hands-on learning and real-world experiences.</p>
        
        <div className="Aboutus-buttons">
       <a href=""><button>Our Programs <span className="arrow2"> → </span> </button></a> 
      

</div>
</div>
 <div className="Aboutus-img">
        <img src={cover} alt="students robotics" />
      </div>
      
 </section>
<Mission />
<Status />
<Aboutstory />
<Team />
<Journey />
<Partners />
<Footer />
   </>
  )
}

export default Aboutus