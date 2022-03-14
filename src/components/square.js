import { Box, Typography } from "@mui/material";
import { useMemo } from "react";

import PawnBlack from "../../public/assets/imgs/pawn_black.png";
import PawnWhite from "../../public/assets/imgs/pawn_white.png";

import CastleBlack from "../../public/assets/imgs/castle_black.png";
import CastleWhite from "../../public/assets/imgs/castle_white.png";

import KnightWhite from "../../public/assets/imgs/knight_white.png";
import KnightBlack from "../../public/assets/imgs/knight_black.png";

import BishopWhite from "../../public/assets/imgs/bishop_white.png";
import BishopBlack from "../../public/assets/imgs/bishop_black.png";

import KingWhite from "../../public/assets/imgs/king_white.png";
import KingBlack from "../../public/assets/imgs/king_black.png";

import QueenWhite from "../../public/assets/imgs/queen_white.png";
import QueenBlack from "../../public/assets/imgs/queen_black.png";

const figGenerator = (fig) => {
  const isBlack = (fig & 1) === 1;
  if ((fig & 0b10) === 0b10) {
    return isBlack ? PawnBlack : PawnWhite;
  } else if ((fig & 0b100) === 0b100) {
    return isBlack ? CastleBlack : CastleWhite;
  } else if ((fig & 0b1000) === 0b1000) {
    return isBlack ? KnightBlack : KnightWhite;
  } else if ((fig & 0b10000) === 0b10000) {
    return isBlack ? BishopBlack : BishopWhite;
  } else if ((fig & 0b100000) === 0b100000) {
    return isBlack ? QueenBlack : QueenWhite;
  } else if ((fig & 0b1000000) === 0b1000000) {
    return isBlack ? KingBlack : KingWhite;
  }
}

function Square({ width = 80, height = 80, fig = 0, i, j }) {

  const isBlack = useMemo(() => Boolean((i + (j % 2)) % 2), [i, j]);

  return <Box sx={{
    position: "relative",
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: isBlack ? "#CEB766" : "#EEEED2",
    textAlign: "center"
  }}>
    {
      i === 0 && <Typography sx={{
        position: "absolute",
        left: "4px",
        top: "2px",
        color: !isBlack ? "#CEB766" : "#EEEED2",
      }}>{8 - j}</Typography>
    }

    {
      j === 7 && <Typography sx={{
        position: "absolute",
        right: "4px",
        bottom: "2px",
        color: !isBlack ? "#CEB766" : "#EEEED2",
      }}>{String.fromCharCode(97 + i)}</Typography>
    }
    {fig > 0 && <img src={figGenerator(fig)} style={{marginTop: "15px"}}/>}
  </Box>
}

export default Square;