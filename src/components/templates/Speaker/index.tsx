import styles from "./speaker.module.css";

interface SpeakerProps {
  name: string;
  image: string;
  description: string;
}

export default function Speaker({ name, image, description }: SpeakerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
}
