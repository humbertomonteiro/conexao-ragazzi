import CarouselScrollInfinit from "../../shared/CaroselScrollInfinit";
import styles from "./support.module.css";

import ad from "../../../assets/images/support/AD.jpg";
import bevi from "../../../assets/images/support/bevi.png";
import gft from "../../../assets/images/support/gft.jpg";
import nova from "../../../assets/images/support/nova.jpeg";

const listSlides = [
  {
    img: ad,
  },
  {
    img: bevi,
  },
  {
    img: gft,
  },
  {
    img: nova,
  },
];

export default function Support() {
  return (
    <div className={styles.container}>
      <CarouselScrollInfinit listSlides={listSlides} title="Apoio" />
    </div>
  );
}
