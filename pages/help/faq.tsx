import type { ReactElement } from "react";

// import { Hero, NextEvent, RecentEvents } from "../components/index";
import Layout from "../../components/layout-help";

export default function Home() {
  return <>Ajuda</>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Questões Frequentes">{page}</Layout>;
};
