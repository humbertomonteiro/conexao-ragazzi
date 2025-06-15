import styles from "./header.module.css";
import ButtonPrimary from "../../shared/ButtonPrimary";
import Section from "../../shared/Section";

import { MdOutlinePix } from "react-icons/md";

const Header = () => {
  return (
    <Section sectionSecondary={true}>
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
          <div className={styles.buttons}>
            <ButtonPrimary icon={<MdOutlinePix />}>Comprar pix</ButtonPrimary>
            <ButtonPrimary data-button-color="secondary">
              Comprar agora
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Header;
