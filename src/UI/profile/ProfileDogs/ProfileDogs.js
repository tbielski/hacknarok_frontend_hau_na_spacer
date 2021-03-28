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
const dogsEx = [
    {
        name: "Lizard",
        photo:
            "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
        age: 2,
        describe:
            "Biedronka jest wesołym pieskiem, lubi długie spacery. Jej hobby jest gonienie gołębi.",
        attitude: "pozytywny",
        breed: "kundelek",
    },
    {
        name: "Biedronka",
        photo:
            "https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-mobileMasterAt3x-v2.jpg",
        age: 2,
        describe:
            "Biedronka jest wesołym pieskiem, lubi długie spacery. Jej hobby jest gonienie gołębi.",
        attitude: "pozytywny",
        breed: "kundelek",
    },
];
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
                        spacing={0}
                    >
                        {dogs && dogs.length !== 0 ? (
                            dogs.map((dog) => <Dog dog={dog} />)
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
                                style={{ width: "50%" }}
                                onClick={() => setOpenPost(true)}
                            >
                                Dodaj psa!
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </List>
            {openPost ? (
                <AddDogForm handleClose={() => setOpenPost(false)} />
            ) : null}
        </Grid>
    );
};
export default ProfileDogs;
