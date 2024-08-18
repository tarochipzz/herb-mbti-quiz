import { Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import fleurs from "./assets/fleurs.png";
import { ROOT } from "./App";

const ArrowForward = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="#5f6368"
  >
    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
  </svg>
);
export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#e2eed8",
        minHeight: "100vh",
        padding: "75px 0",
        overflow: "auto",
      }}
    >
      <Typography padding="15px" color="#626a45" variant="h4">
        Unveil Your Herbal Spirit
      </Typography>
      <CardMedia
        sx={{
          width: { xs: "90%", sm: "70%", md: "55%" },
        }}
        component="img"
        image={fleurs}
      />
      <Button
        sx={{
          padding: "18px",
          fontFamily: "Rosarivo",
          color: "#626a45",
          fontWeight: 500,
          borderColor: "#626a45",
          "&:hover": {
            backgroundColor: "#c3cebb",
            color: "#626a45",
            borderColor: "#626a45",
          },
        }}
        endIcon={ArrowForward}
        variant="outlined"
        color="primary"
        onClick={() => navigate(`/${ROOT}/questions`)}
      >
        Start Adventure
      </Button>
    </Card>
  );
};
