import { Box } from '@mui/material';

function withTab(C) {
  return ({ value, index, ...other }) => (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: "30px" }}>
          <C />
        </Box>
      )}
    </div>
  );
}

export default withTab;