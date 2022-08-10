import { useClientContext } from "../../../contexts/ClientContext";
import { useClientsContext } from "../../../contexts/ClientsContext";
import { useContext } from "react";
import { Client } from "../../../pages/api/types/Client";
import { useEffect, useState } from "react";

export const useGetClient = (_id: string) => {
  const [client, setClient] = useState<Client | undefined>();
  const [loading, setLoading] = useState<Boolean>(false);

  const clientsContext = useClientsContext()?.clients;
  const clientContext = useClientContext()?.client;

  const fetchClient = async () => {
    console.log("No context to grab from, fetching client");
    try {
      const rawData = await fetch(`/api/clients/${_id}`);
      const data = await rawData.json();
      setClient(data);
      setLoading(false);
    } catch (e) {
      console.log("failed to fetch clients", e);
    }
  };

  useEffect(() => {
    //console.log("called");
    /*If there are no clients in the context, then perform a fetch to get the data needed */
    if (!clientsContext && !clientContext) {
      setLoading(true);
      fetchClient();
    } else if (clientContext) {
      setClient(clientContext);
    } else if (clientsContext) {
      setClient(clientsContext.find((client) => client._id === _id));
    }
  }, [_id]);

  return { loading, client, fetchClient };
};
