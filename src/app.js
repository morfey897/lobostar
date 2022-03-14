import * as React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme } from "./themes";

import RegistrationPage from "./pages/registration";
import MainPage from "./pages/main";
import StakePage from "./pages/stake";
import GamePage from "./pages/game";

import plJson from "./locales/pl";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "pl",
    // debug: process.env.DEBUG === "true",
    lowerCaseLng: true,
    lng: "pl",
    supportedLngs: ["pl"],
    nonExplicitSupportedLngs: true,

    resources: {
      pl: plJson
    },

    ns: [...new Set([].concat(Object.keys(plJson)))],
    interpolation: {
      escapeValue: false,
    },
  })


const theme = createTheme(true);

function App() {

  return <BrowserRouter>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/stake" element={<StakePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>;
}

export default App;