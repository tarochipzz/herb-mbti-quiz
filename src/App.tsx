import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Quiz } from "./Quiz";
import { Result } from "./Result";
import { RecoilRoot } from "recoil";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { MagicDust } from "./MagicDust";

export const ROOT = "herb-mbti-quiz";
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      background: { default: "#e2eed8" },
    },
    typography: {
      fontFamily: ["Rosarivo", "Helvetica Neue", "Roboto", "Arial"].join(","),
      h4: {
        fontFamily: "Lugrasimo",
      },
      h5: {
        fontFamily: "Lugrasimo",
      },
    },
  })
);

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MagicDust />
          <Router>
            <Routes>
              <Route path={`/${ROOT}`} element={<Home />} />
              <Route path={`/${ROOT}/questions`} element={<Quiz />} />
              <Route path={`/${ROOT}/result`} element={<Result />} />
            </Routes>
          </Router>
        </Box>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
