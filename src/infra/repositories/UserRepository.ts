import { db } from "../firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

interface User {
  id: string;
  email: string;
  name: string;
  role: string; // Ex.: "admin", "user"
  createdAt?: Date;
}

export class UserRepository {
  private collectionName = "users";

  async getById(id: string): Promise<User | null> {
    try {
      const docRef = doc(db, this.collectionName, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          email: data.email,
          name: data.name,
          role: data.role,
          createdAt: data.createdAt?.toDate() ?? null,
        };
      }
      return null;
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error}`);
    }
  }

  async getByEmail(email: string): Promise<User | null> {
    try {
      const q = query(
        collection(db, this.collectionName),
        where("email", "==", email)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const docSnap = querySnapshot.docs[0];
        const data = docSnap.data();
        return {
          id: docSnap.id,
          email: data.email,
          name: data.name,
          role: data.role,
          createdAt: data.createdAt?.toDate() ?? null,
        };
      }
      return null;
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por email: ${error}`);
    }
  }

  // Método para criar usuário (será usado quando implementar o cadastro)
  async create(user: Omit<User, "id" | "createdAt">): Promise<string> {
    try {
      const userWithTimestamp = {
        ...user,
        createdAt: Timestamp.fromDate(new Date()),
      };
      const docRef = await addDoc(
        collection(db, this.collectionName),
        userWithTimestamp
      );
      return docRef.id;
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error}`);
    }
  }
}

export const userRepository = new UserRepository();
export type { User };
