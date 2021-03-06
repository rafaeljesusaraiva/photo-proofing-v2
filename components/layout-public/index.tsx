import { websiteConfig } from "../../config/index.config";

import Head from "next/head";
import React, { ReactNode } from "react";

import { Box, Container } from "@mui/material";
import { FooterBar, HelpSpeedDial, NavigationBar } from "./components";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = websiteConfig.website_name }: Props) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Container maxWidth="xl" sx={{ my: 3, position: "relative" }}>
      <nav style={{ position: "sticky", top: "24px", zIndex: 999 }}>
        <NavigationBar />
      </nav>
      <Box component="main" sx={{ my: 3 }}>
        {children}
      </Box>
      <Box component="footer">
        <FooterBar />
      </Box>
      <HelpSpeedDial />
    </Container>
  </>
);

export default Layout;
