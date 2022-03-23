import type { ReactElement } from "react";

import { AllEvents } from "../../components/events";
import Layout from "../../components/layout-public";

export default function Events() {
  return (
    <>
      <AllEvents />
    </>
  );
}

Events.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
