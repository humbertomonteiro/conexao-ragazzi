import { createContext, useReducer, useEffect } from "react";
import type { ReactNode } from "react";
import { partnerRepository } from "../infra/repositories/PartinerRepository";
import type { Partner } from "../infra/repositories/PartinerRepository";

export interface PartnerState {
  partners: Partner[];
  loading: boolean;
  error: string | null;
}

export type PartnerAction =
  | { type: "SET_PARTNERS"; payload: Partner[] }
  | { type: "ADD_PARTNER"; payload: Partner }
  | { type: "UPDATE_PARTNER"; payload: Partner }
  | { type: "DELETE_PARTNER"; payload: string }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

export interface PartnerContextType {
  state: PartnerState;
  savePartner: (partner: Omit<Partner, "id" | "createdAt">) => Promise<string>;
  updatePartner: (id: string, partner: Partial<Partner>) => Promise<void>;
  deletePartner: (id: string) => Promise<void>;
}

export const PartnerContext = createContext<PartnerContextType | undefined>(
  undefined
);

const initialState: PartnerState = {
  partners: [],
  loading: true,
  error: null,
};

const partnerReducer = (
  state: PartnerState,
  action: PartnerAction
): PartnerState => {
  switch (action.type) {
    case "SET_PARTNERS":
      return { ...state, partners: action.payload, loading: false };
    case "ADD_PARTNER":
      return { ...state, partners: [...state.partners, action.payload] };
    case "UPDATE_PARTNER":
      return {
        ...state,
        partners: state.partners.map((partner) =>
          partner.id === action.payload.id ? action.payload : partner
        ),
      };
    case "DELETE_PARTNER":
      return {
        ...state,
        partners: state.partners.filter(
          (partner) => partner.id !== action.payload
        ),
      };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const PartnerProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(partnerReducer, initialState);

  useEffect(() => {
    const fetchPartners = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const partners = await partnerRepository.getAll();
        dispatch({ type: "SET_PARTNERS", payload: partners });
      } catch (err) {
        dispatch({
          type: "SET_ERROR",
          payload: `Erro ao carregar parceiros: ${err}`,
        });
      }
    };
    fetchPartners();
  }, []);

  const savePartner = async (
    partner: Omit<Partner, "id" | "createdAt">
  ): Promise<string> => {
    try {
      const id = await partnerRepository.save(partner);
      dispatch({
        type: "ADD_PARTNER",
        payload: { ...partner, id, createdAt: new Date() },
      });
      return id;
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: `Erro ao salvar parceiro: ${err}`,
      });
      throw err;
    }
  };

  const updatePartner = async (
    id: string,
    partner: Partial<Partner>
  ): Promise<void> => {
    try {
      await partnerRepository.update(id, partner);
      const updatedPartner = {
        ...state.partners.find((p) => p.id === id),
        ...partner,
        id,
      } as Partner;
      dispatch({ type: "UPDATE_PARTNER", payload: updatedPartner });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: `Erro ao atualizar parceiro: ${err}`,
      });
      throw err;
    }
  };

  const deletePartner = async (id: string): Promise<void> => {
    try {
      await partnerRepository.delete(id);
      dispatch({ type: "DELETE_PARTNER", payload: id });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: `Erro ao deletar parceiro: ${err}`,
      });
      throw err;
    }
  };

  return (
    <PartnerContext.Provider
      value={{ state, savePartner, updatePartner, deletePartner }}
    >
      {children}
    </PartnerContext.Provider>
  );
};
