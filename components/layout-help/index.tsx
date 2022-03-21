import { websiteConfig } from "../../config/index.config";

import Head from "next/head";
import React, { ReactNode } from "react";

import { Box, Container } from "@mui/material";
import { NavigationSimple, FooterBar } from "./components";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => (
  <>
    <Head>
      <title>
        {title
          ? `${title} - Apoio Técnico | ${websiteConfig.website_name}`
          : `Apoio Técnico | ${websiteConfig.website_name}`}
      </title>
    </Head>
    <Container maxWidth="lg" sx={{ my: 3, position: "relative" }}>
      <nav>
        <NavigationSimple title={title} />
      </nav>
      <Box component="main" sx={{ my: 3 }}>
        {children}
      </Box>
      <Box component="footer">
        <FooterBar />
      </Box>
    </Container>
  </>
);

export default Layout;
