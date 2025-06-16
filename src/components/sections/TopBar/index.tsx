import ButtonPrimary from "../../shared/ButtonPrimary";
import styles from "./topBar.module.css";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <p>Não perca essa oportunidade!</p>
      <ButtonPrimary data-button-color="primary">participar</ButtonPrimary>
    </div>
  );
};

export default TopBar;
