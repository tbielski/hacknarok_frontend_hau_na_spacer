import {
    Button,
    Grid,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import AddPostForm from "./AddPostForm.js/AddPostForm";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
    },
    gridList: {
        width: "35%",
        height: "70%",
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
}));

const ProfilePosts = ({ user }) => {
    const posts = user.postsArray;

    const classes = useStyles();
    const [clicked, setClicked] = useState(false);
    const [openPost, setOpenPost] = React.useState(false);
    return (
        <Grid item xs={12}>
            <List
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <ListItem
                    className={classes.listItem}
                    button
                    onClick={() => setClicked((prev) => !prev)}
                >
                    <ListItemText
                        style={{ padding: 15 }}
                        disableTypography
                        primary={
                            <>
                                <Typography
                                    variant="h3"
                                    style={{ textAlign: "center" }}
                                >
                                    <b>Moje ogłoszenia</b>
                                </Typography>
                            </>
                        }
                    />
                </ListItem>
                {clicked && (
                    <Grid
                        container
                        item
                        xs={12}
                        justify="space-around"
                        spacing={2}
                    >
                        {posts && posts.length !== 0 ? (
                            posts.map((post) => (
                                <Post post={post} dogs={user.dogsArray} />
                            ))
                        ) : (
                            <Grid item xs={12}>
                                <Typography style={{ textAlign: "center" }}>
                                    Brak dodanych ogłoszeń
                                </Typography>
                            </Grid>
                        )}
                        <Grid
                            item
                            xs={12}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{ width: "50%", margin: "5%" }}
                                onClick={() => setOpenPost(true)}
                            >
                                Dodaj ogłoszenie!
                            </Button>
                        </Grid>
                    </Grid>
                )}
                {openPost ? (
                    <AddPostForm
                        user={user}
                        handleClose={() => setOpenPost(false)}
                    />
                ) : null}
            </List>
        </Grid>
    );
};
export default ProfilePosts;
