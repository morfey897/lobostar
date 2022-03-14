import { styled } from "@mui/system";
import { AppBar, Toolbar, IconButton, Container } from '@mui/material';

import Logo from "./logo";

const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

export default function SimpleHeader({ children }) {
  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo />
            {children}
          </Toolbar>
        </Container>
      </AppBar>
      <Offset />
    </>
  );
};
