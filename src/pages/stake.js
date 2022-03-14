import { useTranslation } from 'react-i18next';
import Layout from "../components/layout";
import MainHeader from "../components/main-header";
import SliderRate from "../components/slide-rate";
import SliderRange from "../components/slide-range";
import StakeItem from "../components/stake-item";

import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Grid, Paper, Container, Box, Button, Typography, Slider, Divider, Stack } from '@mui/material';
import { useCallback, useState } from 'react';

import MaxStakeIcon from "../../public/assets/icons/max_stake.svg";
import MaxWinIcon from "../../public/assets/icons/max_win.svg";
import MaxDefeatIcon from "../../public/assets/icons/max_defeat.svg";

const BUTTONS = [
  ["1 min", "2 min | 1s", "3 min"],
  ["3 min | 2s", "5 min", "5 min | 5s"],
  ["10 min", "15 min | 10s", "15 min"]
];


function StakePage() {
  const { t } = useTranslation("stake");

  const [range, setRange] = useState([250, 750]);
  const [rate, setRate] = useState(750);

  const onChangeRange = useCallback((newValues) => {
    setRange(newValues);
  }, []);

  const onChangeRate = useCallback((newValues) => {
    setRate(newValues);
  }, []);

  return <Layout>
    <MainHeader />
    <Container maxWidth={"lg"} sx={{
      marginTop: "100px",
      marginBottom: "50px",
    }}>
      <Paper elevation={0} sx={{
        backgroundColor: "#111B25E5",
        borderRadius: "20px",
      }}>

        <Box sx={{
          padding: "80px 60px 60px",
        }}>
          <Grid container>
            <Grid item md={6} xs={12} >

              <SliderRange valueFormatter={([min, max]) => `${min} - ${max}`} onChange={onChangeRange} value={range} min={[0, 695]} max={[705, 1400]} label={t("range")} />

              <SliderRate onChange={onChangeRate} value={rate} min={0} max={1400} label={t("rate")} sx={{
                marginTop: "20px"
              }} />

              <Box sx={{ marginTop: "60px" }}>
                <Stack spacing={2.5}>
                  {BUTTONS.map((line, index) => <Box key={index} sx={{
                    display: "flex",
                    justifyContent: "space-between"
                  }}>
                    {line.map(name => <Button sx={{
                      width: "150px",
                      paddingLeft: 0,
                      paddingRight: 0,
                    }} key={name} variant='outlined' color="secondary" size="small">{name}</Button>)}
                  </Box>)}

                </Stack>
              </Box>
            </Grid>

            <Grid item md={1} xs={12}>
              <Divider orientation='vertical' sx={{
                margin: 0,
                marginLeft: "50%",
                marginRight: "50%",
                borderColor: (theme) => theme.palette.primary.main,
              }} />
            </Grid>

            <Grid item md={5} xs={12} >
              <Stack spacing={10} sx={{
                marginTop: "50px"
              }}>
                <StakeItem value={`1.85`} title={t("max_stake")} icon={<MaxStakeIcon />} />
                <StakeItem value={`20.00 PLN`} title={t("max_win")} icon={<MaxWinIcon />} />
                <StakeItem value={`- 20.00 PLN`} title={t("max_defeat")} icon={<MaxDefeatIcon />} />
              </Stack>

            </Grid>
          </Grid>
        </Box>

        <Box elevation={0} sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1C2936",
          borderRadius: "0px 0px 20px 20px",
          height: "100px",
          "& .MuiButton-root": {
            margin: "0 20px"
          }
        }}>
          <Button variant='outlined' color='secondary' sx={{
            minWidth: "180px"
          }}>{t("btn_public")}</Button>
          <Button variant='contained' sx={{
            minWidth: "180px"
          }}>{t("btn_private")}</Button>
          <Button variant='contained' color="success" sx={{
            minWidth: "180px"
          }}>{t("btn_create_game")}</Button>
        </Box>
      </Paper>

    </Container>
  </Layout >;
}

export default StakePage;