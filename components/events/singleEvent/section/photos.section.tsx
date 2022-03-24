import Masonry from "@mui/lab/Masonry";
import { PhotosSection as PhotosSectionTypes } from "../types";

const PhotosSection = ({ children }: PhotosSectionTypes) => (
  <Masonry columns={3} spacing={{ xs: 2, sm: 4 }}>
    {children}
  </Masonry>
);

export default PhotosSection;
