import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import type { ReactElement } from "react";

// import { Hero, NextEvent, RecentEvents } from "../components/index";
import Layout from "../../components/layout-help";

export default function Help_AccountProblems() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>É obrigatório criar uma conta?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para maior segurança do cliente e eficiência da plataforma, é
            necessário a criação de uma conta para a realização de uma
            encomenda. Desta forma, o cliente poderá aceder às suas encomendas
            de forma mais prática e ainda descarregar as mesmas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Como mudar a palavra-passe?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

Help_AccountProblems.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Problemas com a Conta">{page}</Layout>;
};
