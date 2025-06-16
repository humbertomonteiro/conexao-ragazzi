import styles from "./aboutEvent.module.css";
import Section from "../../shared/Section";
import Title from "../../shared/Title";
import ButtonPrimary from "../../shared/ButtonPrimary";
// import { FaWhatsapp } from "react-icons/fa";

export default function AboutEvent() {
  return (
    <Section>
      <Title>Sobre o evento</Title>
      <div
        className={styles.container}
        data-background="transparent-primary"
        data-aos="zoom-in"
      >
        {/* <h3>Algumas pautas das palestras</h3> */}

        <div className={styles.listContainer}>
          <ul className={styles.list}>
            <li className={styles.itemLeft}>
              <p>Mapa de oportunidades com governos e prefeituras;</p>
            </li>
            <li className={styles.itemRight}>
              <p>⁠Estratégias de vendas no siape;</p>
            </li>
            <li className={styles.itemLeft}>
              <p>
                Qual a ferramenta mais indicada em seu negócio: Discadora, URA
                reversa, disparos e tráfego pago;
              </p>
            </li>
            <li className={styles.itemRight}>
              <p>
                Inteligência artificial, como utilizar essa importante
                ferramenta em nosso mercado;
              </p>
            </li>
            <li className={styles.itemLeft}>
              <p>Aprenda sobre bases, mailings e higienizações;</p>
            </li>
            <li className={styles.itemRight}>
              <p>
                New Corban: faça a gestão dos seus contratos em um único
                sistema;
              </p>
            </li>
            <li className={styles.itemLeft}>
              <p>Qualibanking, a fintech com inúmeras vantagens;</p>
            </li>
            <li className={styles.itemRight}>
              <p>⁠Marketing para o seu negócio;</p>
            </li>
            <li className={styles.itemLeft}>
              <p>A importância do equilíbrio emocional em nosso trabalho.</p>
            </li>
          </ul>
          <div className={styles.img}>
            <img
              src="https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951245.jpg?ga=GA1.1.2095538369.1681160396&semt=ais_hybrid&w=740"
              alt="about-event"
            />
          </div>
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
      </div>
    </Section>
  );
}
