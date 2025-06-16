import styles from "./title.module.css";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className={styles.title} data-aos="zoom-in">
      {children}
    </h2>
  );
};

export default Title;
