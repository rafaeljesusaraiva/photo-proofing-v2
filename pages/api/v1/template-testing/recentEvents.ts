// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = Array<{
  backgroundImage: string;
  publicAvailability: string;
  isAvailable: boolean;
  title: string;
  url: string;
}>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    Array(4).fill({
      backgroundImage: "/img/default-event-cover.jpg",
      publicAvailability: "Disponível até 14 de março",
      isAvailable: true,
      title: "KDD - Festa Natal",
      url: "/events/event_test",
    })
  );
}
