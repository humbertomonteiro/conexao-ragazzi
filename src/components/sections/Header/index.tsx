import styles from "./header.module.css";
import ButtonPrimary from "../../shared/ButtonPrimary";
import Section from "../../shared/Section";

// import { MdOutlinePix } from "react-icons/md";

import logo from "../../../assets/images/logos/conexao.png";

const Header = () => {
  return (
    <Section>
      <div className={styles.container} data-container="flex-col">
        <div className={styles.logo} data-aos="fade-up">
          <img src={logo} alt="logo" />
        </div>
        <div
          className={styles.text}
          data-container="flex-col"
          data-aos="fade-down"
        >
          <div className={styles.textContent}>
            {/* <h1>
              Prepare-se para uma imersão de{" "}
              <div className={styles.textColorfull}>conhecimento</div> &{" "}
              <div className={styles.textColorfull}>transformação</div>.
            </h1> */}
            <h1>
              Prepare-se para uma imersão de conhecimento e transformação.
            </h1>
            <p>
              Se você atua no mercado de crédito consignado ou serviços
              financeiros, este evento foi pensado para você. Uma oportunidade
              única de se atualizar, entender as novas tendências e impulsionar
              seus resultados.
            </p>
            <strong>Atenção: VAGAS LIMITADAS</strong>
          </div>
          {/* <strong>12 de Julho das 8:30h às 16:30h</strong> */}
          <div className={styles.buttons}>
            <ButtonPrimary
              link="https://www.sympla.com.br/evento/conexao-ragazzi/2999636"
              target={true}
            >
              Comprar agora
            </ButtonPrimary>
            {/* <ButtonPrimary data-button-color="secondary">
              Comprar agora
            </ButtonPrimary> */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Header;
