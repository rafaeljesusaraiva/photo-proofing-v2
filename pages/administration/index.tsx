import type { ReactElement } from "react";

import Layout from "../../components/layout-public";

export default function Admin() {
  return <>To change Layout - Admin Dashboard</>;
}

Admin.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
