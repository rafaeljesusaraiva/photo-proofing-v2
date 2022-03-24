import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/layout-public";
import { Box, Grid, Typography } from "@mui/material";
import { EventData as EventDataType } from "../../components/events/singleEvent/types";
import { requestApiData } from "../../utility/requestApiData";
import {
  LoadingSection,
  ErrorSection,
  PhotoCard,
  PhotosSection,
} from "../../components/events/singleEvent";
import NoSSR from "../../components/layout_noSSR";

const template_testing = true;
const requestUrl = template_testing ? "/api/v1/template-testing/event/" : "";

export default function Event_Single() {
  const pageRouter = useRouter();
  const { event_name } = pageRouter.query;
  const [eventData, setEventData] = useState<EventDataType | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    let apiData = {
      url: requestUrl,
      urlParams: event_name,
      loadingState: setLoading,
      errorState: isError,
      errorSetState: setError,
      dataState: eventData,
      dataSetState: setEventData,
    };
    // Run only if no data retrieved and event_name defined by url
    if (!eventData && event_name !== undefined) {
      requestApiData(apiData);
      if (isError !== null)
        setTimeout(function () {
          requestApiData(apiData);
        }, 30000);
    }
  }, []);

  return (
    <Box sx={{ mt: 3 }}>
      <Typography color="inherit" variant="h5" sx={{ mb: 2 }}>
        Eventos Recentes
      </Typography>
      {isLoading ? (
        <LoadingSection />
      ) : isError !== null ? (
        <ErrorSection errorString={isError} />
      ) : !eventData ? (
        <Typography component="p">Nenhum Evento carregado...</Typography>
      ) : (
        <NoSSR>
          <PhotosSection>
            {eventData.images.map((singleImage, index) => (
              <PhotoCard cardInfo={singleImage} counter={index} key={index} />
            ))}
          </PhotosSection>
        </NoSSR>
      )}
    </Box>
  );
}

Event_Single.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
