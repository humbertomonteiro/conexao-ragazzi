// import { useEffect } from "react";
import styles from "./modal.module.css";

interface ModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function Modal({
  isOpen,
  title,
  message,
  type,
  onClose,
}: ModalProps) {
  // Fechar automaticamente após 5 segundos (opcional)
  //   useEffect(() => {
  //     if (isOpen) {
  //       const timer = setTimeout(() => {
  //         onClose();
  //       }, 5000);
  //       return () => clearTimeout(timer);
  //     }
  //   }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div
        className={`${styles.modal} ${
          type === "success" ? styles.success : styles.error
        }`}
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar modal"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
