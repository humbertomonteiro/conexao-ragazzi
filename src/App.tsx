import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";
import { useEffect } from "react";

import { UserProvider } from "./Contexts/UserContext";
import { PartnerProvider } from "./Contexts/PartnerContext";

import Aos from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <PartnerProvider>
            <RoutesApp />
          </PartnerProvider>
        </UserProvider>
      </BrowserRouter>
      <div className="glow glow-bottom-left"></div>
      <div className="glow glow-top-right"></div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default App;
