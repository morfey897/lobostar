import { Typography, Box, Avatar, Paper, Badge, ListItem, Stack } from "@mui/material";
import { styled } from "@mui/system";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function MoveItem({ index, from, to }) {
  return <ListItem
    disableGutters
    disablePadding
    sx={{
      backgroundColor: (index % 2) === 0 ? "#0E171F" : "transparent",
      padding: "15px 30px"
    }}>

    <Stack direction="row" spacing={6.25}>
      <Typography>{index}.</Typography>
      <Typography>{from}</Typography>
      <Typography>{to}</Typography>
    </Stack>
  </ListItem>;
}

export default MoveItem;