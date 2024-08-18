import { atom } from "recoil";

export type AnswerKeys = "a" | "b" | "c" | "d";

export const QuestionAnswersState = atom<Record<number, AnswerKeys>>({
  key: "QuestionAnswersState",
  default: {},
});

export const CurrentQuestionState = atom<number>({
  key: "CurrentQuestionState",
  default: 0,
});
