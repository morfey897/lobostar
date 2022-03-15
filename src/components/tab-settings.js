import { useTranslation } from 'react-i18next';
import { Tabs, Tab, Paper, Box, Typography, Button, Stack, Divider as MuiDivider, Select, MenuItem, FormControl } from '@mui/material';

import withTab from "../hocs/hoc-tab";
import { styled } from '@mui/system';

import SliderRange from "./slide-range";
import { useCallback, useState } from 'react';

const BUTTONS = [
  ["1 min", "2 min | 1s", "3 min"],
  ["3 min | 2s", "5 min", "5 min | 5s"],
  ["10 min", "15 min | 10s", "15 min"]
];

const TYPES = ["Public", "Private", "Custom type"];

const pointsFormat = (val) => val > 0 ? `+${val}` : val;

const Divider = styled(MuiDivider)({
  borderColor: "#121B25",
});

function TabSettings() {
  const { t } = useTranslation("game");

  const [rating, setRating] = useState([250, 750]);
  const [points, setPoints] = useState([-35, 45]);

  const onChangeRating = useCallback((newValues) => {
    setRating(newValues);
  }, []);

  const onChangePoints = useCallback((newValues) => {
    setPoints(newValues);
  }, []);

  return <>
    <Typography sx={{ fontWeight: "600", fontSize: "1.25rem" }}>{t("time")}</Typography>
    <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
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
    <Divider />
    <Box sx={{ marginTop: "30px", marginBottom: "30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Typography sx={{ fontWeight: "600", fontSize: "1.25rem" }}>{t("type")}</Typography>
      <Select
        defaultValue={TYPES[0]}
        sx={{
          borderRadius: 46,
          background: "rgba(255, 255, 255, 0.2)",
          border: '1px solid #ffffff',
          fontSize: 16,
          lineHeight: "20px",
          width: '315px',
          height: "50px",
          paddingLeft: "10px",
          "& svg": {
            color: (theme) => theme.palette.primary.main
          }
        }}
      >
        {TYPES.map(name => <MenuItem value={name} key={name}>{name}</MenuItem>)}
      </Select>
    </Box>
    <Divider />
    <Box sx={{ marginTop: "30px", marginBottom: "30px", position: "relative" }}>
      <Typography sx={{ fontWeight: "600", fontSize: "1.25rem", position: "absolute", left: 0 }}>{t("rating")}</Typography>
      <Typography sx={{ fontWeight: "600", fontSize: "1.25rem" }} align="center">{`${rating[0]} - ${rating[1]}`}</Typography>
      <SliderRange onChange={onChangeRating} value={rating} min={[0, 695]} max={[705, 1400]} />
    </Box>
    <Divider />
    <Box sx={{ marginTop: "30px", marginBottom: "30px", position: "relative" }}>
      <Typography sx={{ fontWeight: "600", fontSize: "1.25rem", position: "absolute", left: 0 }}>{t("points")}</Typography>
      <Typography sx={{ fontWeight: "600", fontSize: "1.25rem" }} align="center">{`${pointsFormat(points[0])} - ${pointsFormat(points[1])}`}</Typography>
      <SliderRange onChange={onChangePoints} value={points} min={[-150, 0]} max={[0, 140]} />
    </Box>
  </>;
}

export default withTab(TabSettings);