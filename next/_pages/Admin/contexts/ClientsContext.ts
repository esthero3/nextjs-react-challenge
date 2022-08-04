import { createContext, useContext } from "react";
import { Client } from "../../../pages/api/types/Client";

interface ClientsContextType {
  clients: Client[];
}

export const ClientsContext = createContext<ClientsContextType | null>(null); //default value is null
