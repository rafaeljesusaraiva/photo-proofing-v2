import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { ErrorSection } from "../types";

const ErrorSection = ({ errorString }: ErrorSection) => (
  <Box sx={{ mt: 2 }}>
    <Typography variant="h6" sx={{ mb: 1 }}>
      Erro ao obter informações
    </Typography>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Mais informações</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <code>{errorString}</code>
      </AccordionDetails>
    </Accordion>
  </Box>
);

export default ErrorSection;
