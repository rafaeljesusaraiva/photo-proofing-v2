// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import eventList from "./events.content.json";

type Data = Array<{
  backgroundImage: string;
  publicAvailability: string;
  isAvailable: boolean;
  title: string;
  slug: string;
}>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(eventList);
}
