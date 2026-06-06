import "../component/css/aboutstory.css";
import story from "../assets/images/story.webp"
function Story() {
  return (
    <section className="story">
      <div className="story-image">
        <img
          src={story}
          alt=""
        />
      </div>

      <div className="story-content">
        <h1>Our Story</h1>
 <p> 
        <p>
          Nexu ThinkLab was born to inspire innovation and creativity.Nexu ThinkLab was born to inspire innovation and creativity.
         </p>
          <p>
            Nexu ThinkLab was born to inspire innovation and creativity.
            Nexu ThinkLab was born to inspire innovation and creativity.
          </p>
          <p>
            Nexu ThinkLab was born to inspire innovation and creativity.
            Nexu ThinkLab was born to inspire innovation and creativity.
          </p>
          <p>
            Nexu ThinkLab was born to inspire innovation and creativity.
            Nexu ThinkLab was born to inspire innovation and creativity.
          </p>
        </p>

       <a href=""> <button>Read Our Journey   <span className="arr">→</span> </button></a>
      </div>
    </section>
  );
}

export default Story;