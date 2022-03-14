import { useTranslation } from 'react-i18next';
import Layout from "../components/layout";
import MainHeader from "../components/main-header";
import SliderRate from "../components/slide-rate";
import SliderRange from "../components/slide-range";

import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Grid, Paper, Container, Box, Button, Typography, Slider } from '@mui/material';
import { useCallback, useState } from 'react';

function StakePage() {
  const { t } = useTranslation("stake");

  // const [minRange, setMinRange] = useState({ min: 0, max: 700, value: 250 });
  // const [maxRange, setMaxRange] = useState({ min: 700, max: 1400, value: 750 });
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
            </Grid>

            <Grid item md={6} xs={12} >

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