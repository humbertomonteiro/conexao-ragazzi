import { useContext } from "react";
import type { PartnerContextType } from "../Contexts/PartnerContext";
import { PartnerContext } from "../Contexts/PartnerContext";

export const usePartners = (): PartnerContextType => {
  const context = useContext(PartnerContext);
  if (!context) {
    throw new Error("usePartners deve ser usado dentro de um PartnerProvider");
  }
  return context;
};
