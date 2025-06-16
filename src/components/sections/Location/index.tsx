import styles from "./location.module.css";
import Section from "../../shared/Section";
import Title from "../../shared/Title";
import ButtonPrimary from "../../shared/ButtonPrimary";

import { FaCheck } from "react-icons/fa";

const Location = () => {
  return (
    <Section>
      <Title>Localização</Title>
      <div
        className={styles.container}
        data-background="transparent-tertiary"
        data-aos="zoom-in"
      >
        <div className={styles.text}>
          <h2>Gran Mareiro Hotel</h2>
          <p>
            O nosso workshop será realizado no{" "}
            <strong>Gran Mareiro Hotel</strong>, um dos hotéis mais bem
            avaliados da cidade, localizado na belíssima Praia do Futuro, em
            Fortaleza – Ceará.
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Endereço</strong>:{" "}
              <a
                className={styles.link}
                href="https://www.google.com/maps/place/Gran+Mareiro+Hotel/@-3.7396968,-38.453857,15z/data=!4m9!3m8!1s0x7c7464d784ca471:0x2401a6bfcd1dc08d!5m2!4m1!1i2!8m2!3d-3.7396968!4d-38.453857!16s%2Fg%2F11cs2x64rn?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                Rua Oswaldo Araújo, 100 – Praia do Futuro – Fortaleza – CE.
              </a>
            </li>
            <li>
              <strong>Data do workshop</strong>: 12 de julho de 2025, sábado.
            </li>
            <li>
              <strong>⁠Horário</strong>: 08:30h às 16:30h
            </li>
          </ul>
          <h3>Por que escolhemos este local?</h3>
          <ul className={styles.list} data-list-benefits="true">
            <li data-aos="fade-up">
              <div className={styles.icon}>
                <FaCheck />
              </div>
              Fácil acesso
              {/* : O hotel fica em uma das
              principais áreas de Fortaleza, com acesso rápido a táxis,
              aplicativos de transporte e transporte público. */}
            </li>
            <li data-aos="fade-up" data-aos-delay="100">
              <div className={styles.icon}>
                <FaCheck />
              </div>
              Ambiente confortável
              {/* : Salas amplas,
              climatizadas e com estrutura moderna, garantindo conforto durante
              todo o evento. */}
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <div className={styles.icon}>
                <FaCheck />
              </div>
              Infraestrutura de primeira
              {/* : Internet de alta
              velocidade, equipamentos de áudio e vídeo de qualidade e todo o
              suporte necessário para uma excelente experiência de aprendizado. */}
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <div className={styles.icon}>
                <FaCheck />
              </div>
              Localização privilegiada
              {/* : Fica a poucos metros
              da orla da Praia do Futuro, uma das praias mais famosas e
              visitadas de Fortaleza. Perfeito para quem quiser aproveitar um
              pouco da cidade antes ou depois do evento. */}
            </li>
          </ul>

          <ButtonPrimary
            data-button-width="full"
            link="https://www.sympla.com.br/evento/conexao-ragazzi/2999636"
            target={true}
          >
            Comprar agora
          </ButtonPrimary>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15925.290693380288!2d-38.453857!3d-3.7396968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7464d784ca471%3A0x2401a6bfcd1dc08d!2sGran%20Mareiro%20Hotel!5e0!3m2!1sen!2sbr!4v1750105958803!5m2!1sen!2sbr"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

export default Location;
