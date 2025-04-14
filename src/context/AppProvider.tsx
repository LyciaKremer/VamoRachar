import React, { useState } from "react";
import { AppContext } from "./AppContext";
import { Pessoa, Item } from "../types";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [itens, setItens] = useState<Item[]>([]);
  const [taxa, setTaxa] = useState<number>(10);

  return (
    <AppContext.Provider value={{ pessoas, setPessoas, itens, setItens, taxa, setTaxa }}>
      {children}
    </AppContext.Provider>
  );
};