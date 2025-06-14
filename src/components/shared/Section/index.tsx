import styles from "./section.module.css";

const Section = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.section}>{children}</div>;
};

export default Section;
