import CarouselScrollInfinit from "../../shared/CaroselScrollInfinit";
import styles from "./support.module.css";

// import ad from "../../../assets/images/support/AD.jpg";
import ad from "../../../assets/images/support/ad.png";
import bevi from "../../../assets/images/support/bevi.png";
// import gft from "../../../assets/images/support/gft.jpg";
import gft from "../../../assets/images/support/gft-no-bg.png";
import nova from "../../../assets/images/support/nova.jpeg";
// import nova from "../../../assets/images/support/nova-no-bg.png";

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
