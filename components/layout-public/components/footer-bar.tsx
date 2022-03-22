import { Box, Typography } from "@mui/material";
import Link from "next/link";

const FooterBar = () => {
  return (
    <Box
      sx={{ bgcolor: "background.paper", py: 3, textAlign: "center" }}
      component="footer"
    >
      <Link href="https://provas.rafaeljesusaraiva.pt/" passHref>
        <Typography
          variant="subtitle1"
          component="a"
          color="white"
          sx={{ textDecoration: "none" }}
        >
          provas.rafaeljesusaraiva.pt
        </Typography>
      </Link>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 1,
        }}
      >
        <Link href="/help/privacy-policy" passHref>
          <Typography variant="subtitle2" color="white">
            Política de Privacidade
          </Typography>
        </Link>{" "}
        <Typography variant="subtitle2" color="white" sx={{ mx: 2 }}>
          &bull;
        </Typography>
        <Link href="/help/terms-of-service" passHref>
          <Typography variant="subtitle2" color="white">
            Termos de Uso
          </Typography>
        </Link>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {`Copyright © ${new Date().getFullYear()} Rafael Saraiva - Todos os direitos reservados`}
      </Typography>
    </Box>
  );
};

export default FooterBar;
