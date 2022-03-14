import { alpha, styled } from '@mui/material/styles';

import { FormControl, InputLabel, InputBase } from '@mui/material';


const MyInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 46,
    position: 'relative',
    background: "rgba(255, 255, 255, 0.2)",
    border: '1px solid #ffffff',
    fontSize: 16,
    lineHeight: "20px",
    width: '100%',
    padding: '10px 30px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));


function TextField({ fullWidth = false, label = "", name = "", value = "", type = "text", onChange, ...props }) {
  return <FormControl variant="standard" fullWidth={fullWidth}>
    <InputLabel shrink htmlFor={`htmlFor-${name}`}>
      {label}
    </InputLabel>
    <MyInput name={name} type={type} id={`htmlFor-${name}`} value={value} onChange={onChange} {...props} />
  </FormControl>
}

export default TextField;