import type { ReactElement } from "react";

import { RecentEvents } from "../../components/index";
import Layout from "../../components/layout-public";

export default function Events() {
  return (
    <>
      <RecentEvents />
    </>
  );
}

Events.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
