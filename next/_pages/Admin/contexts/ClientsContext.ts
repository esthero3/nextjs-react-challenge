import { createContext, useContext } from "react";
import { Client } from "../../../pages/api/types/Client";

interface ClientsContextType {
  clients: Client[];
  setClients?: (clients: Client[]) => void;
  refetchClients?: () => void;
}

export const ClientsContext = createContext<ClientsContextType | null>(null); //default value is null
