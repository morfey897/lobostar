import { useTranslation } from 'react-i18next';
import Layout from "../components/layout";
import SimpleHeader from "../components/simple-header";
import TextField from "../components/text-field";
import Checkbox from "../components/checkbox";

import { Typography, Container, Grid, Box, Divider, FormControl, Button, Paper } from '@mui/material';
import { useCallback, useReducer } from 'react';

function initReducer() {
  return {
    login: "",
    email: "",
    name: "",
    surname: "",
    pass: "",
    pass_confirm: "",

  }
}

function reducer(state, action) {
  switch (action.type) {
    case "clear":
      return initReducer();
    default: {
      return {
        ...state,
        [action.type]: action.payload
      };
    }
  }
}

function RegistrationPage() {
  const { t } = useTranslation("registration");

  const [state, dispatch] = useReducer(reducer, {}, initReducer);

  const onChange = useCallback(({ target }) => {
    const { name, value } = target;
    dispatch({ type: name, payload: value });
  }, []);

  return <Layout>
    <SimpleHeader />
    <Container maxWidth="lg" sx={{
      marginTop: "47px",
      marginBottom: "67px",
    }}>
      <Paper elevation={0} sx={{
        backgroundColor: "#111B25E5",
        borderRadius: "20px"
      }}>
        <Typography textAlign={"center"} variant="h2" sx={{
          fontWeight: 600,
          fontSize: "2rem",
          lineHeight: "2.45rem",
          paddingTop: "59px"
        }}>{t("title")}</Typography>

        <Box sx={{
          padding: "calc(60px - 18px) 130px 0",
        }}>

          <Grid container sx={{
            "& > .MuiGrid-item:nth-of-type(2n)": {
              paddingLeft: "15px"
            },
            "& > .MuiGrid-item:nth-of-type(2n+1)": {
              paddingRight: "15px"
            },
            "& > .MuiGrid-item": {
              paddingTop: "18px"
            },
          }}>
            <Grid item md={6}>
              <TextField label={t("login_label")} name="login" fullWidth value={state.login} onChange={onChange} />
            </Grid>

            <Grid item md={6}>
              <TextField name="email" label={t("email_label")} fullWidth value={state.email} onChange={onChange} />
            </Grid>

            <Grid item md={6}>
              <TextField name="name" label={t("name_label")} fullWidth value={state.name} onChange={onChange} />
            </Grid>

            <Grid item md={6}>
              <TextField name="surname" label={t("surname_label")} fullWidth value={state.surname} onChange={onChange} />
            </Grid>
            <Grid item md={6}>
              <TextField name="pass" label={t("pass_label")} fullWidth value={state.pass} onChange={onChange} type="password" />
            </Grid>

            <Grid item md={6}>
              <TextField name="pass_confirm" label={t("pass_confirm_label")} fullWidth value={state.pass_confirm} onChange={onChange} type="password" />
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{
          height: "1px",
          border: "none",
          backgroundColor: (theme) => theme.palette.primary.main,
          margin: "30px 60px 0"
        }} />

        <Box sx={{
          padding: "calc(30px - 30px) 170px 0",
        }}>
          <FormControl required component="fieldset" sx={{
            "& .MuiFormControlLabel-root": {
              paddingTop: "30px",
              marginRight: 0,
              marginLeft: 0,
            },
            "& .MuiTypography-root": {
              fontSize: "0.875rem",
              lineHeight: "1.575rem",
            }
          }}>
            <Checkbox label={t("consent_email")} />
            <Checkbox label={t("consent_adult")} />
            <Checkbox label={t("consent_rules")} />
            <Checkbox label={<>
              <Typography component={"span"} sx={{
                color: (theme) => theme.palette.text.secondary
              }}>*</Typography>
              <Typography component={"span"} sx={{
                color: (theme) => theme.palette.text.primary
              }}>{t("please_select")}</Typography></>} disabled sx={{
                visibility: "hidden",
              }} />
          </FormControl>
        </Box>

        <Box sx={{
          padding: "30px 0 60px",
          textAlign: "center"
        }}>
          <Button variant='contained' sx={{
            padding: "16px 60px"
          }}>{t("btn_register")}</Button>
        </Box>
      </Paper>

    </Container>
  </Layout>;
}

export default RegistrationPage;