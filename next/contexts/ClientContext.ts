import { createContext, useContext } from "react";
import { Client } from "../../../pages/api/types/Client";

interface ClientContextType {
  client: Client;
  refetchClient: () => void;
}

export const ClientContext = createContext<ClientContextType | null>(null); //default value is null
export const useClientContext = () => useContext(ClientContext);
