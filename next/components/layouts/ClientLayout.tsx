import React from "react";
import { ClientContext } from "../../contexts/ClientContext";
import { useGetClient } from "../../_pages/Admin/hooks/useGetClient";
import { useRouter } from "next/router";

type pageProps = {
  children: React.ReactNode; //allows you to nest other components inside this(AppPage)
};

export const ClientLayout = (props: pageProps) => {
  const router = useRouter();
  let { clientId } = router.query;
  clientId = clientId as string;

  const { loading, client, fetchClient } = useGetClient(clientId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!client) {
    return <div>Error, could not load clients</div>;
  }

  return (
    <ClientContext.Provider //the context for the clients
      value={{ client: client, refetchClient: fetchClient }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};
