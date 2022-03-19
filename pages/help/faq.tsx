import type { ReactElement } from "react";

import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

// import { Hero, NextEvent, RecentEvents } from "../components/index";
import Layout from "../../components/layout-help";

export default function Help_Faq() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Porque não consigo encomendar do evento &apos;X&apos;?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Após a realização de cada evento, haverá um período de tempo para
            realizar as encomendas, geralmente durante 1 (um) mês.
            <br />
            <br />
            Se desejar encomendar um evento não disponível, entre em contacto,
            para que seja disponibilizado no próximo período de encomendas.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

Help_Faq.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Questões Frequentes">{page}</Layout>;
};
