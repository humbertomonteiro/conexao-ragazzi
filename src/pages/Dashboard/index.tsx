import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import PartnerList from "../../components/dashboard/PartnerList";
import CreateUser from "../CreateUser";
import Modal from "../../components/shared/Modal";
import styles from "./dashboard.module.css";

import { BsFillPeopleFill } from "react-icons/bs";
import { MdPersonAdd, MdLogout } from "react-icons/md";

export default function Dashboard() {
  const { state, logout } = useUser();
  const navigate = useNavigate();
  const [page, setPage] = useState<"partners" | "create-user">("partners");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    message: string;
    type: "success" | "error";
  }>({ isOpen: false, message: "", type: "success" });

  // Verificar se o usuário é autenticado e administrador
  useEffect(() => {
    if (!state.user || state.user.role !== "admin") {
      navigate("/login", { replace: true });
    }
  }, [state.user, navigate]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    setModalState({ isOpen: false, message: "", type: "success" });
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch (err) {
      setModalState({
        isOpen: true,
        message: "Erro ao fazer logout.",
        type: "error",
      });
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <h1 className={styles.logo}>Conexão Ragazzi</h1>
        <nav>
          <ul>
            <li
              className={page === "partners" ? styles.active : ""}
              onClick={() => setPage("partners")}
            >
              <BsFillPeopleFill /> Parceiros
            </li>
            <li
              className={page === "create-user" ? styles.active : ""}
              onClick={() => setPage("create-user")}
            >
              <MdPersonAdd /> Criar Novo Usuário
            </li>
            <li
              className={isLoggingOut ? styles.disabled : ""}
              onClick={isLoggingOut ? undefined : handleLogout}
            >
              <MdLogout /> {isLoggingOut ? "Saindo..." : "Sair"}
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.main}>
        {page === "partners" && <PartnerList />}
        {page === "create-user" && <CreateUser />}
      </main>
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
  );
}
