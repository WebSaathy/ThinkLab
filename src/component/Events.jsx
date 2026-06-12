// Events.jsx

import "../component/css/event.css";

import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import event3 from "../assets/images/event3.jpg";
import event4 from "../assets/images/event4.jpg";

export default function Events() {
  const events = [
    {
      image: event1,
      date: "Dec 01, 2024",
      title: "Robotics Challenge 2024",
      desc: "An exciting robotics competition for school students.",
      location: "Kathmandu, Nepal",
    },

    {
      image: event2,
      date: "Dec 15, 2024",
      title: "STEAM Workshop",
      desc: "Hands-on workshop on IoT and Smart Systems.",
      location: "Pokhara, Nepal",
    },

    {
      image: event3,
      date: "Jan 05, 2025",
      title: "Innovation League",
      desc: "Present your innovative ideas and compete for the best.",
      location: "Lalitpur, Nepal",
    },

    {
      image: event4,
      date: "Jan 20, 2025",
      title: "Hackathon for Change",
      desc: "Code, collaborate and create solutions for real-world issues.",
      location: "Online Event",
    },
  ];

  const posts = [
    {
      image: event1,
      title: "Benefits of STEAM Education for Future-Ready Students",
      date: "May 10, 2024",
    },

    {
      image: event2,
      title: "Getting Started with Robotics: A Beginner’s Guide",
      date: "Apr 25, 2024",
    },

    {
      image: event3,
      title: "How Coding Builds Creativity and Problem Solving Skills",
      date: "Apr 05, 2024",
    },
  ];

  return (
    <section className="events-page">
      {/* LEFT SIDE */}
      <div className="eventspage-left">

        <div className="title-heading">
          <h2>Upcoming <span>Events</span> </h2>
          <a href="/events">View All Events →</a>
        </div>

        <div className="eventpage-container">

          {events.map((item, index) => (
            <div className="cardcon" key={index}>

              <div className="card-img">
                <img src={item.image} alt="" />

                <span className="badge">
                  {item.date}
                </span>
              </div>

              <div className="cardpage-content">

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <div className="location">
                  📍 {item.location}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="recent-posts">

        <div className="title">
          <h2>Recent <span>Posts</span> </h2>
<<<<<<< HEAD
          <a href="/ViewProgram">View All Posts →</a>
=======
          <a href="/">View All Posts →</a>
>>>>>>> a1e8361ce0f0778228bc156e4cbcc3ef3beedb3b
        </div>

        <div className="posts">

          {posts.map((post, index) => (
            <div className="post" key={index}>

              <img src={post.image} alt="" />

              <div className="post-text">
                <h4>{post.title}</h4>
                <span>{post.date}</span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}