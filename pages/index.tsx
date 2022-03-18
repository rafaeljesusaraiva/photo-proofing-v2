import type { ReactElement } from "react";

import { Hero, NextEvent, RecentEvents } from "../components/index";
import Layout from "../components/layout-public";

export default function Home() {
  return (
    <>
      <Hero />
      <NextEvent />
      <RecentEvents />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
