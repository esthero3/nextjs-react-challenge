import { Client } from "../../../pages/api/types/Client";
import useSWR, { Key, Fetcher } from "swr";
import { useGetClientsSWR } from "./useGetClients";

export const useGetClientSWR = (_id: string) => {
  console.log(_id);
  const { clients, error } = useGetClientsSWR();

  const client = clients
    ? clients.find((client) => client._id === _id)
    : undefined;

  // const fetcher: Fetcher<Client, string> = async (url: string) => {
  //   const rawData = await fetch(url);
  //   const data = await rawData.json();

  //   return data;
  // };

  // const { data: client, error } = useSWR(`/api/clients/${_id}`, fetcher);

  return { client, error };
};
