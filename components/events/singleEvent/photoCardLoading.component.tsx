import NoSSR from "../../layout_noSSR";
import { Card, CardActions, CardContent, Skeleton } from "@mui/material";

const PhotoCardLoading = () => (
  <NoSSR>
    <Card raised sx={{ position: "relative" }}>
      <CardContent sx={{ minHeight: 150, zIndex: "10", pb: 1, px: 0, pt: 0 }}>
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={Math.random() >= 0.5 ? "300px" : "150px"}
        />
      </CardContent>
      <CardActions
        sx={{
          zIndex: "10",
          px: 2,
          pt: 0,
          pb: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Skeleton height={"50px"} width="30%" />
        <Skeleton height={"50px"} width="40px" />
      </CardActions>
    </Card>
  </NoSSR>
);

export default PhotoCardLoading;
