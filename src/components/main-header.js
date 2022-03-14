import { memo, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from "@mui/system";
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button, Menu, MenuItem, ListItemIcon, SvgIcon } from '@mui/material';

import Logo from "../../public/assets/icons/logo.svg";
import PlusIcon from "../../public/assets/icons/plus.svg";
import CreditIcon from "../../public/assets/icons/credit.svg";
import AvatarIcon from "../../public/assets/icons/avatar.svg";
import StarIcon from "../../public/assets/icons/star.svg";
import ProfileIcon from "../../public/assets/icons/menu_profile.svg";
import InfoIcon from "../../public/assets/icons/menu_info.svg";
import ExitIcon from "../../public/assets/icons/menu_exit.svg";

const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const ArrowIcon = styled("span")({
  width: "0",
  height: "0",
  borderLeft: "5px solid transparent",
  borderRight: "5px solid transparent",
  borderTop: "5px solid #ffffff",
  fontSize: "0",
  lineHeight: "0",
  marginLeft: "4px",
  marginTop: "4px"
});

const ButtonDonate = memo(function _Btn({ onClick, label }) {
  return <Button
    onClick={onClick}
    variant='contained'
    color='secondary'
  >
    {label}
  </Button>;
});

export default function MainHeader({ pages }) {

  const { t } = useTranslation("main_header");

  const [anchorEl, setAnchorEl] = useState(null);

  const [balance] = useState(75.14);
  const [rating] = useState(1084);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton height={48} disableRipple disableFocusRipple>
              <Logo />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: "right", alignItems: "center" }}>

              <Box sx={{
                display: "flex",
                background: (theme) => theme.palette.primary.main,
                height: "30px",
                padding: "0 15px",
                alignItems: "center",
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
                    fontWeight: "400"
                  }
                }}>
                  {balance}
                  <span>{t("currency")}</span>
                </Typography>
              </Box>
              <Button sx={{
                marginLeft: "22px"
              }} color="primary" variant='outlined' size='small' startIcon={<PlusIcon />}>{t("btn_charge")}</Button>
              <Button sx={{
                marginLeft: "109px"
              }} color="primary" variant='outlined' size='small' startIcon={<PlusIcon />}>{t("btn_new_game")}</Button>

              <Button sx={{
                marginLeft: "20px"
              }} startIcon={<AvatarIcon />} color="secondary" onClick={handleClick}>Tomek<ArrowIcon /></Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Menu
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
      </Menu>
      <Offset />
    </>
  );
};
