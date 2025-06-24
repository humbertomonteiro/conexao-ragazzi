import styles from "./caroselScrollInfinit.module.css";
import Section from "../Section";
import Title from "../Title";
import ButtonPrimary from "../ButtonPrimary";

interface CarouselScrollInfinitProps {
  listSlides: any[];
  title: string;
}

const CarouselScrollInfinit = ({
  listSlides,
  title,
}: CarouselScrollInfinitProps) => {
  return (
    <Section sectionSecondary={true}>
      <Title>{title}</Title>
      <div className={styles.carousel} data-aos="zoom-in">
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
      <div className={styles.button}>
        <ButtonPrimary
          link="https://www.sympla.com.br/evento/conexao-ragazzi/2999636"
          target={true}
        >
          Comprar agora
        </ButtonPrimary>
      </div>
    </Section>
  );
};

export default CarouselScrollInfinit;
