import React from "react";
import Paper from "@material-ui/core/Paper";
import { Grid, List, makeStyles } from "@material-ui/core";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileDogs from "./ProfileDogs/ProfileDogs";
import { connect } from "react-redux";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    paper: {
        marginTop: theme.spacing(5),
    },
}));
// const user = {
//     userId: 0,
//     firstName: "Janusz",
//     lastName: "Kowalski",
//     email: "jkowalski@gmail.com",

//     rating: 4.2,
//     describe: "Jestem wlascicielem super slodkiego Amstafa",
//     age: 48,
//     usersToRate: [2],
// };
const Profile = ({ user }) => {
    const classes = useStyles();
    return (
        <Grid container justify="center" direction="row">
            <Grid item sm={8} container>
                <Grid className={classes.paper}>
                    <ProfileInfo user={user} />
                </Grid>
            </Grid>
            <Grid item sm={8} container justify="center">
                <ProfileDogs user={user} />
                <ProfilePosts user={user} />
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state) => ({
    user: state.user,
});
export default connect(mapStateToProps, null)(Profile);
