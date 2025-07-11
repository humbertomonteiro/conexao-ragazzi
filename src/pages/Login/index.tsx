import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import Modal from "../../components/shared/Modal";
import styles from "./login.module.css";
import logo from "../../assets/images/logos/conexao.png";

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const { state, login } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    message: string;
    type: "success" | "error";
  }>({ isOpen: false, message: "", type: "error" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirecionar se já autenticado
  useEffect(() => {
    if (state.user) {
      navigate("/dashboard");
    }
  }, [state.user, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalState({ isOpen: false, message: "", type: "error" });
    setIsSubmitting(true);

    if (!formData.email.trim() || !formData.password.trim()) {
      setModalState({
        isOpen: true,
        message: "Email e senha são obrigatórios.",
        type: "error",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await login(formData.email, formData.password);
      navigate("/dashboard");
    } catch (err) {
      setModalState({
        isOpen: true,
        message: "Email ou senha inválidos.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={logo} alt="Logo Conexão Ragazzi" />
      </div>
      <div className={styles.form}>
        <h2>Login Conexão Ragazzi</h2>
        <form onSubmit={handleSubmit}>
          <label className={styles.label}>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Ex: usuario@conexaoragazzi.com"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
              aria-label="Email do usuário"
              disabled={isSubmitting}
            />
          </label>
          <label className={styles.label}>
            <p>Senha</p>
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              required
              aria-label="Senha do usuário"
              disabled={isSubmitting}
            />
          </label>
          <button
            type="submit"
            className={styles.button}
            disabled={isSubmitting}
            aria-label="Entrar no sistema"
          >
            {isSubmitting ? "Entrando..." : "Entrar"}
          </button>
        </form>
        <Modal
          isOpen={modalState.isOpen}
          title={modalState.type === "success" ? "Sucesso!" : "Erro!"}
          message={modalState.message}
          type={modalState.type}
          onClose={() =>
            setModalState({ isOpen: false, message: "", type: "error" })
          }
        />
      </div>
    </div>
  );
}
