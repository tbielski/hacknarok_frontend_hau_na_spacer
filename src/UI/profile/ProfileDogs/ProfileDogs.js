import {
    Grid,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
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
const ProfileDogs = ({ dogs }) => {
    const classes = useStyles();
    const [clicked, setClicked] = useState(false);
    return (
        <Grid item xs={12}>
            <List style={{ width: "100%" }}>
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
                    <Grid container xs={12} justify="space-around" spacing={0}>
                        {dogsEx.map((dog) => (
                            <Dog dog={dog} />
                        ))}
                    </Grid>
                )}
            </List>
        </Grid>
    );
};
export default ProfileDogs;
