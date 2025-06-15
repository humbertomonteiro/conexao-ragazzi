import Header from "../../components/sections/Header";
import Location from "../../components/sections/Location";
import TopBar from "../../components/sections/TopBar";
import Questions from "../../components/sections/Questions";
import Footer from "../../components/templates/Footer";
import Benefits from "../../components/sections/Benefits";
import Testimonials from "../../components/sections/Testimonials";
import CarouselScrollInfinit from "../../components/shared/CaroselScrollInfinit";
import AboutUs from "../../components/sections/AboutUs";

const listSlides = [
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2024/02/logo-santander.png",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2024/08/itau.png",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2024/02/Grupo_Safra_logo-1024x300.png",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2024/02/bib-logo.webp",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2025/02/logo-prata-e1738519613422.png",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2024/02/logo-banrisul.png",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2024/01/banco-bmg-credfranco.webp",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2024/01/Logo_C6Consig.png",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2024/02/logo-crefaz.svg",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2024/02/logo-banco-daycoval.png",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2024/02/logo-facta-financeira.png",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2024/02/ole-consignado-logo.png",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2024/02/Logo_PB.png",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2024/02/quero-mais-credito-1024x385.png",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2024/07/BM_Marca-Mercantil-Correspondente.png",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2025/02/qualibank-D82GkmzD.png",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2025/02/HAPPY-CONSIG-768x432-1-e1738521527413.png",
  },
  {
    img: "https://ragazzipromotora.com.br/wp-content/uploads/2025/02/images-removebg-preview.png",
  },
];

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <AboutUs />
      <Testimonials />
      <Benefits />
      <Location />
      <CarouselScrollInfinit listSlides={listSlides} />
      <Questions />
      <Footer />
    </div>
  );
};

export default Home;
