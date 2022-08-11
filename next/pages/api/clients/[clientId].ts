import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "../types/Client";
import { clientsData } from "../data/clientsData";

export default function (
  req: NextApiRequest,
  res: NextApiResponse<Client | undefined>
) {
  const { clientId } = req.query;
  console.log(`client with id ${clientId}'s data requested`);
  const client = clientsData.find((client: Client) => client._id === clientId);

  res.status(200).json(client);
}
