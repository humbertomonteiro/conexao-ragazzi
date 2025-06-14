import styles from "./header.module.css";
import ButtonPrimary from "../../shared/ButtonPrimary";
import Section from "../../shared/Section";

const Header = () => {
  return (
    <Section>
      <div className={styles.container} data-container="flex-col">
        <div className={styles.logo}>
          {/* <img src={logo} alt="logo" /> */}
          <img
            src="https://ragazzipromotora.com.br/wp-content/uploads/2023/11/rgz_logo.png"
            alt="logo"
          />
        </div>
        <div className={styles.text} data-container="flex-col">
          <h1>Venha conhecer o melhor</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos. Lorem ipsum dolor sit amet
          </p>
          <ButtonPrimary>Comprar agora</ButtonPrimary>
        </div>
      </div>
    </Section>
  );
};

export default Header;
