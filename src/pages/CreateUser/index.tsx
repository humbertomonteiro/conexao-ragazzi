import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import Modal from "../../components/shared/Modal";
import styles from "./createUser.module.css";
import logo from "../../assets/images/logos/conexao.png";

interface CreateUserFormData {
  email: string;
  password: string;
  name: string;
  role: string;
}

export default function CreateUser() {
  const { state, createUser } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CreateUserFormData>({
    email: "",
    password: "",
    name: "",
    role: "user",
  });
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    message: string;
    type: "success" | "error";
  }>({ isOpen: false, message: "", type: "success" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  //   Verificar se o usuário é administrador
  useEffect(() => {
    if (!state.user || state.user.role !== "admin") {
      navigate("/login", { replace: true });
    }
  }, [state.user, navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setModalState({
        isOpen: true,
        message: "Por favor, insira um email válido.",
        type: "error",
      });
      return false;
    }
    if (formData.password.length < 6) {
      setModalState({
        isOpen: true,
        message: "A senha deve ter pelo menos 6 caracteres.",
        type: "error",
      });
      return false;
    }
    if (!formData.name.trim()) {
      setModalState({
        isOpen: true,
        message: "O nome é obrigatório.",
        type: "error",
      });
      return false;
    }
    if (!["admin", "user"].includes(formData.role)) {
      setModalState({
        isOpen: true,
        message: "O papel deve ser 'admin' ou 'user'.",
        type: "error",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalState({ isOpen: false, message: "", type: "success" });
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      await createUser(
        { email: formData.email, name: formData.name, role: formData.role },
        formData.password
      );
      setFormData({ email: "", password: "", name: "", role: "user" });
      setModalState({
        isOpen: true,
        message: "Usuário criado com sucesso!",
        type: "success",
      });
      navigate("/login");
    } catch (err) {
      setModalState({
        isOpen: true,
        message: `Erro ao criar usuário: ${err}`,
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
        <h2>Criar Novo Usuário</h2>
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
              placeholder="Mínimo 6 caracteres"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              required
              aria-label="Senha do usuário"
              disabled={isSubmitting}
            />
          </label>
          <label className={styles.label}>
            <p>Nome</p>
            <input
              type="text"
              name="name"
              placeholder="Ex: João Silva"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
              aria-label="Nome do usuário"
              disabled={isSubmitting}
            />
          </label>
          <label className={styles.label}>
            <p>Papel</p>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={styles.input}
              required
              aria-label="Papel do usuário"
              disabled={isSubmitting}
            >
              <option value="user">Usuário</option>
              <option value="admin">Administrador</option>
            </select>
          </label>
          <button
            type="submit"
            className={styles.button}
            disabled={isSubmitting}
            aria-label="Criar usuário"
          >
            {isSubmitting ? "Criando..." : "Criar Usuário"}
          </button>
        </form>
        <Modal
          isOpen={modalState.isOpen}
          title={modalState.type === "success" ? "Sucesso!" : "Erro!"}
          message={modalState.message}
          type={modalState.type}
          onClose={() =>
            setModalState({ isOpen: false, message: "", type: "success" })
          }
        />
      </div>
    </div>
  );
}
