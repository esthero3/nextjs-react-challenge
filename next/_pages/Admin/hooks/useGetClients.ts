import { useEffect, useState } from "react";
import { Client } from "../../../pages/api/types/Client";
import useSWR, { Key, Fetcher } from "swr";

export const useGetClients = () => {
  const [clients, setClients] = useState<Client[] | undefined>();
  const [loading, setLoading] = useState<Boolean>(false);

  const fetchClients = async () => {
    try {
      console.log("fetching all clients data");
      const rawData = await fetch("/api/clients");
      const data = await rawData.json();
      setClients(data);
      setLoading(false);
    } catch (e) {
      console.log("failed to fetch clients", e);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchClients();
  }, []);

  return { clients, setClients, loading, fetchClients };
};

export const useGetClientsSWR = () => {
  const fetcher = async (url: string) => {
    const rawData = await fetch(url);
    const data = await rawData.json();

    return data;
  };

  const { data: clients, error } = useSWR<Client[]>(`/api/clients`, fetcher);

  return { clients, error };
};
