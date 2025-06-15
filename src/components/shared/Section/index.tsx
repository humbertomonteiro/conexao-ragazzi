import styles from "./section.module.css";

interface SectionProps {
  children: React.ReactNode;
  sectionSecondary?: boolean;
}

const Section = ({ children, sectionSecondary }: SectionProps) => {
  return (
    <div
      className={sectionSecondary ? styles.sectionSecondary : styles.section}
    >
      {children}
    </div>
  );
};

export default Section;
