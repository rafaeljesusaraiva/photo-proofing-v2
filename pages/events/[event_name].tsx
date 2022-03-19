import type { ReactElement } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/layout-public";

export default function Event_Single() {
  const router = useRouter();
  const { event_name } = router.query;
  return <>{event_name}</>;
}

Event_Single.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
