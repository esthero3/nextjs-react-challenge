import { ClientsContext } from "../contexts/ClientsContext";
import { useContext } from "react";
import { Client } from "../../../pages/api/types/Client";

export const useGetClient = (_id: string) => {
  const clients = useContext(ClientsContext)?.clients;

  if (!clients) return;

  return clients.find((client) => client._id === _id);
};
