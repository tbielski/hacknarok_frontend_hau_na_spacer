import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import logo from "../images/logo.png";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function NavBar({ user }) {
  React.useEffect(() => {
    Object.keys(user).length !== 0 && setValue(1);
  }, [user]);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <img
          src={logo}
          alt="Logo"
          style={{
            maxHeight: "70px",
            position: "absolute",
            left: "40px",
          }}
        />
        <h1  style={{
            maxHeight: "70px",
            position: "absolute",
            left: "120px",
          }}>
        HauNaSpacer.pl
        </h1>
        
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          style={{ marginLeft: "auto", minHeight: "60px" }}
        >
          <Tab
            label="Ogłoszenia"
            {...a11yProps(0)}
            component={Link}
            to="/"
            style={{ lineHeight: "60px" }}
          />
          <Tab label="Profil" {...a11yProps(1)} component={Link} to="/profil" />
          {Object.keys(user).length === 0 ? (
            <Tab
              label="Zarejestruj / Zaloguj"
              {...a11yProps(2)}
              component={Link}
              to="/konto"
            />
          ) : (
            <Redirect to="/profil" />
          )}
        </Tabs>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(NavBar);
