import "../component/css/impact.css";
import cover from "../assets/images/cover.jpeg";

export default function Impact() {
  return (
    <section className="impacts">

      <h1>Our <span className="s4">Impact</span> </h1>
      <div className="impact">

        <div className="cards">
          <img src={cover} alt="cover" />

          <div className="text">
            <h2>50+</h2>
            <p>Partner Schools </p>
          </div>
        </div>

        <div className="cards">
          <img src={cover} alt="cover" />

          <div className="text">
            <h2>200+</h2>
            <p>Workshops & Events</p>
          </div>
        </div>
        <div className="cards">
          <img src={cover} alt="cover" />

          <div className="text">
            <h2>25+</h2>
            <p>Competitions Organized</p>
          </div>
        </div>

        <div className="cards">
          <img src={cover} alt="cover" />

          <div className="text">
            <h2>100+</h2>
            <p>Projects Built</p>
          </div>
        </div>
        <div className="cards">
          <img src={cover} alt="cover" />

          <div className="text">
            <h2>10,000+</h2>
            <p>Students Reached</p>
          </div>
        </div>

      </div>
    </section>
  );
}

// import "../component/css/impact.css";
// import cover from "../assets/images/cover.jpeg";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// export default function Impact() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   const impactData = [
//     {
//       image: cover,
//       number: 50,
//       suffix: "+",
//       title: "Partner Schools",
//     },
//     {
//       image: cover,
//       number: 200,
//       suffix: "+",
//       title: "Workshops & Events",
//     },
//     {
//       image: cover,
//       number: 25,
//       suffix: "+",
//       title: "Competitions Organized",
//     },
//     {
//       image: cover,
//       number: 100,
//       suffix: "+",
//       title: "Projects Built",
//     },
//     {
//       image: cover,
//       number: 10000,
//       suffix: "+",
//       title: "Students Reached",
//     },
//   ];

//   return (
//     <section className="impacts" ref={ref}>
//       <h1>
//         Our <span className="s4">Impact</span>
//       </h1>

//       <div className="impact">
//         {impactData.map((item, index) => (
//           <div className="cards" key={index}>
//             <img src={item.image} alt={item.title} />

//             <div className="text">
//               <h2>
//                 {inView ? (
//                   <CountUp
//                     start={0}
//                     end={item.number}
//                     duration={2.5}
//                     separator=","
//                   />
//                 ) : (
//                   0
//                 )}
//                 {item.suffix}
//               </h2>

//               <p>{item.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }