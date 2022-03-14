import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from "@mui/system";
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button, Menu, MenuItem, ListItemIcon, SvgIcon, Stack } from '@mui/material';

import SearchInput from "./seach-input";
import Header from "./simple-header";

import LightUIIcon from "../../public/assets/icons/light_ui.svg";
import CollapseIcon from "../../public/assets/icons/collapse.svg";
import SettingsIcon from "../../public/assets/icons/settings.svg";
import HelpIcon from "../../public/assets/icons/help.svg";

export default function GameHeader() {

  const { t } = useTranslation("game_header");

  return (
    <Header>
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: "right", alignItems: "center" }}>
        <Stack direction={"row"} spacing={2.5}>
          <SearchInput placeholder={t("search")} border={false} />

          <Button color="secondary" size='small' startIcon={<LightUIIcon />}>{t("btn_light")}</Button>

          <Button color="secondary" size='small' startIcon={<CollapseIcon />}>{t("btn_collapse")}</Button>

          <Button color="secondary" size='small' startIcon={<SettingsIcon />}>{t("btn_settings")}</Button>

          <Button color="secondary" size='small' startIcon={<HelpIcon />}>{t("btn_help")}</Button>
        </Stack>
      </Box>
    </Header>
  );
};
