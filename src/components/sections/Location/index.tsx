import styles from "./location.module.css";
import Section from "../../shared/Section";
import Title from "../../shared/Title";
import ButtonPrimary from "../../shared/ButtonPrimary";

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
                href="https://www.google.com/maps/place/R.+Oswaldo+Araújo,+100+-+Praia+do+Futuro,+Fortaleza+-+CE,+60055-110/@-3.728249,-38.525312,17z/data=!3m1!4b1!4m6!3m5!1s0x7c74852e23fffff:0x6d955ecb47c0a48b!8m2!3d-3.728249!4d-38.525312!16s%2Fg%2F11c484x1kg?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
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
            <li>
              <div className={styles.icon}>✔️</div> Fácil acesso
              {/* : O hotel fica em uma das
              principais áreas de Fortaleza, com acesso rápido a táxis,
              aplicativos de transporte e transporte público. */}
            </li>
            <li>
              <div className={styles.icon}>✔️</div> Ambiente confortável
              {/* : Salas amplas,
              climatizadas e com estrutura moderna, garantindo conforto durante
              todo o evento. */}
            </li>
            <li>
              <div className={styles.icon}>✔️</div> Infraestrutura de primeira
              {/* : Internet de alta
              velocidade, equipamentos de áudio e vídeo de qualidade e todo o
              suporte necessário para uma excelente experiência de aprendizado. */}
            </li>
            <li>
              <div className={styles.icon}>✔️</div> Localização privilegiada
              {/* : Fica a poucos metros
              da orla da Praia do Futuro, uma das praias mais famosas e
              visitadas de Fortaleza. Perfeito para quem quiser aproveitar um
              pouco da cidade antes ou depois do evento. */}
            </li>
          </ul>

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
