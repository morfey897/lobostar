import { styled } from "@mui/system";
import { AppBar, Toolbar, IconButton, Container } from '@mui/material';

import Logo from "../../public/assets/icons/logo.svg";

const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

export default function SimpleHeader({ pages }) {
  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton height={48} disableRipple disableFocusRipple>
              <Logo />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Offset />
    </>
  );
};
