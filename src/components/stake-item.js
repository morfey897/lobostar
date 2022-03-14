import { Typography, Box } from "@mui/material";

function StakeItem({ title, value, icon }) {
  return <Box sx={{
    display: "flex",
    alignItems: "center"
  }}>
    {icon}
    <Typography color={"primary"} sx={{ maxWidth: "80px", fontSize: "0.675rem", margin: "0 60px 0 30px" }}>{title}</Typography>
    <Typography sx={{ fontWeight: "700", fontSize: "2rem", whiteSpace: "nowrap" }}>{value}</Typography>
  </Box>
}

export default StakeItem;