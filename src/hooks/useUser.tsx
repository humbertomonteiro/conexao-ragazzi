import { useContext } from "react";
import type { UserContextType } from "../Contexts/UserContext";
import { UserContext } from "../Contexts/UserContext";

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um PartnerProvider");
  }
  return context;
};
