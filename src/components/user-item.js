import { Typography, Box, Avatar } from "@mui/material";

import FlagUsa from "../../public/assets/imgs/usa_flag.png";

function UserItem({ avatar, name, time }) {
  return <Box sx={{
    display: "flex",
    alignItems: "center"
  }}>
    <Avatar variant="rounded" src={avatar} sizes={"50px"} sx={{ width: "50px", height: "50px" }} />
    <Typography sx={{ fontWeight: "600", margin: "0 10px " }}>{name}</Typography>

    <Avatar variant="rounded" src={FlagUsa} sizes={"40px"} sx={{ width: "40px", height: "24px" }} />

    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: "right", alignItems: "center" }}>
      <Typography sx={{ fontWeight: "600", fontSize: "1.5rem" }}>{time}</Typography>
    </Box>
  </Box>
}

export default UserItem;