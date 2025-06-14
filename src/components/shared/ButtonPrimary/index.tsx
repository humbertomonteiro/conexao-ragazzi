import styles from "./buttonPrimary.module.css";
import { IoMdArrowForward } from "react-icons/io";

interface ButtonPrimaryProps {
  children: React.ReactNode;
  link?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const ButtonPrimary = ({
  children,
  onClick,
  link,
  icon,
  ...args
}: ButtonPrimaryProps) => {
  return (
    <>
      {link ? (
        <a href={link} {...args} className={styles.buttonPrimary}>
          {children}{" "}
          <div className={styles.icon}>
            {icon ? icon : <IoMdArrowForward />}
          </div>
        </a>
      ) : (
        <button onClick={onClick} {...args} className={styles.buttonPrimary}>
          {children}{" "}
          <div className={styles.icon}>
            {icon ? icon : <IoMdArrowForward />}
          </div>
        </button>
      )}
    </>
  );
};

export default ButtonPrimary;
