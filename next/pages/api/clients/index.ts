import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "../types/Client";
import { clientsData } from "../data/clientsData";

export default function (req: NextApiRequest, res: NextApiResponse<Client[]>) {
  console.log("all clients data requested");
  res.status(200).json(clientsData);
}
