import type { ReactElement } from "react";

// import { Hero, NextEvent, RecentEvents } from "../components/index";
import Layout from "../../components/layout-help";

export default function Home() {
  return (
    <>
      Obrigatório criar conta
      <br />
      mudar pass
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Problemas com a Conta">{page}</Layout>;
};
