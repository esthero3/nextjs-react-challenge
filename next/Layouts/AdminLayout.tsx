import React from "react";
import { Client } from "../pages/api/types/Client";
import { GetStaticProps, NextPage } from "next";
import { ClientsContext } from "../_pages/Admin/contexts/ClientsContext";
import { useGetClients } from "../_pages/Admin/hooks/useGetClients";

type PageProps = {
  children: React.ReactNode; //allows you to nest other components inside this(AppPage)
  clients: Client[];
};

// function AppPage(props: PageProps) {
//   const { clients, setClients, loading, fetchClients } = useGetClients(); //gets the clients and the loading status from custom hook that fetchs data

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!clients) {
//     return <div>Error, could not load clients</div>;
//   }

//   return (
//     // <ClientsContext.Provider //the context for the clients
//     //   value={{
//     //     clients: clients,
//     //     refetchClients: fetchClients,
//     //     setClients: setClients,
//     //   }}
//     // >
//     <>{props.children}</>
//     // </ClientsContext.Provider>
//   );
// }

export const AppPage: NextPage<PageProps> = ({ clients, children }) => {
  //console.log(clients);
  return (
    <ClientsContext.Provider //the context for the clients
      value={{
        clients: clients,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const rawData = await fetch("/api/clients");
  const clients = await rawData.json();
  console.log(clients);

  return {
    props: {
      clients,
    },
  };
};

export default AppPage;
