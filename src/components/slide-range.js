import { useCallback, useMemo } from "react"
import { Typography, Slider, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const DotRange = styled("span")({
  zIndex: "100",
  position: "absolute",
  display: "inline-block",
  backgroundColor: "#fff",
  borderRadius: "50%",
  width: "10px",
  height: "10px",
  left: 0,
  right: 0,
  top: "13px",
  marginLeft: "auto",
  marginRight: "auto",
});

function SliderRate({ min, max, value, onChange }) {

  const onChangeRate = useCallback((event, newValue) => {
    const { name } = event.target;
    const index = parseInt(name);
    let clone = [...value];
    clone[index] = newValue;
    onChange(clone);
  }, [onChange, value]);

  return <Box sx={{
    display: "flex",
    position: "relative",
  }}>
    <Slider
      min={min[0] || 0}
      max={max[0] || 100}
      value={value[0] || 0}
      onChange={onChangeRate}
      track="inverted"
      name={"0"}
      sx={{
        borderRadius: "20px 0 0 20px",
        height: "10px",

        "& .MuiSlider-track": {
          border: "0",
        },
        '& .MuiSlider-thumb': {
          height: 20,
          width: 20,
          backgroundColor: (theme) => theme.palette.common.black,
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
    <DotRange />
    <Slider
      min={min[1] || 0}
      max={max[1] || 100}
      value={value[1] || 0}
      onChange={onChangeRate}
      name={"1"}
      sx={{
        borderRadius: "0 20px 20px 0",
        height: "10px",
        "& .MuiSlider-track": {
          border: "0",
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