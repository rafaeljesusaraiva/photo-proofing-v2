import React from "react";

import {
  AppBar,
  Breadcrumbs,
  Link as MUILink,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

type Props = {
  title?: string;
};

function NavigationSimple({ title = "" }: Props) {
  return (
    <React.Fragment>
      <AppBar position="relative" sx={{ position: "sticky" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: { xs: 1, md: 0 }, mr: 2 }}
          >
            Provas Fotografia
          </Typography>
        </Toolbar>
      </AppBar>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 2 }}>
        <Link href="/help" passHref>
          <MUILink underline="hover" color="inherit">
            Apoio Técnico
          </MUILink>
        </Link>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
    </React.Fragment>
  );
}

export default NavigationSimple;
