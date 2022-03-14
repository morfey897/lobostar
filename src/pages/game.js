import { useTranslation } from 'react-i18next';
import Layout from "../components/layout";
import GameHeader from "../components/game-header";
import ChessBoard from "../components/chess-board";
import ChessInfo from "../components/chess-info";

import SliderRate from "../components/slide-rate";
import SliderRange from "../components/slide-range";
import StakeItem from "../components/stake-item";

import { Tabs, Tab, Paper, Container, Box, Button, Stack } from '@mui/material';
import { useCallback, useState } from 'react';

import HomeIcon from "../../public/assets/icons/home.svg";
import PlayIcon from "../../public/assets/icons/play.svg";
import PuzzlesIcon from "../../public/assets/icons/puzzles.svg";
import LearnIcon from "../../public/assets/icons/learn.svg";
import TodayIcon from "../../public/assets/icons/today.svg";
import ConnectIcon from "../../public/assets/icons/connect.svg";
import MoreIcon from "../../public/assets/icons/more.svg";

const BUTTONS = [
  ["1 min", "2 min | 1s", "3 min"],
  ["3 min | 2s", "5 min", "5 min | 5s"],
  ["10 min", "15 min | 10s", "15 min"]
];


function GamePage() {
  const { t } = useTranslation("game");

  return <Layout>
    <GameHeader />
    <Container maxWidth={"xl"} sx={{
      marginTop: "50px",
      marginBottom: "50px",
    }}>
      <Paper elevation={0} sx={{
        backgroundColor: "#111B25E5",
        borderRadius: "20px",
      }}>

        <Box elevation={0} sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#1C2936",
          borderRadius: "20px 20px 0px 0px",
          height: "60px",
        }}>
          <Stack direction={"row"} spacing={2.5} sx={{ paddingLeft: "20px" }}>

            <Button color="secondary" size='small' startIcon={<HomeIcon />}>{t("btn_home")}</Button>

            <Button color="secondary" size='small' startIcon={<PlayIcon />}>{t("btn_play")}</Button>

            <Button color="secondary" size='small' startIcon={<PuzzlesIcon />}>{t("btn_puzzles")}</Button>

            <Button color="secondary" size='small' startIcon={<LearnIcon />}>{t("btn_learn")}</Button>
            <Button color="secondary" size='small' startIcon={<TodayIcon />}>{t("btn_today")}</Button>
            <Button color="secondary" size='small' startIcon={<ConnectIcon />}>{t("btn_connect")}</Button>
            <Button color="secondary" size='small' startIcon={<MoreIcon />}>{t("btn_more")}</Button>
          </Stack>
        </Box>

        <Box sx={{
          display: "flex"
        }}>
          <ChessBoard />

          <ChessInfo />
        </Box>
      </Paper>

    </Container>
  </Layout >;
}

export default GamePage;