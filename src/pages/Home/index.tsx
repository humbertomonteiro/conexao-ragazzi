import Header from "../../components/sections/Header";
import Location from "../../components/sections/Location";
import TopBar from "../../components/sections/TopBar";
import Questions from "../../components/sections/Questions";
import Footer from "../../components/templates/Footer";
import Benefits from "../../components/sections/Benefits";
// import Testimonials from "../../components/sections/Testimonials";
import CarouselScrollInfinit from "../../components/shared/CaroselScrollInfinit";
import Speakers from "../../components/sections/Speakers";
// import AboutUs from "../../components/sections/AboutUs";
import AboutEvent from "../../components/sections/AboutEvent";

import newCorban from "../../assets/images/sponsors/new-corban.png";
import qualiBanking from "../../assets/images/sponsors/quali-banking.png";
// import Organizers from "../../components/sections/Oganizers";

const listSlides = [
  {
    img: newCorban,
  },
  {
    img: qualiBanking,
  },
  {
    img: newCorban,
  },
  {
    img: qualiBanking,
  },
];

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
      <CarouselScrollInfinit listSlides={listSlides} />
      {/* <Organizers /> */}
      <Questions />
      <Footer />
    </div>
  );
};

export default Home;
