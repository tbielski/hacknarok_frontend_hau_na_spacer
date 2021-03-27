import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
    root: {
        minWidth: "100%",
    },
    media: {
        height: 300,
    },
});
const Dog = ({ dog }) => {
    const classes = useStyles();
    return (
        <Grid
            item
            xs={12}
            md={4}
            style={{
                display: "flex",
                justifyContent: "center",

                marginTop: 10,
            }}
        >
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={dog.photo}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {dog.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Edytuj
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};
export default Dog;
