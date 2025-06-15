import styles from "./caroselScrollInfinit.module.css";
import Section from "../Section";
import Title from "../Title";

interface CarouselScrollInfinitProps {
  listSlides: any[];
}

const CarouselScrollInfinit = ({ listSlides }: CarouselScrollInfinitProps) => {
  return (
    <Section>
      <Title>Parcerias</Title>
      <div className={styles.carousel}>
        <div className={styles.group}>
          {listSlides.map((item, index) => (
            <div key={index} className={styles.card}>
              <img
                className={styles.img}
                src={item.img}
                alt={`Imagem logo: ${index}`}
              />
            </div>
          ))}
        </div>
        <div arial-hidden="true" className={styles.group}>
          {listSlides.map((item, index) => (
            <div key={index} className={styles.card}>
              <img
                loading="lazy"
                className={styles.img}
                src={item.img}
                alt={`Imagem logo: ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CarouselScrollInfinit;
