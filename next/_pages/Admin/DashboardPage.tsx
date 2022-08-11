import React from "react";
import { ClientCard } from "../../components/ClientCard";
import { useContext } from "react";
import { useClientsContext } from "../../contexts/ClientsContext";
import { useGetClientsSWR } from "./hooks/useGetClients";

export const DashboardPage = () => {
  //const clients = useClientsContext()?.clients;
  const { clients, error } = useGetClientsSWR();

  if (!clients) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error, could not load clients</div>;
  }

  return (
    <>
      {clients.map((client) => {
        return <ClientCard _id={client._id} key={client._id} />;
      })}
    </>
  );
};
