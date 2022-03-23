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
  res.status(200).json([
    {
      backgroundImage: "/img/default-event-cover.jpg",
      publicAvailability: "Disponível até 29 de março",
      isAvailable: true,
      title: "KDD - Festa Natal",
      url: "/events/event_test",
    },
    {
      backgroundImage: "/img/default-event-cover.jpg",
      publicAvailability: "Disponível até 18 de março",
      isAvailable: false,
      title: "Evento #3",
      url: "/events/event_test",
    },
    {
      backgroundImage: "/img/default-event-cover.jpg",
      publicAvailability: "Disponível até 10 de março",
      isAvailable: false,
      title: "Evento #2",
      url: "/events/event_test",
    },
    {
      backgroundImage: "/img/default-event-cover.jpg",
      publicAvailability: "Disponível até 3 de março",
      isAvailable: false,
      title: "Evento #1",
      url: "/events/event_test",
    },
  ]);
}
