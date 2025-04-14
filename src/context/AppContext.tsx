import { createContext } from "react";
import { Pessoa, Item } from "../types";

export interface AppContextType {
  pessoas: Pessoa[];
  setPessoas: React.Dispatch<React.SetStateAction<Pessoa[]>>;
  itens: Item[];
  setItens: React.Dispatch<React.SetStateAction<Item[]>>;
  taxa: number;
  setTaxa: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);