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

export default function Help_MakeAnOrder() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Porque preciso de pagar 50% do valor adiantado?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para assegurar continuidade na disponibilidade destes registos, foi
            implementado um sistema de pagamento de (no mínimo) 50% do valor do
            pedido realizado.
            <br />
            <br />
            Este sistema tem como função prevenir pedidos não recolhidos e
            garantir processamentos de pedidos de valores elevados.
            <br />
            <br />
            Deste modo, será possível um processamento e entrega o mais breve
            possível.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

Help_MakeAnOrder.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Realizar uma Encomenda">{page}</Layout>;
};
