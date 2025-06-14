import styles from "./location.module.css";
import Section from "../../shared/Section";
import Title from "../../shared/Title";
import ButtonPrimary from "../../shared/ButtonPrimary";

const Location = () => {
  return (
    <Section>
      <Title>Localização</Title>
      <div className={styles.container} data-background="transparent-tertiary">
        <div className={styles.text}>
          <h2>Venha nos visitar</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
            excepturi! Nisi culpa, distinctio nulla illo dolorum sit voluptatum
            aut eum repellat sint quisquam, repudiandae doloribus corporis iure
            atque ut illum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
            excepturi! Nisi culpa, distinctio nulla illo dolorum sit voluptatum
            aut eum repellat sint quisquam, repudiandae doloribus corporis iure
            atque ut illum!
          </p>
          <ButtonPrimary data-button-width="full">Comprar agora</ButtonPrimary>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7962.749176864492!2d-38.525312!3d-3.728249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74852e23fffff%3A0x6d955ecb47c0a48b!2sR%20Pedro%20Borges%2C%2020%20-%20Sala%20T%202C%20-%20Centro%2C%20Fortaleza%20-%20CE%2C%2060055-110!5e0!3m2!1spt-BR!2sbr!4v1749844046759!5m2!1spt-BR!2sbr"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

export default Location;
