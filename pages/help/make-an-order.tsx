import type { ReactElement } from "react";

// import { Hero, NextEvent, RecentEvents } from "../components/index";
import Layout from "../../components/layout-help";

export default function Home() {
  return <>Preciso pagar 50‰ adiantado</>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Realizar uma Encomenda">{page}</Layout>;
};
