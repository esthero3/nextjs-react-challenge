import React from "react";
import { ClientsContext } from "./Admin/contexts/ClientsContext";
import { useGetClients } from "./Admin/hooks/useGetClients";
import { useRouter } from "next/router";
import { AdminLayout } from "../layouts/AdminLayout";
//import {ClientLayout} from "../layouts/ClientLayout"

type pageProps = {
  children: React.ReactNode; //allows you to nest other components inside this(AppPage)
};

function AppPage(props: pageProps) {
  const { pathname } = useRouter(); //pathname can be used to selectively set the context

  if (pathname.startsWith("/admin")) {
    return <AdminLayout>{props.children}</AdminLayout>;
  }

  return <>{props.children}</>;
}

export default AppPage;
