import React from "react";
import { Client } from "../../pages/api/types/Client";
import { ClientCard } from "../../components/ClientCard";
import { useGetClientsSWR } from "./hooks/useGetClients";

import useSWR, { Key, Fetcher } from "swr";

export const DashboardPage = () => {
  const { clients, error } = useGetClientsSWR();

  if (error) return <div>Failed to get Clients</div>;
  if (!clients) return <div>Loading...</div>;

  return (
    <>
      {clients.map((client) => {
        return <ClientCard _id={client._id} key={client._id} />;
      })}
    </>
  );
};
