import Section from "../../shared/Section";
import Title from "../../shared/Title";
import styles from "./testimonials.module.css";
import CarouselSimple from "../../shared/CaroselSimple";
import Testemony from "../../templates/Testimony";
import ButtonPrimary from "../../shared/ButtonPrimary";

const listSlides = [
  {
    id: 1,
    title: "Slide 1",
    content: (
      <Testemony
        name="John Doe"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        image=""
      />
    ),
  },
  {
    id: 2,
    title: "Slide 2",
    content: (
      <Testemony
        name="John Doe"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        image=""
      />
    ),
  },
  {
    id: 3,
    title: "Slide 3",
    content: (
      <Testemony
        name="John Doe"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        image=""
      />
    ),
  },
  {
    id: 4,
    title: "Slide 4",
    content: (
      <Testemony
        name="John Doe"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        image=""
      />
    ),
  },
];

export default function Testimonials() {
  return (
    <Section>
      <Title>Depoimentos</Title>
      <div className={styles.container}>
        <CarouselSimple listSlides={listSlides} />
      </div>
      <div className={styles.button}>
        <ButtonPrimary>Comprar agora</ButtonPrimary>
      </div>
    </Section>
  );
}
