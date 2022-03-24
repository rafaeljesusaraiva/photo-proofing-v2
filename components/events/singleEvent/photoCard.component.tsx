import { AddShoppingCart } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const sizeListArray = [
  { id: "10x15", name: "10x15", price: "2€" },
  { id: "15x20", name: "15x20", price: "4€" },
  { id: "20x30", name: "20x30", price: "8€" },
];

type PhotoCardType = { cardInfo: any; counter: any };

let randomImage = () =>
  Math.random() >= 0.5
    ? "/img/default-event-cover.jpg"
    : "/img/default-event-cover2.jpg";

const PhotoCard = ({ cardInfo, counter }: PhotoCardType) => (
  <Card raised sx={{ position: "relative" }}>
    <CardContent sx={{ minHeight: 150, zIndex: "10", pb: 1, px: 0, pt: 0 }}>
      {/* <Avatar variant="square" sx={{ width: "100%" }}></Avatar> */}
      <Box>
        {/* <Image src={randomImage()} alt={cardInfo.alt} layout="fill" /> */}
        <img src={randomImage()} alt={cardInfo.alt} style={{ width: "100%" }} />
      </Box>
    </CardContent>
    <CardActions
      sx={{
        zIndex: "10",
        px: 2,
        pt: 0,
        pb: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "bottom",
      }}
    >
      <SizeSelector sizeList={sizeListArray} counter={counter} />
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCart />
      </IconButton>
    </CardActions>
  </Card>
);

export default PhotoCard;

type SizeSelectorType = { sizeList: any; counter: any };

const SizeSelector = ({ sizeList, counter }: SizeSelectorType) => {
  const [selectedSize, setSelectedSize] = useState("");
  const updateSize = (event: SelectChangeEvent) =>
    setSelectedSize(event.target.value);

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={"label-select-size-" + counter}>Tamanho</InputLabel>
      <Select
        labelId={"label-select-size-" + counter}
        id={"label-select-size-" + counter}
        value={selectedSize}
        onChange={updateSize}
        label="Tamanho"
      >
        {sizeList.map((singleSize: any, index: any) => (
          <MenuItem value={singleSize.id} key={index}>
            {singleSize.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
