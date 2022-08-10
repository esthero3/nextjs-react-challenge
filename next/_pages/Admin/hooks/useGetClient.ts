import { ClientsContext } from "../contexts/ClientsContext";
import { useContext } from "react";
import { Client } from "../../../pages/api/types/Client";
import { useEffect, useState } from "react";

export const useGetClient = (_id: string) => {
  const [client, setClient] = useState<Client | undefined>();
  const [loading, setLoading] = useState<Boolean>(false);

  const clients = useContext(ClientsContext)?.clients;

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
    /*If there are no clients in the context, then perform a fetch to get the data needed */
    if (!clients) {
      setLoading(true);
      fetchClient();
    } else {
      setClient(clients.find((client) => client._id === _id));
    }
  }, [_id]);

  return { loading, client, fetchClient };
};
