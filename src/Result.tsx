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
import { MBTI, advancedQuestionMaps, mbtiHerbMap } from "./questions";

import cinnamon from "./assets/resultImages/cinnamon.png";
import butterfly from "./assets/resultImages/butterfly.png";
import ginseng from "./assets/resultImages/ginseng.png";
import sage from "./assets/resultImages/sage.png";
import calendula from "./assets/resultImages/calendula.png";
import hibiscus from "./assets/resultImages/hibiscus.png";
import echinacea from "./assets/resultImages/echinacea.png";
import guarana from "./assets/resultImages/guarana.png";
import lavender from "./assets/resultImages/lavender.png";
import passionflower from "./assets/resultImages/passionflower.png";
import rosemary from "./assets/resultImages/rosemary.png";
import chamomile from "./assets/resultImages/chamomile.png";
import gingko from "./assets/resultImages/gingko.png";
import jasmine from "./assets/resultImages/jasmine.png";
import thyme from "./assets/resultImages/thyme.png";
import juniper from "./assets/resultImages/juniper.png";
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
  const scores: Record<string, { score: number; questions: number }> = {
    I: { score: 0, questions: 0 },
    E: { score: 0, questions: 0 },
    N: { score: 0, questions: 0 },
    S: { score: 0, questions: 0 },
    T: { score: 0, questions: 0 },
    F: { score: 0, questions: 0 },
    J: { score: 0, questions: 0 },
    P: { score: 0, questions: 0 },
  };

  Object.entries(answers).forEach(([questionId, answer]) => {
    const question = advancedQuestionMaps.find(
      (q) => q.id === parseInt(questionId)
    );
    if (question) {
      const answerIndex = ["a", "b", "c", "d"].indexOf(answer);
      const trait = question.traits[answerIndex];
      const weight = question.answers[answerIndex].weight;

      scores[trait].score += weight;
      scores[trait].questions++;
    }
  });

  let mbti = "";
  let confidence = 0;

  [
    ["E", "I"],
    ["N", "S"],
    ["T", "F"],
    ["J", "P"],
  ].forEach(([trait1, trait2]) => {
    const score1 = scores[trait1].score / scores[trait1].questions;
    const score2 = scores[trait2].score / scores[trait2].questions;

    if (score1 > score2) {
      mbti += trait1;
      confidence += (score1 - score2) / (score1 + score2);
    } else {
      mbti += trait2;
      confidence += (score2 - score1) / (score1 + score2);
    }
  });

  return mbti as MBTI;
};

// const calculateMBTIResultOld = (answers: Record<number, AnswerKeys>): MBTI => {
//   const scores = {
//     I: 0,
//     E: 0,
//     N: 0,
//     S: 0,
//     T: 0,
//     F: 0,
//     J: 0,
//     P: 0,
//   };

//   Object.values(answers).forEach((answer) => {
//     switch (answer) {
//       case "a":
//         scores.I++;
//         scores.N++;
//         scores.T++;
//         scores.J++;
//         break;
//       case "b":
//         scores.E++;
//         scores.N++;
//         scores.F++;
//         scores.P++;
//         break;
//       case "c":
//         scores.E++;
//         scores.S++;
//         scores.F++;
//         scores.J++;
//         break;
//       case "d":
//         scores.I++;
//         scores.S++;
//         scores.T++;
//         scores.P++;
//         break;
//     }
//   });

//   let mbti = "";
//   mbti += scores.E > scores.I ? "E" : "I";
//   mbti += scores.N > scores.S ? "N" : "S";
//   mbti += scores.T > scores.F ? "T" : "F";
//   mbti += scores.J > scores.P ? "J" : "P";

//   return mbti as MBTI;
// };

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
