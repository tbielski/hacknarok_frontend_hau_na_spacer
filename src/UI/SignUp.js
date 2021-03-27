import React from "react";
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
import green from "@material-ui/core/colors/green";
import { Formik } from "formik";
import { Link as RouterLink } from "react-router-dom";
import actions from '../ducks/users/usersActions';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PetsIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Zarejestruj się
        </Typography>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            describeUser: "",
            userAge: 0,
          }}
          onSubmit={(values, { resetForm }) => {
            actions.register(values)
            resetForm({
              values: { firstName: "", lastName: "", email: "", password: "", describeUser: "", userAge: 0 },
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
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      onChange={formProps.handleChange}
                      value={formProps.values.firstName}
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="Imię"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      onChange={formProps.handleChange}
                      value={formProps.values.lastName}
                      id="lastName"
                      label="Nazwisko"
                      name="lastName"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      onChange={formProps.handleChange}
                      value={formProps.values.email}
                      id="email"
                      label="Adres e-mail"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
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
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Zarejestruj się
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <RouterLink
                      to="/konto"
                      style={{ color: green[600], textDecoration: "none" }}
                    >
                      Posiadasz już konto? Zaloguj się!
                    </RouterLink>
                  </Grid>
                </Grid>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}


