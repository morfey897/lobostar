import { useTranslation } from 'react-i18next';

import { Tabs, Tab, Paper, Box } from '@mui/material';
import { useCallback, useState } from 'react';

import TabChat from "./tab-chat";
import TabMovie from "./tab-movie";
import TabSettings from "./tab-settings";

function ChessInfo() {

  const { t } = useTranslation("game");

  const [activeTab, setActiveTab] = useState(2);

  const onChangeActiveTab = useCallback((event, newValue) => {
    setActiveTab(newValue);
  }, []);


  return <Box sx={{
    width: "100%",
    padding: "30px 30px 30px 0",
  }}>
    <Tabs
      onChange={onChangeActiveTab}
      value={activeTab}
      variant="fullWidth"
      TabIndicatorProps={{
        style: {
          display: "none",
        },
      }}
    >
      <Tab label={t("tab_movie")} />
      <Tab label={t("tab_chat")} />
      <Tab label={t("tab_settings")} />
    </Tabs>

    <Paper elevation={0} sx={{
      backgroundColor: "#1C2936",
      borderRadius: "0 0 20px 20px",
      width: "100%",
      height: "710px"
    }}>

      <TabMovie value={activeTab} index={0} />
      <TabChat value={activeTab} index={1} />
      <TabSettings value={activeTab} index={2} />
    </Paper>
  </Box>
}

export default ChessInfo;