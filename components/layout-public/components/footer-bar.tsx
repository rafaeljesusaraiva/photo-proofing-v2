import { Box, Typography } from "@mui/material";
import Link from "next/link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
      {`Copyright © ${new Date().getFullYear()} Rafael Saraiva - Todos os direitos reservados`}
    </Typography>
  );
}

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
      <Copyright />
    </Box>
  );
};

export default FooterBar;
