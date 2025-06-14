import styles from "./aboutUs.module.css";
import Section from "../../shared/Section";
import Title from "../../shared/Title";
import ButtonPrimary from "../../shared/ButtonPrimary";

export default function AboutUs() {
  return (
    <Section data-background="transparent-secondary">
      <Title>Sobre nós</Title>
      <div className={styles.container} data-background="transparent-secondary">
        <div className={styles.image}>
          <img
            src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg?ga=GA1.1.2095538369.1681160396&semt=ais_hybrid&w=740"
            alt="Sobre nós"
          />
        </div>

        <div className={styles.text}>
          <h3>Quem somos?</h3>
          <p>
            Somos uma empresa que oferece soluções de marketing para empresas de
            todos os setores. nemo voluptatem earum! Voluptatem alias veniam,
            tenetur, earum similique explicabo voluptas illum minima
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            eum nobis, rem similique nemo voluptatem earum! Voluptatem alias
            veniam, tenetur, earum similique explicabo voluptas illum minima
            voluptates corporis cumque eveniet!.
          </p>
          <ButtonPrimary data-button-color="secondary">
            Comprar agora
          </ButtonPrimary>
        </div>
      </div>
    </Section>
  );
}
