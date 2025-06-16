import styles from "./buttonPrimary.module.css";
import { IoMdArrowForward } from "react-icons/io";

interface ButtonPrimaryProps {
  children: React.ReactNode;
  link?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  target?: boolean;
}

const ButtonPrimary = ({
  children,
  onClick,
  link,
  icon,
  target,
  ...args
}: ButtonPrimaryProps) => {
  return (
    <>
      {link ? (
        <a
          href={link}
          target={target ? "_blank" : "_self"}
          {...args}
          className={styles.buttonPrimary}
          data-aos="zoom-in"
        >
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
