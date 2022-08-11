import React from "react";
import { useRouter } from "next/router";
import {
  ClientCardUsingContext,
  ClientCard,
} from "../../../components/ClientCard";

export default function () {
  const { isReady, query } = useRouter();
  if (!isReady) return <p>Loading</p>;

  let { clientId } = query;
  clientId = clientId as string;

  return <ClientCard _id={clientId} />;
}
