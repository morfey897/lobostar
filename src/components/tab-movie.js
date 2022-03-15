import { List, IconButton, Paper, Box, Typography, Divider } from '@mui/material';

import withTab from "../hocs/hoc-tab";

import MoveItem from "./move-item";

import ShareIcon from "../../public/assets/icons/share.svg";
import DownloadIcon from "../../public/assets/icons/download.svg";
import SettingsIcon from "../../public/assets/icons/settings.svg";
import FlagIcon from "../../public/assets/icons/flag.svg";
import CompassIcon from "../../public/assets/icons/compass.svg";
import DictionaryIcon from "../../public/assets/icons/dictionary.svg";

const MOVES = [
  {from: "e4", to: "c6"},
  {from: "f3", to: "e6"},
];

function TabMovie({ parentHeight }) {
  return <>
    <Paper elevation={0} sx={{
      borderRadius: "20px",
      backgroundColor: "#131C25",
      width: "100%",
      height: `calc(${parentHeight}px - 50px)`
    }}>

      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 30px 22px 30px",
      }}>
        <Typography>{"Caro-Kann Defense: 2.Nf3"}</Typography>
        <Box>
          <IconButton>
            <DictionaryIcon />
          </IconButton>
          <IconButton>
            <CompassIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider sx={{
        borderColor: "#1C2936"
      }} />

      <List
        sx={{
          width: '100%',
          height: `calc(${parentHeight}px - 60px - 70px)`,
          overflowY: 'auto',
          overflowX: "hidden"
        }}>
        {MOVES.map((value, index) => <MoveItem key={index} index={index + 1} {...value} />)}
      </List>

    </Paper>
    <Box sx={{
      marginTop: "25px",
      display: "flex"
    }}>
      <IconButton>
        <ShareIcon />
      </IconButton>
      <IconButton>
        <DownloadIcon />
      </IconButton>
      <IconButton>
        <SettingsIcon />
      </IconButton>
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: "right" }}>
        <IconButton>
          <FlagIcon />
        </IconButton>
      </Box>
    </Box>
  </>;
}

export default withTab(TabMovie);