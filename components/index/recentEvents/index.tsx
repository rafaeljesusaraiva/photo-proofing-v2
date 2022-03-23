import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import EventCard from "./eventCard.component";
import EventCardLoading from "./eventCardLoading.component";

const template_testing = true;
const requestUrl = template_testing
  ? "api/v1/template-testing/recentEvents"
  : "";

export default function RecentEvents() {
  const [recentEventsData, setRecentEventsData] = useState<Array<any> | null>(
    null
  );
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);

  useEffect(() => {
    if (!recentEventsData) {
      requestApiData(requestUrl);
      setInterval(function () {
        requestApiData(requestUrl);
      }, 30000);
    }
  });

  async function requestApiData(url: string) {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      setRecentEventsData(actualData);
      setError(null);
    } catch (err: any) {
      if (err.message !== isError) {
        setError(err.message);
        setRecentEventsData(null);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Typography color="inherit" variant="h5" sx={{ mb: 2 }}>
        Eventos Recentes
      </Typography>
      {isLoading ? (
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, lg: 16 }}>
          {Array(4)
            .fill(1)
            .map((e, i) => (
              <Grid item xs={4} key={i}>
                <EventCardLoading />
              </Grid>
            ))}
        </Grid>
      ) : isError !== null ? (
        showError(isError)
      ) : !recentEventsData ? (
        <Typography component="p">No profile data</Typography>
      ) : (
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, lg: 16 }}>
          {recentEventsData.map((singleEvent, index) => (
            <Grid item xs={4} key={index}>
              <EventCard event={singleEvent} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

function showError(error: any) {
  return (
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
          <code>{error}</code>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
