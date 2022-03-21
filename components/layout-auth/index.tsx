import { websiteConfig } from "../../config/index.config";

import Head from "next/head";
import React, { ReactNode } from "react";

import { Box, Grid, Paper } from "@mui/material";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => (
  <>
    <Head>
      <title>
        {title
          ? `${title} - Autenticação | ${websiteConfig.website_name}`
          : `Autenticação | ${websiteConfig.website_name}`}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* Background Image */}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(/img/login-background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "dark"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Login Section */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={1}
        square
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  </>
);

export default Layout;
