import ButtonPrimary from "../../shared/ButtonPrimary";
import styles from "./topBar.module.css";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <p>Não perca essa oportunidade!</p>
      <ButtonPrimary
        data-button-color="primary"
        link="https://www.sympla.com.br/evento/conexao-ragazzi/2999636"
        target={true}
      >
        participar
      </ButtonPrimary>
    </div>
  );
};

export default TopBar;
