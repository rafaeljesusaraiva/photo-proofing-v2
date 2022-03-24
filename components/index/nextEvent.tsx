import { Alert, AlertTitle, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const template_testing = true;

const NextEvent = () => {
  const [nextEventData, setNextEventData] = useState<any | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!nextEventData) {
      setLoading(true);
      fetch(template_testing ? "/api/v1/template-testing/nextEvent" : "")
        .then((res) => res.json())
        .then((data) => {
          setNextEventData(data);
          setLoading(false);
        });
    }
  }, [nextEventData]);

  if (isLoading || !nextEventData) {
    return (
      <Box sx={{ mt: 3, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!nextEventData.nextEvent) return <></>;

  return (
    <Alert sx={{ mt: 3 }} severity="info">
      <AlertTitle>Próximo Evento: {nextEventData.title}</AlertTitle>
      Data Evento: {nextEventData.date}
      <br />
      Local: {nextEventData.location}
      {nextEventData.available ? (
        <>
          <br />
          Disponível para encomenda: {nextEventData.available}
        </>
      ) : (
        ""
      )}
    </Alert>
  );
};

export default NextEvent;
