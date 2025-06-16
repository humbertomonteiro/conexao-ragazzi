import styles from "./footer.module.css";

import logo from "../../../assets/images/logos/conexao.png";

import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container} data-aos="fade-in">
        <div className={styles.logo}>
          {/* <img src={logo} alt="logo" /> */}
          <img src={logo} alt="logo" />
          <p>Impulsionar seus resultados.</p>
          {/* <span>Especialista em consignado há 15 anos.</span> */}
        </div>
        <div className={styles.social}>
          <h3>Redes Sociais</h3>
          <ul className={styles.socialList}>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineTikTok />
              </a>
            </li>
          </ul>
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
