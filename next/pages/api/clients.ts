import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "./types/Client";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Client[]>
) {
  res.status(200).json([
    {
      documentRef: "62e2c088074ae1c859d86c42",
      emailAddress: "rheba@gmail.com",
      firstName: "Rheba",
      lastName: "Sherwood",
      meetingDate: "Aug 25th, 2022",
      phoneNumber: { cell: "872477751" },
      progress: 55,
      _id: "62e2c102a45ab78dc565b27c",
    },
    {
      documentRef: "62e2c088074ae1c859d86c42",
      emailAddress: "temi@gmail.com",
      firstName: "Temi",
      lastName: "Adeola",
      meetingDate: "Aug 28th, 2022",
      phoneNumber: { cell: "182422751" },
      progress: 50,
      _id: "62e2c102a45ab78dc565b21f",
    },
    {
      documentRef: "62e2c088074ae1c859d86c42",
      emailAddress: "rocky@gmail.com",
      firstName: "Rocky",
      lastName: "Chen",
      meetingDate: "Aug 12th, 2022",
      phoneNumber: { cell: "8123477751" },
      progress: 66,
      _id: "62e2c102a45ab78dc565b211",
    },
    {
      documentRef: "62e2c088074ae1c859d86c42",
      emailAddress: "dakos@gmail.com",
      firstName: "Dakos",
      lastName: "Sherwood",
      meetingDate: "Aug 30th, 2022",
      phoneNumber: { cell: "116477751" },
      progress: 22,
      _id: "6211c102a45ab78dc565b27c",
    },
  ]);
}
