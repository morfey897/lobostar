import { Typography, Box, Avatar, Paper, Badge, ListItem } from "@mui/material";
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

function ChatItem({ avatar, message, time, isOnline, isMe = false }) {
  return <ListItem
    disableGutters
    disablePadding
    sx={{
      display: "flex",
      alignItems: "start",
      flexDirection: isMe ? "row" : "row-reverse",
      justifyContent: isMe ? "left" : "right",
      margin: "20px 0",
      padding: isMe ? "0" : "0 15px 0 0",
    }}>
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
      invisible={!isOnline}
      sx={{ display: "block" }}
    >
      <Avatar variant="circular" src={avatar} sizes={"50px"} sx={{ width: "50px", height: "50px" }} />
    </StyledBadge>

    <Box sx={{ margin: isMe ? "0 0 0 10px" : "0 10px 0 0", display: "inline-block", verticalAlign: "top" }}>
      <Paper elevation={0} sx={{
        maxWidth: "250px",
        padding: "10px",
        backgroundColor: isMe ? "#EEEED2" : "#131C25",
        borderRadius: isMe ? "5px 5px 5px 0px" : "5px 5px 0px 5px",
      }}>
        <Typography sx={{ color: isMe ? "#131C25" : "#FFFFFF" }}>{message}</Typography>
      </Paper>
      {!!time && <Typography sx={{ fontSize: "0.75rem" }} align={isMe ? "left" : "right"}>{time}</Typography>}
    </Box>
  </ListItem>;
}

export default ChatItem;