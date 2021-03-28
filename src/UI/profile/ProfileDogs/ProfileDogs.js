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
import AddDogForm from "./AddDogForm/AddDogForm";
import Dog from "./Dog";
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
const dogPhotos = [
    "https://i.pinimg.com/originals/78/46/1b/78461bb236def12a3533c4187e5f1089.jpg",
    "https://lchsmontana.org/wp-content/uploads/6145A1FD-2392-4CCD-B23F-78160EA10202_1_105_c-e1614377092307-500x500.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUv-9wlByFpthx7apeyUwxvfvDQDgcfAZKkA&usqp=CAU"
]
const ProfileDogs = ({ user }) => {
    const dogs = user.dogsArray;

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
                                    <b>Moje Psy</b>
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
                        {dogs && dogs.length !== 0 ? (
                            dogs.map((dog, index) => <Dog dog={dog} photo={dogPhotos[index]}/>)
                        ) : (
                            <Grid item xs={12}>
                                <Typography style={{ textAlign: "center" }}>
                                    Brak dodanych psów
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
                                Dodaj psa!
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </List>
            {openPost ? (
                <AddDogForm
                    user={user}
                    handleClose={() => setOpenPost(false)}
                />
            ) : null}
        </Grid>
    );
};
export default ProfileDogs;
