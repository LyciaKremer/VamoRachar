// src/context/useAppContext.ts
import { useContext } from "react";
import { AppContext, AppContextType } from "./AppContext";

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um AppProvider");
  }
  return context;
};
