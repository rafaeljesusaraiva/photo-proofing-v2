import type { NextApiRequest, NextApiResponse } from "next";

import eventList from "../events.content.json";

type AlbumImage = {
  url: string;
  alt: string;
};

type AlbumData = {
  publicAvailability: string;
  isAvailable: boolean;
  title: string;
  slug: string;
  images: Array<AlbumImage>;
};

type NotFoundMessage = { status: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AlbumData | NotFoundMessage>
) {
  const { event_name } = req.query;
  // let found: AlbumData | undefined = eventList.find((e: any) => {
  let found: any | undefined = eventList.find((e: any) => {
    if (e.slug === event_name) {
      let temp = e;
      temp.images = new Array(50).fill({
        url: "/img/default-event-cover.jpg",
        alt: "Template",
      });
      return temp;
    }
  });
  res.status(200).json(found ? found : { status: "not found" });
}
