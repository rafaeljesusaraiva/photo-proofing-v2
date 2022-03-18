import { useState } from "react";
import {
  Backdrop,
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import {
  Close as CloseIcon,
  GroupAdd as GroupAddIcon,
  QuestionAnswer as QuestionAnswerIcon,
  QuestionMark as HelpIcon,
  PhotoAlbum as PhotoAlbumIcon,
} from "@mui/icons-material";

const actions = [
  {
    icon: <QuestionAnswerIcon />,
    name: "Questões Frequentes",
    url: "/help/faq",
  },
  {
    icon: <PhotoAlbumIcon />,
    name: "Realizar uma Encomenda",
    url: "/help/make-an-order",
  },
  {
    icon: <GroupAddIcon />,
    name: "Problemas com a Conta",
    url: "/help/account-problems",
  },
];

export default function HelpSpeedDial() {
  const [dialOpen, setDialOpen] = useState<boolean>(false);
  const handleClose = () => setDialOpen(false);
  const handleClick = () => {
    setDialOpen(!dialOpen);
  };

  return (
    <>
      <Backdrop open={dialOpen} onClick={handleClose} />
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        FabProps={{ variant: "extended" }}
        sx={{ position: "fixed", bottom: 32, right: 32 }}
        icon={
          <SpeedDialIcon
            icon={
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HelpIcon sx={{ mr: 1 }} />
                Ajuda
              </Box>
            }
            openIcon={
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CloseIcon />
                Fechar
              </Box>
            }
          />
        }
        onClick={handleClick}
        open={dialOpen}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            sx={{ whiteSpace: "nowrap" }}
            onClick={() =>
              window.open(action.url, "_blank", "height=600,width=500")
            }
          />
        ))}
      </SpeedDial>
    </>
  );
}
