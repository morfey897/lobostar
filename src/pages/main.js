import { useTranslation } from 'react-i18next';
import Layout from "../components/layout";
import MainHeader from "../components/main-header";
import SearchInput from "../components/seach-input";
import UserIcon from "../../public/assets/icons/user.svg";

import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Grid, Paper, Container, Box, Button, Typography } from '@mui/material';

const rangeRows = [
  { range: "644 - 1444", pln: "mikolas1999", action: "Join", actionProps: { color: 'primary', variant: 'outlined', size: 'small' } },
  { range: "1100 - 1375", pln: "1.10/ -0.50 / -2.10", action: "Obserwuj", actionProps: { color: 'secondary', } },
  { range: "840 - 1640", pln: "Korowiow", action: "Obserwuj", actionProps: { color: 'secondary', } },
  { range: "854 - 1585", pln: "depechemode90", action: "Obserwuj", actionProps: { color: 'secondary', } },
  { range: "736 - 1536", pln: "JanuszP", action: "Obserwuj", actionProps: { color: 'secondary', } },
];

const usersRows = [
  { user: "jurasek99", ranking: "1084", table: "-" },
  { user: "JanuszP", ranking: "985", table: "-" },
  { user: "kabakulp", ranking: "1365", table: "941" },
  { user: "mikolas1999", ranking: "1258", table: "942" },
  { user: "Korowiow", ranking: "1456", table: "941" },
  { user: "michallakomy", ranking: "1113", table: "944" },
  { user: "Milolaj_5723067", ranking: "1252", table: "941" },
  { user: "Irina", ranking: "975", table: "940" },
  { user: "Zuzanna", ranking: "1192", table: "942" },
];

function MainPage() {
  const { t } = useTranslation("main");

  return <Layout>
    <MainHeader />
    <Container maxWidth={"xl"} sx={{
      marginTop: "100px",
      marginBottom: "50px",
    }}>
      <Grid container>
        <Grid item md={6} xs={12}  sx={{ paddingRight: "8px" }}>
          <Paper elevation={0} sx={{
            backgroundColor: "#111B25E5",
            borderRadius: "20px",
          }}>
            <Box elevation={0} sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              backgroundColor: "#1C2936",
              borderRadius: "20px 20px 0px 0px",
              height: "70px",
              padding: "0 60px",
            }}>
              <SearchInput placeholder={t("search")} />
            </Box>
            <TableContainer component={Box} sx={{ padding: "0 60px " }}>
              <Table>
                <TableHead sx={{
                  '& td, & th': { borderColor: (theme) => theme.palette.primary.main },
                }}>
                  <TableRow>
                    <TableCell align="center">{t("range")}</TableCell>
                    <TableCell align="center">{t("pln")}</TableCell>
                    <TableCell align="center">{t("action")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{
                  '& td, & th': { border: 0 }
                }}>
                  {rangeRows.map((row, index) => (
                    <TableRow key={`rangeRows_${index}`}>
                      <TableCell align="center">{row.range}</TableCell>
                      <TableCell align="center">{row.pln}</TableCell>
                      <TableCell align="center">{<Button {...row.actionProps}>{row.action}</Button>}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        <Grid item md={6} xs={12} sx={{ paddingLeft: "8px" }}>
          <Paper elevation={0} sx={{
            backgroundColor: "#111B25E5",
            borderRadius: "20px",
          }}>
            <Box elevation={0} sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#1C2936",
              borderRadius: "20px 20px 0px 0px",
              height: "70px",
              padding: "0 80px",
            }}>
              <Typography sx={{
                fontWeight: "600",
                fontSize: "1.25rem",
                lineHeight: "25px",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                "& span": {
                  paddingLeft: 1
                }
              }}>
                <UserIcon />
                <span>{t("users")}</span>
              </Typography>
              <SearchInput placeholder={t("search")} />
            </Box>
            <TableContainer component={Box} sx={{ padding: "0 80px " }}>
              <Table>
                <TableHead sx={{
                  '& td, & th': { borderColor: (theme) => theme.palette.primary.main },
                }}>
                  <TableRow>
                    <TableCell align="center">{t("user")}</TableCell>
                    <TableCell align="center">{t("ranking")}</TableCell>
                    <TableCell align="center">{t("table")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{
                  '& td, & th': { border: 0 }
                }}>
                  {usersRows.map((row, index) => (
                    <TableRow key={`usersRows${index}`}>
                      <TableCell align="center">{row.user}</TableCell>
                      <TableCell align="center">{row.ranking}</TableCell>
                      <TableCell align="center">{row.table}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Layout>;
}

export default MainPage;