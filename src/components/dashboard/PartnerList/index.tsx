import { useState, useEffect } from "react";
import { usePartners } from "../../../hooks/usePartner";
import PartnerDetails from "../PartnerDetails";
import styles from "./partnerList.module.css";
import { RiFileExcel2Fill, RiFileListFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { exportPartnersToExcel } from "../../../services/exportService";

export default function PartnerList() {
  const { state } = usePartners();
  const { partners, loading, error } = state;
  const [selectedPartnerId, setSelectedPartnerId] = useState<
    string | undefined | null
  >(null);
  const [viewMode, setViewMode] = useState<"card" | "table">(
    (localStorage.getItem("partnerListViewMode") as "card" | "table") || "card"
  );
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(
    Number(localStorage.getItem("partnerListItemsPerPage")) || 12
  );

  useEffect(() => {
    localStorage.setItem("partnerListViewMode", viewMode);
  }, [viewMode]);

  useEffect(() => {
    localStorage.setItem("partnerListItemsPerPage", itemsPerPage.toString());
    setCurrentPage(1); // Resetar para a primeira página ao mudar itemsPerPage
  }, [itemsPerPage]);

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "card" ? "table" : "card"));
  };

  const handleExport = () => {
    exportPartnersToExcel(partners);
  };

  // Filtrar parceiros
  const filteredPartners = partners.filter((partner) =>
    partner.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Calcular índices para paginação
  const totalItems = filteredPartners.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPartners = filteredPartners.slice(startIndex, endIndex);

  // Navegação de página
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
  };

  if (loading) {
    return <p className={styles.loading}>Carregando parceiros...</p>;
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button
          data-button-export="true"
          className={styles.toggleButton}
          onClick={handleExport}
          aria-label="Exportar parceiros para Excel"
          disabled={partners.length === 0}
        >
          Exportar para Excel <RiFileExcel2Fill />
        </button>
        <button
          className={styles.toggleButton}
          onClick={toggleViewMode}
          aria-label={`Alternar para visualização em ${
            viewMode === "card" ? "tabela" : "cards"
          }`}
        >
          {viewMode === "card" ? "Ver como Tabela" : "Ver como Cards"}{" "}
          <RiFileListFill />
        </button>
      </div>
      <div className={styles.boxSearch}>
        <h3>
          <BsFillPeopleFill /> Quantidade de participantes:{" "}
          {filteredPartners.length}
        </h3>
        <div className={styles.search}>
          <input
            onChange={(e) => setFilter(e.target.value)}
            type="text"
            placeholder="Buscar por nome"
            aria-label="Buscar parceiros por nome"
          />
        </div>
      </div>
      {filteredPartners.length === 0 ? (
        <p className={styles.empty}>Nenhum parceiro encontrado.</p>
      ) : viewMode === "card" ? (
        <div className={styles.cardGrid}>
          {currentPartners.map((partner) => (
            <div key={partner.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{partner.name}</h3>
              <p className={styles.cardInfo}>
                Parceiro: {partner.isPartner ? "Sim" : "Não"}
              </p>
              <p className={styles.cardInfo}>Cargo: {partner.role}</p>
              <p className={styles.cardInfo}>Telefone: {partner.phone}</p>
              <button
                className={styles.cardButton}
                onClick={() => setSelectedPartnerId(partner.id)}
                aria-label={`Ver detalhes de ${partner.name}`}
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Nome</th>
              <th className={styles.tableHeader}>Parceiro</th>
              <th className={styles.tableHeader} data-table-role="true">
                Cargo
              </th>
              <th className={styles.tableHeader}>Telefone</th>
              <th className={styles.tableHeader}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {currentPartners.map((partner) => (
              <tr key={partner.id} className={styles.tableRow}>
                <td className={styles.tableCell}>{partner.name}</td>
                <td className={styles.tableCell}>
                  {partner.isPartner ? "Sim" : "Não"}
                </td>
                <td className={styles.tableCell} data-table-role="true">
                  {partner.role}
                </td>
                <td className={styles.tableCell}>{partner.phone}</td>
                <td className={styles.tableCell}>
                  <button
                    className={styles.tableButton}
                    onClick={() => setSelectedPartnerId(partner.id)}
                    aria-label={`Ver detalhes de ${partner.name}`}
                  >
                    Detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {filteredPartners.length > 0 && (
        <div className={styles.pagination}>
          <div className={styles.itemsPerPage}>
            <label htmlFor="itemsPerPage">Itens por página:</label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              aria-label="Selecionar número de itens por página"
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={36}>36</option>
            </select>
          </div>
          <div className={styles.pageControls}>
            <button
              className={styles.pageButton}
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              aria-label="Página anterior"
            >
              Anterior
            </button>
            <span className={styles.pageInfo}>
              Página {currentPage} de {totalPages}
            </span>
            <button
              className={styles.pageButton}
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              aria-label="Próxima página"
            >
              Próximo
            </button>
          </div>
        </div>
      )}
      {selectedPartnerId && (
        <PartnerDetails
          partnerId={selectedPartnerId}
          onClose={() => setSelectedPartnerId(null)}
        />
      )}
    </div>
  );
}
