import * as xlsx from "xlsx";
import type { Partner } from "../infra/repositories/PartinerRepository";

export const exportPartnersToExcel = (partners: Partner[]): void => {
  // Mapear os dados dos parceiros para o formato da planilha
  const worksheetData = partners.map((partner) => ({
    ID: partner.id,
    Nome: partner.name,
    Telefone: partner.phone,
    "Parceiro Ragazzi": partner.isPartner ? "sim" : "Não",
    "Nome da empresa": partner.store,
    Função: partner.role,
    "Criado em": partner.createdAt
      ? new Date(partner.createdAt).toLocaleDateString("pt-BR")
      : "N/A",
  }));

  // Criar planilha e workbook
  const worksheet = xlsx.utils.json_to_sheet(worksheetData);

  // Definir larguras das colunas (em caracteres)
  worksheet["!cols"] = [
    { wch: 36 }, // ID (largo para UUIDs)
    { wch: 30 }, // Nome
    { wch: 20 }, // Telefone
    { wch: 25 }, // Parceiro Ragazzi
    { wch: 25 }, // Loja
    { wch: 20 }, // Função
    { wch: 15 }, // Criado em
  ];

  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, "Partners");

  // Gerar arquivo Excel como binário
  const excelBuffer = xlsx.write(workbook, { bookType: "xlsx", type: "array" });

  // Criar blob e iniciar download
  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  const fileName = `partners_export_${Date.now()}.xlsx`;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
};
