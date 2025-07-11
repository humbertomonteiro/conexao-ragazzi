import { useState } from "react";
import { IMaskInput } from "react-imask";
import { usePartners } from "../../hooks/usePartner";
import type { Partner } from "../../infra/repositories/PartinerRepository";
import Modal from "../../components/shared/Modal";
import styles from "./formAddPartner.module.css";
import logo from "../../assets/images/logos/conexao.png";

type PartnerFormData = Omit<Partner, "id" | "createdAt">;

export default function FormDataPartner() {
  const { savePartner } = usePartners();
  const [formData, setFormData] = useState<PartnerFormData>({
    name: "",
    phone: "",
    isPartner: false,
    store: "",
    role: "",
  });
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    message: string;
    type: "success" | "error";
  }>({ isOpen: false, message: "", type: "success" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: string } }
  ) => {
    let name: string;
    let value: string | boolean;

    if ("type" in e.target) {
      // Evento de input nativo (texto ou checkbox)
      name = e.target.name;
      value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    } else {
      // Evento do IMaskInput
      name = e.target.name;
      value = e.target.value;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setModalState({
        isOpen: true,
        message: "O nome é obrigatório.",
        type: "error",
      });
      return false;
    }
    if (!formData.phone.match(/^\(\d{2}\)\s\d{5}-\d{4}$/)) {
      setModalState({
        isOpen: true,
        message: "O telefone deve estar no formato (99) 99999-9999.",
        type: "error",
      });
      return false;
    }
    if (!formData.store.trim()) {
      setModalState({
        isOpen: true,
        message: "O campo 'Loja' é obrigatório.",
        type: "error",
      });
      return false;
    }
    if (!formData.role.trim()) {
      setModalState({
        isOpen: true,
        message: "O campo 'Função' é obrigatório.",
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
      await savePartner(formData);
      setFormData({
        name: "",
        phone: "",
        isPartner: false,
        store: "",
        role: "",
      });
      setModalState({
        isOpen: true,
        message: "Formulário enviado com sucesso!",
        type: "success",
      });
    } catch (err) {
      setModalState({
        isOpen: true,
        message: `Erro ao enviar formulário: ${err}`,
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
        <h2>Parceiro Conexão Ragazzi</h2>
        <form onSubmit={handleSubmit}>
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
              aria-label="Nome do parceiro"
              disabled={isSubmitting}
            />
          </label>
          <label className={styles.label}>
            <p>Telefone</p>
            <IMaskInput
              mask="(00) 00000-0000"
              value={formData.phone}
              onAccept={(value: string) =>
                handleChange({ target: { name: "phone", value } })
              }
              className={styles.input}
              placeholder="(99) 99999-9999"
              required
              aria-label="Telefone do parceiro"
              disabled={isSubmitting}
            />
          </label>
          <label className={styles.label}>
            <p>Parceiro Ragazzi</p>
            <div className={styles.toggleContainer}>
              <input
                type="checkbox"
                name="isPartner"
                checked={formData.isPartner}
                onChange={handleChange}
                className={styles.toggleInput}
                aria-label="Parceiro Ragazzi (Sim ou Não)"
                disabled={isSubmitting}
              />
              <span className={styles.toggleLabel}>
                {formData.isPartner ? "Sim" : "Não"}
              </span>
            </div>
          </label>
          <label className={styles.label}>
            <p>Nome da empresa</p>
            <input
              type="text"
              name="store"
              placeholder="Ex: Ragazzi"
              value={formData.store}
              onChange={handleChange}
              className={styles.input}
              required
              aria-label="Nome da loja"
              disabled={isSubmitting}
            />
          </label>
          <label className={styles.label}>
            <p>Função</p>
            <input
              type="text"
              name="role"
              placeholder="Ex: Vendedor"
              value={formData.role}
              onChange={handleChange}
              className={styles.input}
              required
              aria-label="Função do parceiro"
              disabled={isSubmitting}
            />
          </label>
          <button
            type="submit"
            className={styles.button}
            disabled={isSubmitting}
            aria-label="Confirmar envio do formulário"
          >
            {isSubmitting ? "Enviando..." : "Confirmar"}
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
