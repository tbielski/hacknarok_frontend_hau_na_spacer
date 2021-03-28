import {
    Avatar,
    Divider,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
    Typography,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
const useStyles = makeStyles((theme) => ({
    inline: {
        display: "inline",
    },
}));

const ResponesPerson = ({ user }) => {
    const classes = useStyles();
    return (
        <>
            <ListItem alignItems="space-between">
                <ListItemAvatar>
                    <Avatar
                        alt="Remy Sharp"
                        src="/../../../../../../images/profile_pic.jpg"
                    >
                        {" "}
                        <PersonIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={user.email}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {user.describeUser
                                    ? `${user.firstName} ${user.lastName} - ${user.describeUser}`
                                    : `${user.firstName} ${user.lastName} `}
                            </Typography>
                        </React.Fragment>
                    }
                />

                <IconButton color="primary">
                    {" "}
                    <CheckCircleIcon />
                </IconButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
};

export default ResponesPerson;
