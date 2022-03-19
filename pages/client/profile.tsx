import type { ReactElement } from "react";

import Layout from "../../components/layout-public";

export default function Client_Profile() {
  return <>Client Profile</>;
}

Client_Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
