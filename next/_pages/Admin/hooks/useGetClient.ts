import { useClientContext } from "../../../contexts/ClientContext";
import { useClientsContext } from "../../../contexts/ClientsContext";
import { useContext } from "react";
import { Client } from "../../../pages/api/types/Client";
import { useEffect, useState } from "react";
import useSWR, { Key, Fetcher } from "swr";

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

export const useGetClientSWR = (_id: string) => {
  //const { clients, error } = useGetClientsSWR();
  //console.log(_id);

  // const client = clients
  //   ? clients.find((client) => client._id === _id)
  //   : undefined;

  const fetcher: Fetcher<Client, string> = async (url: string) => {
    const rawData = await fetch(url);
    const data = await rawData.json();

    return data;
  };

  const { data: client, error } = useSWR(`/api/clients/${_id}`, fetcher);

  return { client, error };
};
