import CarouselScrollInfinit from "../../shared/CaroselScrollInfinit";
import styles from "./sponsors.module.css";

import newCorban from "../../../assets/images/sponsors/new-corban.jpeg";
import qualiBanking from "../../../assets/images/sponsors/quali-banking.png";

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

export default function Sponsors() {
  return (
    <div className={styles.container}>
      <CarouselScrollInfinit listSlides={listSlides} title="Patrocinadores" />
    </div>
  );
}
