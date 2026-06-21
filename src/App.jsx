
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/component/Navbar";
import Home from "./component/Home";
import Aboutus from "./component/Aboutus";
import Programspage from "./component/Programspage";
import Schools from "./component/Schools";
import Eventspage from "./component/Eventspage";
import Gallerypage from "./component/Gallerypage";
import Storespage from "./component/Storespage";
import Contactbtn from "./component/Contactbtn";
import ViewProgram from "./component/ViewProgram";
import Register from "./component/Register";
import Explorerevents from "./component/Explorerevents";
import Hostanevent from "./component/Hostanevent";
import View from "./component/View";
import ScrollToTop from "./ScrollToTop";
import GalleryDetail from "./component/GalleryDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        //pages
        <Route path="/aboutus" element={<Aboutus />}/>
       <Route path="/program" element={<Programspage />} />
       <Route path="/schools" element={<Schools />}/>
       <Route path="/events" element={<Eventspage />}/>
       <Route path="/gallery" element={<Gallerypage />} />
       <Route path="/gallery/:id" element={<GalleryDetail />} />
       <Route path="/stores" element={<Storespage />} />
       <Route path="/contactus" element={<Contactbtn />} />
       {/* links */}

       <Route path="/ViewProgram" element={<ViewProgram />}/>
       <Route path="/register" element={<Register />}/>
       <Route path="/explore_events" element={<Explorerevents />}/>
       <Route path="/Host_an_events" element={<Hostanevent />}/>
       <Route path="/view/:programId" element={<View />} />
      </Routes>
    </>
  );
}

export default App;