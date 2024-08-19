import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import {
  Box,
  Button,
  Card,
  CardMedia,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { AnswerKeys, QuestionAnswersState } from "./state/quizState";
import { MBTI, mbtiHerbMap } from "./questions";

import cinnamon from "./assets/resultImages/ENFJ.png";
import butterfly from "./assets/resultImages/ENFP.png";
import ginseng from "./assets/resultImages/ENTJ.png";
import sage from "./assets/resultImages/ENTP.png";
import calendula from "./assets/resultImages/ESFJ.png";
import hibiscus from "./assets/resultImages/ESFP.png";
import echinacea from "./assets/resultImages/ESTJ.png";
import guarana from "./assets/resultImages/ESTP.png";
import lavender from "./assets/resultImages/INFJ.png";
import passionflower from "./assets/resultImages/INFP.png";
import rosemary from "./assets/resultImages/INTJ.png";
import chamomile from "./assets/resultImages/ISFJ.png";
import gingko from "./assets/resultImages/INTP.png";
import jasmine from "./assets/resultImages/ISFP.png";
import thyme from "./assets/resultImages/ISTJ.png";
import juniper from "./assets/resultImages/ISTP.png";
import { ShareModal } from "./ShareModal";

const images = {
  ENFJ: cinnamon,
  ENFP: butterfly,
  ENTJ: ginseng,
  ENTP: sage,
  ESFJ: calendula,
  ESFP: hibiscus,
  ESTJ: echinacea,
  ESTP: guarana,
  INFJ: lavender,
  INFP: passionflower,
  INTJ: rosemary,
  ISFJ: chamomile,
  INTP: gingko,
  ISFP: jasmine,
  ISTJ: thyme,
  ISTP: juniper,
};

const calculateMBTIResult = (answers: Record<number, AnswerKeys>): MBTI => {
  const scores = {
    I: 0,
    E: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  Object.values(answers).forEach((answer) => {
    switch (answer) {
      case "a":
        scores.I++;
        scores.N++;
        scores.T++;
        scores.J++;
        break;
      case "b":
        scores.E++;
        scores.N++;
        scores.F++;
        scores.P++;
        break;
      case "c":
        scores.E++;
        scores.S++;
        scores.F++;
        scores.J++;
        break;
      case "d":
        scores.I++;
        scores.S++;
        scores.T++;
        scores.P++;
        break;
    }
  });

  let mbti = "";
  mbti += scores.E > scores.I ? "E" : "I";
  mbti += scores.N > scores.S ? "N" : "S";
  mbti += scores.T > scores.F ? "T" : "F";
  mbti += scores.J > scores.P ? "J" : "P";

  return mbti as MBTI;
};

const handleDownload = (imgSrc: string) => {
  // create a canvas element
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = imgSrc;

  img.onload = () => {
    // needed to create image
    canvas.width = img.width;
    canvas.height = img.height;
    ctx?.drawImage(img, 0, 0);

    // convert canvas to data URL and trigger download
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "herb-result.png";
    link.href = dataUrl;
    link.click();
  };
};

export const Result: React.FC = () => {
  const answers = useRecoilValue(QuestionAnswersState);
  const MBTI = calculateMBTIResult(answers);
  const herbResult = mbtiHerbMap[MBTI].herb;

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const [shareModalOpen, setShareModalOpen] = useState(false);

  const handleShare = () => {
    setShareModalOpen(true);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="15px"
    >
      <Typography sx={{ textAlign: "center" }}>
        <Button
          sx={{
            color: "black",
            textDecoration: "underline",
            "&:hover": {
              backgroundColor: "#c3cebb",
              color: "#626a45",
              textDecoration: "underline",
            },
            padding: 0,
          }}
          variant="text"
          onClick={() =>
            window.open("https://www.instagram.com/potion.petal", "_blank")
          }
        >
          Follow us on Instagram
        </Button>
        {isSmallScreen ? <br /> : " "}
        to learn more about herbs and magical botanicals ❤️
      </Typography>
      <Card
        elevation={0}
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "100%", md: "55%", lg: "35%", xlg: "25%" },
        }}
      >
        <CardMedia
          component="img"
          image={images[MBTI]}
          alt={`${MBTI} herb: ${herbResult}`}
        />
      </Card>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          textDecoration: "underline",
        }}
      >
        <Button
          sx={{
            color: "black",
            "&:hover": {
              backgroundColor: "#c3cebb",
              color: "#626a45",
            },
          }}
          variant="text"
          onClick={() => handleDownload(images[MBTI])}
        >
          Download
        </Button>
        <Button
          sx={{
            color: "black",
            "&:hover": {
              backgroundColor: "#c3cebb",
              color: "#626a45",
            },
          }}
          variant="text"
          onClick={handleShare}
        >
          Share
        </Button>
      </Box>
      <ShareModal
        open={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        shareUrl={`${window.location.origin}/herb-mbti-quiz`}
      />
    </Box>
  );
};
