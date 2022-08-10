import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "../types/Client";
import { clientsData } from "../data/clientsData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Client[]>
) {
  console.log("sending all clients data");
  res.status(200).json(clientsData);
}
