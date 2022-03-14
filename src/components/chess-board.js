import { Stack, Box } from "@mui/material";

import Square from "./square";
import UserItem from "./user-item";

const BOAT = [
  [0b101, 0b1001, 0b10001, 0b1000001, 0b100001, 0b10001, 0b1001, 0b101],
  [0b11, 0b11, 0b11, 0b11, 0b11, 0b11, 0b11, 0b11],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0b10, 0b10, 0b10, 0b10, 0b10, 0b10, 0b10, 0b10],
  [0b100, 0b1000, 0b10000, 0b1000000, 0b100000, 0b10000, 0b1000, 0b100],
];

function ChessBoard() {
  return <Box sx={{
    width: 8 * 80 + "px",
    margin: "0 90px 0 115px",
    padding: "30px 0px"
  }}>
    <Box sx={{ margin: "10px 0" }}>
      <UserItem avatar={"https://picsum.photos/50/50"} name={"Sara (500)"} time={"10:00"} />
    </Box>
    {BOAT.map((figs, j) => <Stack key={`line_${j}`}>
      <Stack direction={"row"}>
        {figs.map((fig, i) => {
          return <Square key={`${i}_${j}`} fig={fig} i={i} j={j} />;
        })}
      </Stack>
    </Stack>)}
    <Box sx={{ margin: "10px 0" }}>
      <UserItem avatar={"https://picsum.photos/50/50"} name={"Jimy (700)"} time={"10:00"} />
    </Box>
  </Box>;
}

export default ChessBoard;