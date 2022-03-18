// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type DataNextEvent = {
  nextEvent: boolean;
  title?: string;
  date?: string;
  location?: string;
  available?: string;
};

const ValidEvent = {
  nextEvent: true,
  title: "Org - Evento Teste",
  date: "30 fev. 2022",
  location: "Online, PC",
  available: "32 março 2022",
};
const NoEvent = { nextEvent: false };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataNextEvent>
) {
  res.status(200).json(true ? ValidEvent : NoEvent);
}
