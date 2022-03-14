import { useTranslation } from 'react-i18next';

import { Tabs, Tab, Paper, Box, Typography } from '@mui/material';
import { useCallback, useState } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: "30px" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function ChessInfo() {

  const { t } = useTranslation("game");

  const [activeTab, setActiveTab] = useState(0);

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

      {/*  */}
      <TabPanel value={activeTab} index={0}>
        Movie
      </TabPanel>

      <TabPanel value={activeTab} index={1}>
        Chat
      </TabPanel>

      <TabPanel value={activeTab} index={2}>
        Settings
      </TabPanel>
    </Paper>
  </Box>
}

export default ChessInfo;