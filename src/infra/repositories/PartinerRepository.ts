import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  Timestamp,
} from "firebase/firestore";

interface Partner {
  id?: string;
  name: string;
  phone: string;
  isPartner: string;
  store: string;
  role: string;
  createdAt?: Date;
}

export class PartnerRepository {
  private collectionName = "partners";

  async save(partner: Omit<Partner, "id" | "createdAt">): Promise<string> {
    try {
      const partnerWithTimestamp = {
        ...partner,
        createdAt: Timestamp.fromDate(new Date()),
      };
      const docRef = await addDoc(
        collection(db, this.collectionName),
        partnerWithTimestamp
      );
      return docRef.id;
    } catch (error) {
      throw new Error(`Erro ao salvar parceiro: ${error}`);
    }
  }

  async update(id: string, partner: Partial<Partner>): Promise<void> {
    try {
      const docRef = doc(db, this.collectionName, id);
      await updateDoc(docRef, {
        ...partner,
        updatedAt: Timestamp.fromDate(new Date()),
      });
    } catch (error) {
      throw new Error(`Erro ao atualizar parceiro: ${error}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const docRef = doc(db, this.collectionName, id);
      await deleteDoc(docRef);
    } catch (error) {
      throw new Error(`Erro ao deletar parceiro: ${error}`);
    }
  }

  async getById(id: string): Promise<Partner | null> {
    try {
      const docRef = doc(db, this.collectionName, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          name: data.name,
          phone: data.phone,
          isPartner: data.isPartner,
          store: data.store,
          role: data.role,
          createdAt: data.createdAt?.toDate() ?? null,
        };
      }
      return null;
    } catch (error) {
      throw new Error(`Erro ao buscar parceiro por ID: ${error}`);
    }
  }

  async getAll(): Promise<Partner[]> {
    try {
      const querySnapshot = await getDocs(collection(db, this.collectionName));
      const partners: Partner[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        partners.push({
          id: doc.id,
          name: data.name,
          phone: data.phone,
          isPartner: data.isPartner,
          store: data.store,
          role: data.role,
          createdAt: data.createdAt?.toDate() ?? null,
        });
      });
      return partners;
    } catch (error) {
      throw new Error(`Erro ao buscar todos os parceiros: ${error}`);
    }
  }
}

export const partnerRepository = new PartnerRepository();
export type { Partner };
