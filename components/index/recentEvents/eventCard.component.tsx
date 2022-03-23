import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";

type EventCardType = { event: any };

const StyledBackground = {
  position: "relative",
  backgroundSize: "0 0",
  "::before": {
    content: '" "',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "inherit",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: "-1",
  },
  transition: "transform .2s ease",
  transform: "translate(0px, 0px)",
  "&:hover": {
    transform: "translate(4px, -4px)",
  },
  "&:hover #evt-available": {
    opacity: "1",
  },
};

const EventCard = ({ event }: EventCardType) => (
  <Card
    raised
    sx={{
      ...StyledBackground,
      backgroundImage: `url(${event.backgroundImage})`,
      "::before": {
        ...StyledBackground["::before"],
        filter: event.isAvailable ? "none" : "grayscale(80%) blur(1px)",
      },
    }}
  >
    <CardContent sx={{ minHeight: 150, zIndex: "10" }}>
      <Typography variant="h5" component="div">
        {event.title}
      </Typography>
      <Typography
        sx={{
          fontSize: 14,
          zIndex: "10",
          opacity: 0,
          transition: "opacity .2s ease",
        }}
        color="text.secondary"
        gutterBottom
        id="evt-available"
      >
        {event.publicAvailability}
      </Typography>
    </CardContent>
    <CardActions sx={{ float: "right", zIndex: "10" }}>
      <Link href={event.url} passHref>
        <Button size="small">Abrir Evento</Button>
      </Link>
    </CardActions>
  </Card>
);

export default EventCard;
