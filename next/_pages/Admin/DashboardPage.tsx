import React from "react";
import { ClientCard } from "../../components/ClientCard";
import { useGetClients } from "./hooks/useGetClients";

export const DashboardPage = () => {
  const { clients, loading } = useGetClients(); //gets the clients and the loading status from custom hook that fetchs data

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!clients) {
    return <div>Error, could not load clients</div>;
  }

  return (
    <>
        {clients.map((client) => {
          return <ClientCard _id={client._id} />;
        })}
    </>
  );
};
