import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  LinearProgress,
  Typography,
  styled,
} from "@mui/material";

import {
  AnswerKeys,
  CurrentQuestionState,
  QuestionAnswersState,
} from "./state/quizState";
import { advancedQuestionMaps } from "./questions";

import q1 from "./assets/questionImages/1.png";
import q2 from "./assets/questionImages/2.png";
import q3 from "./assets/questionImages/3.png";
import q4 from "./assets/questionImages/4.png";
import q5 from "./assets/questionImages/5.png";
import q6 from "./assets/questionImages/6.png";
import q7 from "./assets/questionImages/7.png";
import q8 from "./assets/questionImages/8.png";
import q9 from "./assets/questionImages/9.png";
import q10 from "./assets/questionImages/10.png";
import q11 from "./assets/questionImages/11.png";
import q12 from "./assets/questionImages/12.png";
import logo from "./assets/potionPetalLogoOnly.png";
import { ROOT } from "./App";

const ANSWER_SELECTED = "#7a540d";
const ANSWER_HOVER = "#d3c6ad";
const ANSWER_BACKGROUND = "#f2e5cc";
const TEXT = "#4a4a4a";
const CARD_BACKGROUND = "#fef7ea";

const ArrowForward = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill={TEXT}
  >
    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
  </svg>
);

const ArrowBack = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
    fill={TEXT}
  >
    <path d="M313-440l224 224-57 56-320-320 320-320 57 56-224 224h487v80H313z" />
  </svg>
);

const images: Record<number, string> = {
  1: q1,
  2: q2,
  3: q3,
  4: q4,
  5: q5,
  6: q6,
  7: q7,
  8: q8,
  9: q9,
  10: q10,
  11: q11,
  12: q12,
};
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: CARD_BACKGROUND,
  minHeight: "100vh",
  padding: "20px 20px",
  overflow: "auto",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "80%",
    padding: "40px 45px",
  },
  [theme.breakpoints.up("md")]: {
    width: "70%",
  },
}));

const QuestionTypography = styled(Typography)(({ theme }) => ({
  color: TEXT,
  textAlign: "center",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1rem",
  },
}));

const AnswerButton = styled(Button)<{ selected?: boolean }>(
  ({ theme, selected }) => ({
    width: "100%",
    textAlign: "left",
    padding: "8px 16px",
    marginBottom: theme.spacing(2),
    fontSize: "18px",
    textTransform: "none",
    justifyContent: "flex-start",
    backgroundColor: selected ? ANSWER_SELECTED : ANSWER_BACKGROUND,
    color: selected ? CARD_BACKGROUND : TEXT,
    borderRadius: "18px",
    [theme.breakpoints.down("sm")]: {
      "&:hover": {
        backgroundColor: ANSWER_BACKGROUND,
        color: TEXT,
      },
    },
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        backgroundColor: selected ? ANSWER_SELECTED : ANSWER_HOVER,
      },
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "0.9rem",
    },
  })
);

export const Quiz: React.FC = () => {
  const [answers, setAnswers] = useRecoilState(QuestionAnswersState);
  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(CurrentQuestionState);
  const navigate = useNavigate();

  const handleAnswer = (answer: AnswerKeys) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answer,
    });
    if (currentQuestion < advancedQuestionMaps.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate(`/${ROOT}/result`);
    }
  };

  const question = advancedQuestionMaps[currentQuestion];

  return (
    <StyledCard
      sx={{
        width: { xs: "100%", sm: "80%", md: "70%", lg: "60%" },
      }}
    >
      <LinearProgress
        color="success"
        variant="determinate"
        value={(currentQuestion / 12) * 100}
        sx={{ width: "90%", padding: "3px", marginBottom: "10px" }}
      />
      <QuestionTypography variant="h5">{question.question}</QuestionTypography>
      <CardMedia
        component="img"
        image={images[question.id]}
        alt={`question: ${currentQuestion}`}
        sx={{
          width: { xs: "80%", sm: "60%", md: "50%", lg: "40%" },
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {currentQuestion !== 0 ? (
          <IconButton onClick={() => setCurrentQuestion((prev) => prev - 1)}>
            {ArrowBack}
          </IconButton>
        ) : (
          <IconButton />
        )}
        {answers[currentQuestion] && (
          <IconButton
            onClick={() =>
              currentQuestion < advancedQuestionMaps.length - 1
                ? setCurrentQuestion((prev) => prev + 1)
                : navigate("/result")
            }
          >
            {ArrowForward}
          </IconButton>
        )}
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "90%", md: "70%" },
        }}
      >
        {question.answers.map((answer) => {
          const [key, value] = Object.entries(answer)[0];
          return (
            <AnswerButton
              selected={answers[currentQuestion] === key}
              key={key}
              variant="contained"
              disableElevation
              onClick={() => handleAnswer(key as AnswerKeys)}
            >
              {value}
            </AnswerButton>
          );
        })}
      </Box>
      <Typography sx={{ textAlign: "center" }}>
        <Button
          sx={{
            color: TEXT,
            textTransform: "none",
            textDecoration: "underline",
            padding: 0,
          }}
          variant="text"
          onClick={() =>
            window.open("https://www.instagram.com/potion.petal", "_blank")
          }
        >
          <Box
            sx={{
              height: 32,
              width: 32,
              color: TEXT,
              backgroundImage: `url(${logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          @potion.petal
        </Button>
      </Typography>
    </StyledCard>
  );
};
