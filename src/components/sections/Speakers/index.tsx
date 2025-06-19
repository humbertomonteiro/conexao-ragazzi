import Section from "../../shared/Section";
import styles from "./speakers.module.css";
import Title from "../../shared/Title";
import Speaker from "../../templates/Speaker";
import CaroselSimple from "../../shared/CaroselSimple";
import ButtonPrimary from "../../shared/ButtonPrimary";

import fabianoRebello from "../../../assets/images/speakers/fabiano-rebello.jpeg";
import julianaBorges from "../../../assets/images/speakers/juliana-borges.jpeg";
import rogerChagas from "../../../assets/images/speakers/roger-chagas.jpeg";
import taisePimenta from "../../../assets/images/speakers/taise-pimenta.jpeg";
import yasminMelo from "../../../assets/images/speakers/yasmin-melo.jpeg";
import heiderPereira from "../../../assets/images/speakers/heider-pereira.jpeg";

const speakers = [
  {
    name: "Fabiano Rebello - SP",
    content: (
      <Speaker
        name="Fabiano Rebello - SP"
        image={fabianoRebello}
        description="CEO CND"
      />
    ),
  },

  {
    name: "Juliana Borger -BA",
    content: (
      <Speaker
        name="Juliana Borges - BA"
        image={julianaBorges}
        description="Regional Qualibanking"
      />
    ),
  },
  {
    name: "Heider Pereira -BA",
    content: (
      <Speaker
        name="Heider Pereira - BA"
        image={heiderPereira}
        description="Superintendente Qualibanking"
      />
    ),
  },
  {
    name: "Roger Chagas - SP",
    content: (
      <Speaker
        name="Roger Chagas - SP"
        image={rogerChagas}
        description="CEO New Corban"
      />
    ),
  },
  {
    name: "Taise Pimenta - RJ",
    content: (
      <Speaker
        name="Taise Pimenta - RJ"
        image={taisePimenta}
        description="Mentora de Alta Performance"
      />
    ),
  },
  {
    name: "Yasmin Melo - SP",
    content: (
      <Speaker
        name="Yasmin Melo - SP"
        image={yasminMelo}
        description="CEO i9Fintech"
      />
    ),
  },
];

export default function Speakers() {
  return (
    <Section>
      <Title>Palestrantes</Title>
      <div className={styles.container} data-aos="zoom-in">
        <CaroselSimple listSlides={speakers} slidesPerViewPropsMobile={1} />
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
