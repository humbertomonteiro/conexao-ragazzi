import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* <img src={logo} alt="logo" /> */}
          <img
            src="https://ragazzipromotora.com.br/wp-content/uploads/2023/11/rgz_logo.png"
            alt="logo"
          />
          <span>Especialista em consignado há 15 anos.</span>
        </div>
        <div className={styles.links}>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
          <a href="#">Termos de uso</a>
          <a href="#">Política de privacidade</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2025 Conexal Ragazzi. Todos os direitos reservados.</p>
        <span>
          Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/lucas-santos-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &lt;HumDev&gt;
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
