import React from "react";
import { useRouter } from "next/router";
import { AdminLayout } from "./AdminLayout";
import { ClientLayout } from "./ClientLayout";

type pageProps = {
  children: React.ReactNode; //allows you to nest other components inside this component(AppPage)
};

export const ContextLayout = (props: pageProps) => {
  const { pathname } = useRouter(); //pathname can be used to selectively set the context

  // if (pathname.startsWith("/admin")) {
  //   return <AdminLayout>{props.children}</AdminLayout>;
  // }

  // if (pathname.startsWith("/client/")) {
  //   return <ClientLayout>{props.children}</ClientLayout>;
  // }

  return <>{props.children}</>;
};

export default ContextLayout;
