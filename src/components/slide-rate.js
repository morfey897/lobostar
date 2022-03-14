import { useCallback } from "react"
import { Typography, Slider, Box } from '@mui/material';

function SliderRate({ label, min, max, value, valueFormatter, onChange, sx = {} }) {

  const onChangeRate = useCallback((event, newValue) => {
    onChange(newValue);
  }, [onChange]);

  return <Box sx={{...sx}}>
    <Typography textAlign={"center"} sx={{
      fontWeight: "600",
      fontSize: "2rem"
    }}>{typeof valueFormatter === "function" ? valueFormatter(value) : value}</Typography>
    <Typography sx={{
      marginBottom: "-8px"
    }}>{label}</Typography>
    <Slider
      min={min}
      max={max}
      value={value}
      onChange={onChangeRate}
      sx={{
        borderRadius: "20px",
        height: "10px",
        "& .MuiSlider-track": {
          border: "0",
          background: "linear-gradient(270deg, #CEB766 0%, rgba(142, 133, 98, 0) 100%)"
        },
        "& .MuiSlider-rail": {
          backgroundColor: "rgba(206, 183, 102, 0.5)"
        },
        '& .MuiSlider-thumb': {
          height: 20,
          width: 20,
          backgroundColor: 'currentColor',
          border: (theme) => `4px solid ${theme.palette.common.white}`,
          '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
          },
          '&:before': {
            display: 'none',
          },
        },
      }}
    />
  </Box>
}

export default SliderRate;