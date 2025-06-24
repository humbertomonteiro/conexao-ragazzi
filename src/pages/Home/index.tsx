import Header from "../../components/sections/Header";
import Location from "../../components/sections/Location";
import TopBar from "../../components/sections/TopBar";
import Questions from "../../components/sections/Questions";
import Footer from "../../components/templates/Footer";
import Benefits from "../../components/sections/Benefits";
import Speakers from "../../components/sections/Speakers";
import AboutEvent from "../../components/sections/AboutEvent";
import Sponsors from "../../components/sections/Sponsors";
import Support from "../../components/sections/Support";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      {/* <AboutUs /> */}
      <AboutEvent />
      {/* <Testimonials /> */}
      <Speakers />
      <Benefits />
      <Location />
      <Sponsors />
      <Support />
      {/* <Organizers /> */}
      <Questions />
      <Footer />
    </div>
  );
};

export default Home;
