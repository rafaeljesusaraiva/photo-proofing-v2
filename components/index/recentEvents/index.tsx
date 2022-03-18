import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import EventCard from "./eventCard.component";
import EventCardLoading from "./eventCardLoading.component";

const template_testing = true;

export default function RecentEvents() {
  const [recentEventsData, setRecentEventsData] = useState<Array<any> | null>(
    null
  );
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!recentEventsData) {
      setLoading(true);
      fetch(template_testing ? "api/v1/template-testing/recentEvents" : "")
        .then((res) => res.json())
        .then((data) => {
          setRecentEventsData(data);
          setLoading(false);
        });
    }
  }, [recentEventsData]);

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
