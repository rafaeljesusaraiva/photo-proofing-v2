import {
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";

const EventCardLoading = () => (
  <Card raised sx={{ position: "relative" }}>
    <CardContent sx={{ minHeight: 150, zIndex: "10" }}>
      <Skeleton width="50%">
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          .
        </Typography>
      </Skeleton>
      <Skeleton width="80%">
        <Typography variant="h5">.</Typography>
      </Skeleton>
    </CardContent>
    <CardActions sx={{ zIndex: "10" }}>
      <Skeleton width="20%" />
    </CardActions>
  </Card>
);

export default EventCardLoading;
