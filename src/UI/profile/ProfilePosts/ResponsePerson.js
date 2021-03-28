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
import { connect } from "react-redux";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import actions from "../../../ducks/users/usersActions";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
const useStyles = makeStyles((theme) => ({
    inline: {
        display: "inline",
    },
}));

const ResponesPerson = ({ user, deletePost, postId, handleClose }) => {
    const classes = useStyles();
    return (
        <>
            <ListItem alignItems="space-between">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp">
                        {" "}
                        <PersonIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={`${user.email} `}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {" "}
                                {`${user.firstName} ${user.lastName}`}
                                <div>
                                    <StarBorderIcon color="primary" />
                                    {user.profileRating}
                                </div>
                            </Typography>
                        </React.Fragment>
                    }
                />

                <IconButton
                    color="primary"
                    onClick={() => {
                        alert("Przydzielono zadanie");
                        deletePost(postId);
                        handleClose(false);
                    }}
                >
                    {" "}
                    <CheckCircleIcon />
                </IconButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
};

export default connect(null, { deletePost: actions.deletePost })(
    ResponesPerson
);
