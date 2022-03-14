import { Typography, Menu as MuiMenu, MenuItem, ListItemIcon } from '@mui/material';
import { useTranslation } from 'react-i18next';

import StarIcon from "../../public/assets/icons/star.svg";
import ProfileIcon from "../../public/assets/icons/menu_profile.svg";
import InfoIcon from "../../public/assets/icons/menu_info.svg";
import ExitIcon from "../../public/assets/icons/menu_exit.svg";
import CreditIcon from "../../public/assets/icons/credit.svg";

function Menu({ handleClose, anchorEl, balance, rating }) {

  const { t } = useTranslation("main_header");

  return <MuiMenu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleClose}
    onClick={handleClose}
    PaperProps={{
      elevation: 1,
      sx: {
        overflow: 'visible',
        backgroundColor: "#1C2936",
        borderRadius: "0px 0px 20px 20px",
      },
    }}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
  >
    <MenuItem disabled sx={{
      display: "flex",
      background: (theme) => theme.palette.primary.main,
      height: "30px",
      padding: "0 15px",
      alignItems: "center",
      "&.Mui-disabled": {
        opacity: 1
      }
    }}>
      <Typography sx={{
        fontWeight: "400",
        fontSize: "0.75rem",
        lineHeight: "14px",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        "& span": {
          paddingLeft: 0.5
        }
      }}>
        <CreditIcon />
        <span>{t("balance")}</span>
      </Typography>

      <Typography sx={{
        marginLeft: "20px",
        fontWeight: "700",
        fontSize: "0.875rem",
        lineHeight: "17px",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "baseline",
        "& span": {
          paddingLeft: 0.5,
          fontSize: "0.625rem",
          lineHeight: "12px",
          fontWeight: "400",
        }
      }}>
        {balance}
        <span>{t("currency")}</span>
      </Typography>

      <Typography sx={{
        marginLeft: "28px",
        fontWeight: "400",
        fontSize: "0.75rem",
        lineHeight: "14px",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        "& span": {
          paddingLeft: 0.5
        },
        "& span.big": {
          paddingLeft: "20px",
          fontWeight: "700",
          fontSize: "0.875rem",
          lineHeight: "17px",
        },
      }}>
        <StarIcon />
        <span>{t("rating")}</span>
        <span className='big'>{rating}</span>
      </Typography>
    </MenuItem>
    <MenuItem disabled sx={{
      height: "35px"
    }} />
    <MenuItem>
      <ListItemIcon>
        <ProfileIcon />
      </ListItemIcon>
      {t("btn_profile")}
    </MenuItem>
    <MenuItem>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      {t("btn_info")}
    </MenuItem>
    <MenuItem>
      <ListItemIcon>
        <ExitIcon />
      </ListItemIcon>
      {t("btn_exit")}
    </MenuItem>
    <MenuItem disabled sx={{
      height: "35px"
    }} />
  </MuiMenu>;
}

export default Menu;