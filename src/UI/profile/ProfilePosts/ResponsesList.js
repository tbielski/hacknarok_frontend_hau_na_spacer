import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import ResponePerson from "./ResponsePerson";
import { ListItem, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: "36ch",
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: "inline",
    },
}));
function ResponsesList({ responses }) {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem alignItems="space-between">
                <Typography>Propozycje</Typography>
            </ListItem>
            {responses.map((user) => (
                <ResponePerson user={user} />
            ))}
        </List>
    );
}
export default ResponsesList;
