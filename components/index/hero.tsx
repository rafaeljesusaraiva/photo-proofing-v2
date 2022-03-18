import { Button, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import HeroLayout from "./heroLayout";

const backgroundImage = "/img/hero-background.jpg";

export default function Hero() {
  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#302822", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <Typography color="inherit" align="center" variant="h2">
        Provas Fotografia
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Plataforma de Seleção de Fotografias Online
      </Typography>
      <Link href="/events" passHref>
        <Button
          color="info"
          variant="contained"
          size="large"
          component="a"
          sx={{ minWidth: 200 }}
        >
          Ver Eventos
        </Button>
      </Link>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Guarde todos os momentos especiais
      </Typography>
    </HeroLayout>
  );
}
