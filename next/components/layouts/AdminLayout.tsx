import React from "react";
import { ClientsContext } from "../../contexts/ClientsContext";
import {
  useGetClients,
  useGetClientsSWR,
} from "../../_pages/Admin/hooks/useGetClients";

type pageProps = {
  children: React.ReactNode; //allows you to nest other components inside this(AppPage)
};

export const AdminLayout = (props: pageProps) => {
  //const { clients, setClients, loading, fetchClients } = useGetClients(); //gets the clients and the loading status from custom hook that fetchs data
  const { clients, error } = useGetClientsSWR();

  if (!clients) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error, could not load clients</div>;
  }

  return (
    <ClientsContext.Provider //the context for the clients
      value={{
        clients: clients,
      }}
    >
      {props.children}
    </ClientsContext.Provider>
  );
};
