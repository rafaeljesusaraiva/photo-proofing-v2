import { ReactNode } from "react";

export type ErrorSection = {
  errorString: string;
};

export type PhotosSection = {
  children?: any;
};

export type EventData = {
  publicAvailability: string;
  isAvailable: boolean;
  title: string;
  slug: string;
  images: Array<{
    url: string;
    alt: string;
  }>;
};
