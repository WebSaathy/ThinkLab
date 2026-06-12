import React from 'react'
import Storespage from './Storespage'
import cover from "../assets/images/storeimg.jpg"

function Storesec() {
  return (<>
   <section className="storehero">
        <div className="storehero-text">
          <h1>Nexu <span className='span1'>ThinkLab </span> <span className='span2'>Store</span></h1>
          <h5>Everything you need to inspire , create, and innovate.</h5>
          <p>
            Empowering students with hands-on learning, creativity, and technology skills.
            
          </p>
          <div className="store-buttons">
         <a href=""><button>Shop All Products ➡</button></a> 
         <a href="" className="btn2">Download Catalog 🡇</a>
  
  </div>
</div>
  
        <div className="storehero-img">
          <img src={cover} alt="students robotics" />
        </div>
      </section>
  </>
  )
}

export default Storesec