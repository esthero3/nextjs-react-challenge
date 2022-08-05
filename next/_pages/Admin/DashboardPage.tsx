import React from "react";
import { ClientCard } from "../../components/ClientCard";
import { useGetClients } from "./hooks/useGetClients";
import { useContext } from "react";
import { ClientsContext } from "./contexts/ClientsContext";

export const DashboardPage = () => {
  const clients = useContext(ClientsContext)?.clients;

  if (!clients) {
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
