import React from "react";
import { server } from "../config";
import { GetStaticProps, NextPage } from "next";
import { ClientsContext } from "../_pages/Admin/contexts/ClientsContext";
import { DashboardPage } from "../_pages/Admin/DashboardPage";
import { Client } from "./api/types/Client";
import AdminLayout from "../Layouts/AdminLayout";

interface Props {
  //clients: Client[];
  children: React.ReactNode; //allows you to nest other components inside this(AppPage)
}

// export const Dashboard: NextPage<Props> = ({ clients }) => {
//   return (
//     <>
//       <ClientsContext.Provider //the context for the clients
//         value={{
//           clients: clients,
//         }}
//       >
//         <DashboardPage />
//       </ClientsContext.Provider>
//     </>
//   );
// };

export const Dashboard = (props: Props) => {
  return (
    <>
      <AdminLayout></AdminLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const rawData = await fetch(`${server}/api/clients`);
  const clients = await rawData.json();

  return {
    props: {
      clients,
    },
  };
};

export default Dashboard;
