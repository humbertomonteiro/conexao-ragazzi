import Section from "../../shared/Section";
import styles from "./organizers.module.css";
import Title from "../../shared/Title";
import Speaker from "../../templates/Speaker";
import CaroselSimple from "../../shared/CaroselSimple";
import ButtonPrimary from "../../shared/ButtonPrimary";

import danielRagazzi from "../../../assets/images/speakers/daniel-ragazzi.jpeg";

const organizers = [
  {
    name: "Daniel Ragazzi - CE ",
    content: (
      <Speaker
        name="Daniel Ragazzi - CE"
        image={danielRagazzi}
        description="CEO Ragazzi Promotora"
      />
    ),
  },
];

export default function Organizers() {
  return (
    <Section>
      <Title>Organizadores</Title>
      <div className={styles.container} data-aos="zoom-in">
        <CaroselSimple listSlides={organizers} slidesPerViewPropsMobile={1} />
      </div>
      <div className={styles.button}>
        <ButtonPrimary
          data-button-color="primary"
          link="https://www.sympla.com.br/evento/conexao-ragazzi/2999636"
          target={true}
        >
          comprar agora
        </ButtonPrimary>
      </div>
    </Section>
  );
}
