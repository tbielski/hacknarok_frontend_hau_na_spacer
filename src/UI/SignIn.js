import React from "react";
import { Formik } from "formik";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PetsIcon from "@material-ui/icons/Pets";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import green from "@material-ui/core/colors/green";
import { connect } from "react-redux";

import actions from "../ducks/users/usersActions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {"Spaghetti Code Squad "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn({ login }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PetsIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Zaloguj się
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            login(values);
            resetForm({
              values: { email: "", password: "" },
            });
          }}
        >
          {(formProps) => (
            <form onSubmit={formProps.handleSubmit}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Adres e-mail"
                  name="email"
                  onChange={formProps.handleChange}
                  value={formProps.values.email}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  onChange={formProps.handleChange}
                  value={formProps.values.password}
                  label="Hasło"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Zaloguj
                </Button>
              </div>
            </form>
          )}
        </Formik>
        <Grid container>
          <Grid item>
            <RouterLink
              to="/konto/zarejestruj"
              style={{ color: green[600], textDecoration: "none" }}
            >
              Nie masz konta? Zarejestruj się!
            </RouterLink>
          </Grid>
        </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => {
            dispatch(actions.login(credentials))
        }
    }
}

export default connect(null, mapDispatchToProps)(SignIn);
