import ButtonPrimary from "../../shared/ButtonPrimary";
import styles from "./topBar.module.css";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <p>harum quis quasi aliquid expedita explicabo .</p>
      <ButtonPrimary data-button-color="primary">aproveite</ButtonPrimary>
    </div>
  );
};

export default TopBar;
