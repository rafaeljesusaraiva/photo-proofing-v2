import type { ReactElement } from "react";

import Layout from "../../components/layout-public";

export default function Client_Orders() {
  return <>Client Orders</>;
}

Client_Orders.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
