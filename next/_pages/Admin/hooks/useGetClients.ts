import { useEffect, useState } from "react";
import { Client } from "../../../pages/api/types/Client";

export const useGetClients = () => {
  const [clients, setClients] = useState<Client[] | undefined>();
  const [loading, setLoading] = useState<Boolean>(false);

  const fetchClients = async () => {
    try {
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

  return { clients, loading };
};
