import { useState, useEffect } from "react";
import { usePartners } from "../../../hooks/usePartner";
import type { Partner } from "../../../infra/repositories/PartinerRepository";
import styles from "./partnerDetails.module.css";

interface PartnerDetailsProps {
  partnerId: string;
  onClose: () => void;
}

export default function PartnerDetails({
  partnerId,
  onClose,
}: PartnerDetailsProps) {
  const { updatePartner, deletePartner, state } = usePartners();
  const [partner, setPartner] = useState<Partner | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<Partner | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchPartner = async () => {
      try {
        const data = state.partners.find((partner) => partner.id === partnerId);
        if (data) {
          setPartner(data);
          setFormData(data);
        } else {
          setError("Parceiro não encontrado.");
        }
      } catch (err) {
        setError("Erro ao carregar parceiro: " + err);
      }
    };
    fetchPartner();
  }, [partnerId, state.partners]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) =>
      prev
        ? {
            ...prev,
            [name]: type === "checkbox" ? checked : value,
          }
        : null
    );
  };

  const validateForm = (): boolean => {
    if (!formData) return false;
    if (!formData.name.trim()) {
      setError("O nome é obrigatório.");
      return false;
    }
    if (!formData.phone.match(/^\(\d{2}\)\s\d{5}-\d{4}$/)) {
      setError("O telefone deve estar no formato (99) 99999-9999.");
      return false;
    }
    if (!formData.store.trim()) {
      setError("O campo 'Loja' é obrigatório.");
      return false;
    }
    if (!formData.role.trim()) {
      setError("O campo 'Função' é obrigatório.");
      return false;
    }
    return true;
  };

  const handleUpdate = async () => {
    if (!formData || !formData.id) return;
    setError(null);
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      await updatePartner(formData.id, formData);
      setPartner(formData);
      setEditMode(false);
    } catch (err) {
      setError("Erro ao atualizar parceiro: " + err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!partner || !partner.id) return;
    setError(null);
    setIsSubmitting(true);

    try {
      await deletePartner(partner.id);
      onClose();
    } catch (err) {
      setError("Erro ao deletar parceiro: " + err);
      setIsSubmitting(false);
    }
  };

  if (!partner) {
    return <p className={styles.loading}>Carregando detalhes...</p>;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>Detalhes do Parceiro</h2>
        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}
        {editMode ? (
          <form className={styles.form}>
            <label className={styles.label}>
              <p>Nome</p>
              <input
                type="text"
                name="name"
                value={formData?.name || ""}
                onChange={handleChange}
                className={styles.input}
                required
                aria-label="Nome do parceiro"
                disabled={isSubmitting}
              />
            </label>
            <label className={styles.label}>
              <p>Telefone</p>
              <input
                type="text"
                name="phone"
                value={formData?.phone || ""}
                onChange={handleChange}
                className={styles.input}
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
                  checked={formData?.isPartner || false}
                  onChange={handleChange}
                  className={styles.toggleInput}
                  aria-label="Parceiro Ragazzi (Sim ou Não)"
                  disabled={isSubmitting}
                />
                <span className={styles.toggleLabel}>
                  {formData?.isPartner ? "Sim" : "Não"}
                </span>
              </div>
            </label>
            <label className={styles.label}>
              <p>Loja</p>
              <input
                type="text"
                name="store"
                value={formData?.store || ""}
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
                value={formData?.role || ""}
                onChange={handleChange}
                className={styles.input}
                required
                aria-label="Função do parceiro"
                disabled={isSubmitting}
              />
            </label>
            <div className={styles.buttonGroup}>
              <button
                type="button"
                className={styles.button}
                onClick={handleUpdate}
                disabled={isSubmitting}
                aria-label="Salvar alterações"
              >
                {isSubmitting ? "Salvando..." : "Salvar"}
              </button>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => setEditMode(false)}
                disabled={isSubmitting}
                aria-label="Cancelar edição"
              >
                Cancelar
              </button>
            </div>
          </form>
        ) : (
          <div className={styles.details}>
            <p className={styles.detailItem}>
              <strong>Nome:</strong> {partner.name}
            </p>
            <p className={styles.detailItem}>
              <strong>Telefone:</strong> {partner.phone}
            </p>
            <p className={styles.detailItem}>
              <strong>Parceiro Ragazzi:</strong>{" "}
              {partner.isPartner ? "Sim" : "Não"}
            </p>
            <p className={styles.detailItem}>
              <strong>Loja:</strong> {partner.store}
            </p>
            <p className={styles.detailItem}>
              <strong>Função:</strong> {partner.role}
            </p>
            <p className={styles.detailItem}>
              <strong>Criado em:</strong>{" "}
              {partner.createdAt?.toLocaleDateString("pt-BR") || "N/A"}
            </p>
            <div className={styles.buttonGroup}>
              <button
                className={styles.button}
                onClick={() => setEditMode(true)}
                aria-label={`Editar ${partner.name}`}
              >
                Editar
              </button>
              <button
                className={styles.deleteButton}
                onClick={handleDelete}
                disabled={isSubmitting}
                aria-label={`Deletar ${partner.name}`}
              >
                {isSubmitting ? "Deletando..." : "Deletar"}
              </button>
              <button
                className={styles.cancelButton}
                onClick={onClose}
                aria-label="Fechar detalhes"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
