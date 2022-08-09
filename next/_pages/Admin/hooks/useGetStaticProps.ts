import { GetStaticProps } from "next";
import { Client } from "../../../pages/api/types/Client";

export const getStaticProps: GetStaticProps = async () => {
  //const {_id} = context.params;

  console.log("fetching all clients data");
  const rawData = await fetch("/api/clients");
  const clients: Client[] = await rawData.json();

  return {
    props: {
      clients,
    },
  };
};
