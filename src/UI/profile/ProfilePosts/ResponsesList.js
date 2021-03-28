import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import ResponePerson from "./ResponsePerson";
import { ListItem, Typography } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

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
function ResponsesList({ responses, postId, handleClose }) {
    const classes = useStyles();
    const [sortingDown, setSortingDown] = useState(true);
    const [sortedList, setSortedList] = useState([]);
    useEffect(() => {
        setSortedList(
            sortingDown
                ? responses.sort((a, b) =>
                      a.profileRating > b.profileRating ? 1 : -1
                  )
                : responses.sort((a, b) =>
                      a.profileRating > b.profileRating ? -1 : 1
                  )
        );
    }, [sortingDown, setSortedList, responses]);

    return (
        <List className={classes.root}>
            <ListItem
                alignItems="space-around"
                onClick={() => setSortingDown((prev) => !prev)}
            >
                <Typography>Propozycje</Typography>
                <Typography>
                    {sortingDown ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                </Typography>
                <Typography>{"ocena"}</Typography>
            </ListItem>
            {sortedList.map((user) => (
                <ResponePerson
                    user={user}
                    postId={postId}
                    handleClose={handleClose}
                />
            ))}
        </List>
    );
}
export default ResponsesList;
