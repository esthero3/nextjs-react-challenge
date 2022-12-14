import React from "react";
import { ClientsContext } from "./Admin/contexts/ClientsContext";
import { useGetClients } from "./Admin/hooks/useGetClients";

type pageProps = {
  children: React.ReactNode; //allows you to nest other components inside this(AppPage)
};

function AppPage(props: pageProps) {
  const { clients, setClients, loading, fetchClients } = useGetClients(); //gets the clients and the loading status from custom hook that fetchs data

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!clients) {
    return <div>Error, could not load clients</div>;
  }

  return (
    <ClientsContext.Provider //the context for the clients
      value={{
        clients: clients,
        refetchClients: fetchClients,
        setClients: setClients,
      }}
    >
      {props.children}
    </ClientsContext.Provider>
  );
}

export default AppPage;
