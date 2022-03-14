import { IconButton } from "@mui/material";

import LogoIcon from "../../public/assets/icons/logo.svg";

function Logo() {
  return <IconButton disableRipple disableFocusRipple sx={{ height: 48, paddingTop: "24px" }}>
    <LogoIcon />
  </IconButton>
}

export default Logo;