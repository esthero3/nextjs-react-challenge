import { useEffect, useState } from "react";
import { Client } from "../../../pages/api/types/Client";
import useSWR, { Key, Fetcher } from "swr";

export const useGetClientsSWR = () => {
  const fetcher = async (url: string) => {
    const rawData = await fetch(url);
    const data = await rawData.json();

    return data;
  };

  const { data: clients, error } = useSWR<Client[]>(`/api/clients`, fetcher);

  return { clients, error };
};
