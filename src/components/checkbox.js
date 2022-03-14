

import { styled } from '@mui/material/styles';
import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';

const IconCheckBox = styled("span")({
  width: "20px",
  height: "20px",
  background: "rgba(255, 255, 255, 0.2)",
  border: "1px solid #FFFFFF",
  borderRadius: "5px"
});


const IconCheckBoxChecked = styled("span")(({ theme }) => ({
  width: "20px",
  height: "20px",
  background: "rgba(255, 255, 255, 0.2)",
  border: "1px solid #FFFFFF",
  borderRadius: "5px",
  display: "grid",
  placeContent: "center",
  "&::before": {
    content: '""',
    width: "0.65em",
    height: "0.65em",
    boxShadow: `inset 1em 1em ${theme.palette.primary.main}`,
    transformOrigin: "bottom left",
    clipPath: "polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)",
  }
}));

function Checkbox({ label, ...rest }) {
  return <FormControlLabel
    control={<MuiCheckbox icon={<IconCheckBox />} checkedIcon={<IconCheckBoxChecked />} {...rest} />}
    label={label}
  />;
}

export default Checkbox;