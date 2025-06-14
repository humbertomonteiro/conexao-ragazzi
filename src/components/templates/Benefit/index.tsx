import styles from "./benefit.module.css";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Benefit({ icon, title, description }: BenefitProps) {
  return (
    <div className={styles.benefit} data-background="transparent-secondary">
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
