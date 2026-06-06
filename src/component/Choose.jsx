import React from 'react'
import images from "../assets/images/images.png"
import "../component/css/choose.css"
function Choose() {
    return (<>
        <div className="Choose-container">
            <h1>Why Choose Nexu ThinkLab Programs ?</h1>
            <div className="Choose-cards">
                <div className="cardchoose">
                    <img className='chooseimg' src={images} alt="" />
                    <div className="choosecon">
                    <h4>Hands-on Learning</h4>
                    <p>Practical projects that makes learning fun and effective</p>
                </div>
                </div>
                 <div className="cardchoose">
                    <img className='chooseimg' src={images} alt="" />
                    <div className="choosecon">
                    <h4>Hands-on Learning</h4>
                    <p>Practical projects that makes learning fun and effective</p>
                </div>
                </div> <div className="cardchoose">
                    <img className='chooseimg' src={images} alt="" />
                    <div className="choosecon">
                    <h4>Hands-on Learning</h4>
                    <p>Practical projects that makes learning fun and effective</p>
                </div>
                </div> <div className="cardchoose">
                    <img className='chooseimg' src={images} alt="" />
                    <div className="choosecon">
                    <h4>Hands-on Learning</h4>
                    <p>Practical projects that makes learning fun and effective</p>
                </div>
                </div> <div className="cardchoose">
                    <img className='chooseimg' src={images} alt="" />
                    <div className="choosecon">
                    <h4>Hands-on Learning</h4>
                    <p>Practical projects that makes learning fun and effective</p>
                </div>
                </div>
            </div>

        </div>

    </>
    )
}

export default Choose