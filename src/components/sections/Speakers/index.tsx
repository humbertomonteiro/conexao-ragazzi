import Section from "../../shared/Section";
import styles from "./speakers.module.css";
import Title from "../../shared/Title";
import Speaker from "../../templates/Speaker";
import CaroselSimple from "../../shared/CaroselSimple";

import danielRagazzi from "../../../assets/images/speakers/daniel-ragazzi.jpeg";
import fabianoRebello from "../../../assets/images/speakers/fabiano-rebello.jpeg";
import julianaBorges from "../../../assets/images/speakers/juliana-borges.jpeg";
import rogerChagas from "../../../assets/images/speakers/roger-chagas.jpeg";
import taisePimenta from "../../../assets/images/speakers/taise-pimenta.jpeg";
import yasminMelo from "../../../assets/images/speakers/yasmin-melo.jpeg";
// import marcosVieira from '../../../assets/speakers/marcos-vieira.jpeg'

const speakers = [
  {
    name: "Daniel Ragazzi",
    content: (
      <Speaker
        name="Daniel Ragazzi"
        image={danielRagazzi}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    ),
  },
  {
    name: "Fabiano Rebello",
    content: (
      <Speaker
        name="Fabiano Rebello"
        image={fabianoRebello}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    ),
  },

  {
    name: "Juliana Borger",
    content: (
      <Speaker
        name="Juliana Borges"
        image={julianaBorges}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    ),
  },
  {
    name: "Roger Chagas",
    content: (
      <Speaker
        name="Roger Chagas"
        image={rogerChagas}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    ),
  },
  {
    name: "Taise Pimenta",
    content: (
      <Speaker
        name="Taise Pimenta"
        image={taisePimenta}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    ),
  },
  {
    name: "Yasmin Melo",
    content: (
      <Speaker
        name="Yasmin Melo"
        image={yasminMelo}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    ),
  },
];

export default function Speakers() {
  return (
    <Section>
      <Title>Palestrantes</Title>
      <div
        className={styles.container}
        data-background="transparent-primary"
        data-aos="zoom-in"
      >
        <CaroselSimple listSlides={speakers} slidesPerViewPropsMobile={1} />
      </div>
    </Section>
  );
}
