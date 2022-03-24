import Masonry from "@mui/lab/Masonry";
import PhotoCardLoading from "../photoCardLoading.component";

const LoadingSection = () => {
  return (
    <Masonry columns={3} spacing={{ xs: 2, sm: 4 }}>
      {Array(12)
        .fill(1)
        .map((e, i) => (
          <div key={i}>
            <PhotoCardLoading />
          </div>
        ))}
    </Masonry>
  );
};

export default LoadingSection;
