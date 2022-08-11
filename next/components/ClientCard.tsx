import React from "react";
import { ProgressBar } from "./ProgressBar";
import {
  useGetClient,
  useGetClientSWR,
} from "../_pages/Admin/hooks/useGetClient";
import { useClientContext } from "../contexts/ClientContext";

interface CardProps {
  _id: string;
}

export const ClientCard = (props: CardProps) => {
  // const { loading, client } = useGetClient(props._id);
  const { client, error } = useGetClientSWR(props._id);

  if (!client) {
    return <div className="card-container">Loading...</div>;
  }

  if (error) {
    return <div className="card-container">Error: Client ID not found</div>;
  }

  return (
    <div className="card-container">
      <ProgressBar progress={client.progress} />
      <h2 className="text-primary font-bold text-2xl p-2 drop-shadow-md">
        {client.firstName} {client.lastName}
      </h2>
      <h2 className="text-primary font-bold text-2xl p-2 drop-shadow-md">
        Due date: {client.meetingDate}
      </h2>
      <h2 className="text-primary font-bold text-2xl p-2 drop-shadow-md">
        T1 Checklist
      </h2>
    </div>
  );
};

export const ClientCardUsingContext = () => {
  const client = useClientContext()?.client;

  if (!client) {
    return <div className="card-container">Error: Client ID not found</div>;
  }

  return (
    <div className="card-container">
      <ProgressBar progress={client.progress} />
      <h2 className="text-primary font-bold text-2xl p-2 drop-shadow-md">
        {client.firstName} {client.lastName}
      </h2>
      <h2 className="text-primary font-bold text-2xl p-2 drop-shadow-md">
        Due date: {client.meetingDate}
      </h2>
      <h2 className="text-primary font-bold text-2xl p-2 drop-shadow-md">
        T1 Checklist
      </h2>
    </div>
  );
};
