import {
    Card,
    CardActionArea,
    CardMedia,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Paper,
} from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import GradeIcon from "@material-ui/icons/Grade";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import profilePic from "../../../images/profile_pic.jpg";
import ProfileInfoItem from "./ProfileInfoItem";
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
    main: {
        margin: theme.spacing(1),
    },
}));
const ProfileInfo = ({ user }) => {
    const classes = useStyles();
    return (
        <Grid
            item
            container
            xs={12}
            spacing={4}
            className={classes.main}
            justify="center"
        >
            <Grid sm={12} md={4} item>
                <Card elevation={4} style={{ height: "100%" }}>
                    <CardActionArea style={{ height: "100%" }}>
                        <CardMedia
                            style={{ height: "100%" }}
                            component="img"
                            image={profilePic}
                            title="profile_pic"
                        />
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <ProfileInfoItem
                    icon={<PersonIcon />}
                    fieldName="imię"
                    value={user.firstName}
                />
                <ProfileInfoItem
                    icon={<PersonIcon />}
                    fieldName="nazwisko"
                    value={user.lastName}
                />
                <ProfileInfoItem
                    icon={<EmailIcon />}
                    fieldName="email"
                    value={user.email}
                />
                <ProfileInfoItem
                    icon={<GradeIcon />}
                    fieldName="ocena"
                    value={user.rating}
                />

                <ProfileInfoItem
                    fieldName="opis"
                    value={user.describe}
                    icon={<DateRangeIcon />}
                />
            </Grid>
        </Grid>
    );
};
export default ProfileInfo;
